'use client'
import { motion } from 'framer-motion'
import { FaAward, FaCreditCard, FaCrown, FaGem, FaGift, FaMobileAlt, FaStar } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

type Translations = {
  de: {
    title: string
    subtitle: string
    overview: string
    rewardTiers: {
      title: string
      subtitle: string
      tiers: {
        bronze: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        silver: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        gold: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
      }
    }
    services: {
      customerCard: {
        title: string
        description: string
        button: string
      }
      gutscheine: {
        title: string
        description: string
        button: string
      }
      app: {
        title: string
        description: string
        button: string
      }
      noventaPlus: {
        title: string
        description: string
        button: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    overview: string
    rewardTiers: {
      title: string
      subtitle: string
      tiers: {
        bronze: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        silver: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
        gold: {
          name: string
          spend: string
          cashback: string
          benefits: string[]
        }
      }
    }
    services: {
      customerCard: {
        title: string
        description: string
        button: string
      }
      gutscheine: {
        title: string
        description: string
        button: string
      }
      app: {
        title: string
        description: string
        button: string
      }
      noventaPlus: {
        title: string
        description: string
        button: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Bonusprogramm',
    subtitle: 'Sammeln Sie Punkte und genießen Sie exklusive Vorteile',
    overview:
      'Werden Sie Teil unseres Bonusprogramms und sammeln Sie bei jedem Einkauf Cashback. Teilen Sie Ihre Lieblings-Produktsets mit Freunden und sichern Sie sich zusätzliche Prämien!',
    rewardTiers: {
      title: 'Bonus-Stufen',
      subtitle: 'Steigern Sie Ihre Vorteile mit jedem Einkauf',
      tiers: {
        bronze: {
          name: 'Bronze',
          spend: '0 € – 100 €',
          cashback: '3%',
          benefits: ['Basis-Cashback-Rate', 'Geburtstags-Überraschung', 'Newsletter-Updates'],
        },
        silver: {
          name: 'Silber',
          spend: '101 € – 300 €',
          cashback: '5%',
          benefits: [
            'Erhöhte Cashback-Rate',
            'Gratis Kaffee zu jedem Einkauf',
            'Früher Zugang zu Saisonartikeln',
          ],
        },
        gold: {
          name: 'Gold',
          spend: 'ab 301 €',
          cashback: '7%',
          benefits: [
            'Premium-Cashback-Rate',
            'Kostenlose Lieferung ab 50 € Bestellwert',
            'Exklusive Verkostungsevents',
            'Individuelle Tortenkonsultation',
          ],
        },
      },
    },
    services: {
      customerCard: {
        title: 'Kundenkarte',
        description: 'Punkte sammeln & Vorteile sichern.',
        button: 'Mehr erfahren',
      },
      gutscheine: {
        title: 'Gutscheine',
        description: 'Genuss verschenken – für jeden Anlass.',
        button: 'Mehr erfahren',
      },
      app: {
        title: 'App',
        description: 'Bestellen, sparen & digital genießen.',
        button: 'Mehr erfahren',
      },
      noventaPlus: {
        title: 'Noventa Plus',
        description: 'Exklusive Club-Vorteile & Events.',
        button: 'Mehr erfahren',
      },
    },
  },
  en: {
    title: 'Bonus Program',
    subtitle: 'Collect points and enjoy exclusive benefits',
    overview:
      'Become part of our bonus program and collect cashback with every purchase. Share your favorite product sets with friends and secure additional rewards!',
    rewardTiers: {
      title: 'Reward Tiers',
      subtitle: 'Increase your benefits with every purchase',
      tiers: {
        bronze: {
          name: 'Bronze',
          spend: '€0 – €100',
          cashback: '3%',
          benefits: ['Basic cashback rate', 'Birthday surprise', 'Newsletter updates'],
        },
        silver: {
          name: 'Silver',
          spend: '€101 – €300',
          cashback: '5%',
          benefits: [
            'Increased cashback rate',
            'Free coffee with every purchase',
            'Early access to seasonal items',
          ],
        },
        gold: {
          name: 'Gold',
          spend: 'from €301',
          cashback: '7%',
          benefits: [
            'Premium cashback rate',
            'Free delivery for orders over €50',
            'Exclusive tasting events',
            'Personal cake consultation',
          ],
        },
      },
    },
    services: {
      customerCard: {
        title: 'Customer Card',
        description: 'Collect points & secure benefits.',
        button: 'Learn more',
      },
      gutscheine: {
        title: 'Vouchers',
        description: 'Give the gift of enjoyment – for any occasion.',
        button: 'Learn more',
      },
      app: {
        title: 'App',
        description: 'Order, save & enjoy digitally.',
        button: 'Learn more',
      },
      noventaPlus: {
        title: 'Noventa Plus',
        description: 'Exclusive club benefits & events.',
        button: 'Learn more',
      },
    },
  },
}

const rewardTiers = [
  {
    name: 'bronze',
    icon: FaAward,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-200 dark:border-amber-700/50',
  },
  {
    name: 'silver',
    icon: FaGem,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-900/20',
    borderColor: 'border-gray-200 dark:border-gray-700/50',
  },
  {
    name: 'gold',
    icon: FaCrown,
    color: 'from-yellow-400 to-amber-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-700/50',
  },
]

const services = [
  {
    id: 'customerCard',
    icon: FaCreditCard,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700/50',
  },
  {
    id: 'gutscheine',
    icon: FaGift,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    borderColor: 'border-pink-200 dark:border-pink-700/50',
  },
  {
    id: 'app',
    icon: FaMobileAlt,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-700/50',
  },
  {
    id: 'noventaPlus',
    icon: FaStar,
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-700/50',
  },
]

export default function BonusPage() {
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
              <FaStar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                {language === 'de' ? 'Bonusprogramm' : 'Bonus Program'}
              </span>
            </motion.div>

            <h1 className="mb-4 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t.title}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <FaCreditCard className="h-4 w-4" />
                <span>{language === 'de' ? 'Punkte sammeln' : 'Collect points'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGift className="h-4 w-4" />
                <span>{language === 'de' ? 'Exklusive Vorteile' : 'Exclusive benefits'}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCrown className="h-4 w-4" />
                <span>{language === 'de' ? 'Premium Stufen' : 'Premium tiers'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {language === 'de' ? 'Unsere Services' : 'Our Services'}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
              {t.overview}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`h-full rounded-2xl border ${service.borderColor} ${service.bgColor} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="text-center">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-xl ${service.bgColor} mb-4 shadow-lg transition-all duration-300 group-hover:scale-110`}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-white">
                      {t.services[service.id as keyof typeof t.services].title}
                    </h3>

                    <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-300">
                      {t.services[service.id as keyof typeof t.services].description}
                    </p>

                    <motion.a
                      href={`/services/${service.id === 'customerCard' ? 'kundenkarte' : service.id === 'noventaPlus' ? 'noventa-plus' : service.id === 'gutscheine' ? 'gutscheine' : service.id}`}
                      className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:shadow-xl active:scale-95 dark:bg-orange-600 dark:hover:bg-orange-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t.services[service.id as keyof typeof t.services].button}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-orange-600/5 to-yellow-600/5 py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-neutral-900 sm:text-4xl dark:text-white">
              {t.rewardTiers.title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
              {t.rewardTiers.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {rewardTiers.map((tier, index) => {
              const Icon = tier.icon
              const tierData = t.rewardTiers.tiers[tier.name as keyof typeof t.rewardTiers.tiers]

              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div
                    className={`h-full rounded-2xl border ${tier.borderColor} ${tier.bgColor} p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
                  >
                    {}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${tier.color} text-white shadow-lg`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className="pt-4 text-center">
                      <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-white">
                        {tierData.name}
                      </h3>

                      <div className="mb-6">
                        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
                          {language === 'de' ? 'Umsatz' : 'Spending'}
                        </p>
                        <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {tierData.spend}
                        </p>
                      </div>

                      <div className="mb-8">
                        <div
                          className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r ${tier.color} px-6 py-3 text-white shadow-lg`}
                        >
                          <span className="text-2xl font-bold">{tierData.cashback}</span>
                          <span className="ml-2 text-sm font-medium">
                            {language === 'de' ? 'Cashback' : 'Cashback'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">
                          {language === 'de' ? 'Vorteile' : 'Benefits'}
                        </h4>
                        <ul className="space-y-3 text-left">
                          {tierData.benefits.map((benefit, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                            >
                              <div
                                className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${tier.color} flex-shrink-0`}
                              />
                              <span className="text-break-words">{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
