import Hero from '@/components/Hero'
import { getRecipes } from '@/lib/contentful/queries'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

export default async function RecipePage({ params }: PageProps) {
    const { slug } = await params
    const recipes = await getRecipes()

    const recipe = recipes.find(r => r.slug === slug)
    console.log('RECIPE:', recipe)
    return (
        <>
            <Hero
                title={recipe?.title ?? ''}
                imageUrl={recipe?.image?.url ?? ''}
            />

            <section className="mx-auto max-w-4xl px-4 py-10">
                <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        Ingredientes
                    </h2>

                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                        {recipe?.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                {/* METHOD */}
                <div className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        Modo de Preparo
                    </h2>

                    <ol className="list-decimal space-y-3 pl-5 text-sm text-gray-700">
                        {documentToReactComponents(recipe?.method ?? '')}
                    </ol>
                </div>
            </section>
        </>
    )
}
