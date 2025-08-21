'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IconType } from 'react-icons'
import {
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaUsers,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'Contact Us',
    subtitle: 'We are here to help and answer any questions you might have',
    info: {
      title: 'Contact Information',
      company: 'Company',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Business Hours',
      hoursText: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 8:00 AM - 2:00 PM\nSunday: Closed',
    },
    form: {
      title: 'Send us a Message',
      name: 'Your Name',
      email: 'Your Email',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
      success: 'Thank you for your message! We will get back to you soon.',
    },
    sections: {
      general: {
        title: 'General Contact',
        content:
          'For general inquiries about our products, services, or locations, please reach out to our customer service team.',
        details: [
          { icon: FaPhone, text: 'Phone: +49 6658 9876' },
          { icon: FaEnvelope, text: 'Email: info@noventas.de' },
          { icon: FaClock, text: 'Hours: Mon-Fri 8:00-17:00' },
          {
            icon: FaMapMarkerAlt,
            text: 'Address: Muster-Straße 38, 01234 Musterland',
          },
        ],
      },
      business: {
        title: 'Wholesale & Business',
        content:
          'Interested in partnering with us or placing wholesale orders? Our business development team is here to help.',
        details: [
          { icon: FaPhone, text: 'Phone: +49 6658 9877' },
          { icon: FaEnvelope, text: 'Email: business@noventas.de' },
          { icon: FaClock, text: 'Hours: Mon-Fri 9:00-16:00' },
          { icon: FaCheckCircle, text: 'Minimum order requirements apply' },
        ],
      },
      careers: {
        title: 'Career Opportunities',
        content:
          'Join our team of passionate bakers and service professionals. We offer various positions across our locations.',
        details: [
          { icon: FaEnvelope, text: 'Email: bewerbung@noventas.de' },
          { icon: FaFileAlt, text: 'Current openings on our careers page' },
          { icon: FaCheckCircle, text: 'Apprenticeship programs available' },
          { icon: FaUsers, text: 'Professional development opportunities' },
        ],
      },
    },
  },
  de: {
    title: 'Kontakt',
    subtitle: 'Wir sind für Sie da und beantworten gerne Ihre Fragen',
    info: {
      title: 'Kontaktinformationen',
      company: 'Firma',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      hours: 'Öffnungszeiten',
      hoursText:
        'Montag - Freitag: 8:00 - 18:00 Uhr\nSamstag: 8:00 - 14:00 Uhr\nSonntag: Geschlossen',
    },
    form: {
      title: 'Senden Sie uns eine Nachricht',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      subject: 'Betreff',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      success: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
    },
    sections: {
      general: {
        title: 'Allgemeine Anfragen',
        content:
          'Für allgemeine Anfragen zu unseren Produkten, Dienstleistungen oder Standorten wenden Sie sich bitte an unser Kundenservice-Team.',
        details: [
          { icon: FaPhone, text: 'Telefon: +49 6658 9876' },
          { icon: FaEnvelope, text: 'E-Mail: info@noventas.de' },
          { icon: FaClock, text: 'Öffnungszeiten: Mo-Fr 8:00-17:00' },
          {
            icon: FaMapMarkerAlt,
            text: 'Adresse: Muster-Straße 38, 01234 Musterland',
          },
        ],
      },
      business: {
        title: 'Großhandel & Geschäftskunden',
        content:
          'Interessiert an einer Partnerschaft oder Großbestellungen? Unser Business-Development-Team steht Ihnen zur Verfügung.',
        details: [
          { icon: FaPhone, text: 'Telefon: +49 6658 9877' },
          { icon: FaEnvelope, text: 'E-Mail: business@noventas.de' },
          { icon: FaClock, text: 'Öffnungszeiten: Mo-Fr 9:00-16:00' },
          { icon: FaCheckCircle, text: 'Mindestbestellmengen gelten' },
        ],
      },
      careers: {
        title: 'Karrieremöglichkeiten',
        content:
          'Werden Sie Teil unseres Teams leidenschaftlicher Bäcker und Serviceprofis. Wir bieten verschiedene Positionen an unseren Standorten.',
        details: [
          { icon: FaEnvelope, text: 'E-Mail: bewerbung@noventas.de' },
          { icon: FaFileAlt, text: 'Aktuelle Stellenangebote auf unserer Karriereseite' },
          { icon: FaCheckCircle, text: 'Ausbildungsprogramme verfügbar' },
          { icon: FaUsers, text: 'Möglichkeiten zur beruflichen Entwicklung' },
        ],
      },
    },
  },
}

