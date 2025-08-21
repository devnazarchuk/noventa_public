'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaAward,
  FaGlassCheers,
  FaHandshake,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaStar,
  FaWineBottle,
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
    process: {
      title: string
      steps: string[]
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
    process: {
      title: string
      steps: string[]
    }
    conclusion: string
  }
}

const translations: Translations = {
  de: {
    title: 'Gin aus Brot – Nachhaltig & Innovativ',
    subtitle: 'Tradition trifft Innovation',
    description:
      'Die Bäckerei Noventa und die Schlitzer Destillerie präsentieren einen einzigartigen Gin, der aus unserem Roggenbrot "der Wilhelm" hergestellt wird. Das Projekt verbindet Handwerk, Nachhaltigkeit und regionale Zutaten.',
    sectionTitle: 'Tradition trifft Innovation',
    sectionContent:
      'Für unseren Gin werden Brotreste aus der eigenen Produktion verwendet und mit acht heimischen Botanicals veredelt. Das Ergebnis: Ein charaktervoller Gin mit frischen Zitrusnoten, reifen Orangen, kräftigem Wacholder und feinen Brot-Nuancen.',
    features: {
      title: 'Unsere Besonderheiten',
      items: [
        'Lebensmittelverschwendung vermeiden',
        'Regionale Partnerschaft mit der Schlitzer Destillerie',
        'Handwerkliche Herstellung',
        'Nachhaltige Kreislaufwirtschaft',
        'Acht heimische Botanicals',
        'Limitierte Auflage',
      ],
    },
    process: {
      title: 'Der Herstellungsprozess',
      steps: [
        'Brotreste aus der eigenen Produktion sammeln',
        'Fermentation und Destillation',
        'Veredelung mit regionalen Botanicals',
        'Reifung in Eichenfässern',
        'Qualitätskontrolle und Abfüllung',
        'Handnummerierte Flaschen',
      ],
    },
    conclusion:
      'Der Gin ist limitiert erhältlich in ausgewählten Filialen und im Online-Shop. Probieren Sie ein Stück Innovation aus der Rhön!',
  },
  en: {
    title: 'Bread Gin – Sustainable & Innovative',
    subtitle: 'Tradition Meets Innovation',
    description:
      'Noventa Bakery and Schlitzer Distillery present a unique gin made from our rye bread "der Wilhelm". The project combines craftsmanship, sustainability, and regional ingredients.',
    sectionTitle: 'Tradition Meets Innovation',
    sectionContent:
      'For our gin, bread remnants from our own production are used and refined with eight local botanicals. The result: A distinctive gin with fresh citrus notes, ripe oranges, robust juniper, and subtle bread nuances.',
    features: {
      title: 'Our Special Features',
      items: [
        'Avoiding food waste',
        'Regional partnership with Schlitzer Distillery',
        'Artisanal production',
        'Sustainable circular economy',
        'Eight local botanicals',
        'Limited edition',
      ],
    },
    process: {
      title: 'The Production Process',
      steps: [
        'Collect bread remnants from own production',
        'Fermentation and distillation',
        'Refinement with regional botanicals',
        'Maturation in oak barrels',
        'Quality control and bottling',
        'Hand-numbered bottles',
      ],
    },
    conclusion:
      'The gin is available in limited quantities in selected branches and in the online shop. Try a piece of innovation from the Rhön!',
  },
}

export default function GinAusBrotPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl"
          >
            <FaGlassCheers className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#8b5cf6] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#a78bfa]"
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
              src="/images/gin-aus-brot.jpg"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🍸 Limited Edition
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#8b5cf6] dark:text-[#a78bfa]">
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
          <h3 className="mb-8 text-center text-2xl font-bold text-[#8b5cf6] dark:text-[#a78bfa]">
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaRecycle className="h-6 w-6" />}
                  {index === 1 && <FaHandshake className="h-6 w-6" />}
                  {index === 2 && <FaAward className="h-6 w-6" />}
                  {index === 3 && <FaLeaf className="h-6 w-6" />}
                  {index === 4 && <FaSeedling className="h-6 w-6" />}
                  {index === 5 && <FaStar className="h-6 w-6" />}
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
          className="mb-12 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white shadow-2xl"
        >
          <h3 className="mb-8 text-center text-2xl font-bold">
            {translations[language].process.title}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {translations[language].process.steps.map((step, index) => (
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
                <p className="text-sm opacity-90">{step}</p>
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <FaWineBottle className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
