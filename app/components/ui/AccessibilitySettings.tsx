'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Contrast, Settings, Type } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export function AccessibilitySettings() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { fontSize, contrastMode, setFontSize, setContrastMode } = useAccessibilityStore()
  const { language } = useLanguageStore()
  const t = translations[language]


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])


  useEffect(() => {
    const root = document.documentElement
    switch (fontSize) {
      case 'medium':
        root.style.fontSize = '1.25rem'
        break
      case 'large':
        root.style.fontSize = '1.5rem'
        break
      default:
        root.style.fontSize = '1rem'
    }
  }, [fontSize])


  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrastMode === 'high')
  }, [contrastMode])


  const handleFontSizeChange = (size: 'normal' | 'medium' | 'large') => {
    setFontSize(size)
    setIsOpen(false) // Close menu after selection
  }

  const handleContrastModeChange = () => {
    setContrastMode(contrastMode === 'normal' ? 'high' : 'normal')
    setIsOpen(false) // Close menu after selection
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg !p-3 text-[#D72638] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 hover:text-[#D72638] focus:ring-2 focus:ring-[#FFD6D6] focus:outline-none sm:!p-4 dark:text-[#FFF5E1] dark:hover:bg-[#232323]/50 dark:hover:text-[#FFF5E1]"
        aria-label={t.accessibility.settings}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-describedby="accessibility-menu-description"
      >
        <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 max-w-[280px] transform rounded-xl bg-[#FFF6F6]/95 p-3 !shadow-none backdrop-blur-xl sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:mt-2 sm:w-56 sm:translate-y-0 sm:p-4 dark:bg-[#232323]/95"
            role="menu"
            aria-label={t.accessibility.settings}
            id="accessibility-menu-description"
          >
            <div className="space-y-3 sm:space-y-4">
              {}
              <div>
                <h3 className="mb-2 flex items-center gap-1 text-xs font-medium text-[#D72638] sm:mb-2 sm:text-sm dark:text-[#FFA5A5]">
                  <Type className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {t.accessibility.fontSize.title}
                </h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  <button
                    onClick={() => handleFontSizeChange('normal')}
                    className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg !p-2 text-[#3A3A3A] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 dark:text-[#FAD2E1] dark:hover:bg-[#232323]/50 ${
                      fontSize === 'normal'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : ''
                    }`}
                    aria-label={`${t.accessibility.fontSize.normal} - ${t.accessibility.fontSize.title}`}
                    title={t.accessibility.fontSize.normal}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <Type className="h-3.5 w-3.5" />
                      <span className="text-[10px]">A</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('medium')}
                    className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg !p-2 text-[#3A3A3A] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 dark:text-[#FAD2E1] dark:hover:bg-[#232323]/50 ${
                      fontSize === 'medium'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : ''
                    }`}
                    aria-label={`${t.accessibility.fontSize.medium} - ${t.accessibility.fontSize.title}`}
                    title={t.accessibility.fontSize.medium}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <Type className="h-4 w-4" />
                      <span className="text-[11px]">A</span>
                    </div>
                  </button>
                  <button
                    onClick={() => handleFontSizeChange('large')}
                    className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg !p-2 text-[#3A3A3A] !shadow-none transition-all duration-200 hover:bg-[#FFF6F6]/50 dark:text-[#FAD2E1] dark:hover:bg-[#232323]/50 ${
                      fontSize === 'large'
                        ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                        : ''
                    }`}
                    aria-label={`${t.accessibility.fontSize.large} - ${t.accessibility.fontSize.title}`}
                    title={t.accessibility.fontSize.large}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <Type className="h-5 w-5" />
                      <span className="text-[12px]">A</span>
                    </div>
                  </button>
                </div>
              </div>

              {}
              <div>
                <h3 className="mb-2 flex items-center gap-1 text-xs font-medium text-[#D72638] sm:mb-2 sm:text-sm dark:text-[#FFA5A5]">
                  <Contrast className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {t.accessibility.contrast.title}
                </h3>
                <button
                  onClick={handleContrastModeChange}
                  className={`min-h-[44px] w-full rounded-lg !px-3 !py-2 text-xs !shadow-none transition-all duration-200 sm:!px-3.5 sm:!py-2.5 sm:text-sm ${
                    contrastMode === 'high'
                      ? 'bg-[#FFD6D6] text-[#D72638] dark:bg-[#232323] dark:text-[#FFF5E1]'
                      : 'text-[#3A3A3A] hover:bg-[#FFF6F6]/50 dark:text-[#FAD2E1] dark:hover:bg-[#232323]/50'
                  }`}
                  aria-label={`${t.accessibility.contrast.title}: ${contrastMode === 'high' ? t.accessibility.contrast.high : t.accessibility.contrast.normal}`}
                >
                  {contrastMode === 'high'
                    ? t.accessibility.contrast.high
                    : t.accessibility.contrast.normal}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
