'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { fitnessBaeckerTranslations } from '@/app/fitness-baker/translations'
import { useLanguageStore } from '@/app/store/languageStore'
import { PageWrapper } from '@/components/ui/PageWrapper'

const heroImage = '/images/Fitnessbaecker-Baeckerei-Noventa-1600x1080.jpg'
const trainerTeamImage = '/images/noventas_Fitnessbaecker_Trainerteam-1.jpg'

export default function FitnessBaeckerPage() {
  const { language } = useLanguageStore()
  const translations = fitnessBaeckerTranslations[language]
  return (
    <PageWrapper>
      {}
      <section className="relative mb-12 h-[40vh] w-full">
        <Image
          src={heroImage}
          alt="Fitnessbäcker Hero"
          fill
          className="rounded-[25px] object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-[25px] bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={false}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-4xl font-extrabold drop-shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {translations.hero.title}
          </motion.h1>
        </div>
      </section>

      {}
      <section className="mx-auto mb-8 max-w-4xl">
        <div className="rounded-3xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-8 shadow-2xl lg:p-12 dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 bg-gradient-to-r from-[#D72638] to-[#EE0A24] bg-clip-text text-center text-4xl font-bold text-transparent"
          >
            {translations.intro.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {translations.intro.description}
          </motion.p>

          {}
          <motion.div
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {translations.intro.features?.map((feature, index) => (
              <motion.div
                key={index}
                className="flex min-h-[140px] flex-col justify-center rounded-2xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-[#444444] dark:from-[#1a1a1a] dark:to-[#2a2a2a]"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] shadow-lg">
                  <span className="text-lg font-bold text-white">✓</span>
                </div>
                <p className="text-sm leading-tight font-bold break-words text-gray-800 dark:text-gray-200">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="mx-auto mb-12 max-w-3xl">
        <motion.div
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-2 overflow-hidden rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a]"
        >
          <Image
            src={trainerTeamImage}
            alt="Fitnessbäcker Trainerteam"
            width={1200}
            height={600}
            className="h-64 w-full object-cover md:h-80"
            priority={false}
          />
        </motion.div>
        <p className="text-center text-sm text-gray-600 dark:text-[#FAD2E1]">
          {translations.trainerTeam.caption}
        </p>
      </section>

      {}
      <section className="mx-auto mb-16 max-w-4xl text-center">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 bg-gradient-to-r from-[#D72638] to-[#EE0A24] bg-clip-text text-4xl font-bold text-transparent"
        >
          {translations.trainerTeam.title}
        </motion.h2>
        <motion.p
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-300"
        >
          {translations.trainerTeam.description}
        </motion.p>
        <Link href="/fitness-baker/trainers">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block rounded-[20px] bg-[#EE0A24] px-8 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
          >
            {translations.trainerTeam.button}
          </motion.a>
        </Link>
      </section>

      {}
      <section className="mb-12" data-section="calendar">
        <motion.h2
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 bg-gradient-to-r from-[#D72638] to-[#EE0A24] bg-clip-text text-center text-3xl font-bold text-transparent"
        >
          {translations.calendar.title}
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(translations.calendar.events).map((event, idx) => (
            <motion.div
              key={event.title}
              initial={false}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group hover:shadow-3xl flex flex-col overflow-hidden rounded-3xl border border-[#FAD2E1] bg-gradient-to-br from-white to-[#FFF5E1] shadow-2xl transition-all duration-300 dark:border-[#444444] dark:from-[#232323] dark:to-[#2a2a2a]"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  {event.title}
                </h3>
                <div className="mb-3">
                  <div className="inline-block rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] px-3 py-1 text-xs font-semibold text-white">
                    {event.start}
                  </div>
                </div>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
                <div className="mt-auto">
                  <Link href={event.link}>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-block w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#FFA5A5] dark:text-[#232323] dark:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#2a2a2a]"
                    >
                      {language === 'de' ? 'Mehr erfahren' : 'Learn more'}
                    </motion.a>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
