'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight, FaAward, FaHeart, FaPlus, FaStar, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    stats: {
      members: string
      events: string
      benefits: string
      community: string
    }
    sections: {
      title: string
      content: string
      details: string[]
    }[]
    contact: {
      title: string
      name: string
      email: string
      club: string
      message: string
      submit: string
      success: string
      selectPlaceholder: string
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    stats: {
      members: string
      events: string
      benefits: string
      community: string
    }
    sections: {
      title: string
      content: string
      details: string[]
    }[]
    contact: {
      title: string
      name: string
      email: string
      club: string
      message: string
      submit: string
      success: string
      selectPlaceholder: string
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Clubs & Community',
    subtitle: 'Werden Sie Teil unserer Bäckerei-Community!',
    description:
      'Hier finden Sie alle Informationen zu unseren Clubs, Mitgliedschaften und exklusiven Vorteilen. Entdecken Sie unsere verschiedenen Clubs und Mitgliedschaftsprogramme für unterschiedliche Interessen und Altersgruppen.',
    stats: {
      members: 'Aktive Mitglieder',
      events: 'Jährliche Events',
      benefits: 'Exklusive Vorteile',
      community: 'Community Spirit',
    },
    sections: [
      {
        title: 'Noventa Plus Club',
        content:
          'Werden Sie Teil unseres exklusiven Treueprogramms und genießen Sie besondere Vorteile, Rabatte und frühen Zugang zu saisonalen Produkten. Sammeln Sie Punkte bei jedem Einkauf und lösen Sie diese für köstliche Belohnungen ein.',
        details: [
          'Punkte bei jedem Einkauf',
          'Geburtstags-Specials',
          'Exklusive Mitglieder-Events',
          'Monatlicher Newsletter',
        ],
      },
      {
        title: 'Fitness Baker Club',
        content:
          'Für gesundheitsbewusste Kunden, die aktiv bleiben möchten. Verbinden Sie Ihre Leidenschaft für Fitness mit nahrhaften Backwaren und nehmen Sie an unseren Sportveranstaltungen teil.',
        details: [
          'Ernährungsworkshops',
          'Gruppenfitness-Aktivitäten',
          'Gesunde Rezepte teilen',
          'Sportveranstaltungs-Rabatte',
        ],
      },
      {
        title: 'Kids Baking Club',
        content:
          'Ein lustiger Club für junge Backbegeisterte! Kinder lernen durch praktische Aktivitäten und besondere Events alles über Backen, Ernährung und Lebensmittelwissenschaft.',
        details: [
          'Monatliche Backkurse',
          'Ferienworkshops',
          'Geburtstagsfeier-Optionen',
          'Rezepte zum Mitnehmen',
        ],
      },
    ],
    contact: {
      title: 'Club Kontaktformular',
      name: 'Name*',
      email: 'E-Mail*',
      club: 'Club*',
      message: 'Nachricht*',
      submit: 'Absenden',
      success: 'Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.',
      selectPlaceholder: 'Bitte wählen…',
    },
  },
  en: {
    title: 'Clubs & Community',
    subtitle: 'Become part of our bakery community!',
    description:
      "Here you'll find all information about our clubs, memberships, and exclusive benefits. Discover our various clubs and membership programs for different interests and age groups.",
    stats: {
      members: 'Active Members',
      events: 'Annual Events',
      benefits: 'Exclusive Benefits',
      community: 'Community Spirit',
    },
    sections: [
      {
        title: 'Noventa Plus Club',
        content:
          'Join our exclusive loyalty program and enjoy special benefits, discounts, and early access to seasonal products. Earn points with every purchase and redeem them for delicious rewards.',
        details: [
          'Points on every purchase',
          'Birthday specials',
          'Exclusive member events',
          'Monthly newsletter',
        ],
      },
      {
        title: 'Fitness Baker Club',
        content:
          'For health-conscious customers who love staying active. Combine your passion for fitness with nutritious baked goods and participate in our sports events.',
        details: [
          'Nutrition workshops',
          'Group fitness activities',
          'Healthy recipe sharing',
          'Sports event discounts',
        ],
      },
      {
        title: 'Kids Baking Club',
        content:
          'A fun club for young baking enthusiasts! Children learn about baking, nutrition, and food science through hands-on activities and special events.',
        details: [
          'Monthly baking classes',
          'Holiday workshops',
          'Birthday party options',
          'Take-home recipes',
        ],
      },
    ],
    contact: {
      title: 'Club Contact Form',
      name: 'Name*',
      email: 'Email*',
      club: 'Club*',
      message: 'Message*',
      submit: 'Submit',
      success: "Thank you for your message! We'll get back to you soon.",
      selectPlaceholder: 'Please select…',
    },
  },
}

