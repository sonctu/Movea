import create from "zustand";

export const useStore = create((set) => ({
  user: undefined,
  isLoading: false,
  history: [],
  darkMode: false,
  setCurrentUser: (currentUser) => set(() => ({ user: currentUser })),
  setIsLoading: (loading) => set(() => ({ isLoading: loading })),
  setHistory: (history) => set(() => ({ history: history })),
  setToggleDarkMode: (darkMode) => set(() => ({ darkMode })),
}));
