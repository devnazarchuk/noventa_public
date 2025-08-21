'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaAward, FaHeart, FaStar, FaUsers, FaUserTie } from 'react-icons/fa'

import { Language } from '@/app/store/languageStore'
import { useLanguageStore } from '@/app/store/languageStore'

import { bakers, getTranslatedBaker, slugify } from './bakers-data'

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

type Translations = {
  [key in Language]: {
    title: string
    subtitle: string
    description: string
    description2: string
    moreInfo: string
    department: string
    since: string
    masterSince: string
    stats: {
      masters: string
      experience: string
      generations: string
      tradition: string
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Unsere Meister aus der Backstube',
    subtitle: 'Die Gesichter hinter erstklassigem Handwerk',
    description:
      'Unsere 10 Bäckermeister in der Backstube in Keinhausen sind wahre Künstler ihres Fachs. Mit jahrelanger Erfahrung und einer leidenschaftlichen Hingabe zum Bäckerhandwerk stellen Sie Tag für Tag und Nacht für Nacht unsere Vielfalt an Backwaren her.',
    description2:
      'Tauchen Sie ein in die Welt des Bäckerhandwerks und lernen Sie unsere Bäckermeister kennen – wir geben unserem Rhöner Handwerk ein Gesicht.',
    moreInfo: 'Mehr Info',
    department: 'Abteilung:',
    since: 'Bei Noventa seit:',
    masterSince: 'Bäckermeister seit:',
    stats: {
      masters: 'Bäckermeister',
      experience: 'Jahre Erfahrung',
      generations: 'Generationen',
      tradition: 'Jahre Tradition',
    },
  },
  en: {
    title: 'Our Masters from the Bakery',
    subtitle: 'The Faces Behind First-Class Craftsmanship',
    description:
      'Our 10 master bakers in the bakery in Keinhausen are true artists of their craft. With years of experience and a passionate dedication to the baking trade, they produce our variety of baked goods day and night.',
    description2:
      'Dive into the world of the baking trade and get to know our master bakers – we give our Rhön craftsmanship a face.',
    moreInfo: 'More Info',
    department: 'Department:',
    since: 'At Noventa since:',
    masterSince: 'Master baker since:',
    stats: {
      masters: 'Master Bakers',
      experience: 'Years Experience',
      generations: 'Generations',
      tradition: 'Years Tradition',
    },
  },
}

export default function MasterBakersPage() {
  const { language } = useLanguageStore()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      {}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl"
        >
          <FaUserTie className="h-10 w-10" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-4xl font-bold text-[#EE0A24] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#EE0A24]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {translations[language].title}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-xl font-semibold text-gray-600 transition-colors duration-200 md:text-2xl dark:text-gray-300"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {translations[language].subtitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-gray-700 transition-colors duration-200 md:text-xl dark:text-gray-300"
        >
          {translations[language].description}
          <br />
          {translations[language].description2}
        </motion.p>
      </div>

      {}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
      >
        {[
          {
            number: '10',
            label: translations[language].stats.masters,
            icon: <FaUserTie className="h-6 w-6" />,
          },
          {
            number: '25+',
            label: translations[language].stats.experience,
            icon: <FaAward className="h-6 w-6" />,
          },
          {
            number: '7',
            label: translations[language].stats.generations,
            icon: <FaUsers className="h-6 w-6" />,
          },
          {
            number: '97',
            label: translations[language].stats.tradition,
            icon: <FaHeart className="h-6 w-6" />,
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group rounded-2xl bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 group-hover:scale-110">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-[#EE0A24] md:text-4xl dark:text-[#EE0A24]">
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 md:text-base dark:text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {}
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {bakers.map((baker, i) => {
          const translatedBaker = getTranslatedBaker(baker, language)
          const experienceYears = new Date().getFullYear() - parseInt(baker.masterSince)

          return (
            <motion.div
              key={baker.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="group flex flex-col overflow-hidden rounded-3xl border-0 bg-white/90 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:bg-neutral-800/90"
              aria-label={`Bäckermeister: ${baker.name}`}
            >
              {}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={baker.image}
                  alt={baker.alt}
                  width={256}
                  height={256}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
                  {experienceYears} {language === 'de' ? 'Jahre' : 'Years'}
                </div>

                {}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} className="h-4 w-4 text-yellow-400 drop-shadow-lg" />
                  ))}
                </div>
              </div>

              {}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="mb-2 text-2xl font-bold text-[#EE0A24] transition-colors duration-200 dark:text-[#EE0A24]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {baker.name}
                </h3>
                <div className="mb-4 flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {translatedBaker.department && (
                    <div className="flex items-center gap-2">
                      <FaAward className="h-4 w-4 text-orange-500" />
                      <span>
                        <strong>{translations[language].department}</strong>{' '}
                        {translatedBaker.department}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FaUsers className="h-4 w-4 text-orange-500" />
                    <span>
                      <strong>{translations[language].since}</strong> {baker.since}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserTie className="h-4 w-4 text-orange-500" />
                    <span>
                      <strong>{translations[language].masterSince}</strong> {baker.masterSince}
                    </span>
                  </div>
                </div>

                {}
                <Link href={`/about/master-bakers/${slugify(baker.name)}`} passHref legacyBehavior>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-auto inline-block rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-center text-base font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    aria-label={`${translations[language].moreInfo} ${baker.name}`}
                  >
                    {translations[language].moreInfo}
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
