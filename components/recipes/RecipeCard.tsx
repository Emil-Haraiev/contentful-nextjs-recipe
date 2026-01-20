import Link from 'next/link'
import Image from 'next/image'

type Recipe = {
    title: string
    slug: string
    description: string
    method: string
    image: {
        url: string
        width: number
        height: number
    } | null
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <article className="rounded-4xl overflow-hidden border bg-[#F5F2F2]">
            {recipe.image && (
                <div className="relative">
                    <Image
                        src={recipe.image.url}
                        alt={recipe.title}
                        className="object-cover"
                        width={recipe.image.width}
                        height={recipe.image.height}
                    />
                </div>
            )}
            <div className="p-10">
                <h3 className="text-3xl mt-1 font-bold">{recipe.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {recipe.description}
                </p>

                <div className="mt-4 inline-block p-2 rounded-3xl bg-amber-300">
                    <Link
                        href={`/recipes/${recipe.slug}`}
                        className=" px-6 py-4 text-sm font-medium "
                    >
                        Ver receita
                    </Link>
                </div>
            </div>
        </article>
    )
}
