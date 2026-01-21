export type ContentfulImage = {
    fields: {
        file: {
            url: string
            details: {
                image: {
                    width: number
                    height: number
                }
            }
        }
    }
}

export type RecipeEntry = {
    fields: {
        title: string
        slug: string
        description: string
        method: string
        thumbnail?: ContentfulImage
        ingredients: string
    }
}
