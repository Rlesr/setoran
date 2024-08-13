import create from 'zustand';

interface SidebarStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkModeToggle = create<SidebarStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useDarkModeToggle;
