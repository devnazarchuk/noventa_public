'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import {
  FaAward,
  FaBroom,
  FaHandshake,
  FaHeart,
  FaRocket,
  FaStar,
  FaTruck,
  FaUserGraduate,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa'

// Import master bakers data
import { bakers, getTranslatedBaker } from '@/app/about/master-bakers/bakers-data'
import { useLanguageStore } from '@/app/store/languageStore'

import { teamTranslations } from './languages'

const testimonials = [
  {
    de: {
      text: 'Ich darf erstklassige Produkte verkaufen und habe dabei das Gefühl einen sicheren Arbeitsplatz zu haben.',
      author: 'Philipp Tach, seit 2021, Verkauf',
    },
    en: {
      text: 'I get to sell premium products and feel secure in my workplace.',
      author: 'Philipp Tach, since 2021, Sales',
    },
    img: '/images/Zitat-Michael-Wessels-Baeckerei-Noventas.png',
  },
  {
    de: {
      text: 'Ich bin glücklich bei Noventa und könnte mir nicht vorstellen, woanders zu arbeiten. Es passt einfach alles.',
      author: 'Bettina Rudolph, seit 1999, Verkauf',
    },
    en: {
      text: 'I am happy at Noventa and could not imagine working anywhere else. Everything just fits perfectly.',
      author: 'Bettina Rudolph, since 1999, Sales',
    },
    img: '/images/Zitat-Bettina-Rudolph-Baeckerei-Noventas.png',
  },
]

const teamGallery = [
  {
    img: '/soft-images/job-chef.jpg',
    alt: { de: 'Teamleitung', en: 'Team Leader' },
  },
  {
    img: '/soft-images/job-kondi.jpg',
    alt: { de: 'Konditorin', en: 'Pastry Chef' },
  },
  { img: '/soft-images/job-aus-backer.jpg', alt: { de: 'Bäcker', en: 'Baker' } },
  {
    img: '/soft-images/job-saler.jpg',
    alt: { de: 'Verkäuferin', en: 'Sales Associate' },
  },
  {
    img: '/soft-images/job-clear.jpg',
    alt: { de: 'Reinigungskraft', en: 'Cleaning Staff' },
  },
  { img: '/soft-images/job-lager.jpg', alt: { de: 'Lager', en: 'Warehouse' } },
  {
    img: '/soft-images/job-mechaniker.jpg',
    alt: { de: 'Maschinenführer', en: 'Machine Operator' },
  },
]

const jobWorlds = [
  {
    title: {
      de: 'Fahrer',
      en: 'Driver',
    },
    img: '/soft-images/job-delivery.jpg',
    icon: <FaTruck className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Teamleitung',
      en: 'Team Leader',
    },
    img: '/soft-images/job-chef.jpg',
    icon: <FaUserTie className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Konditor',
      en: 'Pastry Chef',
    },
    img: '/soft-images/job-kondi.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäckereiverkäufer',
      en: 'Bakery Sales',
    },
    img: '/soft-images/job-saler.jpg',
    icon: <FaUsers className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Reinigungskraft',
      en: 'Cleaning Staff',
    },
    img: '/soft-images/job-clear.jpg',
    icon: <FaBroom className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäckerhelfer',
      en: 'Baker Assistant',
    },
    img: '/soft-images/job-aus-backer.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Bäcker',
      en: 'Baker',
    },
    img: '/soft-images/job-aus-backer.jpg',
    icon: <FaUserGraduate className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
  {
    title: {
      de: 'Kommissionierer',
      en: 'Order Picker',
    },
    img: '/soft-images/job-lager.jpg',
    icon: <FaTruck className="mr-2 h-7 w-7 text-[#D72638]" />,
  },
]

