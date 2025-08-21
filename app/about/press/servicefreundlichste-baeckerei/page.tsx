'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaAward,
  FaHandshake,
  FaHeart,
  FaMedal,
  FaSmile,
  FaStar,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    highlights: {
      title: string
      items: string[]
    }
    stats: {
      title: string
      items: string[]
    }
    conclusion: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    highlights: {
      title: string
      items: string[]
    }
    stats: {
      title: string
      items: string[]
    }
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Deutschlands servicefreundlichste Bäckerei',
    subtitle: 'Auszeichnung für exzellenten Service',
    description:
      'Noventa wurde 2023 als "Service-Champion" ausgezeichnet und belegt den 1. Platz im bundesweiten Branchen-Ranking. Ein Beweis für unser Engagement und unsere Leidenschaft für Kundenzufriedenheit.',
    sectionTitle: 'Auszeichnung für exzellenten Service',
    sectionContent:
      'Über 2 Millionen Kundenurteile haben entschieden: Noventa ist die servicefreundlichste Bäckerei Deutschlands. Freundlichkeit, kompetente Beratung und höchste Qualität stehen bei uns im Mittelpunkt.',
    highlights: {
      title: 'Unsere Service-Highlights',
      items: [
        '1. Platz im Branchen-Ranking 2023',
        'Über 150 Fachgeschäfte deutschlandweit',
        'Fokus auf Kundenzufriedenheit und Qualität',
        'Stolz auf unser Team und unsere Tradition',
        'Persönliche Beratung und Service',
        'Moderne Technologien für besseren Service',
      ],
    },
    stats: {
      title: 'Unsere Erfolgszahlen',
      items: [
        '2+ Millionen Kundenurteile',
        '1. Platz im Branchen-Ranking',
        '150+ Filialen deutschlandweit',
        '97 Jahre Tradition',
        'Über 1000 Mitarbeiter',
        '4.9/5 Sterne Bewertung',
      ],
    },
    conclusion:
      'Wir danken allen Kundinnen und Kunden für ihr Vertrauen und freuen uns, weiterhin mit Leidenschaft und Service zu begeistern!',
  },
  en: {
    title: "Germany's Most Customer-Friendly Bakery",
    subtitle: 'Award for Excellent Service',
    description:
      'Noventa was awarded as "Service Champion" in 2023 and ranks first in the nationwide industry ranking. A testament to our commitment and passion for customer satisfaction.',
    sectionTitle: 'Award for Excellent Service',
    sectionContent:
      "Over 2 million customer reviews have decided: Noventa is Germany's most customer-friendly bakery. Friendliness, competent advice, and highest quality are our priorities.",
    highlights: {
      title: 'Our Service Highlights',
      items: [
        '1st place in industry ranking 2023',
        'Over 150 specialty stores nationwide',
        'Focus on customer satisfaction and quality',
        'Pride in our team and tradition',
        'Personal advice and service',
        'Modern technologies for better service',
      ],
    },
    stats: {
      title: 'Our Success Numbers',
      items: [
        '2+ million customer reviews',
        '1st place in industry ranking',
        '150+ branches nationwide',
        '97 years of tradition',
        'Over 1000 employees',
        '4.9/5 star rating',
      ],
    },
    conclusion:
      'We thank all customers for their trust and look forward to continuing to impress with passion and service!',
  },
}

export default function ServicefreundlichsteBaeckereiPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="mx-auto max-w-4xl">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl"
          >
            <FaAward className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#dc2626] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#f87171]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {translations[language].title}
          </h1>
          <h2 className="mb-6 text-xl font-semibold text-gray-600 transition-colors duration-200 md:text-2xl dark:text-gray-300">
            {translations[language].subtitle}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 transition-colors duration-200 md:text-xl dark:text-gray-300">
            {translations[language].description}
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 overflow-hidden rounded-3xl bg-white/90 shadow-2xl dark:bg-neutral-800/90"
        >
          <div className="relative h-64 md:h-80">
            <Image
              src="/images/noventas_Auszeichnung_Service-Champion_2023.jpg"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🏆 #1 Ranking
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#dc2626] dark:text-[#f87171]">
              {translations[language].sectionTitle}
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
              {translations[language].sectionContent}
            </p>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-[#dc2626] dark:text-[#f87171]">
            {translations[language].highlights.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].highlights.items.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaTrophy className="h-6 w-6" />}
                  {index === 1 && <FaUsers className="h-6 w-6" />}
                  {index === 2 && <FaHeart className="h-6 w-6" />}
                  {index === 3 && <FaStar className="h-6 w-6" />}
                  {index === 4 && <FaHandshake className="h-6 w-6" />}
                  {index === 5 && <FaSmile className="h-6 w-6" />}
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-red-500 to-pink-500 p-8 text-white shadow-2xl"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {translations[language].stats.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-sm opacity-90">{stat}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-3xl bg-white/80 p-8 text-center shadow-xl dark:bg-neutral-800/80"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <FaMedal className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
