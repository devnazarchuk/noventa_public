'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'
  const { language } = useLanguageStore()
  const t = translations[language]

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <motion.button
      aria-label={isDark ? t.theme.light : t.theme.dark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      type="button"
      className="hover:text-primary-600 dark:hover:text-primary-400 focus:ring-primary-500 relative rounded-xl p-1 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900 h-8 w-8 flex items-center justify-center"
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative h-6 w-6">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {}
      <motion.div
        className="from-primary-500/20 to-primary-600/20 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
