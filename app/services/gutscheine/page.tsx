'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaApple,
  FaCalendar,
  FaDownload,
  FaGift,
  FaGooglePlay,
  FaPercent,
  FaTimes,
  FaWhatsapp,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { gutscheineTranslations } from './languages'

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

export default function GutscheinePage() {
  const { language } = useLanguageStore()
  const t = gutscheineTranslations[language]
  const [isModalOpen, setIsModalOpen] = useState(false)

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
              <FaGift className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Gutscheine & Coupons' : 'Vouchers & Coupons'}
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
                <span>{language === 'de' ? 'Exklusive Rabatte' : 'Exclusive discounts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="h-4 w-4" />
                <span>{language === 'de' ? 'Saisonale Angebote' : 'Seasonal offers'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPercent className="h-4 w-4" />
                <span>{language === 'de' ? 'Persönliche Vorteile' : 'Personal benefits'}</span>
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
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
              {t.currentCoupons}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-2xl border-2 border-dashed border-orange-300 p-8 text-center transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 dark:border-orange-600 dark:hover:border-orange-400 dark:hover:bg-orange-900/20">
                  <FaGift className="mx-auto mb-4 h-12 w-12 text-orange-500 dark:text-orange-400" />
                  <p className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {language === 'de' ? 'Coupon 1' : 'Coupon 1'}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {language === 'de'
                      ? 'Spezieller Rabatt auf ausgewählte Produkte'
                      : 'Special discount on selected products'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-2xl border-2 border-dashed border-orange-300 p-8 text-center transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 dark:border-orange-600 dark:hover:border-orange-400 dark:hover:bg-orange-900/20">
                  <FaGift className="mx-auto mb-4 h-12 w-12 text-orange-500 dark:text-orange-400" />
                  <p className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                    {language === 'de' ? 'Coupon 2' : 'Coupon 2'}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {language === 'de'
                      ? 'Exklusiver Vorteil für Stammkunden'
                      : 'Exclusive benefit for regular customers'}
                  </p>
                </div>
              </motion.div>
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
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-xl active:scale-95 dark:bg-orange-600 dark:hover:bg-orange-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload className="h-5 w-5" />
              {t.downloadButton}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="rounded-2xl border border-orange-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-orange-700 dark:bg-neutral-800"
          >
            <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
              {t.smartphoneTitle}
            </h2>
            <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-300">
              {t.smartphoneDescription}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.a
                href="https://apps.apple.com/de/app/noventas/id1615734130"
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaApple className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-semibold">{t.appStore}</span>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.copago.id4200712&pli=1"
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGooglePlay className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-semibold">{t.playStore}</span>
              </motion.a>

              <motion.a
                href="https://wa.me/message/SBY6LF7LLR7GA1"
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-semibold">{t.whatsappButton}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <AppStoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
