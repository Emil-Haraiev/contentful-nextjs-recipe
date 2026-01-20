
import { client } from './client'
import { mapRecipe } from './mapper'

export async function getRecipes(limit?: number) {
    const res = await client.getEntries({
        content_type: 'recipe',
        order: ['sys.createdAt'],
        limit,
    })

    return res.items.map((entry) => mapRecipe(entry))
}
