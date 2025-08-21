'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaAward,
  FaCalendar,
  FaGlobe,
  FaHeart,
  FaNewspaper,
  FaStar,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    stats: {
      articles: string
      awards: string
      years: string
      media: string
    }
    articles: {
      [key: string]: {
        title: string
        summary: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    stats: {
      articles: string
      awards: string
      years: string
      media: string
    }
    articles: {
      [key: string]: {
        title: string
        summary: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Presse & Medien',
    subtitle: 'Neuigkeiten, Auszeichnungen und Medienberichte',
    description:
      'Entdecken Sie die neuesten Nachrichten über Noventa, unsere Auszeichnungen und Medienberichte. Von lokalen Zeitungen bis zu nationalen Publikationen – hier finden Sie alles über unsere Bäckerei.',
    stats: {
      articles: 'Artikel',
      awards: 'Auszeichnungen',
      years: 'Jahre',
      media: 'Medien',
    },
    articles: {
      'filiale-frankfurt': {
        title: 'Neue Filiale in Frankfurt eröffnet',
        summary:
          'Im März 2024 haben wir unsere neueste Filiale in Frankfurt eröffnet. Modernes Ambiente, nachhaltige Materialien und ein erweitertes Sortiment erwarten unsere Kundschaft.',
      },
      'gin-aus-brot': {
        title: 'Gin aus Brot – Nachhaltig & Innovativ',
        summary:
          'Die Bäckerei Noventa und die Schlitzer Destillerie präsentieren einen einzigartigen Gin, der aus unserem Roggenbrot "der Wilhelm" hergestellt wird.',
      },
      'maximilian-noventa': {
        title: 'Maximilian Noventa – Neuer Bäckermeister',
        summary:
          'Mit dem erfolgreichen Abschluss seiner Meisterprüfung setzt Maximilian Noventa die Familientradition fort und bringt frischen Wind in unsere Backstube.',
      },
      nachhaltigkeitspreis: {
        title: 'Nachhaltigkeitspreis 2024 für Noventa',
        summary:
          'Für unser Engagement in Sachen Umwelt und regionale Zutaten wurden wir mit dem Nachhaltigkeitspreis 2024 ausgezeichnet.',
      },
      'servicefreundlichste-baeckerei': {
        title: 'Deutschlands servicefreundlichste Bäckerei',
        summary:
          'Wir sind stolz darauf, als Deutschlands servicefreundlichste Bäckerei ausgezeichnet worden zu sein.',
      },
      traditionsstollen: {
        title: 'Traditionsstollen – Ein Stück Weihnachten',
        summary:
          'Unser Traditionsstollen ist ein Stück Weihnachten und wird nach traditionellen Rezepten hergestellt.',
      },
    },
  },
  en: {
    title: 'Press & Media',
    subtitle: 'News, Awards and Media Coverage',
    description:
      'Discover the latest news about Noventa, our awards and media coverage. From local newspapers to national publications – find everything about our bakery here.',
    stats: {
      articles: 'Articles',
      awards: 'Awards',
      years: 'Years',
      media: 'Media',
    },
    articles: {
      'filiale-frankfurt': {
        title: 'New Branch Opens in Frankfurt',
        summary:
          'In March 2024, we opened our newest branch in Frankfurt. Modern ambiance, sustainable materials, and an expanded product range await our customers.',
      },
      'gin-aus-brot': {
        title: 'Bread Gin – Sustainable & Innovative',
        summary:
          'Noventa Bakery and Schlitzer Distillery present a unique gin made from our rye bread "der Wilhelm".',
      },
      'maximilian-noventa': {
        title: 'Maximilian Noventa – New Master Baker',
        summary:
          "With the successful completion of his master's examination, Maximilian Noventa continues the family tradition and brings fresh ideas to our bakery.",
      },
      nachhaltigkeitspreis: {
        title: 'Sustainability Award 2024 for Noventa',
        summary:
          'For our commitment to the environment and regional ingredients, we were awarded the Sustainability Award 2024.',
      },
      'servicefreundlichste-baeckerei': {
        title: "Germany's Most Service-Friendly Bakery",
        summary: "We are proud to have been awarded as Germany's most service-friendly bakery.",
      },
      traditionsstollen: {
        title: 'Traditional Stollen – A Piece of Christmas',
        summary:
          'Our traditional stollen is a piece of Christmas and is made according to traditional recipes.',
      },
    },
  },
}

const pressArticles = [
  {
    id: 'filiale-frankfurt',
    image: '/images/AATA13607_1360_768_1024.jpg',
    date: '2024-03-15',
    category: 'Expansion',
    icon: <FaGlobe className="h-6 w-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'gin-aus-brot',
    image: '/images/gin-aus-brot.jpg',
    date: '2024-02-20',
    category: 'Innovation',
    icon: <FaStar className="h-6 w-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'maximilian-noventa',
    image: '/images/Maximilian_Noventa_ist_neuer_Baeckermeister.jpg',
    date: '2024-01-10',
    category: 'Team',
    icon: <FaUsers className="h-6 w-6" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'nachhaltigkeitspreis',
    image: '/images/Nachhaltigkeit.webp',
    date: '2023-12-05',
    category: 'Award',
    icon: <FaAward className="h-6 w-6" />,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'servicefreundlichste-baeckerei',
    image: '/soft-images/about-baker.jpg',
    date: '2023-11-20',
    category: 'Award',
    icon: <FaHeart className="h-6 w-6" />,
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'traditionsstollen',
    image: '/soft-images/stollen3.jpg',
    date: '2023-12-01',
    category: 'Tradition',
    icon: <FaCalendar className="h-6 w-6" />,
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function PressPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl"
          >
            <FaNewspaper className="h-10 w-10" />
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
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
        >
          {[
            {
              number: '50+',
              label: translations[language].stats.articles,
              icon: <FaNewspaper className="h-6 w-6" />,
            },
            {
              number: '15+',
              label: translations[language].stats.awards,
              icon: <FaAward className="h-6 w-6" />,
            },
            {
              number: '97',
              label: translations[language].stats.years,
              icon: <FaCalendar className="h-6 w-6" />,
            },
            {
              number: '25+',
              label: translations[language].stats.media,
              icon: <FaGlobe className="h-6 w-6" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group rounded-2xl bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#4f46e5] md:text-3xl dark:text-[#818cf8]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {pressArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group overflow-hidden rounded-3xl bg-white/90 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:bg-neutral-800/90"
            >
              <Link href={`/about/press/${article.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={translations[language].articles[article.id].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${article.color} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                    >
                      {article.icon}
                      {article.category}
                    </div>
                  </div>

                  {}
                  <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    {new Date(article.date).toLocaleDateString(
                      language === 'de' ? 'de-DE' : 'en-US',
                      {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      },
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#4f46e5] transition-colors duration-200 dark:text-[#818cf8]">
                    {translations[language].articles[article.id].title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {translations[language].articles[article.id].summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {language === 'de' ? 'Weiterlesen' : 'Read more'}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white transition-transform duration-300 group-hover:scale-110">
                      <FaArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-center text-white shadow-2xl"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
            <FaNewspaper className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            {language === 'de' ? 'Bleiben Sie auf dem Laufenden' : 'Stay Updated'}
          </h3>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            {language === 'de'
              ? 'Folgen Sie uns für die neuesten Nachrichten, Auszeichnungen und Entwicklungen bei Noventa.'
              : 'Follow us for the latest news, awards, and developments at Noventa.'}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