export default function TeamPage() {
  const { language } = useLanguageStore()
  const t = teamTranslations[language]

  const [selectedBaker, setSelectedBaker] = useState<string | null>(null)


  const leadershipTeam = bakers.sort((a, b) => {
  
    const yearA = parseInt(a.masterSince)
    const yearB = parseInt(b.masterSince)
    return yearA - yearB
  })


  const displayedTeam = leadershipTeam

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {}
      <section className="w-full px-4 py-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">
                <FaUsers className="h-10 w-10" />
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-6 text-4xl font-bold text-[#c60627] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto mb-12 max-w-3xl text-lg text-[#3A3A3A] transition-colors duration-200 md:text-xl dark:text-gray-200"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {}
      <section className="w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl md:p-12 dark:from-neutral-800 dark:to-neutral-900"
          >
            <div className="mb-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
              >
                <FaAward className="h-8 w-8" />
              </motion.div>
              <h2 className="mb-4 text-4xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                {language === 'de' ? 'Unsere Bäckermeister' : 'Our Master Bakers'}
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 transition-colors duration-200 dark:text-gray-300">
                {language === 'de'
                  ? 'Unsere erfahrenen Bäckermeister, die mit Leidenschaft und jahrelanger Expertise unser Handwerk zu Perfektion bringen.'
                  : 'Our experienced master bakers who bring our craft to perfection with passion and years of expertise.'}
              </p>
            </div>

            {}
            <div className="mb-8 flex justify-center">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                {displayedTeam.map((baker, index) => {
                  const experienceYears = new Date().getFullYear() - parseInt(baker.masterSince)
                  const isSelected = selectedBaker === baker.name

                  return (
                    <motion.div
                      key={baker.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <motion.button
                        onClick={() => setSelectedBaker(isSelected ? null : baker.name)}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative h-20 w-20 cursor-pointer overflow-hidden rounded-full border-4 shadow-xl transition-all duration-300 sm:h-24 sm:w-24 lg:h-28 lg:w-28 ${
                          isSelected
                            ? 'border-orange-500 shadow-2xl shadow-orange-500/50'
                            : 'border-orange-200 hover:border-orange-300 hover:shadow-2xl'
                        }`}
                      >
                        <Image
                          src={baker.image}
                          alt={baker.alt}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent" />

                        {}
                        <div className="absolute -top-1 -right-1 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg">
                          {experienceYears}
                        </div>

                        {}
                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 transition-all duration-300 group-hover:bg-black/10">
                          <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <FaUsers className="h-6 w-6 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </motion.button>

                      {}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="mt-2 text-center"
                      >
                        <p className="text-xs font-medium text-gray-700 sm:text-sm dark:text-gray-300">
                          {baker.name.split(' ')[0]}
                        </p>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-6 text-center"
            >
              <p className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <FaUsers className="h-4 w-4" />
                {language === 'de'
                  ? 'Klicke auf ein Foto für mehr Details'
                  : 'Click on a photo for more details'}
              </p>
            </motion.div>

            {}
            <AnimatePresence>
              {selectedBaker &&
                (() => {
                  const baker = leadershipTeam.find((b) => b.name === selectedBaker)
                  if (!baker) return null
                  const translatedBaker = getTranslatedBaker(baker, language)
                  const experienceYears = new Date().getFullYear() - parseInt(baker.masterSince)

                  return (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-red-50 p-6 sm:p-8 dark:from-neutral-700 dark:to-neutral-800">
                        <div className="flex flex-col items-center gap-6 lg:flex-row">
                          {}
                          <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                          >
                            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-orange-300 shadow-2xl sm:h-40 sm:w-40">
                              <Image
                                src={baker.image}
                                alt={baker.alt}
                                width={160}
                                height={160}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                            </div>
                            <div className="absolute -top-2 -right-2 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
                              {experienceYears} {language === 'de' ? 'Jahre' : 'Years'}
                            </div>
                          </motion.div>

                          {}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex-1 text-center lg:text-left"
                          >
                            <h3 className="mb-2 text-2xl font-bold text-[#c60627] sm:text-3xl dark:text-[#EE0A24]">
                              {baker.name}
                            </h3>
                            <p className="mb-3 text-lg font-medium text-gray-600 dark:text-gray-300">
                              {translatedBaker.role ||
                                (language === 'de' ? 'Bäckermeister' : 'Master Baker')}
                            </p>
                            {translatedBaker.department && (
                              <p className="mb-4 text-sm font-medium text-orange-600 dark:text-orange-400">
                                {translatedBaker.department}
                              </p>
                            )}
                            <div className="grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2 dark:text-gray-300">
                              <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <FaUsers className="h-4 w-4 text-orange-500" />
                                <span>
                                  {language === 'de' ? 'Bei Noventa seit' : 'At Noventa since'}:{' '}
                                  {baker.since}
                                </span>
                              </div>
                              <div className="flex items-center justify-center gap-2 lg:justify-start">
                                <FaAward className="h-4 w-4 text-orange-500" />
                                <span>
                                  {language === 'de' ? 'Meister seit' : 'Master since'}:{' '}
                                  {baker.masterSince}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })()}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {}
      <section className="w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8 text-center text-3xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.teamInAction}
          </motion.h2>
          <div className="relative mx-auto max-w-[100vw] overflow-hidden">
            <div className="scrollbar-hide flex gap-6 overflow-x-auto px-4 pb-6">
              {teamGallery.map((img, i) => (
                <motion.div
                  key={img.img}
                  className="flex max-w-xs min-w-[280px] flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-xl">
                    <Image
                      src={img.img}
                      alt={img.alt[language]}
                      width={240}
                      height={192}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="text-center text-lg font-semibold text-[#3A3A3A] transition-colors duration-200 dark:text-gray-300">
                    {img.alt[language]}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8 text-center text-3xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.teamVoices}
          </motion.h2>
          <div className="scrollbar-hide flex justify-center gap-6 overflow-x-auto pb-6 md:gap-8">
            {testimonials.map((tst, i) => (
              <motion.div
                key={tst.img}
                className="flex max-w-[320px] min-w-[280px] flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="relative mb-6">
                  <Image
                    src={tst.img}
                    alt={tst[language].author}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover shadow-lg"
                  />
                  <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                    <FaHeart className="h-3 w-3" />
                  </div>
                </div>
                <div className="mb-4 flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-base text-[#c60627] italic transition-colors duration-200 dark:text-[#EE0A24]">
                  &ldquo;{tst[language].text}&rdquo;
                </blockquote>
                <div className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-300">
                  <div className="font-semibold">{tst[language].author}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-8 text-center text-3xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
          >
            {t.yourCareers}
          </motion.h2>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {jobWorlds.map((job, i) => (
              <motion.div
                key={job.title[language]}
                className="group rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
                  <Image
                    src={job.img}
                    alt={job.title[language]}
                    width={96}
                    height={96}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3
                    className="text-lg font-bold text-[#3A3A3A] transition-colors duration-200 dark:text-[#FDEEEE]"
                    style={{
                      fontFamily:
                        'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
                    }}
                  >
                    {job.title[language]}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="w-full px-4 py-8 sm:px-6 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-r from-[#c60627] to-[#EE0A24] p-8 text-center text-white shadow-2xl md:p-12 dark:from-[#FFA5A5] dark:to-[#FF8A8A] dark:text-[#232323]"
          >
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              {language === 'de' ? 'Unsere Werte' : 'Our Values'}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <FaHeart className="h-8 w-8" />,
                  title: language === 'de' ? 'Leidenschaft' : 'Passion',
                  desc: language === 'de' ? 'Wir lieben was wir tun' : 'We love what we do',
                },
                {
                  icon: <FaAward className="h-8 w-8" />,
                  title: language === 'de' ? 'Qualität' : 'Quality',
                  desc: language === 'de' ? 'Höchste Standards' : 'Highest standards',
                },
                {
                  icon: <FaHandshake className="h-8 w-8" />,
                  title: language === 'de' ? 'Vertrauen' : 'Trust',
                  desc: language === 'de' ? 'Ehrliche Beziehungen' : 'Honest relationships',
                },
                {
                  icon: <FaRocket className="h-8 w-8" />,
                  title: language === 'de' ? 'Innovation' : 'Innovation',
                  desc: language === 'de' ? 'Immer vorwärts' : 'Always forward',
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-sm opacity-90">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
