import { getRecipes } from '@/lib/contentful/queries'
import RecipeCard from '@/components/recipes/RecipeCard'
import RecipeListItem from '@/components/recipes/RecipeListItem'

export default async function RecipesPage() {
    const allRecipes = await getRecipes()
    const featured = allRecipes.slice(0, 3)
    const recent = allRecipes.slice(3, 6)

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 space-y-12">
            <div>
                <h2 className="mb-6 text-4xl font-bold text-center">
                    Receitas mais procuradas
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {featured.map((recipe) => (
                        <RecipeCard
                            key={recipe.slug}
                            recipe={recipe}
                        />
                    ))}
                </div>
            </div>

            <div className='mt-30'>
                <h2 className="mb-6 text-4xl font-bold text-center">
                    Receitas recentes
                </h2>


                <div className="space-y-6 px-10 pt-6">
                    {recent.map((recipe) => (
                        <RecipeListItem
                            key={recipe.slug}
                            recipe={recipe}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
