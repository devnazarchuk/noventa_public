'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import {
  FaAward,
  FaCalendarAlt,
  FaClock,
  FaHeart,
  FaIndustry,
  FaMapMarkerAlt,
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
      years: string
      generations: string
      stores: string
      employees: string
    }
    events: {
      [key: string]: {
        title: string
        description: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    stats: {
      years: string
      generations: string
      stores: string
      employees: string
    }
    events: {
      [key: string]: {
        title: string
        description: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Unsere Geschichte',
    subtitle: 'Eine Reise durch die Zeit',
    description:
      'Seit 1928 schreiben wir Geschichte - von bescheidenen Anfängen bis zum modernen Familienunternehmen. Entdecken Sie die Meilensteine unserer Entwicklung.',
    stats: {
      years: 'Jahre Tradition',
      generations: 'Generationen',
      stores: 'Filialen',
      employees: 'Mitarbeiter',
    },
    events: {
      '1928': {
        title: 'Gründung des heutigen Unternehmens',
        description:
          'Wilhelm Noventa legte den Grundstein des heutigen Betriebs in Keinhausen, nachdem er als zweiter Sohn die elterliche Bäckerei in Hünfeld nicht übernehmen konnte.',
      },
      '1964': {
        title: 'der Generationenwechsel',
        description:
          'Josef und Sophie Noventa werden zu den neuen Eigentümern der Bäckerei und verlegen die Produktionsstätte an einen anderen Ort. Zeitgleich wird erstmals ein Großmarkt in Ganzweg beliefert.',
      },
      '1994': {
        title: 'eine neue Backstube',
        description:
          '1994 wird eine neue Backstube mit zeitgemäßer Einrichtung gebaut, so dass handwerkliche Fertigkeiten und das Wissen vieler Generationen mit Hilfe modernster Backgeräte optimal umgesetzt werden können.',
      },
      '1996': {
        title: 'Nächster Generationenwechsel',
        description:
          'Gründer-Enkel Bernd Noventa und Manfred Mustername übernehmen die Geschäftsleitung. Schon seit ein paar Jahren verfolgen die beiden eine neue Strategie und bauen für Noventa ein Fachgeschäfts-Netz auf.',
      },
      '2006': {
        title: 'der Fitnessbäcker wird geboren',
        description:
          'Seit 2006 veranstaltet Noventa verschiedene Sportkurse und Trainings. Mit Sascha Wingenfeld und seinem Trainerteam ist stets ein Training garantiert, das sowohl Anfänger als auch ambitioniertere Athleten anspricht.',
      },
      '2011': {
        title: 'ein neues Konzept: Pasta Boys',
        description:
          'Wasser und Mehl: Das sind nicht nur bäckertypische Zutaten, sondern auch die von Nudeln. Was lag also näher als mit der Agentur schulzundtebbe ein Nudel-Konzept zu entwickeln.',
      },
      '2014': {
        title: 'Umbau, Ausbau und zwei große Erfolge',
        description:
          'In der Produktion gibt es eine neue Ofenanlage. Auch Marketing und soziales Engagement beeindrucken die Außenwelt. Sichtbare Beweise dafür sind "Der große Preis des Mittelstands" der Oskar-Patzelt-Stiftung.',
      },
      '2016': {
        title: 'Neue Konzepte, ein Preis und Next Generation',
        description:
          'Im Frühjahr 2016 eröffnet Noventa in Bad Hersfeld sein erstes Fachgeschäft mit dem italienischen Konzept pappiamo. Große Ehre: Für die rasante Entwicklung wird die Bäckerei mit dem Titel Hessen Champion ausgezeichnet.',
      },
      '2017': {
        title: 'Das 100. Fachgeschäft wird eröffnet',
        description:
          'Kurz vor Ostern 2017 durchbricht Noventa eine kleine Schallmauer: In Lauterbach eröffnet die Bäckerei ihr 100. Fachgeschäft.',
      },
      '2018': {
        title: 'Noventa Next Generation',
        description: 'Maximilian Noventa macht eine Ausbildung zum Bäcker.',
      },
      '2020': {
        title: 'Brot-Sommelier in den Reihen',
        description:
          'Corona prägt das Jahr – aber es gibt auch gute Nachrichten. Mit Vincent Noventa setzt auch der zweite Sohn von Bernd Noventa die Familientradition fort und lernt den Beruf des Bäckers.',
      },
      '2021': {
        title: 'Noventa Next Generation',
        description: 'Laura Mustername wird Verkaufsleiterin und Mitglied der Geschäftsleitung.',
      },
      '2022': {
        title: 'Noventa Backhaus',
        description:
          'In Etwashausen bei Musterland erfolgt mit dem Spatenstich der offizielle Startschuss der Bauarbeiten für das neue noventas Backhaus.',
      },
      '2023': {
        title: 'Noventa Next Generation und Deutschlands servicefreundlichste Bäckerei',
        description:
          "Mit Luca-Antonia Noventa startet ein weiteres Mitglied der Noventa'schen Familie ihre Karriere im Backhandwerk und beginnt die Ausbildung zur Konditorin.",
      },
      '2024': {
        title: 'Noventa Next Generation',
        description:
          'Die Familientradition wird weiter fortgesetzt: Während Max Mustername ins Familienunternehmen als Referent der Geschäftsleitung eintritt, legt Maximilian Noventa erfolgreich seine Meisterprüfung ab.',
      },
      '2025': {
        title: 'Noventa Backhaus',
        description:
          'Im März 2025 schlägt die Bäckerei Noventa ein neues Kapitel in ihrer fast 100-jährigen Geschichte auf: Nach 97 Jahren am Standort Keinhausen zieht das Unternehmen in das neue Noventa Backhaus nach Musterland.',
      },
    },
  },
  en: {
    title: 'Our History',
    subtitle: 'A Journey Through Time',
    description:
      'Since 1928, we have been writing history - from humble beginnings to a modern family business. Discover the milestones of our development.',
    stats: {
      years: 'Years of Tradition',
      generations: 'Generations',
      stores: 'Stores',
      employees: 'Employees',
    },
    events: {
      '1928': {
        title: "Foundation of Today's Company",
        description:
          "Wilhelm Noventa laid the foundation of today's business in Keinhausen, after he could not take over the parental bakery in Hünfeld as the second son.",
      },
      '1964': {
        title: 'The Generation Change',
        description:
          'Josef and Sophie Noventa become the new owners of the bakery and relocate the production facility. At the same time, a wholesale market in Ganzweg is supplied for the first time.',
      },
      '1994': {
        title: 'A New Bakery',
        description:
          'In 1994, a new bakery with contemporary equipment is built, allowing artisanal skills and the knowledge of many generations to be optimally implemented with the help of state-of-the-art baking equipment.',
      },
      '1996': {
        title: 'Next Generation Change',
        description:
          "Founder's grandson Bernd Noventa and Manfred Mustername take over the management. For several years, they have been pursuing a new strategy and building a specialty store network for Noventa.",
      },
      '2006': {
        title: 'The Fitness Baker is Born',
        description:
          'Since 2006, Noventa has been organizing various sports courses and training sessions. With Sascha Wingenfeld and his trainer team, a training is guaranteed that appeals to both beginners and more ambitious athletes.',
      },
      '2011': {
        title: 'A New Concept: Pasta Boys',
        description:
          'Water and flour: These are not only typical bakery ingredients but also those of pasta. What could be more natural than developing a pasta concept with the agency schulzundtebbe.',
      },
      '2014': {
        title: 'Renovation, Expansion and Two Major Successes',
        description:
          'In production, there is a new oven system. Marketing and social commitment also impress the outside world. Visible evidence of this is "The Great Prize of Medium-Sized Businesses" from the Oskar-Patzelt Foundation.',
      },
      '2016': {
        title: 'New Concepts, an Award and Next Generation',
        description:
          'In spring 2016, Noventa opens its first specialty store with the Italian concept pappiamo in Bad Hersfeld. Great honor: For the rapid development, the bakery is awarded the title Hessen Champion.',
      },
      '2017': {
        title: 'The 100th Specialty Store Opens',
        description:
          'Just before Easter 2017, Noventa breaks a small sound barrier: In Lauterbach, the bakery opens its 100th specialty store.',
      },
      '2018': {
        title: 'Noventa Next Generation',
        description: 'Maximilian Noventa begins training as a baker.',
      },
      '2020': {
        title: 'Bread Sommelier in the Ranks',
        description:
          "Corona shapes the year – but there is also good news. With Vincent Noventa, the second son of Bernd Noventa also continues the family tradition and learns the baker's trade.",
      },
      '2021': {
        title: 'Noventa Next Generation',
        description: 'Laura Mustername becomes sales manager and member of the management board.',
      },
      '2022': {
        title: 'Noventa Backhaus',
        description:
          'In Etwashausen near Musterland, the groundbreaking ceremony marks the official start of construction for the new noventas Backhaus.',
      },
      '2023': {
        title: "Noventa Next Generation and Germany's Most Service-Friendly Bakery",
        description:
          'With Luca-Antonia Noventa, another member of the Noventa family starts her career in the baking trade and begins training as a confectioner.',
      },
      '2024': {
        title: 'Noventa Next Generation',
        description:
          "The family tradition continues: While Max Mustername joins the family business as a management consultant, Maximilian Noventa successfully completes his master's examination.",
      },
      '2025': {
        title: 'Noventa Backhaus',
        description:
          'In March 2025, Noventa Bakery opens a new chapter in its almost 100-year history: After 97 years at the Keinhausen location, the company moves to the new Noventa Backhaus in Musterland.',
      },
    },
  },
}

interface TimelineEvent {
  year: string
  title: string
  description: string
  image?: string
  category?: 'foundation' | 'expansion' | 'innovation' | 'generation' | 'milestone'
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1928',
    title: 'Gründung des heutigen Unternehmens',
    description:
      'Wilhelm Noventa legte den Grundstein des heutigen Betriebs in Keinhausen, nachdem er als zweiter Sohn die elterliche Bäckerei in Hünfeld nicht übernehmen konnte.',
    image: '/soft-images/about-baker.jpg',
    category: 'foundation',
  },
  {
    year: '1964',
    title: 'der Generationenwechsel',
    description:
      'Josef und Sophie Noventa werden zu den neuen Eigentümern der Bäckerei und verlegen die Produktionsstätte an einen anderen Ort. Zeitgleich wird erstmals ein Großmarkt in Ganzweg beliefert.',
    category: 'generation',
  },
  {
    year: '1994',
    title: 'eine neue Backstube',
    description:
      '1994 wird eine neue Backstube mit zeitgemäßer Einrichtung gebaut, so dass handwerkliche Fertigkeiten und das Wissen vieler Generationen mit Hilfe modernster Backgeräte optimal umgesetzt werden können.',
    image: '/soft-images/products-bread-display.jpg',
    category: 'expansion',
  },
  {
    year: '1996',
    title: 'Nächster Generationenwechsel',
    description:
      'Gründer-Enkel Bernd Noventa und Manfred Mustername übernehmen die Geschäftsleitung. Schon seit ein paar Jahren verfolgen die beiden eine neue Strategie und bauen für Noventa ein Fachgeschäfts-Netz auf.',
    category: 'generation',
  },
  {
    year: '2006',
    title: 'der Fitnessbäcker wird geboren',
    description:
      'Seit 2006 veranstaltet Noventa verschiedene Sportkurse und Trainings. Mit Sascha Wingenfeld und seinem Trainerteam ist stets ein Training garantiert, das sowohl Anfänger als auch ambitioniertere Athleten anspricht.',
    image: '/soft-images/fitness-member.jpg',
    category: 'innovation',
  },
  {
    year: '2011',
    title: 'ein neues Konzept: Pasta Boys',
    description:
      'Wasser und Mehl: Das sind nicht nur bäckertypische Zutaten, sondern auch die von Nudeln. Was lag also näher als mit der Agentur schulzundtebbe ein Nudel-Konzept zu entwickeln.',
    category: 'innovation',
  },
  {
    year: '2014',
    title: 'Umbau, Ausbau und zwei große Erfolge',
    description:
      'In der Produktion gibt es eine neue Ofenanlage. Auch Marketing und soziales Engagement beeindrucken die Außenwelt. Sichtbare Beweise dafür sind "Der große Preis des Mittelstands" der Oskar-Patzelt-Stiftung.',
    category: 'milestone',
  },
  {
    year: '2016',
    title: 'Neue Konzepte, ein Preis und Next Generation',
    description:
      'Im Frühjahr 2016 eröffnet Noventa in Bad Hersfeld sein erstes Fachgeschäft mit dem italienischen Konzept pappiamo. Große Ehre: Für die rasante Entwicklung wird die Bäckerei mit dem Titel Hessen Champion ausgezeichnet.',
    category: 'milestone',
  },
  {
    year: '2017',
    title: 'Das 100. Fachgeschäft wird eröffnet',
    description:
      'Kurz vor Ostern 2017 durchbricht Noventa eine kleine Schallmauer: In Lauterbach eröffnet die Bäckerei ihr 100. Fachgeschäft.',
    category: 'milestone',
  },
  {
    year: '2018',
    title: 'Noventa Next Generation',
    description: 'Maximilian Noventa macht eine Ausbildung zum Bäcker.',
    category: 'generation',
  },
  {
    year: '2020',
    title: 'Brot-Sommelier in den Reihen',
    description:
      'Corona prägt das Jahr – aber es gibt auch gute Nachrichten. Mit Vincent Noventa setzt auch der zweite Sohn von Bernd Noventa die Familientradition fort und lernt den Beruf des Bäckers.',
    category: 'generation',
  },
  {
    year: '2021',
    title: 'Noventa Next Generation',
    description: 'Laura Mustername wird Verkaufsleiterin und Mitglied der Geschäftsleitung.',
    category: 'generation',
  },
  {
    year: '2022',
    title: 'Noventa Backhaus',
    description:
      'In Etwashausen bei Musterland erfolgt mit dem Spatenstich der offizielle Startschuss der Bauarbeiten für das neue noventas Backhaus.',
    image: '/images/AATA13607_1360_768_1024.jpg',
    category: 'expansion',
  },
  {
    year: '2023',
    title: 'Noventa Next Generation und Deutschlands servicefreundlichste Bäckerei',
    description:
      "Mit Luca-Antonia Noventa startet ein weiteres Mitglied der Noventa'schen Familie ihre Karriere im Backhandwerk und beginnt die Ausbildung zur Konditorin.",
    category: 'milestone',
  },
  {
    year: '2024',
    title: 'Noventa Next Generation',
    description:
      'Die Familientradition wird weiter fortgesetzt: Während Max Mustername ins Familienunternehmen als Referent der Geschäftsleitung eintritt, legt Maximilian Noventa erfolgreich seine Meisterprüfung ab.',
    category: 'generation',
  },
  {
    year: '2025',
    title: 'Noventa Backhaus',
    description:
      'Im März 2025 schlägt die Bäckerei Noventa ein neues Kapitel in ihrer fast 100-jährigen Geschichte auf: Nach 97 Jahren am Standort Keinhausen zieht das Unternehmen in das neue Noventa Backhaus nach Musterland.',
    category: 'expansion',
  },
]

const getCategoryColor = (category?: string) => {
  switch (category) {
    case 'foundation':
      return 'from-blue-500 to-indigo-600'
    case 'expansion':
      return 'from-green-500 to-emerald-600'
    case 'innovation':
      return 'from-purple-500 to-violet-600'
    case 'generation':
      return 'from-orange-500 to-red-600'
    case 'milestone':
      return 'from-yellow-500 to-amber-600'
    default:
      return 'from-orange-500 to-red-600'
  }
}

const getCategoryIcon = (category?: string) => {
  switch (category) {
    case 'foundation':
      return <FaIndustry className="h-4 w-4" />
    case 'expansion':
      return <FaMapMarkerAlt className="h-4 w-4" />
    case 'innovation':
      return <FaStar className="h-4 w-4" />
    case 'generation':
      return <FaUsers className="h-4 w-4" />
    case 'milestone':
      return <FaAward className="h-4 w-4" />
    default:
      return <FaCalendarAlt className="h-4 w-4" />
  }
}

const TimelineCard = ({ event, index }: { event: TimelineEvent; index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group hover:shadow-3xl relative flex w-full max-w-4xl flex-col gap-6 rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] md:p-10 dark:bg-neutral-800/95"
    >
      {}
      <div className="absolute -top-3 left-8 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${getCategoryColor(event.category)} px-4 py-2 text-xs font-semibold text-white shadow-lg`}
        >
          {getCategoryIcon(event.category)}
          <span className="capitalize">{event.category}</span>
        </motion.div>
      </div>

      <div className="flex flex-col flex-wrap gap-4 md:flex-row md:items-center md:gap-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${getCategoryColor(event.category)} text-2xl font-bold text-white shadow-xl transition-all duration-300 md:h-24 md:w-24 md:text-3xl`}
        >
          {event.year}
        </motion.div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#EE0A24] transition-colors duration-200 md:text-3xl dark:text-[#EE0A24]">
            {translations[language].events[event.year].title}
          </h3>
        </div>
      </div>

      {event.image && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-56 w-full overflow-hidden rounded-3xl md:h-64"
        >
          <Image
            src={event.image}
            alt={translations[language].events[event.year].title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

          {}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur-sm"
          >
            <FaCalendarAlt className="h-4 w-4 text-white" />
          </motion.div>
        </motion.div>
      )}

      <motion.p
        className="text-lg text-gray-700 transition-colors duration-200 md:text-xl dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 + index * 0.1 }}
      >
        {translations[language].events[event.year].description}
      </motion.p>

      {}
      <div className="absolute -right-2 -bottom-2 h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-red-100 opacity-20 dark:from-orange-900/20 dark:to-red-900/20" />
      <div className="absolute -top-2 -left-2 h-12 w-12 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 opacity-20 dark:from-yellow-900/20 dark:to-amber-900/20" />
    </motion.div>
  )
}

