import { create } from 'zustand';
export const useRecipeStore = create((set) => ({
  recipes: [],
  // Add a search term
  searchTerm: '',
  // Set search term
  setSearchTerm: (term) =>
    set(() => ({
      searchTerm: term,
    })),
  // Filtered recipes array
  filteredRecipes: [],
  // Filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  // Add recipes (same as before)
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // keep filtered list updated
    })),
  // Set initial recipes (optional)
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes,
    })),
}));