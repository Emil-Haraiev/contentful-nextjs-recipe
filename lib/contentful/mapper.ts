import { RecipeEntry } from "./types"

export function mapRecipe(entry: RecipeEntry) {
    const image = entry.fields.thumbnail

    return {
        title: entry.fields.title,
        slug: entry.fields.slug,
        description: entry.fields.description,
        method: entry.fields.method,
        ingredients: entry.fields.ingredients,
        image: image
            ? {
                url: 'https:' + image.fields.file.url,
                width: image.fields.file.details.image.width,
                height: image.fields.file.details.image.height,
            }
            : null,
    }
}


