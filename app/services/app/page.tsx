'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaApple,
  FaBell,
  FaCreditCard,
  FaGift,
  FaGooglePlay,
  FaHeart,
  FaInfoCircle,
  FaMobile,
  FaStar,
  FaTimes,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { appTranslations } from './languages'

// Modal component for app store selection
function AppStoreModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { language } = useLanguageStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-neutral-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
        >
          <FaTimes className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h3 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
            {language === 'de' ? 'App herunterladen' : 'Download App'}
          </h3>
          <p className="mb-8 text-neutral-600 dark:text-neutral-300">
            {language === 'de' ? 'Wählen Sie Ihren App Store:' : 'Choose your app store:'}
          </p>

          <div className="space-y-4">
            <motion.a
              href="https://apps.apple.com/de/app/noventas/id1615734130"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-4 rounded-xl bg-black px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              <FaApple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.copago.id4200712&pli=1"
              target="_blank"
              rel="noopener"
              className="flex items-center justify-center gap-4 rounded-xl bg-black px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
            >
              <FaGooglePlay className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function AppServices() {
  const { language } = useLanguageStore()
  const t = appTranslations[language]
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    { icon: FaGift, color: 'text-pink-600 dark:text-pink-400' },
    { icon: FaBell, color: 'text-orange-600 dark:text-orange-400' },
    { icon: FaCreditCard, color: 'text-blue-600 dark:text-blue-400' },
    { icon: FaStar, color: 'text-yellow-600 dark:text-yellow-400' },
    { icon: FaMobile, color: 'text-green-600 dark:text-green-400' },
    { icon: FaHeart, color: 'text-red-600 dark:text-red-400' },
    { icon: FaInfoCircle, color: 'text-purple-600 dark:text-purple-400' },
    { icon: FaUsers, color: 'text-indigo-600 dark:text-indigo-400' },
  ]

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
              <FaMobile className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Mobile App' : 'Mobile App'}
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
                <span>{language === 'de' ? 'Exklusive Coupons' : 'Exclusive coupons'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCreditCard className="h-4 w-4" />
                <span>{language === 'de' ? 'Mobile Bezahlung' : 'Mobile payment'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="h-4 w-4" />
                <span>{language === 'de' ? 'Punkte sammeln' : 'Collect points'}</span>
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
            className="flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <motion.a
              href="https://apps.apple.com/de/app/noventas/id1615734130"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-2xl bg-black px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaApple className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <div className="text-left">
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.copago.id4200712&pli=1"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-2xl bg-black px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGooglePlay className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              <div className="text-left">
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </motion.a>
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
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.whyAppTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="text-center">
                    <div
                      className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-100 shadow-lg transition-all duration-300 group-hover:scale-110 dark:bg-neutral-700`}
                    >
                      {(() => {
                        const IconComponent = features[index].icon
                        return <IconComponent className={`h-8 w-8 ${features[index].color}`} />
                      })()}
                    </div>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {feature}
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
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.howItWorksTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.steps.map((step, index) => (
              <motion.div
                key={index}
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

                  <div className="rounded-2xl border border-neutral-200 bg-white p-8 pt-12 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                    <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">{step}</p>
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
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{t.ctaTitle}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-100">{t.ctaSubtitle}</p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaMobile className="h-5 w-5" />
              {t.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {}
      <AppStoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
