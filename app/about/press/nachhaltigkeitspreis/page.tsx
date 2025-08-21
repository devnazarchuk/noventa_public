'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaAward,
  FaGlobe,
  FaHandshake,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaStar,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    sectionTitle: string
    sectionContent: string
    initiatives: {
      title: string
      items: string[]
    }
    impact: {
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
    initiatives: {
      title: string
      items: string[]
    }
    impact: {
      title: string
      items: string[]
    }
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Nachhaltigkeitspreis 2024 für Noventa',
    subtitle: 'Auszeichnung für Umweltbewusstsein',
    description:
      'Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem Nachhaltigkeitspreis 2024 ausgezeichnet. Wir danken allen Mitarbeitenden und Partnern für ihren Einsatz!',
    sectionTitle: 'Auszeichnung für Umweltbewusstsein',
    sectionContent:
      'Der Nachhaltigkeitspreis würdigt unser Engagement für regionale Zutaten, umweltfreundliche Produktion und soziale Verantwortung. Wir setzen auf kurze Lieferwege, erneuerbare Energien und Partnerschaften mit lokalen Landwirten.',
    initiatives: {
      title: 'Unsere Nachhaltigkeitsinitiativen',
      items: [
        'Regionale Zutaten und kurze Lieferwege',
        'Erneuerbare Energien in der Produktion',
        'Zero-Waste-Initiativen und Spendenaktionen',
        'Starke Partnerschaften mit der Region',
        'Umweltfreundliche Verpackungen',
        'CO2-neutrale Logistik',
      ],
    },
    impact: {
      title: 'Unser Impact',
      items: [
        'Reduzierung des CO2-Ausstoßes um 30%',
        '100% regionale Zutaten',
        'Zero-Waste in allen Filialen',
        'Partnerschaften mit 50+ lokalen Landwirten',
        'Erneuerbare Energien in 80% der Standorte',
        'Nachhaltige Verpackungen seit 2020',
      ],
    },
    conclusion:
      'Wir sind stolz auf diese Auszeichnung und danken allen, die zu unserem nachhaltigen Erfolg beitragen. Gemeinsam für eine grünere Zukunft!',
  },
  en: {
    title: 'Sustainability Award 2024 for Noventa',
    subtitle: 'Award for Environmental Awareness',
    description:
      'For our commitment to the environment and regional ingredients, we were awarded the Sustainability Award 2024. We thank all employees and partners for their dedication!',
    sectionTitle: 'Award for Environmental Awareness',
    sectionContent:
      'The Sustainability Award recognizes our commitment to regional ingredients, environmentally friendly production, and social responsibility. We focus on short supply chains, renewable energy, and partnerships with local farmers.',
    initiatives: {
      title: 'Our Sustainability Initiatives',
      items: [
        'Regional ingredients and short supply chains',
        'Renewable energy in production',
        'Zero-Waste initiatives and donation campaigns',
        'Strong partnerships with the region',
        'Environmentally friendly packaging',
        'CO2-neutral logistics',
      ],
    },
    impact: {
      title: 'Our Impact',
      items: [
        '30% reduction in CO2 emissions',
        '100% regional ingredients',
        'Zero-Waste in all branches',
        'Partnerships with 50+ local farmers',
        'Renewable energy in 80% of locations',
        'Sustainable packaging since 2020',
      ],
    },
    conclusion:
      'We are proud of this award and thank everyone who contributes to our sustainable success. Together for a greener future!',
  },
}

export default function NachhaltigkeitspreisPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-2xl"
          >
            <FaLeaf className="h-10 w-10" />
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
              src="/images/Nachhaltigkeit.webp"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🌱 2024 Award
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
            {translations[language].initiatives.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].initiatives.items.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group rounded-2xl bg-white/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaSeedling className="h-6 w-6" />}
                  {index === 1 && <FaGlobe className="h-6 w-6" />}
                  {index === 2 && <FaRecycle className="h-6 w-6" />}
                  {index === 3 && <FaHandshake className="h-6 w-6" />}
                  {index === 4 && <FaLeaf className="h-6 w-6" />}
                  {index === 5 && <FaStar className="h-6 w-6" />}
                </div>
                <p className="text-center text-gray-700 dark:text-gray-300">{initiative}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-500 p-8 text-white shadow-2xl"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {translations[language].impact.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].impact.items.map((impact, index) => (
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
                <p className="text-sm opacity-90">{impact}</p>
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white">
            <FaAward className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
