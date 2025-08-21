'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { contactTranslations } from './languages'

export default function ContactPage() {
  const { language } = useLanguageStore()
  const t = contactTranslations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

  
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 px-4 py-12 sm:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="mx-auto max-w-6xl">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-6">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg">
              <FaEnvelope className="h-10 w-10" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#D72638] md:text-5xl lg:text-6xl dark:text-[#FFA5A5]">
            {t.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl dark:text-gray-300">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl bg-white p-8 shadow-lg md:p-10 dark:bg-neutral-800"
          >
            <h2 className="mb-6 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
              {t.formTitle}
            </h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">{t.formSubtitle}</p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl bg-green-50 p-6 text-center dark:bg-green-900/20"
              >
                <FaCheckCircle className="mx-auto mb-4 h-12 w-12 text-green-500" />
                <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                  {t.successMessage}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.nameLabel}
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-xl border border-gray-300 bg-white px-12 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-xl border border-gray-300 bg-white px-12 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.phoneLabel}
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full rounded-xl border border-gray-300 bg-white px-12 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    rows={5}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D72638] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-[#B91C3C] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-[#FFA5A5] dark:text-[#232323] dark:hover:bg-[#FF8A8A]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {language === 'de' ? 'Wird gesendet...' : 'Sending...'}
                    </>
                  ) : (
                    <>
                      {t.submitButton}
                      <FaArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            {}
            <div className="rounded-2xl bg-gradient-to-r from-[#D72638] to-[#EE0A24] p-8 text-white shadow-2xl dark:from-[#FFA5A5] dark:to-[#FF8A8A] dark:text-[#232323]">
              <h2 className="mb-6 text-2xl font-bold">{t.contactPerson}</h2>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-white/20">
                  <div className="flex h-full w-full items-center justify-center">
                    <FaUser className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Patricia Nensel</h3>
                  <p className="text-sm opacity-90">
                    {language === 'de' ? 'Personalabteilung' : 'Human Resources'}
                  </p>
                </div>
              </div>
            </div>

            {}
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-800">
              <h3 className="mb-6 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? 'Kontaktdaten' : 'Contact Details'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'de' ? 'E-Mail' : 'Email'}
                    </h4>
                    <a
                      href="mailto:personal@noventas.de"
                      className="text-gray-700 hover:text-[#D72638] dark:text-gray-300 dark:hover:text-[#FFA5A5]"
                    >
                      personal@noventas.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white">
                    <FaPhone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'de' ? 'Telefon' : 'Phone'}
                    </h4>
                    <a
                      href="tel:+49665991880"
                      className="text-gray-700 hover:text-[#D72638] dark:text-gray-300 dark:hover:text-[#FFA5A5]"
                    >
                      +49 6659 9188-0
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'de' ? 'Adresse' : 'Address'}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Noventa GmbH
                      <br />
                      Hauptstraße 123
                      <br />
                      01234 Musterland, Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <FaClock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {language === 'de' ? 'Geschäftszeiten' : 'Business Hours'}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {language === 'de'
                        ? 'Montag - Freitag: 8:00 - 17:00 Uhr'
                        : 'Monday - Friday: 8:00 AM - 5:00 PM'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-800">
              <h3 className="mb-6 text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? 'Folge uns' : 'Follow Us'}
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-all hover:scale-110"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white transition-all hover:scale-110"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
