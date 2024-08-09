import { create } from 'zustand';

type CategoryState = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  translate: number;
  setTranslate: (amount: number) => void;
  isLeftVisible: boolean;
  setIsLeftVisible: (visible: boolean) => void;
  isRightVisible: boolean;
  setIsRightVisible: (visible: boolean) => void;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: 'All',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  translate: 0,
  setTranslate: (amount) => set({ translate: amount }),
  isLeftVisible: false,
  setIsLeftVisible: (visible) => set({ isLeftVisible: visible }),
  isRightVisible: false,
  setIsRightVisible: (visible) => set({ isRightVisible: visible }),
}));
