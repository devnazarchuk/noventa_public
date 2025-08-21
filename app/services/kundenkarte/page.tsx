'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight, FaCheckCircle, FaCreditCard, FaGift, FaStar, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { kundenkarteTranslations } from './languages'

export default function CustomerCardPage() {
  const { language } = useLanguageStore()
  const t = kundenkarteTranslations[language as keyof typeof kundenkarteTranslations]

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
              <FaCreditCard className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Kundenkarte' : 'Customer Card'}
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
                <span>{language === 'de' ? 'Punkte sammeln' : 'Collect points'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGift className="h-4 w-4" />
                <span>{language === 'de' ? 'Exklusive Vorteile' : 'Exclusive benefits'}</span>
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

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800">
                  <div className="text-center">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 shadow-lg transition-all duration-300 group-hover:scale-110 dark:bg-orange-900/30">
                      <FaCheckCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <p className="font-medium text-neutral-600 dark:text-neutral-300">{benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h3 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
              {language === 'de'
                ? 'Wie bekomme ich eine Kundenkarte?'
                : 'How do I get a customer card?'}
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t.howToGet}
            </p>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
          >
            <h3 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">
              {language === 'de'
                ? 'Wie verwende ich die Kundenkarte?'
                : 'How do I use the customer card?'}
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {t.howToUse}
            </p>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
          >
            <div className="mb-8 text-center">
              <Image
                src="/icons/GutscheinkartendBPaP.png"
                alt="Gutscheinkarten der Bäckerei Noventa aus Keinhausen"
                width={200}
                height={200}
                className="mx-auto mb-6 rounded-2xl shadow-lg"
              />
              <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
                {language === 'de' ? 'Gutscheinkarten' : 'Gift Cards'}
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
                {language === 'de'
                  ? 'Verschenken Sie Freude mit unseren Gutscheinkarten. Perfekt für jeden Anlass und in jedem Wert erhältlich.'
                  : 'Give the gift of joy with our gift cards. Perfect for any occasion and available in any value.'}
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                  {language === 'de' ? 'Vorteile' : 'Benefits'}
                </h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="h-4 w-4 text-orange-500" />
                    <span>{language === 'de' ? 'Flexible Verwendung' : 'Flexible use'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="h-4 w-4 text-orange-500" />
                    <span>{language === 'de' ? 'Kein Ablaufdatum' : 'No expiration date'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="h-4 w-4 text-orange-500" />
                    <span>
                      {language === 'de' ? 'Perfekt zum Verschenken' : 'Perfect for gifting'}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                  {language === 'de' ? 'Verwendung' : 'Usage'}
                </h4>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-center gap-2">
                    <FaArrowRight className="h-4 w-4 text-orange-500" />
                    <span>
                      {language === 'de'
                        ? 'In allen Filialen einlösbar'
                        : 'Redeemable in all branches'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaArrowRight className="h-4 w-4 text-orange-500" />
                    <span>
                      {language === 'de'
                        ? 'Für alle Produkte verwendbar'
                        : 'Usable for all products'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaArrowRight className="h-4 w-4 text-orange-500" />
                    <span>
                      {language === 'de' ? 'Teilzahlung möglich' : 'Partial payment possible'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="https://www.bon-bon.de/gutschein/noventas/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-xl active:scale-95 dark:bg-orange-600 dark:hover:bg-orange-700"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGift className="h-5 w-5" />
                {language === 'de' ? 'Gutscheinkarte kaufen' : 'Buy Gift Card'}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-600 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {language === 'de' ? 'Bereit für Ihre Kundenkarte?' : 'Ready for your customer card?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-orange-100">
              {language === 'de'
                ? 'Besuchen Sie eine unserer Filialen und holen Sie sich Ihre kostenlose Kundenkarte. Starten Sie noch heute mit dem Sammeln von Punkten!'
                : 'Visit one of our branches and get your free customer card. Start collecting points today!'}
            </p>
            <motion.button
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 shadow-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-xl active:scale-95"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCreditCard className="h-5 w-5" />
              {t.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
