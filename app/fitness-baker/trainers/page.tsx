'use client'
import { motion } from 'framer-motion'
import { Award, Heart, Star, Target, Trophy, Users, Zap } from 'lucide-react'
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

export default function Trainers() {
  const { language } = useLanguageStore()
  const translations = fitnessBaeckerTranslations[language].trainers

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
              <Users className="h-4 w-4" />
              <span>👨‍🏫 Unser Trainerteam</span>
            </motion.div>

            <motion.h1
              className="mb-4 bg-gradient-to-r from-[#D72638] via-[#EE0A24] to-[#FFA5A5] bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {translations.title} 🏆
            </motion.h1>

            <motion.p
              className="mb-8 text-xl leading-relaxed text-gray-700 lg:text-2xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {translations.description} 💪🌟
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Qualität
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Höchste Standards
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] shadow-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Expertise
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Professionelle Ausbildung
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Leidenschaft
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Mit Herz & Seele
                </p>
              </motion.div>
              <motion.div
                className="rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <p className="text-center text-sm font-bold text-gray-800 dark:text-gray-200">
                  Erfolg
                </p>
                <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
                  Ziele erreichen
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(translations.trainers).map(([key, trainer]) => (
              <motion.div
                key={key}
                className="hover:shadow-3xl overflow-hidden rounded-3xl border border-[#FAD2E1] bg-white shadow-2xl transition-shadow duration-300 dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute right-4 bottom-4 left-4">
                    <h3 className="mb-1 text-2xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-sm text-gray-200">{trainer.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                    {trainer.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                      <Target className="h-5 w-5" />
                      Spezialitäten
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(trainer.specialties).map(([key, specialty]) => (
                        <div key={key} className="rounded-lg bg-[#FFF5E1] p-3 dark:bg-[#2a2a2a]">
                          <h5 className="mb-1 flex items-center gap-2 font-medium text-[#D72638] dark:text-[#FFA5A5]">
                            <Zap className="h-4 w-4" />
                            {specialty.name}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {specialty.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                      <Award className="h-5 w-5" />
                      Zertifizierungen
                    </h4>
                    <ul className="space-y-2">
                      {trainer.certifications.map((cert, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="mr-2 h-4 w-4 text-[#D72638] dark:text-[#FFA5A5]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}
