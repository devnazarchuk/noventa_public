'use client'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaCrown, FaGift, FaHeart, FaStar, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { noventaPlusTranslations } from './languages'

export default function NoventaPlusPage() {
  const { language } = useLanguageStore()
  const t = noventaPlusTranslations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {}
      <section className="relative my-5 overflow-hidden py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10" />
        <div className="container-responsive relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 dark:border-orange-700/50 dark:bg-orange-900/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaCrown className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Premium Club' : 'Premium Club'}
              </span>
            </motion.div>

            <h1 className="mb-4 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <FaStar className="h-4 w-4" />
                <span>{language === 'de' ? 'Exklusive Vorteile' : 'Exclusive benefits'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGift className="h-4 w-4" />
                <span>{language === 'de' ? 'Persönliche Events' : 'Personal events'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="h-4 w-4" />
                <span>{language === 'de' ? 'Premium Community' : 'Premium community'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.features.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
              {t.features.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 shadow-lg transition-all duration-300 group-hover:scale-110 dark:bg-orange-900/30">
                      <FaStar className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.howToUse.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {t.howToUse.steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative text-center"
              >
                <div className="relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 pt-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {step}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.benefits.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 shadow-lg transition-all duration-300 group-hover:scale-110 dark:bg-orange-900/30">
                      <FaCheckCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="font-medium text-neutral-600 dark:text-neutral-300">{item}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{t.cta.title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-100">{t.cta.subtitle}</p>
            <motion.button
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaHeart className="h-5 w-5" />
              {t.cta.button}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
