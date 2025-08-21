import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FontSize = 'normal' | 'medium' | 'large'
type ContrastMode = 'normal' | 'high'

interface AccessibilityState {
  fontSize: FontSize
  contrastMode: ContrastMode
  setFontSize: (size: FontSize) => void
  setContrastMode: (mode: ContrastMode) => void
}

export const useAccessibilityStore = create<AccessibilityState>()(
  persist(
    (set) => ({
      fontSize: 'normal',
      contrastMode: 'normal',
      setFontSize: (size) => set({ fontSize: size }),
      setContrastMode: (mode) => set({ contrastMode: mode }),
    }),
    {
      name: 'accessibility-settings',
    },
  ),
)