const clubsSections = [
  {
    title: 'Noventa Plus Club',
    content:
      'Join our exclusive loyalty program and enjoy special benefits, discounts, and early access to seasonal products. Earn points with every purchase and redeem them for delicious rewards.',
    image: '/soft-images/ppc.jpg',
    imagePosition: 'left' as const,
    details: [
      'Points on every purchase',
      'Birthday specials',
      'Exclusive member events',
      'Monthly newsletter',
    ],
    icon: <FaAward className="h-8 w-8" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Fitness Baker Club',
    content:
      'For health-conscious customers who love staying active. Combine your passion for fitness with nutritious baked goods and participate in our sports events.',
    image: '/soft-images/fitness-member.png',
    imagePosition: 'right' as const,
    details: [
      'Nutrition workshops',
      'Group fitness activities',
      'Healthy recipe sharing',
      'Sports event discounts',
    ],
    icon: <FaHeart className="h-8 w-8" />,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Kids Baking Club',
    content:
      'A fun club for young baking enthusiasts! Children learn about baking, nutrition, and food science through hands-on activities and special events.',
    image: '/soft-images/baking-club.jpg',
    imagePosition: 'left' as const,
    details: [
      'Monthly baking classes',
      'Holiday workshops',
      'Birthday party options',
      'Take-home recipes',
    ],
    icon: <FaUsers className="h-8 w-8" />,
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function ClubsPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
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
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl"
          >
            <FaAward className="h-10 w-10" />
          </motion.div>
          <h1
            className="mb-4 text-4xl font-bold text-[#7c3aed] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#a855f7]"
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
              number: '5000+',
              label: translations[language].stats.members,
              icon: <FaUsers className="h-6 w-6" />,
            },
            {
              number: '50+',
              label: translations[language].stats.events,
              icon: <FaStar className="h-6 w-6" />,
            },
            {
              number: '25+',
              label: translations[language].stats.benefits,
              icon: <FaAward className="h-6 w-6" />,
            },
            {
              number: '100%',
              label: translations[language].stats.community,
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
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#7c3aed] md:text-3xl dark:text-[#a855f7]">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <div className="space-y-16">
          {clubsSections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
              className={`flex flex-col items-center gap-8 md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] overflow-hidden rounded-3xl shadow-xl transition-all duration-300 md:h-[400px]"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
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
                    <div
                      className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${section.color} text-white shadow-lg`}
                    >
                      {section.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-[#7c3aed] dark:text-[#a855f7]">
                      {translations[language].sections[index].title}
                    </h2>
                  </div>
                  <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    {translations[language].sections[index].content}
                  </p>
                  <ul className="space-y-3">
                    {translations[language].sections[index].details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.2 + detailIndex * 0.1 }}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <div
                          className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r ${section.color} text-white`}
                        >
                          <FaPlus className="h-3 w-3" />
                        </div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mx-auto my-16 max-w-2xl px-4"
        >
          <div className="rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 p-8 shadow-xl dark:from-neutral-800 dark:to-neutral-700">
            <h2 className="mb-6 text-center text-2xl font-bold text-[#7c3aed] dark:text-[#a855f7]">
              {translations[language].contact.title}
            </h2>
            <ContactClubForm />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function ContactClubForm() {
  const language = useLanguageStore((state) => state.language)
  const [form, setForm] = useState({ name: '', email: '', club: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const clubs = translations[language].sections.map((section) => section.title)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-green-100 p-6 text-center font-semibold text-green-800 shadow-lg dark:bg-green-900 dark:text-green-200"
      >
        {translations[language].contact.success}
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6"
      autoComplete="on"
    >
      <div>
        <label className="mb-2 block font-medium text-[#7c3aed] dark:text-[#a855f7]">
          {translations[language].contact.name}
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 transition-all duration-300 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40 dark:border-gray-700 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium text-[#7c3aed] dark:text-[#a855f7]">
          {translations[language].contact.email}
        </label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 transition-all duration-300 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40 dark:border-gray-700 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <div>
        <label className="mb-2 block font-medium text-[#7c3aed] dark:text-[#a855f7]">
          {translations[language].contact.club}
        </label>
        <select
          name="club"
          value={form.club}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 transition-all duration-300 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40 dark:border-gray-700 dark:bg-neutral-800 dark:text-white"
        >
          <option value="">{translations[language].contact.selectPlaceholder}</option>
          {clubs.map((club) => (
            <option key={club} value={club}>
              {club}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block font-medium text-[#7c3aed] dark:text-[#a855f7]">
          {translations[language].contact.message}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-900 transition-all duration-300 focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/40 dark:border-gray-700 dark:bg-neutral-800 dark:text-white"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-4 w-full rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-purple-500/40 focus:outline-none"
      >
        <span className="flex items-center justify-center gap-2">
          {translations[language].contact.submit}
          <FaArrowRight className="h-4 w-4" />
        </span>
      </motion.button>
    </motion.form>
  )
}
