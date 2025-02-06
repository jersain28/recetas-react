import { StateCreator } from "zustand"
import getCategories from "../services/RecipeService"
import { Categories } from "../types"

type Category = {}

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
}

export const createdRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})