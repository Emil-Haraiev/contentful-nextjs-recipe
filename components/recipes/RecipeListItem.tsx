import Link from 'next/link'
import Image from 'next/image'

export default function RecipeListItem({ recipe }: { recipe: any }) {
    return (
        <article className="flex overflow-hidden rounded-3xl bg-[#f7f3f1] mb-15">

            <div className="relative">
                <Image
                    src={recipe.image.url}
                    alt={recipe.title}
                    width={recipe.image.width}
                    height={recipe.image.height}

                />
            </div>

            <div className="flex flex-col justify-between gap-4 px-10 py-15">
                <h3 className="text-3xl font-bold text-gray-900">
                    {recipe.title}
                </h3>

                <p className="max-w-xl text-gray-600">
                    {recipe.description}
                </p>

                <Link
                    href={`/recipes/${recipe.slug}`}
                    className="inline-block w-fit rounded-full bg-yellow-300 px-8 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-400"
                >
                    Ver receita
                </Link>
            </div>
        </article>
    )
}
