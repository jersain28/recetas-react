import { create } from 'zustand';
import { createdRecipesSlice, RecipesSliceType } from './recipeSlice';

export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createdRecipesSlice(...a)
}))