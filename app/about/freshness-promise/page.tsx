'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaAward,
  FaClock,
  FaHandshake,
  FaHeart,
  FaLeaf,
  FaMoon,
  FaStar,
  FaSun,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    stats: {
      daily: string
      fresh: string
      quality: string
      promise: string
    }
    earlyFresh: {
      title: string
      description: string
      features: string[]
    }
    lateFresh: {
      title: string
      description: string
      features: string[]
    }
    pointFresh: {
      title: string
      description: string
      features: string[]
      overview: string
      instructions: {
        title: string
        text: string
      }
    }
    breads: {
      [key: string]: {
        name: string
        bakingTime: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    stats: {
      daily: string
      fresh: string
      quality: string
      promise: string
    }
    earlyFresh: {
      title: string
      description: string
      features: string[]
    }
    lateFresh: {
      title: string
      description: string
      features: string[]
    }
    pointFresh: {
      title: string
      description: string
      features: string[]
      overview: string
      instructions: {
        title: string
        text: string
      }
    }
    breads: {
      [key: string]: {
        name: string
        bakingTime: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'TÄGLICH FRISCHE VIELFALT!',
    subtitle: 'Unser Versprechen an Sie',
    description:
      'Frische ist ein immer wichtigeres Thema. Dem werden wir gerecht. Denn wir backen den ganzen Tag über frisch. Hergestellt werden unsere Backwaren Tag für Tag und Nacht für Nacht in der Backstube in Keinhausen.',
    stats: {
      daily: 'Täglich Frisch',
      fresh: 'Frische Garantie',
      quality: 'Höchste Qualität',
      promise: 'Unser Versprechen',
    },
    earlyFresh: {
      title: 'Früh Frisch',
      description:
        '"Frühfrisch" sind unsere Backwaren, so wie unsere Gäste diese seit langem kennen und schätzen.',
      features: [
        'Täglich frisch aus der Backstube',
        'Traditionelle Rezepte',
        'Handwerkliche Herstellung',
      ],
    },
    lateFresh: {
      title: 'Spät Frisch',
      description:
        '"Spätfrisch" sind unsere Backwaren, die frisch im Geschäft gebacken werden - passend zu jeder Uhrzeit.',
      features: [
        'Frisch gebacken im Laden',
        'Immer zur richtigen Zeit',
        'Maximale Flexibilität für Genuss',
      ],
    },
    pointFresh: {
      title: 'Punkt Frisch',
      description:
        "Unsere 'punktfrisch' Produkte werden von uns vorgebacken und können zu Hause fertig gebacken werden.",
      features: ['Vorgebacken von Noventa', 'Frisch gebacken zu Hause', 'Genuss zu jeder Zeit'],
      overview: 'Unsere punktfrisch-Brote im Überblick',
      instructions: {
        title: "So einfach geht's:",
        text: 'Ofen vorheizen und bei 220°C (Ober-/Unterhitze) bzw. 200°C (Heißluft) laut Zeitangabe fertig backen. Je nach Ofentyp kann die Backzeit variieren.',
      },
    },
    breads: {
      franzose: {
        name: 'Der Franzose',
        bakingTime: '18 Minuten',
      },
      italiener: {
        name: 'Der Italiener',
        bakingTime: '18 Minuten',
      },
      'rubli-dinkler': {
        name: 'Der Rübli-Dinkler',
        bakingTime: '18 Minuten',
      },
      korn: {
        name: 'Rhöner Korn',
        bakingTime: '23 Minuten',
      },
      kruste: {
        name: 'Rhöner Kruste',
        bakingTime: '23 Minuten',
      },
    },
  },
  en: {
    title: 'DAILY FRESH VARIETY!',
    subtitle: 'Our Promise to You',
    description:
      'Freshness is an increasingly important topic. We meet this challenge by baking fresh throughout the day. Our baked goods are produced day and night in the bakery in Keinhausen.',
    stats: {
      daily: 'Daily Fresh',
      fresh: 'Fresh Guarantee',
      quality: 'Highest Quality',
      promise: 'Our Promise',
    },
    earlyFresh: {
      title: 'Early Fresh',
      description:
        '"Early fresh" are our baked goods, as our guests have known and appreciated them for a long time.',
      features: ['Daily fresh from the bakery', 'Traditional recipes', 'Artisanal production'],
    },
    lateFresh: {
      title: 'Late Fresh',
      description:
        '"Late fresh" are our baked goods that are freshly baked in the store - suitable for any time of day.',
      features: [
        'Freshly baked in store',
        'Always at the right time',
        'Maximum flexibility for enjoyment',
      ],
    },
    pointFresh: {
      title: 'Point Fresh',
      description: "Our 'point fresh' products are pre-baked by us and can be finished at home.",
      features: ['Pre-baked by Noventa', 'Freshly baked at home', 'Enjoyment at any time'],
      overview: 'Overview of our point-fresh breads',
      instructions: {
        title: "It's that simple:",
        text: 'Preheat the oven and finish baking at 220°C (top/bottom heat) or 200°C (convection) according to the time specified. Baking time may vary depending on the oven type.',
      },
    },
    breads: {
      franzose: {
        name: 'The Frenchman',
        bakingTime: '18 minutes',
      },
      italiener: {
        name: 'The Italian',
        bakingTime: '18 minutes',
      },
      'rubli-dinkler': {
        name: 'The Carrot Dinkler',
        bakingTime: '18 minutes',
      },
      korn: {
        name: 'Rhön Grain',
        bakingTime: '23 minutes',
      },
      kruste: {
        name: 'Rhön Crust',
        bakingTime: '23 minutes',
      },
    },
  },
}

const punktfrischBrots = [
  {
    id: 'franzose',
    image: '/images/franzose.jpg',
  },
  {
    id: 'italiener',
    image: '/images/italiener.jpg',
  },
  {
    id: 'rubli-dinkler',
    image: '/images/karotten.jpg',
  },
  {
    id: 'korn',
    image: '/images/korn.jpg',
  },
  {
    id: 'kruste',
    image: '/images/kruste.jpg',
  },
]

export default function FreshnessPromisePage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="mx-auto max-w-6xl">
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl"
          >
            <FaHandshake className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#EE0A24] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#EE0A24]"
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
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
        >
          {[
            {
              number: '24/7',
              label: translations[language].stats.daily,
              icon: <FaClock className="h-6 w-6" />,
            },
            {
              number: '100%',
              label: translations[language].stats.fresh,
              icon: <FaLeaf className="h-6 w-6" />,
            },
            {
              number: 'Premium',
              label: translations[language].stats.quality,
              icon: <FaStar className="h-6 w-6" />,
            },
            {
              number: 'Garantie',
              label: translations[language].stats.promise,
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
              <div className="text-2xl font-bold text-[#EE0A24] md:text-3xl dark:text-[#EE0A24]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] overflow-hidden rounded-3xl shadow-xl transition-all duration-300 md:h-[400px]"
            >
              <Image
                src="/icons/fruhfrisch.png"
                alt={translations[language].earlyFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-white/90 p-8 shadow-xl transition-all duration-300 dark:bg-neutral-800/90"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <FaSun className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].earlyFresh.title}
                </h2>
              </div>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                {translations[language].earlyFresh.description}
              </p>
              <ul className="space-y-3">
                {translations[language].earlyFresh.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                      <FaAward className="h-3 w-3" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 flex flex-col items-center gap-8 md:flex-row-reverse"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] overflow-hidden rounded-3xl shadow-xl transition-all duration-300 md:h-[400px]"
            >
              <Image
                src="/icons/spat-frisch.png"
                alt={translations[language].lateFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-white/90 p-8 shadow-xl transition-all duration-300 dark:bg-neutral-800/90"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <FaMoon className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].lateFresh.title}
                </h2>
              </div>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                {translations[language].lateFresh.description}
              </p>
              <ul className="space-y-3">
                {translations[language].lateFresh.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                      <FaClock className="h-3 w-3" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 flex flex-col items-center gap-8 md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] overflow-hidden rounded-3xl shadow-xl transition-all duration-300 md:h-[400px]"
            >
              <Image
                src="/icons/frisch.png"
                alt={translations[language].pointFresh.title}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-white/90 p-8 shadow-xl transition-all duration-300 dark:bg-neutral-800/90"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                  <FaClock className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {translations[language].pointFresh.title}
                </h2>
              </div>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                {translations[language].pointFresh.description}
              </p>
              <ul className="space-y-3">
                {translations[language].pointFresh.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-white">
                      <FaStar className="h-3 w-3" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
            {translations[language].pointFresh.overview}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {punktfrischBrots.map((brot, index) => (
              <motion.div
                key={brot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group flex flex-col items-center gap-6 rounded-3xl bg-white/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:flex-row dark:bg-neutral-800/90"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={brot.image}
                    alt={translations[language].breads[brot.id].name}
                    width={128}
                    height={128}
                    className="h-32 w-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="mb-2 text-xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                    {translations[language].breads[brot.id].name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Backzeit: {translations[language].breads[brot.id].bakingTime}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 rounded-3xl bg-gradient-to-r from-orange-50 to-red-50 p-8 text-center shadow-xl dark:from-neutral-800 dark:to-neutral-700"
          >
            <h4 className="mb-4 text-2xl font-semibold text-[#EE0A24] dark:text-[#EE0A24]">
              {translations[language].pointFresh.instructions.title}
            </h4>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {translations[language].pointFresh.instructions.text}
            </p>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  )
}
