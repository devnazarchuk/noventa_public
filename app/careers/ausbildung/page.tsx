'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaBook,
  FaCertificate,
  FaClock,
  FaGraduationCap,
  FaHandshake,
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { ausbildungJobs, ausbildungTranslations } from './languages'

export default function AusbildungPage() {
  const { language } = useLanguageStore()
  const t = ausbildungTranslations[language]

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
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
              <FaGraduationCap className="h-10 w-10" />
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
          className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {ausbildungJobs.map((job, index) => (
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
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                      {language === 'de' ? 'Ausbildung' : 'Training'}
                    </span>
                    <div className="flex items-center gap-1 text-white">
                      <FaStar className="h-3 w-3 text-yellow-400" />
                      <span className="text-xs">4.8</span>
                    </div>
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
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="h-3 w-3" />
                    <span>{language === 'de' ? '3 Jahre' : '3 Years'}</span>
                  </div>
                </div>

                {}
                <div className="mb-4 flex flex-wrap gap-2">
                  {[
                    language === 'de' ? 'Duale Ausbildung' : 'Dual Training',
                    language === 'de' ? 'Vergütung' : 'Compensation',
                    language === 'de' ? 'Übernahme' : 'Employment',
                  ].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
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
                  <FaGraduationCap className="h-4 w-4" />
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
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-white p-8 shadow-lg md:p-12 dark:bg-neutral-800"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
            {language === 'de' ? 'Warum eine Ausbildung bei Noventa?' : 'Why train at Noventa?'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 dark:from-blue-900/20 dark:to-blue-800/20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <FaBook className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? 'Praxisnahe Ausbildung' : 'Practical Training'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'de'
                  ? 'Lerne von erfahrenen Fachkräften und erhalte eine praxisnahe Ausbildung in modernen Produktionsanlagen.'
                  : 'Learn from experienced professionals and receive practical training in modern production facilities.'}
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 dark:from-green-900/20 dark:to-green-800/20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                <FaCertificate className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? 'Karrierechancen' : 'Career Opportunities'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'de'
                  ? 'Nach erfolgreichem Abschluss der Ausbildung bieten wir hervorragende Übernahmechancen und Entwicklungsmöglichkeiten.'
                  : 'After successful completion of training, we offer excellent employment opportunities and development prospects.'}
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 dark:from-purple-900/20 dark:to-purple-800/20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500 text-white">
                <FaUsers className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? 'Team & Kultur' : 'Team & Culture'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'de'
                  ? 'Werde Teil unseres herzlichen Teams und erlebe eine unterstützende Arbeitsumgebung von Anfang an.'
                  : 'Become part of our warm team and experience a supportive work environment from the start.'}
              </p>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center text-white shadow-2xl md:p-12 dark:from-blue-600 dark:to-blue-700"
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {language === 'de'
              ? 'Deine Vorteile während der Ausbildung'
              : 'Your Benefits During Training'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaGraduationCap className="h-6 w-6" />,
                title: language === 'de' ? 'Vergütung' : 'Compensation',
                desc:
                  language === 'de'
                    ? 'Attraktive Ausbildungsvergütung'
                    : 'Attractive training compensation',
              },
              {
                icon: <FaBook className="h-6 w-6" />,
                title: language === 'de' ? 'Berufsschule' : 'Vocational School',
                desc:
                  language === 'de'
                    ? 'Kostenlose Berufsschulausbildung'
                    : 'Free vocational school education',
              },
              {
                icon: <FaCertificate className="h-6 w-6" />,
                title: language === 'de' ? 'Zertifikate' : 'Certificates',
                desc:
                  language === 'de' ? 'Zusätzliche Qualifikationen' : 'Additional qualifications',
              },
              {
                icon: <FaUsers className="h-6 w-6" />,
                title: language === 'de' ? 'Mentoring' : 'Mentoring',
                desc: language === 'de' ? 'Persönliche Betreuung' : 'Personal support',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 font-bold">{benefit.title}</h3>
                <p className="text-sm opacity-90">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
