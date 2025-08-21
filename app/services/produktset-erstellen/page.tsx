'use client'

import { motion } from 'framer-motion'
import { FaBox, FaCheckCircle, FaGift, FaHeart, FaStar, FaTruck, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { produktsetTranslations } from './languages'

export default function ProduktsetPage() {
  const { language } = useLanguageStore()
  const t = produktsetTranslations[language]

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
              <FaBox className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Produktset' : 'Product Set'}
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
                <FaGift className="h-4 w-4" />
                <span>{language === 'de' ? 'Individuelle Sets' : 'Individual sets'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="h-4 w-4" />
                <span>{language === 'de' ? 'Lieferung möglich' : 'Delivery available'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="h-4 w-4" />
                <span>{language === 'de' ? 'Persönliche Beratung' : 'Personal consultation'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t.description}
            </p>
          </motion.div>
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
              {language === 'de' ? 'Unsere Vorteile' : 'Our Benefits'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => (
              <motion.div
                key={feature}
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
                    <p className="font-medium text-neutral-600 dark:text-neutral-300">{feature}</p>
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
              {language === 'de' ? 'So funktioniert es' : 'How it works'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            {t.howItWorks.map((step, index) => (
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
      <section className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {language === 'de' ? 'Warum Produktsets?' : 'Why Product Sets?'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              language === 'de' ? 'Perfekt für Events' : 'Perfect for events',
              language === 'de' ? 'Professionelle Verpackung' : 'Professional packaging',
              language === 'de' ? 'Flexible Größen' : 'Flexible sizes',
              language === 'de' ? 'Persönliche Beratung' : 'Personal consultation',
              language === 'de' ? 'Lieferung möglich' : 'Delivery available',
              language === 'de' ? 'Frische Backwaren' : 'Fresh baked goods',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
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
                    <div className="font-medium text-neutral-600 dark:text-neutral-300">
                      {benefit}
                    </div>
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
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {language === 'de'
                ? 'Bereit für Ihr persönliches Produktset?'
                : 'Ready for your personal product set?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-100">
              {language === 'de'
                ? 'Kontaktieren Sie uns und lassen Sie uns gemeinsam Ihr perfektes Produktset erstellen. Für jeden Anlass und jeden Geschmack.'
                : "Contact us and let's create your perfect product set together. For every occasion and every taste."}
            </p>
            <motion.button
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaHeart className="h-5 w-5" />
              {t.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
