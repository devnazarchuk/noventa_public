'use client'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Mountain, Star, Users } from 'lucide-react'
import Image from 'next/image'

import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

import { fitnessBaeckerTranslations } from '../translations'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut' as const,
    },
  },
}

export default function AlpentourPage() {
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].alpineTour

  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-[#FFF6F6] via-[#FFE2E2] to-[#FFF0F0] dark:from-[#181818] dark:via-[#232323] dark:to-[#1a1a1a]">
      {}
      <motion.section
        className="relative overflow-hidden py-16 lg:py-24"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#D72638] blur-3xl"></div>
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[#FFA5A5] blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-4xl text-center" variants={itemVariants}>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-4 py-2 text-sm font-semibold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Mountain className="h-4 w-4" />
              <span>🏔️ Premium Alpine Experience</span>
            </motion.div>

            <motion.h1
              className="mb-4 bg-gradient-to-r from-[#D72638] via-[#EE0A24] to-[#FFA5A5] bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {translations.title} 🏔️⛰️
            </motion.h1>

            <motion.p
              className="mb-8 text-xl leading-relaxed text-gray-700 lg:text-2xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {translations.subtitle} 🚶‍♂️💪
            </motion.p>

            {}
            <motion.div
              className="mx-auto grid max-w-2xl grid-cols-2 gap-4 lg:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">📅 6 Tage</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  🗺️ Kitzbühel → Lienz
                </p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">👥 Max. 18</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">⭐ Premium</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8"
      >
        {}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl lg:h-[600px]">
            <Image
              src="/images/Baeckerei_Noventa_veranstaltet_Alpentour_2025-768x512.jpg"
              alt={translations.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute right-6 bottom-6 left-6">
              <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-sm dark:bg-[#232323]/90">
                <h3 className="mb-2 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  Unvergessliche Alpen-Erlebnisse
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Von majestätischen Gipfeln bis zu malerischen Tälern - erleben Sie die Alpen in
                  ihrer ganzen Pracht
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="mx-auto max-w-4xl">
            <motion.h2
              className="mb-8 bg-gradient-to-r from-[#D72638] to-[#EE0A24] bg-clip-text text-center text-3xl font-bold text-transparent lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.intro.title}
            </motion.h2>

            <motion.p
              className="mb-8 text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {translations.intro.description}
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-white p-6 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="mb-4 h-8 w-8 text-[#D72638] dark:text-[#FFA5A5]" />
                <h3 className="mb-2 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  Teilnehmer
                </h3>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  {translations.intro.maxParticipants}
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-white p-6 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="mb-4 h-8 w-8 text-[#D72638] dark:text-[#FFA5A5]" />
                <h3 className="mb-2 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  Zeitraum
                </h3>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  {translations.intro.period}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-8 shadow-2xl lg:p-12 dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]">
            <motion.h2
              className="mb-8 text-center text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.info.title}
            </motion.h2>

            <div className="mb-8 space-y-6">
              <motion.div
                className="flex items-center gap-4 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="h-6 w-6 flex-shrink-0 text-[#D72638] dark:text-[#FFA5A5]" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {translations.info.start}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="h-6 w-6 flex-shrink-0 text-[#D72638] dark:text-[#FFA5A5]" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {translations.info.trainer}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 rounded-xl bg-white p-4 dark:bg-[#1a1a1a]"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="mt-1 h-6 w-6 flex-shrink-0 text-[#D72638] dark:text-[#FFA5A5]" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {translations.info.price}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div className="text-center">
              <motion.a
                href="/fitness-baker/registration"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block transform rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-12 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {translations.info.button}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}
