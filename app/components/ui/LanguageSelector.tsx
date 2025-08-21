'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

import type { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

export function LanguageSelector() {
  const { language, setLanguage } = useLanguageStore()
  const t = translations[language]

  const toggleLanguage = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === language)
    const nextIndex = (currentIndex + 1) % languages.length
    setLanguage(languages[nextIndex].code)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="hover:text-primary-600 dark:hover:text-primary-400 focus:ring-primary-500 relative rounded-xl p-1 text-neutral-600 transition-all duration-300 hover:bg-neutral-100 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900 h-8 w-8 flex items-center justify-center"
      aria-label={t.language.title}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="relative h-6 w-6">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: language === 'en' ? 180 : 0,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Globe className="h-6 w-6" />
        </motion.div>

        {}
        <motion.div
          className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center text-[12px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {language === 'de' ? '🇩🇪' : '🇬🇧'}
        </motion.div>
      </div>

      {}
      <motion.div
        className="from-primary-500/20 to-primary-600/20 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {}
      <motion.div
        className="bg-primary-500/30 absolute inset-0 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.5, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        key={language}
      />
    </motion.button>
  )
}
