'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaFileUpload,
  FaGraduationCap,
  FaHeart,
  FaPhone,
  FaStar,
  FaUser,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { initiativbewerbungTranslations } from './languages'

export default function InitiativbewerbungPage() {
  const { language } = useLanguageStore()
  const t = initiativbewerbungTranslations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    cv: null as File | null,
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      cv: null,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        cv: e.target.files[0],
      })
    }
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
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
              <FaBriefcase className="h-10 w-10" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-[#D72638] md:text-5xl lg:text-6xl dark:text-[#FFA5A5]">
            {t.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl dark:text-gray-300">
            {t.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600 dark:text-gray-400">{t.description}</p>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              className="rounded-xl bg-green-50 p-8 text-center dark:bg-green-900/20"
            >
              <FaCheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h3 className="mb-2 text-2xl font-bold text-green-800 dark:text-green-200">
                {language === 'de' ? 'Bewerbung erfolgreich!' : 'Application Successful!'}
              </h3>
              <p className="text-lg text-green-700 dark:text-green-300">{t.successMessage}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
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
              </div>

              <div className="grid gap-6 md:grid-cols-2">
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
                    htmlFor="position"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t.positionLabel}
                  </label>
                  <div className="relative">
                    <FaBriefcase className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder={t.positionPlaceholder}
                      className="w-full rounded-xl border border-gray-300 bg-white px-12 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t.experienceLabel}
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder={t.experiencePlaceholder}
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 text-gray-900 placeholder-gray-500 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white dark:placeholder-gray-400"
                  required
                />
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

              <div>
                <label
                  htmlFor="cv"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t.cvLabel}
                </label>
                <div className="relative">
                  <FaFileUpload className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-xl border border-gray-300 bg-white px-12 py-4 text-gray-900 focus:border-[#D72638] focus:ring-2 focus:ring-[#D72638]/20 focus:outline-none dark:border-gray-600 dark:bg-neutral-700 dark:text-white"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  {language === 'de'
                    ? 'PDF, DOC oder DOCX (max. 5MB)'
                    : 'PDF, DOC or DOCX (max. 5MB)'}
                </p>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-white p-8 shadow-lg md:p-10 dark:bg-neutral-800"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
            {language === 'de'
              ? 'Was passiert nach der Bewerbung?'
              : 'What happens after the application?'}
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 dark:from-blue-900/20 dark:to-blue-800/20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white">
                <FaStar className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-lg font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? '1. Bewerbungsprüfung' : '1. Application Review'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'de'
                  ? 'Wir prüfen Ihre Bewerbung sorgfältig und speichern sie in unserem Talentpool.'
                  : 'We carefully review your application and save it in our talent pool.'}
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 dark:from-green-900/20 dark:to-green-800/20">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
                <FaHeart className="h-8 w-8" />
              </div>
              <h4 className="mb-3 text-lg font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {language === 'de' ? '2. Rückmeldung' : '2. Feedback'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {language === 'de'
                  ? 'Sie erhalten innerhalb von 2 Wochen eine Rückmeldung von uns.'
                  : 'You will receive feedback from us within 2 weeks.'}
              </p>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#D72638] to-[#EE0A24] p-8 text-center text-white shadow-2xl md:p-12 dark:from-[#FFA5A5] dark:to-[#FF8A8A] dark:text-[#232323]"
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {language === 'de'
              ? 'Warum eine Initiativbewerbung?'
              : 'Why an Initiative Application?'}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <FaBriefcase className="h-6 w-6" />,
                title: language === 'de' ? 'Flexibilität' : 'Flexibility',
                desc:
                  language === 'de'
                    ? 'Zeige deine Initiative und Flexibilität'
                    : 'Show your initiative and flexibility',
              },
              {
                icon: <FaGraduationCap className="h-6 w-6" />,
                title: language === 'de' ? 'Entwicklung' : 'Development',
                desc:
                  language === 'de'
                    ? 'Entwickle dich in deinem Wunschbereich'
                    : 'Develop in your desired area',
              },
              {
                icon: <FaHeart className="h-6 w-6" />,
                title: language === 'de' ? 'Passion' : 'Passion',
                desc:
                  language === 'de'
                    ? 'Zeige deine Leidenschaft für Noventa'
                    : 'Show your passion for Noventa',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
