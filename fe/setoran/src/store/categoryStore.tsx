import create from 'zustand';

type CategoryStore = {
  categories: string[];
  selectedCategory: string;
  setCategories: (categories: string[]) => void;
  selectCategory: (category: string) => void;
};

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: ['All', 'Electronics', 'Books', 'Clothing'], // Default categories
  selectedCategory: 'All',
  setCategories: (categories) => set({ categories }),
  selectCategory: (category) => set({ selectedCategory: category }),
}));
