import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'de' | 'en'

interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'de',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    },
  ),
)
