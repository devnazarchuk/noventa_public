'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaAward,
  FaHandshake,
  FaHeart,
  FaRocket,
  FaStar,
  FaUserGraduate,
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
    achievements: {
      title: string
      items: string[]
    }
    values: {
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
    achievements: {
      title: string
      items: string[]
    }
    values: {
      title: string
      items: string[]
    }
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Maximilian Noventa – Neuer Bäckermeister',
    subtitle: 'Tradition & Moderne',
    description:
      'Mit dem erfolgreichen Abschluss seiner Meisterprüfung setzt Maximilian Noventa die Familientradition fort und bringt frischen Wind in unsere Backstube.',
    sectionTitle: 'Tradition & Moderne',
    sectionContent:
      'Maximilian Noventa ist die 8. Generation der Noventa-Bäckerfamilie. Mit seiner Meisterprüfung bringt er nicht nur handwerkliches Können, sondern auch neue Ideen und moderne Techniken in unser Unternehmen.',
    achievements: {
      title: 'Seine Erfolge',
      items: [
        'Erfolgreiche Meisterprüfung',
        '8. Generation der Noventa-Familie',
        '10 Meister in der Backstube',
        'Fokus auf Qualität und Innovation',
        'Verbindung von Tradition und Moderne',
        'Stolz auf die Familiengeschichte',
      ],
    },
    values: {
      title: 'Unsere Werte',
      items: [
        'Handwerkliche Perfektion',
        'Regionale Zutaten',
        'Nachhaltige Produktion',
        'Kundenorientierung',
        'Innovation und Tradition',
        'Familiäre Atmosphäre',
      ],
    },
    conclusion:
      'Wir gratulieren Maximilian herzlich und freuen uns auf viele neue Backideen und die Fortführung unserer Erfolgsgeschichte!',
  },
  en: {
    title: 'Maximilian Noventa – New Master Baker',
    subtitle: 'Tradition & Modernity',
    description:
      "With the successful completion of his master's examination, Maximilian Noventa continues the family tradition and brings fresh ideas to our bakery.",
    sectionTitle: 'Tradition & Modernity',
    sectionContent:
      "Maximilian Noventa is the 8th generation of the Noventa baker family. With his master's examination, he brings not only artisanal skills but also new ideas and modern techniques to our company.",
    achievements: {
      title: 'His Achievements',
      items: [
        'Successful master examination',
        '8th generation of the Noventa family',
        '10 master bakers in the bakery',
        'Focus on quality and innovation',
        'Combining tradition and modernity',
        'Pride in family history',
      ],
    },
    values: {
      title: 'Our Values',
      items: [
        'Artisanal perfection',
        'Regional ingredients',
        'Sustainable production',
        'Customer orientation',
        'Innovation and tradition',
        'Family atmosphere',
      ],
    },
    conclusion:
      'We congratulate Maximilian and look forward to many new baking ideas and continuing our success story!',
  },
}

export default function MaximilianNoventaPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-2xl"
          >
            <FaUserGraduate className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#059669] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#10b981]"
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
              src="/images/Maximilian_Noventa_ist_neuer_Baeckermeister.jpg"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🎓 Master Baker
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#059669] dark:text-[#10b981]">
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
          <h3 className="mb-8 text-center text-2xl font-bold text-[#059669] dark:text-[#10b981]">
            {translations[language].achievements.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].achievements.items.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaAward className="h-6 w-6" />}
                  {index === 1 && <FaUsers className="h-6 w-6" />}
                  {index === 2 && <FaStar className="h-6 w-6" />}
                  {index === 3 && <FaRocket className="h-6 w-6" />}
                  {index === 4 && <FaHandshake className="h-6 w-6" />}
                  {index === 5 && <FaHeart className="h-6 w-6" />}
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white shadow-2xl"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {translations[language].values.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].values.items.map((value, index) => (
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
                <p className="text-sm opacity-90">{value}</p>
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <FaUserGraduate className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