const TimelineDot = ({ isActive, category }: { isActive: boolean; category?: string }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`absolute top-8 left-0 h-10 w-10 -translate-x-1/2 rounded-full border-4 transition-all duration-300 md:left-1/2 md:h-8 md:w-8 md:-translate-x-1/2 ${
        isActive
          ? `border-[#EE0A24] bg-white shadow-[0_0_25px_rgba(238,10,36,0.8)] dark:border-[#EE0A24] dark:bg-neutral-800`
          : `border-[#EE0A24] bg-white dark:border-[#EE0A24] dark:bg-neutral-800`
      }`}
    >
      <div
        className={`absolute inset-1 rounded-full bg-gradient-to-r ${getCategoryColor(category)} opacity-60`}
      />
    </motion.div>
  )
}

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const language = useLanguageStore((state) => state.language)

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 p-4 transition-colors duration-200 md:p-8 lg:p-12 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
      ref={containerRef}
    >
      {}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 text-4xl opacity-20"
      >
        🥖
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-16 text-3xl opacity-25"
      >
        🧁
      </motion.div>

      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-80 left-20 text-2xl opacity-30"
      >
        🥐
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-60 right-8 text-3xl opacity-20"
      >
        🍞
      </motion.div>

      <motion.div
        animate={{ y: [0, -22, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-96 left-16 text-2xl opacity-25"
      >
        🥨
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-32 left-1/4 text-3xl opacity-20"
      >
        🥯
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        className="absolute top-72 right-1/4 text-2xl opacity-15"
      >
        🎂
      </motion.div>

      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute top-48 left-1/3 text-3xl opacity-25"
      >
        🍰
      </motion.div>

      {}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 right-32 h-4 w-4 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-30"
      />

      <motion.div
        animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-56 left-12 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 opacity-40"
      />

      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-88 right-24 h-5 w-5 rounded-full bg-gradient-to-r from-red-300 to-pink-300 opacity-25"
      />

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, -2, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-40 left-1/2 h-3 w-3 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-35"
      />

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        className="absolute top-64 right-16 h-4 w-4 rounded-full bg-gradient-to-r from-amber-300 to-orange-300 opacity-30"
      />

      <motion.div
        animate={{ y: [0, -9, 0], x: [0, -4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute top-96 left-1/3 h-2 w-2 rounded-full bg-gradient-to-r from-red-200 to-orange-200 opacity-45"
      />

      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 3, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
        className="absolute top-32 right-1/3 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-35"
      />

      <motion.div
        animate={{ y: [0, -14, 0], x: [0, -5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute top-80 left-1/4 h-4 w-4 rounded-full bg-gradient-to-r from-orange-200 to-red-200 opacity-25"
      />

      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 7, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-72 right-1/2 h-5 w-5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-20"
      />

      <motion.div
        animate={{ y: [0, -11, 0], x: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        className="absolute top-48 left-1/5 h-3 w-3 rounded-full bg-gradient-to-r from-red-200 to-pink-200 opacity-40"
      />

      <motion.div
        animate={{ y: [0, -16, 0], x: [0, 4, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.9 }}
        className="absolute top-64 left-1/2 h-4 w-4 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 opacity-30"
      />
      <div className="container mx-auto px-2 md:px-4">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl"
          >
            <FaClock className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-6 text-5xl font-bold text-[#EE0A24] transition-colors duration-200 md:text-6xl lg:text-7xl dark:text-[#EE0A24]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {translations[language].title}
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-gray-600 transition-colors duration-200 md:text-3xl dark:text-gray-300">
            {translations[language].subtitle}
          </h2>
          <p className="mx-auto max-w-4xl text-lg text-gray-700 transition-colors duration-200 md:text-xl dark:text-gray-300">
            {translations[language].description}
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
        >
          {[
            {
              number: '97',
              label: translations[language].stats.years,
              icon: <FaClock className="h-6 w-6" />,
            },
            {
              number: '7',
              label: translations[language].stats.generations,
              icon: <FaUsers className="h-6 w-6" />,
            },
            {
              number: '160+',
              label: translations[language].stats.stores,
              icon: <FaAward className="h-6 w-6" />,
            },
            {
              number: '1900+',
              label: translations[language].stats.employees,
              icon: <FaHeart className="h-6 w-6" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group rounded-3xl bg-white/90 p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl dark:bg-neutral-800/90"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-[#EE0A24] md:text-5xl dark:text-[#EE0A24]">
                {stat.number}
              </div>
              <div className="text-base text-gray-600 md:text-lg dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <div className="relative mx-auto max-w-7xl">
          {}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-2 -translate-x-1/2 bg-gradient-to-b from-orange-500 via-red-500 to-amber-500 transition-colors duration-200 md:left-1/2 md:-translate-x-1/2"
          />

          {}
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-32 left-8 text-2xl opacity-20 md:left-16"
          >
            ⏰
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-64 right-12 text-xl opacity-25 md:right-20"
          >
            🏆
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-96 left-10 text-2xl opacity-15 md:left-24"
          >
            🎯
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-48 right-8 text-xl opacity-20 md:right-16"
          >
            🌟
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-80 left-12 text-2xl opacity-25 md:left-20"
          >
            💫
          </motion.div>

          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-56 right-10 text-xl opacity-15 md:right-24"
          >
            ✨
          </motion.div>

          <motion.div
            animate={{ y: [0, -11, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            className="absolute top-72 left-8 text-2xl opacity-20 md:left-16"
          >
            🎪
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="absolute top-88 right-8 text-xl opacity-25 md:right-20"
          >
            🎨
          </motion.div>

          {}
          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-40 left-4 h-2 w-2 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-40 md:left-8"
          />

          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-72 right-6 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 opacity-35 md:right-12"
          />

          <motion.div
            animate={{ y: [0, -5, 0], x: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-104 left-6 h-2 w-2 rounded-full bg-gradient-to-r from-red-300 to-pink-300 opacity-45 md:left-12"
          />

          <motion.div
            animate={{ y: [0, -10, 0], x: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-56 left-4 h-3 w-3 rounded-full bg-gradient-to-r from-amber-300 to-orange-300 opacity-30 md:left-8"
          />

          <motion.div
            animate={{ y: [0, -7, 0], x: [0, 3, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
            className="absolute top-88 right-4 h-2 w-2 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-40 md:right-8"
          />

          <motion.div
            animate={{ y: [0, -9, 0], x: [0, -4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-64 left-6 h-3 w-3 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-35 md:left-12"
          />

          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
            className="absolute top-96 right-6 h-2 w-2 rounded-full bg-gradient-to-r from-red-200 to-orange-200 opacity-25 md:right-12"
          />

          <motion.div
            animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-48 left-4 h-3 w-3 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-30 md:left-8"
          />

          {}
          <div className="space-y-16 md:space-y-20">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <TimelineDot isActive={false} category={event.category} />

                {}
                <div
                  className={`w-full max-w-[calc(100%-2rem)] md:max-w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } ml-8 md:ml-0`}
                >
                  <TimelineCard event={event} index={index} />
                </div>

                {}
                {index < timelineEvents.length - 1 && (
                  <>
                    {}
                    <motion.div
                      animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                      className="absolute top-1/2 left-0 -translate-y-1/2 text-2xl opacity-20 md:left-1/2 md:-translate-x-1/2 md:text-3xl"
                    >
                      {index % 4 === 0 && '🥖'}
                      {index % 4 === 1 && '🧁'}
                      {index % 4 === 2 && '🥐'}
                      {index % 4 === 3 && '🍞'}
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3 + 1,
                      }}
                      className="absolute top-1/3 left-0 text-xl opacity-25 md:left-1/2 md:-translate-x-1/2 md:text-2xl"
                    >
                      {index % 3 === 0 && '⭐'}
                      {index % 3 === 1 && '💫'}
                      {index % 3 === 2 && '✨'}
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3 + 2,
                      }}
                      className="absolute top-2/3 left-0 text-xl opacity-20 md:left-1/2 md:-translate-x-1/2 md:text-2xl"
                    >
                      {index % 3 === 0 && '🎯'}
                      {index % 3 === 1 && '🌟'}
                      {index % 3 === 2 && '🎪'}
                    </motion.div>

                    {}
                    <motion.div
                      animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      }}
                      className="absolute top-1/4 left-0 h-3 w-3 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-40 md:left-1/2 md:-translate-x-1/2"
                    />

                    <motion.div
                      animate={{ y: [0, -10, 0], x: [0, -2, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2 + 0.5,
                      }}
                      className="absolute top-3/4 left-0 h-2 w-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 opacity-35 md:left-1/2 md:-translate-x-1/2"
                    />

                    <motion.div
                      animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2 + 1,
                      }}
                      className="absolute top-1/2 left-1/3 hidden h-3 w-3 rounded-full bg-gradient-to-r from-red-300 to-pink-300 opacity-45 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -12, 0], x: [0, -3, 0] }}
                      transition={{
                        duration: 4.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2 + 1.5,
                      }}
                      className="absolute top-1/2 right-1/3 hidden h-2 w-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-300 opacity-30 md:block"
                    />

                    {}
                    <motion.div
                      animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.4,
                      }}
                      className="absolute top-1/6 left-1/2 hidden -translate-x-1/2 text-lg opacity-15 md:block md:text-xl"
                    >
                      {index % 5 === 0 && '🥨'}
                      {index % 5 === 1 && '🥯'}
                      {index % 5 === 2 && '🎂'}
                      {index % 5 === 3 && '🍰'}
                      {index % 5 === 4 && '⏰'}
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -14, 0], rotate: [0, -7, 0] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.4 + 1,
                      }}
                      className="absolute top-5/6 left-1/2 hidden -translate-x-1/2 text-lg opacity-20 md:block md:text-xl"
                    >
                      {index % 4 === 0 && '🏆'}
                      {index % 4 === 1 && '🎨'}
                      {index % 4 === 2 && '🚀'}
                      {index % 4 === 3 && '💎'}
                    </motion.div>

                    {}
                    <motion.div
                      animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1,
                      }}
                      className="absolute top-1/3 left-1/3 hidden h-2 w-2 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-40 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -7, 0], x: [0, -2, 0] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1 + 0.3,
                      }}
                      className="absolute top-2/3 right-1/3 hidden h-2 w-2 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-35 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -9, 0], x: [0, 3, 0] }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1 + 0.6,
                      }}
                      className="absolute top-1/2 left-1/4 hidden h-2 w-2 rounded-full bg-gradient-to-r from-red-200 to-orange-200 opacity-30 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.1 + 0.9,
                      }}
                      className="absolute top-1/2 right-1/4 hidden h-2 w-2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-25 md:block"
                    />

                    {}
                    <motion.div
                      animate={{ y: [0, -16, 0], rotate: [0, 12, 0] }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                      className="absolute top-1/4 left-1/3 hidden text-lg opacity-20 md:block md:text-xl"
                    >
                      {index % 6 === 0 && '🎭'}
                      {index % 6 === 1 && '🎪'}
                      {index % 6 === 2 && '🎨'}
                      {index % 6 === 3 && '🎯'}
                      {index % 6 === 4 && '🏅'}
                      {index % 6 === 5 && '🎖️'}
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, -11, 0], rotate: [0, -8, 0] }}
                      transition={{
                        duration: 4.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5 + 1,
                      }}
                      className="absolute top-3/4 right-1/3 hidden text-lg opacity-15 md:block md:text-xl"
                    >
                      {index % 5 === 0 && '💫'}
                      {index % 5 === 1 && '✨'}
                      {index % 5 === 2 && '🌟'}
                      {index % 5 === 3 && '⭐'}
                      {index % 5 === 4 && '🌠'}
                    </motion.div>

                    {}
                    <motion.div
                      animate={{ y: [0, -4, 0], x: [0, 1, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15,
                      }}
                      className="absolute top-1/6 left-1/4 hidden h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-300 to-red-300 opacity-50 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -8, 0], x: [0, -1, 0] }}
                      transition={{
                        duration: 3.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15 + 0.2,
                      }}
                      className="absolute top-5/6 right-1/4 hidden h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-300 to-purple-300 opacity-40 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15 + 0.4,
                      }}
                      className="absolute top-1/3 right-1/4 hidden h-1 w-1 rounded-full bg-gradient-to-r from-green-300 to-emerald-300 opacity-45 md:block"
                    />

                    <motion.div
                      animate={{ y: [0, -10, 0], x: [0, -2, 0] }}
                      transition={{
                        duration: 3.7,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15 + 0.6,
                      }}
                      className="absolute top-2/3 left-1/4 hidden h-1 w-1 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 opacity-35 md:block"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative mt-20 text-center"
        >
          {}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -left-4 text-3xl opacity-30"
          >
            🚀
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-2 -right-4 text-2xl opacity-25"
          >
            ⭐
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-4 -left-6 text-2xl opacity-20"
          >
            🎯
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute -right-6 -bottom-2 text-3xl opacity-30"
          >
            💫
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/2 -left-8 text-xl opacity-25"
          >
            ✨
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-1/2 -right-8 text-xl opacity-20"
          >
            🌟
          </motion.div>

          {}
          <motion.div
            animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -left-2 h-3 w-3 rounded-full bg-gradient-to-r from-orange-300 to-red-300 opacity-40"
          />

          <motion.div
            animate={{ y: [0, -7, 0], x: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-4 -right-2 h-2 w-2 rounded-full bg-gradient-to-r from-yellow-300 to-amber-300 opacity-35"
          />

          <motion.div
            animate={{ y: [0, -4, 0], x: [0, 4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-6 -left-4 h-3 w-3 rounded-full bg-gradient-to-r from-red-300 to-pink-300 opacity-45"
          />

          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -right-4 -bottom-4 h-2 w-2 rounded-full bg-gradient-to-r from-amber-300 to-orange-300 opacity-30"
          />

          <motion.div
            animate={{ y: [0, -6, 0], x: [0, 2, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
            className="absolute top-1/2 -left-6 h-3 w-3 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 opacity-40"
          />

          <motion.div
            animate={{ y: [0, -9, 0], x: [0, -4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute top-1/2 -right-6 h-2 w-2 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-35"
          />

          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white shadow-2xl md:p-12">
            <h3 className="mb-4 text-3xl font-bold md:text-4xl">
              {language === 'de' ? 'Teil unserer Geschichte werden' : 'Become Part of Our Story'}
            </h3>
            <p className="mb-6 text-lg opacity-90 md:text-xl">
              {language === 'de'
                ? 'Entdecken Sie die Möglichkeiten, Teil der Noventa-Familie zu werden.'
                : 'Discover the opportunities to become part of the Noventa family.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#EE0A24] shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {language === 'de' ? 'Karriere entdecken' : 'Discover Careers'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
