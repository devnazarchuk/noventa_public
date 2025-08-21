'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Heart, Leaf, Shield, Star, Truck, Users } from 'lucide-react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'

export function Services() {
  const { language } = useLanguageStore()
  const t = translations[language]

  const services = [
    {
      icon: Award,
      title: t.services.qualityGuarantee.title,
      description: t.services.qualityGuarantee.description,
      color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
    },
    {
      icon: Clock,
      title: t.services.freshDaily.title,
      description: t.services.freshDaily.description,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: Users,
      title: t.services.cateringServices.title,
      description: t.services.cateringServices.description,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      icon: Heart,
      title: t.services.communityLove.title,
      description: t.services.communityLove.description,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
    },
    {
      icon: Truck,
      title: t.services.fastDelivery.title,
      description: t.services.fastDelivery.description,
      color: 'bg-green-50 text-green-600 border-green-100',
    },
    {
      icon: Shield,
      title: t.services.foodSafety.title,
      description: t.services.foodSafety.description,
      color: 'bg-red-50 text-red-600 border-red-100',
    },
    {
      icon: Leaf,
      title: t.services.sustainable.title,
      description: t.services.sustainable.description,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: Star,
      title: t.services.premiumQuality.title,
      description: t.services.premiumQuality.description,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
    },
  ]

  return (
    <section className="to-primary-50/30 bg-gradient-to-br from-white py-12 sm:py-16 lg:py-20 dark:from-neutral-900 dark:to-neutral-800">
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
            <Heart className="text-primary-600 dark:text-primary-400 h-3 w-3 fill-current sm:h-4 sm:w-4" />
            <span className="text-primary-700 dark:text-primary-300 text-break-words text-xs font-medium sm:text-sm">
              {t.services.badge}
            </span>
          </motion.div>

          <h2 className="font-display text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl text-gradient from-primary-600 to-primary-800 text-break-words mb-4 bg-gradient-to-r bg-clip-text font-bold text-transparent sm:mb-6">
            {t.services.title}
          </h2>
          <p className="text-responsive-base sm:text-responsive-lg text-break-words mx-auto max-w-3xl px-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid-responsive-4 grid gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 group-hover:-translate-y-2 hover:shadow-lg sm:rounded-2xl sm:p-6 dark:border-neutral-700 dark:bg-neutral-800">
                <div
                  className={`h-10 w-10 rounded-xl sm:h-12 sm:w-12 ${service.color} mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:mb-4`}
                >
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                <h3 className="font-display group-hover:text-primary-600 dark:group-hover:text-primary-400 text-break-words mb-2 text-base font-semibold text-neutral-800 transition-colors sm:mb-3 sm:text-lg dark:text-neutral-200">
                  {service.title}
                </h3>

                <p className="text-break-words text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {}
        <motion.div
          className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg sm:mt-16 sm:rounded-3xl sm:p-8 lg:mt-20 lg:p-12 dark:border-neutral-700 dark:bg-neutral-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              { number: '97', label: t.services.stats.yearsExcellence, suffix: '+' },
              { number: '150', label: t.services.stats.storeLocations, suffix: '+' },
              { number: '10', label: t.services.stats.masterBakers, suffix: '' },
              { number: '2.8K', label: t.services.stats.happyReviews, suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-display text-gradient from-primary-600 to-primary-800 text-break-words mb-2 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
                  {stat.number}
                  {stat.suffix}
                </div>
                <p className="text-break-words text-sm font-medium text-neutral-600 sm:text-base dark:text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
