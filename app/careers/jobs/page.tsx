'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaBriefcase,
  FaClock,
  FaFilter,
  FaHandshake,
  FaHeart,
  FaMapMarkerAlt,
  FaSearch,
  FaStar,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { jobCards, jobsTranslations } from './languages'

export default function JobsPage() {
  const { language } = useLanguageStore()
  const t = jobsTranslations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 px-4 py-12 sm:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#D72638] to-[#EE0A24] text-white shadow-lg">
              <FaBriefcase className="h-10 w-10" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#D72638] md:text-5xl lg:text-6xl dark:text-[#FFA5A5]">
            {t.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl dark:text-gray-300">
            {t.subtitle}
          </p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 rounded-2xl bg-white p-6 shadow-lg md:p-8 dark:bg-neutral-800"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative max-w-md flex-1">
              <FaSearch className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={
                  language === 'de' ? 'Nach Position suchen...' : 'Search by position...'
                }
                className="w-full rounded-xl border border-gray-200 bg-white px-12 py-3 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
              />
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-[#D72638] hover:text-[#D72638] dark:border-gray-600 dark:bg-neutral-700 dark:text-gray-300 dark:hover:border-[#FFA5A5] dark:hover:text-[#FFA5A5]">
                <FaFilter className="h-4 w-4" />
                {language === 'de' ? 'Filter' : 'Filter'}
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-[#D72638] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#B91C3C] dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF8A8A]">
                <FaMapMarkerAlt className="h-4 w-4" />
                {language === 'de' ? 'Standort' : 'Location'}
              </button>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {jobCards.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-neutral-800"
            >
              {}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={job.img}
                  alt={job.title[language]}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#D72638] px-3 py-1 text-xs font-medium text-white">
                      {language === 'de' ? 'Vollzeit' : 'Full-time'}
                    </span>
                    <button className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30">
                      <FaHeart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  {job.title[language]}
                </h3>

                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="h-3 w-3" />
                    <span>{language === 'de' ? 'Frankfurt am Main' : 'Frankfurt am Main'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="h-3 w-3" />
                    <span>{language === 'de' ? 'Vor 2 Tagen' : '2 days ago'}</span>
                  </div>
                </div>

                <p className="mb-4 text-gray-700 dark:text-gray-300">{job.desc[language]}</p>

                {}
                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    language === 'de' ? 'Vollzeit' : 'Full-time',
                    language === 'de' ? 'Festanstellung' : 'Permanent',
                    language === 'de' ? 'Sofort' : 'Immediate',
                  ].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {}
                <Link
                  href="#"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D72638] px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-[#B91C3C] dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF8A8A]"
                >
                  <FaBriefcase className="h-4 w-4" />
                  {t.applyNow}
                  <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-r from-[#D72638] to-[#EE0A24] p-8 text-center text-white shadow-2xl md:p-12 dark:from-[#FFA5A5] dark:to-[#FF8A8A] dark:text-[#232323]"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <FaHandshake className="h-8 w-8" />
            </div>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.initiativeTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">{t.initiativeDesc}</p>
          <Link
            href="/careers/initiativbewerbung"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#D72638] transition-all hover:scale-105 hover:bg-gray-100 dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#2A2A2A]"
          >
            {t.expressApply}
            <FaArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-white p-8 shadow-lg md:p-12 dark:bg-neutral-800"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
            {language === 'de' ? 'Warum bei Noventa arbeiten?' : 'Why work at Noventa?'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaStar className="h-8 w-8" />,
                title: language === 'de' ? 'Attraktive Vergütung' : 'Attractive Compensation',
                desc:
                  language === 'de'
                    ? 'Überdurchschnittliche Gehälter und zahlreiche Zusatzleistungen.'
                    : 'Above-average salaries and numerous additional benefits.',
              },
              {
                icon: <FaHeart className="h-8 w-8" />,
                title: language === 'de' ? 'Familienkultur' : 'Family Culture',
                desc:
                  language === 'de'
                    ? 'Ein herzliches Team und eine unterstützende Arbeitsumgebung.'
                    : 'A warm team and supportive work environment.',
              },
              {
                icon: <FaBriefcase className="h-8 w-8" />,
                title:
                  language === 'de' ? 'Entwicklungsmöglichkeiten' : 'Development Opportunities',
                desc:
                  language === 'de'
                    ? 'Viele Wege für berufliches Wachstum und Weiterbildung.'
                    : 'Many paths for professional growth and training.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
