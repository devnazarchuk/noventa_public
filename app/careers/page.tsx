'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaEnvelope,
  FaGift,
  FaHeart,
  FaRocket,
  FaStar,
  FaUserGraduate,
  FaUserPlus,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export default function JobsPage() {

  const { language } = useLanguageStore()
  const t = translations[language]


  const sections = [
    {
      title: t.careers.openPositions || 'Offene Stellen',
      desc: t.careers.openPositionsDesc || 'Alle aktuellen Jobangebote bei Noventa.',
      href: '/careers/jobs',
      icon: <FaUserTie className="h-10 w-10 text-white" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      title: t.careers.education || 'Ausbildung & Praktikum',
      desc:
        t.careers.educationDesc ||
        'Starte deine Karriere mit einer Ausbildung oder einem Praktikum.',
      href: '/careers/ausbildung',
      icon: <FaUserGraduate className="h-10 w-10 text-white" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: t.careers.benefits || 'Benefits & Kultur',
      desc: t.careers.benefitsDesc || 'Entdecke die Vorteile und Unternehmenskultur bei Noventa.',
      href: '/careers/benefits',
      icon: <FaGift className="h-10 w-10 text-white" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: t.careers.team || 'Team & Einblicke',
      desc: t.careers.teamDesc || 'Lerne unser Team kennen und erhalte Einblicke.',
      href: '/careers/team',
      icon: <FaUsers className="h-10 w-10 text-white" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      title: t.careers.initiative || 'Initiativbewerbung',
      desc: t.careers.initiativeDesc || 'Keine passende Stelle? Bewirb dich initiativ!',
      href: '/careers/initiativbewerbung',
      icon: <FaUserPlus className="h-10 w-10 text-white" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      title: t.careers.contact || 'Kontakt',
      desc:
        t.careers.contactDesc || 'Deine Ansprechpartnerin für alle Fragen rund um die Bewerbung.',
      href: '/careers/contact',
      icon: <FaEnvelope className="h-10 w-10 text-white" />,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
  ]


  const testimonials = [
    {
      text:
        t.careers.testimonial1 ||
        'Ich darf erstklassige Produkte verkaufen und habe dabei das Gefühl einen sicheren Arbeitsplatz zu haben.',
      author: t.careers.testimonial1Author || 'Philipp Tach, seit 2021, Verkauf',
      position: 'Verkauf',
      rating: 5,
      img: '/images/Zitat-Michael-Wessels-Baeckerei-Noventas.png',
    },
    {
      text:
        t.careers.testimonial2 ||
        'Ich bin glücklich bei Noventa und könnte mir nicht vorstellen, woanders zu arbeiten. Es passt einfach alles.',
      author: t.careers.testimonial2Author || 'Bettina Rudolph, seit 1999, Verkauf',
      position: 'Verkauf',
      rating: 5,
      img: '/images/Zitat-Bettina-Rudolph-Baeckerei-Noventas.png',
    },
  ]


  const stats = [
    { number: '160+', label: language === 'de' ? 'Filialen' : 'Stores' },
    { number: '500+', label: language === 'de' ? 'Mitarbeiter' : 'Employees' },
    { number: '25+', label: language === 'de' ? 'Jahre Erfahrung' : 'Years Experience' },
    { number: '4.8', label: language === 'de' ? 'Durchschnittsbewertung' : 'Average Rating' },
  ]

  return (
    <>
      <head>
        {}
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {}
        <link
          rel="preload"
          href="/images/Zitat-Michael-Wessels-Baeckerei-Noventas.png"
          as="image"
          imageSrcSet="/images/Zitat-Michael-Wessels-Baeckerei-Noventas.png 1x"
        />
      </head>
      <main className="min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        {}
        <section className="relative w-full overflow-hidden px-8 py-12 sm:px-10 sm:py-16 md:px-16">
          {}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-yellow-100/30 dark:from-orange-900/20 dark:to-yellow-900/20" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-orange-200/20 dark:bg-orange-800/20" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-200/20 dark:bg-yellow-800/20" />

          {}
          <div className="relative mx-auto max-w-screen-lg">
            {}
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-6 text-center text-3xl font-bold text-[#c60627] transition-colors duration-200 md:mb-8 md:text-5xl lg:text-6xl dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.title || 'Karriere bei Noventa'}
            </motion.h1>

            {}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mx-auto mb-8 max-w-[95%] text-center text-base text-[#232323] transition-colors duration-200 sm:max-w-[90%] md:mb-12 md:max-w-[80%] md:text-xl lg:max-w-[70%] dark:text-[#FFF5E1]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.intro ||
                'Entdecke deine Möglichkeiten bei Noventa: Ob im Verkauf, in der Produktion, in der Logistik oder im Büro – wir bieten dir vielfältige Karrierewege, ein herzliches Team und zahlreiche Vorteile. Wähle einen Bereich aus, um mehr zu erfahren!'}
            </motion.p>

            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-[#c60627] md:text-3xl dark:text-[#EE0A24]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {}
        <section className="w-full overflow-hidden py-8 sm:px-5 sm:px-12 md:px-12">
          <div className="mx-auto max-w-screen-lg">
            {}
            <div className="mx-auto mb-8 grid max-w-[100%] grid-cols-1 gap-6 min-[425px]:grid-cols-2 sm:max-w-[95%] sm:gap-8 md:max-w-[90%] md:grid-cols-3 md:gap-8 lg:max-w-[85%] lg:grid-cols-3 lg:gap-10">
              {sections.map((sec, i) => (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="group relative overflow-hidden"
                >
                  <Link href={sec.href} className="block h-full">
                    <div
                      className={`group flex h-full min-h-[200px] w-full cursor-pointer flex-col items-center rounded-[25px] border-2 ${sec.borderColor} ${sec.bgColor} p-6 text-center text-[#3A3A3A] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-[#FDEEEE] dark:shadow-xl dark:hover:shadow-2xl`}
                    >
                      {}
                      <div
                        className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${sec.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                      >
                        {sec.icon}
                      </div>

                      {}
                      <h2 className="mb-3 line-clamp-2 text-xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                        {sec.title}
                      </h2>

                      {}
                      <p className="mb-4 line-clamp-3 flex-1 text-sm text-[#232323] transition-colors duration-200 dark:text-[#FFF5E1]">
                        {sec.desc}
                      </p>

                      {}
                      <div className="flex items-center gap-2 text-[#c60627] transition-all duration-300 group-hover:gap-3 dark:text-[#EE0A24]">
                        <span className="text-sm font-semibold">
                          {t.careers.more || 'Mehr erfahren'}
                        </span>
                        <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="w-full overflow-hidden px-8 py-12 sm:px-10 md:px-16">
          <div className="mx-auto max-w-screen-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 text-center text-3xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            >
              {language === 'de' ? 'Warum Noventa?' : 'Why Choose Noventa?'}
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <FaHeart className="h-8 w-8" />,
                  title: language === 'de' ? 'Familienkultur' : 'Family Culture',
                  desc:
                    language === 'de'
                      ? 'Wir behandeln unsere Mitarbeiter wie Familie und schaffen eine warme, unterstützende Umgebung.'
                      : 'We treat our employees like family and create a warm, supportive environment.',
                },
                {
                  icon: <FaRocket className="h-8 w-8" />,
                  title: language === 'de' ? 'Karrierewachstum' : 'Career Growth',
                  desc:
                    language === 'de'
                      ? 'Viele Entwicklungsmöglichkeiten und Weiterbildungsprogramme für deine berufliche Zukunft.'
                      : 'Many development opportunities and training programs for your professional future.',
                },
                {
                  icon: <FaStar className="h-8 w-8" />,
                  title: language === 'de' ? 'Qualitätsprodukte' : 'Quality Products',
                  desc:
                    language === 'de'
                      ? 'Arbeite mit erstklassigen Backwaren und sei stolz auf das, was du verkaufst.'
                      : 'Work with premium baked goods and be proud of what you sell.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-800"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#c60627] dark:text-[#EE0A24]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="w-full overflow-hidden px-8 py-8 sm:px-10 sm:py-12 md:px-16">
          <div className="mx-auto max-w-screen-lg">
            {}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 text-center text-2xl font-bold text-[#c60627] transition-colors duration-200 md:text-3xl dark:text-[#EE0A24]"
              style={{
                fontFamily:
                  'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
              }}
            >
              {t.careers.testimonialsTitle || 'Stimmen aus dem Team'}
            </motion.h2>

            {}
            <div className="scrollbar-hide flex snap-x snap-mandatory justify-center gap-6 overflow-x-auto pb-6 sm:gap-8 md:gap-10 lg:gap-12">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.author}
                  className="flex w-[95%] max-w-sm snap-center flex-col items-center rounded-2xl border-2 border-[#FFD2D2] bg-white p-6 text-center text-[#3A3A3A] shadow-lg transition-shadow duration-200 hover:shadow-xl sm:w-auto md:max-w-sm md:p-8 dark:border-neutral-700 dark:bg-neutral-800 dark:text-[#FDEEEE] dark:shadow-xl dark:hover:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  {}
                  <div className="relative mb-4">
                    <Image
                      src={t.img}
                      alt={t.author}
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover md:h-24 md:w-24"
                    />
                    <div className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                      <FaHeart className="h-3 w-3" />
                    </div>
                  </div>

                  {}
                  <div className="mb-3 flex justify-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>

                  {}
                  <blockquote className="mb-4 line-clamp-4 text-sm text-[#c60627] italic transition-colors duration-200 md:text-base dark:text-[#EE0A24]">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>

                  {}
                  <div className="text-sm text-[#232323] transition-colors duration-200 dark:text-[#FFF5E1]">
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.position}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="w-full overflow-hidden px-8 py-12 sm:px-10 md:px-16">
          <div className="mx-auto max-w-screen-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-gradient-to-r from-[#c60627] to-[#EE0A24] p-8 text-center text-white shadow-2xl md:p-12"
            >
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                {language === 'de'
                  ? 'Bereit für den nächsten Schritt?'
                  : 'Ready for the next step?'}
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90">
                {language === 'de'
                  ? 'Entdecke unsere offenen Stellen und werde Teil des Noventa-Teams!'
                  : 'Discover our open positions and become part of the Noventa team!'}
              </p>
              <Link
                href="/careers/jobs"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-[#c60627] transition-all hover:scale-105 hover:bg-gray-100"
              >
                {language === 'de' ? 'Offene Stellen anzeigen' : 'View Open Positions'}
                <FaArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
