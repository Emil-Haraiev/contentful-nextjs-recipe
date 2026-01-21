import { getRecipes } from '@/lib/contentful/queries'
import RecipeCard from '@/components/recipes/RecipeCard'
import Hero from '@/components/Hero'



export default async function HomePage() {

    const recipes = await getRecipes(3)

    return (
        <section className="mx-auto max-w-7xl px-4 py-12">
            <Hero
                title="Inspire-se, cozinhe com paixão e saboreie momentos inesquecíveis à mesa."
                imageUrl="/hero.png"
            />
            <h2 className="mb-6 text-4xl font-bold text-center">
                Receitas mais procuradas
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.slug}
                        recipe={recipe}
                    />
                ))}
            </div>
        </section>
    )
}
