import { StateCreator } from "zustand"
import { getCategories, getRecipes, getREcipesById } from "../services/RecipeService"
import { Categories, Drink, Recipe, Recipes, SearchFilters } from "../types"

export type RecipesSliceType = {
    categories: Categories
    recipes: Recipes
    selectedRecipe: Recipe
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    recipes: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const recipes = await getRecipes(filters)
        set({
            recipes
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getREcipesById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false
        })
    }
})