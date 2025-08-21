'use client'
import { motion } from 'framer-motion'
import { Activity, Heart, Trophy, Users, Zap } from 'lucide-react'

import FitnessBaeckerPage from '@/components/templates/FitnessBaeckerPage'
import { PageWrapper } from '@/components/ui/PageWrapper'

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

export default function FitnessBaecker() {
  return (
    <PageWrapper className="min-h-screen bg-gradient-to-br from-[#FFF6F6] via-[#FFE2E2] to-[#FFF0F0] dark:from-[#181818] dark:via-[#232323] dark:to-[#1a1a1a]">
      {}
      <motion.section
        className="relative overflow-hidden py-20 lg:py-32"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-[#D72638] blur-3xl"></div>
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[#FFA5A5] blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-[#D72638] to-[#FFA5A5] blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-4xl text-center" variants={itemVariants}>
            {}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-4 py-2 text-sm font-semibold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Activity className="h-4 w-4" />
              <span>🏃‍♂️ Bewegung & Ernährung</span>
            </motion.div>

            <motion.h1
              className="mb-6 bg-gradient-to-r from-[#D72638] via-[#EE0A24] to-[#FFA5A5] bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-sm lg:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              FITNESSBÄCKER 🥖💪
            </motion.h1>
            <motion.p
              className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-700 lg:text-2xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bewegung und Ernährung: Damit befassen wir uns tagtäglich, um unsere Kunden fit und
              gesund zu halten. Entdecken Sie unsere vielfältigen Fitnessprogramme und werden Sie
              Teil unserer Community! 🌟
            </motion.p>

            {}
            <motion.div
              className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Community
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Starke Gruppe
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24]">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Erfolge
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Ziele erreichen
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Gesundheit
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Fit & Vital
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24]">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Energie
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Power & Drive
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const calendarSection = document.querySelector('[data-section="calendar"]')
                  if (calendarSection) {
                    calendarSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="transform cursor-pointer rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                🎯 Programme entdecken
              </motion.button>
              <motion.a
                href="/fitness-baker/trainers"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer rounded-full border-2 border-[#D72638] bg-white px-8 py-4 font-bold text-[#D72638] shadow-lg transition-all duration-300 hover:shadow-xl dark:border-[#FFA5A5] dark:bg-[#232323] dark:text-[#FFA5A5]"
              >
                👨‍🏫 Trainer kennenlernen
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10"
      >
        <motion.div variants={itemVariants}>
          <FitnessBaeckerPage />
        </motion.div>
      </motion.div>

      {}
      <motion.div
        className="pointer-events-none fixed top-20 right-10 h-16 w-16 rounded-full bg-[#FFA5A5] opacity-20 blur-sm"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-lg">🥖</span>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed bottom-20 left-10 h-12 w-12 rounded-full bg-[#D72638] opacity-20 blur-sm"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-sm">💪</span>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-1/2 right-20 h-10 w-10 rounded-full bg-[#FFA5A5] opacity-20 blur-sm"
        animate={{
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs">🏃‍♂️</span>
      </motion.div>
    </PageWrapper>
  )
}
