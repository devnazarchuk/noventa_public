'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function Contact() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <section className="from-primary-50 bg-gradient-to-br to-white py-12 sm:py-16 lg:py-20 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-responsive">
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-primary-100 dark:bg-primary-900/30 border-primary-200 dark:border-primary-700/50 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 sm:mb-6 sm:px-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MessageCircle className="text-primary-600 dark:text-primary-400 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-primary-700 dark:text-primary-300 text-break-words text-xs font-medium sm:text-sm">
              {t.contact.badge}
            </span>
          </motion.div>

          <h2 className="font-display text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl text-gradient from-primary-600 to-primary-800 text-break-words mb-4 bg-gradient-to-r bg-clip-text font-bold text-transparent sm:mb-6">
            {t.contact.title}
          </h2>
          <p className="text-responsive-base sm:text-responsive-lg text-break-words mx-auto max-w-3xl px-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {}
          <div className="space-y-4 sm:space-y-6 lg:col-span-1">
            {[
              {
                icon: Phone,
                title: language === 'de' ? 'Rufen Sie uns an' : 'Call Us',
                info: '+49 (0)66 58 96 01 0',
                description: language === 'de' ? 'Mo-Fr 8:00 - 18:00' : 'Mon-Fri 8:00 AM - 6:00 PM',
                color: 'bg-blue-50 text-blue-600 border-blue-100',
              },
              {
                icon: Mail,
                title: language === 'de' ? 'E-Mail senden' : 'Email Us',
                info: 'info@noventas.de',
                description:
                  language === 'de'
                    ? 'Wir antworten innerhalb von 24 Stunden'
                    : 'We reply within 24 hours',
                color: 'bg-green-50 text-green-600 border-green-100',
              },
              {
                icon: MapPin,
                title: language === 'de' ? 'Besuchen Sie uns' : 'Visit Us',
                info: language === 'de' ? '150+ Standorte' : '150+ Locations',
                description:
                  language === 'de' ? 'Finden Sie Ihre nächste Filiale' : 'Find your nearest store',
                color: 'bg-purple-50 text-purple-600 border-purple-100',
              },
              {
                icon: Clock,
                title: language === 'de' ? 'Öffnungszeiten' : 'Store Hours',
                info: '6:00 AM - 8:00 PM',
                description: language === 'de' ? 'Täglich frisches Backen' : 'Daily fresh baking',
                color: 'bg-orange-50 text-orange-600 border-orange-100',
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer bg-white p-4 transition-all duration-300 hover:shadow-lg sm:p-6 dark:bg-neutral-800">
                  <div
                    className={`h-10 w-10 rounded-xl sm:h-12 sm:w-12 ${contact.color} mb-3 flex items-center justify-center transition-transform group-hover:scale-110 sm:mb-4`}
                  >
                    <contact.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-display text-break-words mb-2 text-base font-semibold text-neutral-800 sm:text-lg dark:text-neutral-200">
                    {contact.title}
                  </h3>
                  <p className="text-break-words mb-1 font-medium text-neutral-700 dark:text-neutral-300">
                    {contact.info}
                  </p>
                  <p className="text-break-words text-sm text-neutral-500 dark:text-neutral-400">
                    {contact.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white p-6 sm:p-8 lg:p-10 dark:bg-neutral-800">
              <div className="mb-6 sm:mb-8">
                <h3 className="font-display text-break-words mb-2 text-xl font-bold text-neutral-800 sm:text-2xl dark:text-neutral-200">
                  {language === 'de' ? 'Senden Sie uns eine Nachricht' : 'Send us a Message'}
                </h3>
                <p className="text-break-words text-neutral-600 dark:text-neutral-400">
                  {language === 'de'
                    ? 'Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich bei Ihnen.'
                    : "Fill out the form below and we'll get back to you as soon as possible."}
                </p>
              </div>

              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="contact-firstname"
                      className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {language === 'de' ? 'Vorname' : 'First Name'}
                    </label>
                    <input
                      id="contact-firstname"
                      name="firstname"
                      type="text"
                      required
                      className="focus:ring-primary-500 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
                      placeholder={language === 'de' ? 'Max' : 'John'}
                      aria-describedby="contact-firstname-help"
                    />
                    <div id="contact-firstname-help" className="sr-only">
                      {language === 'de' ? 'Geben Sie Ihren Vornamen ein' : 'Enter your first name'}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-lastname"
                      className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {language === 'de' ? 'Nachname' : 'Last Name'}
                    </label>
                    <input
                      id="contact-lastname"
                      name="lastname"
                      type="text"
                      required
                      className="focus:ring-primary-500 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
                      placeholder={language === 'de' ? 'Mustermann' : 'Doe'}
                      aria-describedby="contact-lastname-help"
                    />
                    <div id="contact-lastname-help" className="sr-only">
                      {language === 'de' ? 'Geben Sie Ihren Nachnamen ein' : 'Enter your last name'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {language === 'de' ? 'E-Mail' : 'Email'}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="focus:ring-primary-500 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
                      placeholder={language === 'de' ? 'max@beispiel.de' : 'john@example.com'}
                      aria-describedby="contact-email-help"
                    />
                    <div id="contact-email-help" className="sr-only">
                      {language === 'de'
                        ? 'Geben Sie Ihre E-Mail-Adresse ein'
                        : 'Enter your email address'}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {language === 'de' ? 'Telefon' : 'Phone'}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="focus:ring-primary-500 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
                      placeholder="+49 123 456 789"
                      aria-describedby="contact-phone-help"
                    />
                    <div id="contact-phone-help" className="sr-only">
                      {language === 'de'
                        ? 'Geben Sie Ihre Telefonnummer ein (optional)'
                        : 'Enter your phone number (optional)'}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {language === 'de' ? 'Betreff' : 'Subject'}
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="focus:ring-primary-500 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                    aria-describedby="contact-subject-help"
                  >
                    <option value="general">
                      {language === 'de' ? 'Allgemeine Anfrage' : 'General Inquiry'}
                    </option>
                    <option value="custom">
                      {language === 'de' ? 'Individuelle Bestellung' : 'Custom Order'}
                    </option>
                    <option value="catering">
                      {language === 'de' ? 'Catering-Anfrage' : 'Catering Request'}
                    </option>
                    <option value="feedback">{language === 'de' ? 'Feedback' : 'Feedback'}</option>
                    <option value="other">{language === 'de' ? 'Sonstiges' : 'Other'}</option>
                  </select>
                  <div id="contact-subject-help" className="sr-only">
                    {language === 'de'
                      ? 'Wählen Sie den Betreff Ihrer Nachricht aus'
                      : 'Select the subject of your message'}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-break-words mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {language === 'de' ? 'Nachricht' : 'Message'}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="focus:ring-primary-500 w-full resize-none rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-3 sm:text-base dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-400"
                    placeholder={
                      language === 'de'
                        ? 'Erzählen Sie uns, wie wir Ihnen helfen können...'
                        : 'Tell us how we can help you...'
                    }
                    aria-describedby="contact-message-help"
                  ></textarea>
                  <div id="contact-message-help" className="sr-only">
                    {language === 'de' ? 'Geben Sie Ihre Nachricht ein' : 'Enter your message'}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="group text-break-words min-h-[44px] w-full"
                    type="submit"
                    aria-label={language === 'de' ? 'Nachricht senden' : 'Send Message'}
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    <span className="text-break-words">
                      {language === 'de' ? 'Nachricht senden' : 'Send Message'}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>

        {}
        <motion.div
          className="mt-12 text-center sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 border-primary-200 dark:border-primary-700/50 mx-auto max-w-4xl bg-gradient-to-br p-6 sm:p-8 lg:p-12">
            <h3 className="font-display text-break-words mb-4 text-xl font-bold text-neutral-800 sm:text-2xl lg:text-3xl dark:text-neutral-200">
              {language === 'de'
                ? 'Bereit für unsere Handwerksqualität?'
                : 'Ready to Experience Our Artisan Quality?'}
            </h3>
            <p className="text-break-words mx-auto mb-6 max-w-2xl px-4 text-base text-neutral-600 sm:mb-8 sm:text-lg dark:text-neutral-400">
              {language === 'de'
                ? 'Besuchen Sie eine unserer 150+ Filialen oder bestellen Sie online. Frische, handgefertigte Köstlichkeiten sind nur einen Klick entfernt.'
                : 'Visit one of our 150+ locations or place an order online. Fresh, handcrafted goodness is just a click away.'}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button variant="ghost" size="lg" className="group">
                <a href="/stores" className="text-break-words flex items-center gap-2">
                  <MapPin className="group-hover:bounce h-4 w-4 transition-transform sm:h-5 sm:w-5" />
                  <span className="text-break-words">
                    {language === 'de' ? 'Standorte finden' : 'Find Locations'}
                  </span>
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <a href="tel:+490665896010" className="text-break-words flex items-center gap-2">
                  <Phone className="h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
                  <span className="text-break-words">
                    {language === 'de' ? 'Jetzt anrufen' : 'Call Now'}
                  </span>
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
