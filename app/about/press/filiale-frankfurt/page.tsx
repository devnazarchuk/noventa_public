'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaArrowRight,
  FaAward,
  FaClock,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhone,
  FaStore,
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
    features: {
      title: string
      items: string[]
    }
    location: {
      title: string
      address: string
      hours: string
      contact: string
    }
    conclusion: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    features: {
      title: string
      items: string[]
    }
    location: {
      title: string
      address: string
      hours: string
      contact: string
    }
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Neue Filiale in Frankfurt eröffnet',
    subtitle: 'Ein neues Kapitel in Frankfurt',
    description:
      'Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente, nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.',
    sectionTitle: 'Willkommen in Frankfurt',
    sectionContent:
      'Die neue Filiale besticht durch ein modernes, nachhaltiges Design und bietet ein erweitertes Sortiment an frischen Backwaren, Snacks und Kaffeespezialitäten. Besonderes Augenmerk wurde auf regionale Zutaten und umweltfreundliche Materialien gelegt.',
    features: {
      title: 'Unsere Highlights',
      items: [
        'Modernes, nachhaltiges Ladenkonzept',
        'Erweitertes Sortiment mit regionalen Spezialitäten',
        'Barrierefreier Zugang und großzügige Sitzbereiche',
        'Frische Snacks und Kaffeespezialitäten',
        'Digitale Bestellsysteme und kontaktlose Bezahlung',
        'Umweltfreundliche Verpackungen und Materialien',
      ],
    },
    location: {
      title: 'Standort & Kontakt',
      address: 'Musterstraße 123, 60313 Frankfurt am Main',
      hours: 'Mo-Fr: 6:00-19:00, Sa: 6:00-18:00, So: 7:00-17:00',
      contact: '+49 69 12345678',
    },
    conclusion:
      'Wir freuen uns auf viele neue Kundinnen und Kunden in Frankfurt und laden Sie herzlich ein, unsere neue Filiale zu besuchen!',
  },
  en: {
    title: 'New Branch Opens in Frankfurt',
    subtitle: 'A New Chapter in Frankfurt',
    description:
      'In March 2024, we opened our newest branch in Frankfurt. Modern ambiance, sustainable materials, and an expanded product range await our customers.',
    sectionTitle: 'Welcome to Frankfurt',
    sectionContent:
      'The new branch impresses with a modern, sustainable design and offers an expanded range of fresh baked goods, snacks, and coffee specialties. Special attention was paid to regional ingredients and environmentally friendly materials.',
    features: {
      title: 'Our Highlights',
      items: [
        'Modern, sustainable store concept',
        'Expanded range with regional specialties',
        'Barrier-free access and spacious seating areas',
        'Fresh snacks and coffee specialties',
        'Digital ordering systems and contactless payment',
        'Environmentally friendly packaging and materials',
      ],
    },
    location: {
      title: 'Location & Contact',
      address: 'Musterstraße 123, 60313 Frankfurt am Main',
      hours: 'Mon-Fri: 6:00-19:00, Sat: 6:00-18:00, Sun: 7:00-17:00',
      contact: '+49 69 12345678',
    },
    conclusion:
      'We look forward to welcoming many new customers in Frankfurt and invite you to visit our new branch!',
  },
}

export default function FilialeFrankfurtPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl"
          >
            <FaStore className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#3b82f6] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#60a5fa]"
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
              src="/images/AATA13607_1360_768_1024.jpg"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🆕 Neu / New
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#3b82f6] dark:text-[#60a5fa]">
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
          <h3 className="mb-8 text-center text-2xl font-bold text-[#3b82f6] dark:text-[#60a5fa]">
            {translations[language].features.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaStore className="h-6 w-6" />}
                  {index === 1 && <FaLeaf className="h-6 w-6" />}
                  {index === 2 && <FaUsers className="h-6 w-6" />}
                  {index === 3 && <FaAward className="h-6 w-6" />}
                  {index === 4 && <FaArrowRight className="h-6 w-6" />}
                  {index === 5 && <FaLeaf className="h-6 w-6" />}
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-white shadow-2xl"
        >
          <h3 className="mb-6 text-center text-2xl font-bold">
            {translations[language].location.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <FaMapMarkerAlt className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-semibold">📍 {language === 'de' ? 'Adresse' : 'Address'}</h4>
              <p className="text-sm opacity-90">{translations[language].location.address}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <FaClock className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-semibold">
                🕒 {language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}
              </h4>
              <p className="text-sm opacity-90">{translations[language].location.hours}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <FaPhone className="h-6 w-6" />
              </div>
              <h4 className="mb-2 font-semibold">📞 {language === 'de' ? 'Kontakt' : 'Contact'}</h4>
              <p className="text-sm opacity-90">{translations[language].location.contact}</p>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="rounded-3xl bg-white/80 p-8 text-center shadow-xl dark:bg-neutral-800/80"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <FaStore className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
