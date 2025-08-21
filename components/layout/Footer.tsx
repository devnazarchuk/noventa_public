'use client'

import { motion } from 'framer-motion'
import { Clock, Heading as Bread, Heart, Mail, MapPin, Phone } from 'lucide-react'

import { useLanguageStore } from '@/app/store/languageStore'

export function Footer() {
  const { language } = useLanguageStore()

  const footerSections = [
    {
      title: language === 'de' ? 'Produkte' : 'Products',
      links: [
        { name: language === 'de' ? 'Brot' : 'Bread', href: '/products/brot' },
        { name: language === 'de' ? 'Brötchen' : 'Rolls', href: '/products/broetchen' },
        { name: language === 'de' ? 'Feingebäck' : 'Pastries', href: '/products/feingebaeck' },
        { name: language === 'de' ? 'Frühstücksgebäck' : 'Breakfast Pastries', href: '/products/fruehstuecksgebaeck' },
        { name: language === 'de' ? 'Snacks' : 'Snacks', href: '/products/snack' },
      ],
    },
    {
      title: language === 'de' ? 'Services' : 'Services',
      links: [
        { name: 'App', href: '/services/app' },
        {
          name: language === 'de' ? 'Kundenkarte' : 'Customer Card',
          href: '/services/kundenkarte',
        },
        { name: language === 'de' ? 'Gutscheine' : 'Vouchers', 
          href: '/services/gutscheine' },

        { name: 'NoventaPlus', href: '/services/noventa-plus' },
        {
          name: language === 'de' ? 'Produktset erstellen' : 'Create Product Set',
          href: '/services/produktset-erstellen',
        },
      ],
    },
    {
      title: language === 'de' ? 'Unternehmen' : 'Company',
      links: [
        { name: language === 'de' ? 'Über uns' : 'About', href: '/about' },
        { name: language === 'de' ? 'Geschichte' : 'History', href: '/about/history' },
        { name: language === 'de' ? 'Karriere' : 'Careers', href: '/careers' },
        { name: language === 'de' ? 'Presse' : 'Press', href: '/about/press' },
        {
          name: language === 'de' ? 'Master Bäcker' : 'Master Baker',
          href: '/about/master-bakers',
        },
      ],
    },
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/noventas/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/baeckerei_noventa/?hl=de',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/noventas-gmbh-&-co.-kg/',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@noventas_baeckerei',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-neutral-900 pt-10 text-white">
      {}
      <div className="container-responsive py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5 lg:gap-8">
          {}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="from-primary-500 to-primary-600 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg">
                  <Bread className="h-7 w-7 text-white" />
                </div>
                <div>
                  <span className="font-display text-2xl font-bold text-white">Noventa</span>
                  <p className="-mt-1 text-sm text-neutral-400">
                    {language === 'de' ? 'Seit 1928' : 'Since 1928'}
                  </p>
                </div>
              </div>

              <p className="mb-6 max-w-md leading-relaxed text-neutral-300">
                {language === 'de'
                  ? 'Wir backen mit Leidenschaft und Tradition seit fast einem Jahrhundert außergewöhnliche Backwaren. Von unserer Familie zu Ihrer - wir bringen Ihnen die feinsten handgefertigten Brote, Gebäck und Leckereien.'
                  : 'Crafting exceptional baked goods with passion and tradition for nearly a century. From our family to yours, we bring you the finest artisan breads, pastries, and treats.'}
              </p>

              {}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Phone className="text-primary-400 h-4 w-4" />
                  <span>+49 (0)66 58 96 01 0</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Mail className="text-primary-400 h-4 w-4" />
                  <span>info@noventas.de</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <MapPin className="text-primary-400 h-4 w-4" />
                  <span>150+ Locations across Germany</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Clock className="text-primary-400 h-4 w-4" />
                  <span>Daily 6:00 AM - 8:00 PM</span>
                </div>
              </div>

              {}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="hover:bg-primary-600 group flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-white transition-transform group-hover:scale-110">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {}
          <div className="col-span-1 grid grid-cols-3 gap-4 sm:col-span-2 sm:gap-6 lg:col-span-3 lg:gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="font-display mb-6 text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    >
                      <a
                        href={link.href}
                        className="hover:text-primary-400 block py-1 text-sm text-neutral-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="my-5 border-t border-neutral-800 py-5">
        <div className="container-responsive py-6 sm:py-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center justify-center gap-2">
              <Heart className="text-primary-400 h-5 w-5" />
              <h3 className="font-display text-xl font-semibold text-white">
                {language === 'de' ? 'Bleiben Sie frisch mit uns' : 'Stay Fresh with Us'}
              </h3>
            </div>
            <p className="mb-6 text-neutral-400">
              {language === 'de'
                ? 'Erhalten Sie die neuesten Updates zu neuen Produkten, Sonderangeboten und Backtipps direkt in Ihr Postfach.'
                : 'Get the latest updates on new products, special offers, and baking tips delivered to your inbox.'}
            </p>

            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={language === 'de' ? 'Ihre E-Mail eingeben' : 'Enter your email'}
                className="focus:ring-primary-500 flex-1 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 transition-all focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <motion.button
                className="bg-primary-600 hover:bg-primary-700 rounded-xl px-6 py-3 font-medium text-white shadow-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {language === 'de' ? 'Abonnieren' : 'Subscribe'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {}
      <div className="border-t border-neutral-800 py-8">
        <div className="container-responsive py-8 sm:py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
            <motion.div
              className="text-sm leading-relaxed text-neutral-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2025 Noventa Bakery. All rights reserved.{' '}
              <a
                href="https://devnazarchuk.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 group relative inline-flex items-center gap-1 transition-colors duration-300"
              >
                <div className="relative">
                  <motion.span
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: 3,
                      ease: 'easeInOut',
                      delay: 0,
                    }}
                  >
                    Made with
                  </motion.span>
                  <motion.div
                    className="via-primary-400 absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0,
                    }}
                  />
                </div>

                <div className="relative">
                  <motion.span
                    className="inline-block"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    ❤️
                  </motion.span>
                  <motion.div
                    className="border-primary-400 absolute bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 transform rounded-full border-2"
                    animate={{
                      scale: [0.4, 1.2, 0.5],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>

                <div className="relative">
                  <motion.span
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                  >
                    by devnazarchuk
                  </motion.span>
                  <motion.div
                    className="via-primary-400 absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent to-transparent"
                    animate={{
                      scaleX: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2,
                    }}
                  />
                </div>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 sm:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                {
                  name: language === 'de' ? 'Datenschutz' : 'Privacy Policy',
                  href: '/datenschutz',
                },
                { name: language === 'de' ? 'Impressum' : 'Imprint', href: '/impressum' },
                { name: 'ESG', href: '/esg' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-400 rounded-md px-2 py-1 text-sm text-neutral-400 transition-colors duration-200 hover:bg-neutral-800"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