const companyInfo = {
  Company: 'noventas GmbH',
  Address: 'Muster-Straße 38, 01234 Musterland',
  Phone: '+49 (0)66 58 96 01 0',
  Email: 'service@noventas.de',
}

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  subject: string
  cv: File | null
}

function InfoBlock({ t }: { t: typeof translations.en }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">{t.info.title}</h2>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
            <FaMapMarkerAlt className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">{t.info.company}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{companyInfo.Company}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{companyInfo.Address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
            <FaPhone className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">{t.info.phone}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{companyInfo.Phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
            <FaEnvelope className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">{t.info.email}</p>
            <p className="text-neutral-600 dark:text-neutral-300">{companyInfo.Email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg">
            <FaClock className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 dark:text-white">{t.info.hours}</p>
            <p className="whitespace-pre-line text-neutral-600 dark:text-neutral-300">
              {t.info.hoursText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ContactForm({ t, language }: { t: typeof translations.en; language: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
    cv: null,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center transition-colors dark:border-green-800 dark:bg-green-900/20"
    >
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
          <FaCheckCircle className="h-8 w-8" />
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold text-green-800 dark:text-green-400">
        {language === 'de' ? 'Nachricht gesendet!' : 'Message Sent!'}
      </h3>
      <p className="text-green-700 dark:text-green-300">{t.form.success}</p>
    </motion.div>
  ) : (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
    >
      <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{t.form.title}</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium text-neutral-700 dark:text-neutral-300">
            {t.form.name}
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:border-orange-400"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-neutral-700 dark:text-neutral-300">
            {t.form.email}
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:border-orange-400"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-medium text-neutral-700 dark:text-neutral-300">
          {t.form.subject}
        </label>
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:border-orange-400"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-neutral-700 dark:text-neutral-300">
          {t.form.message}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:focus:border-orange-400"
          rows={5}
          required
        />
      </div>

      <motion.button
        type="submit"
        className="w-full rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-xl active:scale-95 dark:bg-orange-600 dark:hover:bg-orange-700"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t.form.send}
      </motion.button>
    </motion.form>
  )
}

function ContactSection({
  t,
  section,
  icon: Icon,
}: {
  t: typeof translations.en
  section: keyof typeof translations.en.sections
  icon: IconType
}) {
  const sectionData = t.sections[section]
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6 dark:border-neutral-700 dark:bg-neutral-800"
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="text-lg font-bold text-neutral-900 sm:text-xl dark:text-white">
          {sectionData.title}
        </h2>
      </div>

      <p className="mb-4 text-sm text-neutral-600 sm:mb-6 sm:text-base dark:text-neutral-300">
        {sectionData.content}
      </p>

      <ul className="space-y-2 sm:space-y-3">
        {sectionData.details.map((detail, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-2 text-sm text-neutral-600 sm:gap-3 sm:text-base dark:text-neutral-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <detail.icon className="h-3 w-3 flex-shrink-0 text-orange-500 sm:h-4 sm:w-4" />
            <span className="text-break-words">{detail.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ContactPage() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {}
      <section className="relative my-5 overflow-hidden py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10" />
        <div className="container-responsive relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 dark:border-orange-700/50 dark:bg-orange-900/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaEnvelope className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <FaClock className="h-4 w-4" />
                <span>{language === 'de' ? '24/7 Support' : '24/7 Support'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-4 w-4" />
                <span>{language === 'de' ? 'Schnelle Antwort' : 'Quick Response'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="h-4 w-4" />
                <span>{language === 'de' ? 'Experten Team' : 'Expert Team'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <InfoBlock t={t} />
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/soft-images/Noventa_painting.webp"
                  alt="Bakery Interior"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </div>

            <div className="space-y-8">
              <ContactForm t={t} language={language} />
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Image
                  src="/images/noventas_Auszeichnung_Service-Champion_2023.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
            <ContactSection t={t} section="general" icon={FaEnvelope} />
            <ContactSection t={t} section="business" icon={FaBriefcase} />
            <ContactSection t={t} section="careers" icon={FaUsers} />
          </div>
        </div>
      </section>
    </div>
  )
}
