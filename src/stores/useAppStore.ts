import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools( (...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))