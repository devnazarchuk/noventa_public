'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaAward, FaGift, FaHeart, FaLeaf, FaMountain, FaSnowflake, FaStar } from 'react-icons/fa'

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
    title: 'Traditionsstollen schnuppert Rhöner Höhenluft',
    subtitle: 'Bäckerei Noventa lässt Hessens höchsten Stollen in 950 Meter Höhe reifen',
    description:
      'Der Berg ruft! Denn ist es wieder soweit: Hessens höchster Stollen von der Bäckerei Noventa darf wieder echte Rhöner Höhenluft auf der Wasserkuppe schnuppern.',
    sectionTitle: 'Ein Herzensprojekt aus der Rhön',
    sectionContent:
      'Als einer von etwa 220 zertifizierten Brot-Sommeliers weltweit hat Bernd Müller das einzigartige Rezept für Hessens höchsten Stollen kreiert. Normalerweise mit seiner Expertise auf Brot ausgerichtet, interessiert sich der Bäckermeister auch seit längerer Zeit für die Kunst des Stollens backen. Entstanden ist ein Rezept, in dem nur die besten Zutaten aus der Region verarbeitet werden. So finden sich unter anderem Apfelwürfel aus der antonius Gärtnerei in Ganzweg oder auch Apfel-Sherry vom Biohof Krenzer aus Seiferts im Gebäck. Verfeinert wird der handgefertigte Traditionsstollen mit Haselnüssen und Rum. "Hessens höchster Stollen ist ein echtes Herzensprojekt. Die erlesenen Zutaten und der besondere Reifeprozess sind einfach eine Liebeserklärung an unsere Heimatregion – die Rhön", erklärt Brot-Sommelier Bernd Müller.',
    features: {
      title: 'Unsere Besonderheiten',
      items: [
        'Einzigartiges Rezept von Brot-Sommelier Bernd Müller',
        'Regionale Zutaten aus der Rhön',
        'Reifung in 950 Meter Höhe auf der Wasserkuppe',
        'Handgefertigt mit Haselnüssen und Rum',
        'Limitierte Auflage von 1.500 Exemplaren',
        'Edle Holzverpackung für jedes Exemplar',
      ],
    },
    process: {
      title: 'Der Reifeprozess',
      steps: [
        'Herstellung nach traditionellem Rezept',
        'Verwendung regionaler Zutaten',
        'Transport zur Wasserkuppe (950m)',
        '4-wöchige Reifung in der Bergluft',
        'Entfaltung der feinen Aromen',
        'Abfüllung in edle Holzverpackung',
      ],
    },
    conclusion:
      'Der höchste Berg in Hessen bietet dabei erstklassige Bedingungen, um das Gebäck innerhalb von vier Wochen perfekt auszureifen. Die klare und frische Rhöner Höhenluft lässt die feinen Aromen entfalten und die Konsistenz wunderbar zart werden. "Man wird die Bergluft in unseren 1.500 Exemplaren spürbar schmecken können", so Bernd Müller. Am 29. Oktober 2023 um 14 Uhr findet der offizielle Stollen-Abtrieb statt, bei dem der Stollen in einer edlen Holzverpackung präsentiert und verkostet werden kann. "Jedes Exemplar ist ein echtes Unikat und lädt zum Genießen ein. Wir freuen uns daher, Hessens höchsten Stollen in vier Wochen wieder ins Tal zu holen", sagt Geschäftsführer Manfred Mustername.',
  },
  en: {
    title: 'Traditional Stollen Breathes Rhön Mountain Air',
    subtitle: "Hesse's Highest Stollen Matures at 950 Meters",
    description:
      "The mountain calls! It's that time again: Hesse's highest stollen from Noventa Bakery gets to breathe the real Rhön mountain air on the Wasserkuppe.",
    sectionTitle: 'A Heart Project from the Rhön',
    sectionContent:
      "As one of about 220 certified bread sommeliers worldwide, Bernd Müller has created the unique recipe for Hesse's highest stollen. While usually focused on bread with his expertise, the master baker has also been interested in the art of stollen baking for some time. The result is a recipe that uses only the finest regional ingredients. These include apple cubes from the antonius garden in Ganzweg and apple sherry from the Krenzer organic farm in Seiferts. The handcrafted traditional stollen is refined with hazelnuts and rum.",
    features: {
      title: 'Our Special Features',
      items: [
        'Unique recipe by bread sommelier Bernd Müller',
        'Regional ingredients from the Rhön',
        'Maturation at 950 meters on the Wasserkuppe',
        'Handcrafted with hazelnuts and rum',
        'Limited edition of 1,500 pieces',
        'Elegant wooden packaging for each piece',
      ],
    },
    process: {
      title: 'The Maturation Process',
      steps: [
        'Production according to traditional recipe',
        'Use of regional ingredients',
        'Transport to Wasserkuppe (950m)',
        '4-week maturation in mountain air',
        'Development of fine aromas',
        'Packaging in elegant wooden boxes',
      ],
    },
    conclusion:
      "Hesse's highest mountain offers perfect conditions for the pastry to mature perfectly within four weeks. The clear and fresh Rhön mountain air allows the delicate aromas to develop and the consistency to become wonderfully tender. On October 29, 2023, at 2 PM, the official stollen descent will take place, where the stollen will be presented and tasted in an elegant wooden packaging.",
  },
}

export default function TraditionsstollenPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl"
          >
            <FaMountain className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#4f46e5] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#818cf8]"
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
              src="/images/traditionsstollen.jpg"
              alt={translations[language].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {}
            <div className="absolute top-6 right-6">
              <div className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                🏔️ 950m Höhe
              </div>
            </div>
          </div>

          <div className="p-8">
            <h2 className="mb-6 text-3xl font-bold text-[#4f46e5] dark:text-[#818cf8]">
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
          <h3 className="mb-8 text-center text-2xl font-bold text-[#4f46e5] dark:text-[#818cf8]">
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
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {index === 0 && <FaAward className="h-6 w-6" />}
                  {index === 1 && <FaLeaf className="h-6 w-6" />}
                  {index === 2 && <FaMountain className="h-6 w-6" />}
                  {index === 3 && <FaHeart className="h-6 w-6" />}
                  {index === 4 && <FaStar className="h-6 w-6" />}
                  {index === 5 && <FaGift className="h-6 w-6" />}
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
          className="mb-12 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white shadow-2xl"
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <FaSnowflake className="h-8 w-8" />
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {translations[language].conclusion}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
