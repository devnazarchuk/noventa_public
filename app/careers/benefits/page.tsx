'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaBicycle,
  FaGift,
  FaGraduationCap,
  FaHeart,
  FaMoneyBillWave,
  FaPlus,
  FaStar,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { benefits, benefitsTranslations } from './languages'

export default function BenefitsPage() {
  const { language } = useLanguageStore()
  const t = benefitsTranslations[language]

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
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
              <FaGift className="h-10 w-10" />
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-neutral-800"
            >
              {}
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={benefit.img}
                      alt={benefit.title[language]}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                </div>
                <div className="absolute right-4 bottom-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                    <FaPlus className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                  {benefit.title[language]}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{benefit.desc[language]}</p>
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
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {language === 'de' ? 'Bereit für den nächsten Schritt?' : 'Ready for the next step?'}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            {language === 'de'
              ? 'Entdecke unsere offenen Stellen und werde Teil des Noventa-Teams!'
              : 'Discover our open positions and become part of the Noventa team!'}
          </p>
          <Link
            href="/careers/jobs"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#D72638] transition-all hover:scale-105 hover:bg-gray-100 dark:bg-[#232323] dark:text-[#FFA5A5] dark:hover:bg-[#2A2A2A]"
          >
            {language === 'de' ? 'Offene Stellen anzeigen' : 'View Open Positions'}
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
            {language === 'de' ? 'Unsere Unternehmenskultur' : 'Our Corporate Culture'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaHeart className="h-8 w-8" />,
                title: language === 'de' ? 'Wertschätzung' : 'Appreciation',
                desc:
                  language === 'de'
                    ? 'Wir schätzen jeden Mitarbeiter und seine Beiträge zum Erfolg unseres Unternehmens.'
                    : "We value every employee and their contributions to our company's success.",
              },
              {
                icon: <FaUsers className="h-8 w-8" />,
                title: language === 'de' ? 'Teamgeist' : 'Team Spirit',
                desc:
                  language === 'de'
                    ? 'Gemeinsam erreichen wir mehr. Teamarbeit steht bei uns an erster Stelle.'
                    : 'Together we achieve more. Teamwork comes first with us.',
              },
              {
                icon: <FaStar className="h-8 w-8" />,
                title: language === 'de' ? 'Exzellenz' : 'Excellence',
                desc:
                  language === 'de'
                    ? 'Wir streben nach höchster Qualität in allem, was wir tun.'
                    : 'We strive for the highest quality in everything we do.',
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

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 p-8 text-center text-white shadow-2xl md:p-12 dark:from-green-600 dark:to-green-700"
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {language === 'de' ? 'Deine Vorteile im Überblick' : 'Your Benefits Overview'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaMoneyBillWave className="h-6 w-6" />,
                title: language === 'de' ? 'Gehalt' : 'Salary',
                desc:
                  language === 'de'
                    ? 'Überdurchschnittliche Vergütung'
                    : 'Above-average compensation',
              },
              {
                icon: <FaGift className="h-6 w-6" />,
                title: language === 'de' ? 'Gratis' : 'Freebies',
                desc: language === 'de' ? 'Brotflatrate & Geschenke' : 'Bread subscription & gifts',
              },
              {
                icon: <FaBicycle className="h-6 w-6" />,
                title: language === 'de' ? 'E-Bike' : 'E-Bike',
                desc: language === 'de' ? 'Attraktives Leasing' : 'Attractive leasing',
              },
              {
                icon: <FaGraduationCap className="h-6 w-6" />,
                title: language === 'de' ? 'Weiterbildung' : 'Training',
                desc: language === 'de' ? 'Berufliche Entwicklung' : 'Professional development',
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

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-white p-8 shadow-lg md:p-12 dark:bg-neutral-800"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
            {language === 'de' ? 'Was unsere Mitarbeiter sagen' : 'What Our Employees Say'}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                text:
                  language === 'de'
                    ? 'Die Benefits bei Noventa sind wirklich einzigartig. Besonders die Brotflatrate und das E-Bike-Leasing schätzen meine Familie und ich sehr.'
                    : 'The benefits at Noventa are truly unique. My family and I particularly appreciate the bread subscription and e-bike leasing.',
                author: 'Maria Schmidt',
                position: language === 'de' ? 'Verkäuferin' : 'Sales Associate',
              },
              {
                text:
                  language === 'de'
                    ? 'Die Weiterbildungsmöglichkeiten haben mir geholfen, mich beruflich weiterzuentwickeln. Noventa investiert wirklich in seine Mitarbeiter.'
                    : 'The training opportunities have helped me develop professionally. Noventa really invests in its employees.',
                author: 'Thomas Weber',
                position: language === 'de' ? 'Teamleiter' : 'Team Leader',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 p-6 dark:from-orange-900/20 dark:to-yellow-900/20"
              >
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-4 text-gray-700 dark:text-gray-300">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
