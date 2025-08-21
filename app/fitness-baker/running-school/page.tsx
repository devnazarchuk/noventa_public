'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, Calendar, Clock, Target, Users } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

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

type Monat = keyof typeof fitnessBaeckerTranslations.de.runningSchool.months
type Thema = keyof typeof fitnessBaeckerTranslations.de.runningSchool.events

const termine = [
  {
    monat: 'april' as Monat,
    events: [
      {
        date: '24.04.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'kickoff' as Thema,
      },
    ],
  },
  {
    monat: 'may' as Monat,
    events: [
      {
        date: '04.05.2025',
        time: '09:00 Uhr',
        ort: 'Sportplatz Keinhausen',
        thema: 'rhonRun' as Thema,
      },
      {
        date: '08.05.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'basis' as Thema,
      },
      {
        date: '15.05.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'basis' as Thema,
      },
      {
        date: '22.05.2025',
        time: '19:00 Uhr',
        ort: 'Sportplatz Keinhausen',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'june' as Monat,
    events: [
      {
        date: '05.06.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '12.06.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '14.06.2025',
        time: '15:00 Uhr',
        ort: 'Ganzweg',
        thema: 'rhonEnergy' as Thema,
      },
      {
        date: '26.06.2025',
        time: '19:00 Uhr',
        ort: 'Wanderparkplatz Kleinsassen',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'july' as Monat,
    events: [
      {
        date: '03.07.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'technique' as Thema,
      },
      {
        date: '10.07.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'strength' as Thema,
      },
      {
        date: '17.07.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'speed' as Thema,
      },
      {
        date: '24.07.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '31.07.2025',
        time: '19:00 Uhr',
        ort: 'Rodenbach',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'august' as Monat,
    events: [
      {
        date: '07.08.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'endurance' as Thema,
      },
      {
        date: '14.08.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'technique' as Thema,
      },
      {
        date: '21.08.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'strength' as Thema,
      },
      {
        date: '28.08.2025',
        time: '19:00 Uhr',
        ort: 'Parkplatz Guckaisee',
        thema: 'experienceRun' as Thema,
      },
    ],
  },
  {
    monat: 'september' as Monat,
    events: [
      {
        date: '04.09.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'speed' as Thema,
      },
      {
        date: '07.09.2025',
        time: '10:00 Uhr',
        ort: 'Ganzweg',
        thema: 'ganzwegMarathon' as Thema,
      },
      {
        date: '11.09.2025',
        time: '19:00 Uhr',
        ort: 'noventas Backhaus, Etwashausen',
        thema: 'finale' as Thema,
      },
    ],
  },
]

export default function RunningSchoolPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null)
  const language = useLanguageStore((state) => state.language)
  const translations = fitnessBaeckerTranslations[language].runningSchool

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
              <Activity className="h-4 w-4" />
              <span>🏃‍♂️ Running School</span>
            </motion.div>

            <motion.h1
              className="mb-4 bg-gradient-to-r from-[#D72638] via-[#EE0A24] to-[#FFA5A5] bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {translations.title} 🏃‍♀️
            </motion.h1>

            <motion.p
              className="mb-8 text-xl leading-relaxed text-gray-700 lg:text-2xl dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {translations.subtitle} 🎯💪
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
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  📅 24. April
                </p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  ⏰ 19:00 Uhr
                </p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  👥 Alle Level
                </p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-[#FAD2E1] bg-white p-4 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="mx-auto mb-2 h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">🎯 Technik</p>
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
              src="/images/Laufschule-Fitnessbaecker-Baeckerei-Noventa-1.jpg"
              alt={translations.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute right-6 bottom-6 left-6">
              <div className="rounded-2xl bg-white/90 p-6 backdrop-blur-sm dark:bg-[#232323]/90">
                <h3 className="mb-2 text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  🏃‍♂️ Laufschule - Professionelles Training
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Erfahrene Lauf-Trainer betreuen alle Gruppen mit speziellen Themen für Technik und
                  Schnelligkeit
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
              {translations.subtitle} 🎯
            </motion.h2>

            <motion.p
              className="mb-8 text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {translations.description} 🏃‍♀️🌟
            </motion.p>

            <motion.div
              className="rounded-2xl border border-[#FAD2E1] bg-white p-6 shadow-lg dark:border-[#444444] dark:bg-[#232323]"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Users className="mb-4 h-8 w-8 text-[#D72638] dark:text-[#FFA5A5]" />
              <h3 className="mb-2 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                👥 Details
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">📅 Start:</span> {translations.details.start}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">📍 Ort:</span> {translations.details.location}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">👨‍🏫 Trainer:</span> {translations.details.trainer}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">💰 Preis:</span> {translations.details.price}
                </p>
              </div>
            </motion.div>
            <motion.div className="text-center">
              <motion.a
                href="/fitness-baker/registration"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block transform rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-12 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {translations.details.button} 🏃‍♂️
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {}
        <motion.div variants={itemVariants} className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#FAD2E1] bg-white p-8 shadow-2xl lg:p-12 dark:border-[#444444] dark:bg-[#232323]">
            <motion.h2
              className="mb-8 text-center text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translations.schedule.title} 📅
            </motion.h2>

            <div className="space-y-4">
              {termine.map(({ monat, events }) => (
                <div
                  key={monat}
                  className="overflow-hidden rounded-xl border bg-[#FFF5E1] dark:bg-[#2A2A2A]"
                >
                  <button
                    className="flex w-full items-center justify-between bg-[#FFF5E1] px-6 py-4 text-lg font-semibold text-[#D72638] transition hover:bg-[#FFE2E2] focus:ring-2 focus:ring-[#D72638] focus:outline-none dark:bg-[#2A2A2A] dark:text-[#FFA5A5] dark:hover:bg-[#333333]"
                    onClick={() => setOpenMonth(openMonth === monat ? null : monat)}
                    aria-expanded={openMonth === monat}
                    aria-controls={`panel-${monat}`}
                  >
                    <span>📅 {translations.months[monat]}</span>
                    <span className="text-2xl">{openMonth === monat ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openMonth === monat && (
                      <motion.div
                        id={`panel-${monat}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <ul className="divide-y divide-[#FAD2E1] dark:divide-[#444444]">
                          {events.map((event) => (
                            <li key={event.date + event.time} className="py-3">
                              <div className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                                📅 {event.date}
                              </div>
                              <div className="text-sm text-gray-700 dark:text-gray-300">
                                ⏰ {event.time}, 📍 {event.ort}
                              </div>
                              {event.thema && (
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  🎯 {translations.events[event.thema]}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
              {translations.schedule.note}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  )
}
