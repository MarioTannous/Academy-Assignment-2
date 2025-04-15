import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  accessToken: string;
  setAccessToken: (token: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  accessToken: '',
  setAccessToken: (token: string) => set({ accessToken: token }),
}));

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.body.style.backgroundColor = newTheme === 'dark' ? '#1a202c' : '#ffffff';
      },
    }),
    {
      name: 'theme-storage',
    }
  )
);