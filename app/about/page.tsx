'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaAppleAlt,
  FaAward,
  FaHandshake,
  FaHeart,
  FaHistory,
  FaNewspaper,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'
import { CardGrid } from '@/components/ui/CardGrid'
import { PageWrapper } from '@/components/ui/PageWrapper'

type Translations = {
  de: {
    title: string
    subtitle: string
    description: string
    stats: {
      years: string
      stores: string
      masters: string
      employees: string
    }
    cards: {
      history: {
        title: string
        description: string
      }
      masterBakers: {
        title: string
        description: string
      }
      freshnessPromise: {
        title: string
        description: string
      }
      nutrition: {
        title: string
        description: string
      }
      press: {
        title: string
        description: string
      }
      clubs: {
        title: string
        description: string
      }
      fitnessBakers: {
        title: string
        description: string
      }
    }
  }
  en: {
    title: string
    subtitle: string
    description: string
    stats: {
      years: string
      stores: string
      masters: string
      employees: string
    }
    cards: {
      history: {
        title: string
        description: string
      }
      masterBakers: {
        title: string
        description: string
      }
      freshnessPromise: {
        title: string
        description: string
      }
      nutrition: {
        title: string
        description: string
      }
      press: {
        title: string
        description: string
      }
      clubs: {
        title: string
        description: string
      }
      fitnessBakers: {
        title: string
        description: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    title: 'Über Uns',
    subtitle: 'Tradition trifft Innovation',
    description:
      'Seit 1928 backen wir mit Leidenschaft und Liebe zum Detail. Als Familienunternehmen in der 7. Generation verbinden wir traditionelle Rezepte mit modernster Technologie, um Ihnen täglich frische, handgefertigte Backwaren zu bieten.',
    stats: {
      years: 'Jahre Tradition',
      stores: 'Filialen',
      masters: 'Bäckermeister',
      employees: 'Mitarbeiter',
    },
    cards: {
      history: {
        title: 'Unsere Geschichte',
        description: 'Von bescheidenen Anfängen bis heute – unsere Bäckertradition.',
      },
      masterBakers: {
        title: 'Meisterbäcker',
        description: 'Lernen Sie unsere Bäckermeister und ihr Handwerk kennen.',
      },
      freshnessPromise: {
        title: 'Frische-Versprechen',
        description: 'Unsere Garantie für tägliche Frische.',
      },
      nutrition: {
        title: 'Ernährung',
        description: 'Ausgewogen, gesund und lecker.',
      },
      press: {
        title: 'Presse',
        description: 'Neuigkeiten, Auszeichnungen und Medienberichte.',
      },
      clubs: {
        title: 'Clubs',
        description: 'Werden Sie Teil unserer Bäckerei-Community.',
      },
      fitnessBakers: {
        title: 'Fitnessbäcker',
        description: 'Entdecken Sie unsere Fitnessbäcker und ihre Ernährung.',
      },
    },
  },
  en: {
    title: 'About Us',
    subtitle: 'Tradition Meets Innovation',
    description:
      'Since 1928, we have been baking with passion and attention to detail. As a family business in the 7th generation, we combine traditional recipes with cutting-edge technology to offer you fresh, handcrafted baked goods daily.',
    stats: {
      years: 'Years of Tradition',
      stores: 'Stores',
      masters: 'Master Bakers',
      employees: 'Employees',
    },
    cards: {
      history: {
        title: 'Our History',
        description: 'From humble beginnings to today – our baking tradition.',
      },
      masterBakers: {
        title: 'Master Bakers',
        description: 'Get to know our master bakers and their craft.',
      },
      freshnessPromise: {
        title: 'Freshness Promise',
        description: 'Our guarantee for daily freshness.',
      },
      nutrition: {
        title: 'Nutrition',
        description: 'Balanced, healthy, and delicious.',
      },
      press: {
        title: 'Press',
        description: 'News, awards, and media coverage.',
      },
      clubs: {
        title: 'Clubs',
        description: 'Become part of our bakery community.',
      },
      fitnessBakers: {
        title: 'Fitness Bakers',
        description: 'Discover our fitness bakers and their nutrition.',
      },
    },
  },
}

const aboutCards = [
  {
    title: 'history',
    description: 'history',
    icon: <FaHistory className="text-white" size={32} />,
    href: '/about/history',
    image: '/soft-images/history.jpg',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'masterBakers',
    description: 'masterBakers',
    icon: <FaUserTie className="text-white" size={32} />,
    href: '/about/master-bakers',
    image: '/soft-images/about-baker.jpg',
    color: 'from-red-700 to-red-900',
  },
  {
    title: 'freshnessPromise',
    description: 'freshnessPromise',
    icon: <FaHandshake className="text-white" size={32} />,
    href: '/about/freshness-promise',
    image: '/soft-images/frische-versprechen.jpg',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'nutrition',
    description: 'nutrition',
    icon: <FaAppleAlt className="text-white" size={32} />,
    href: '/about/nutrition',
    image: '/soft-images/healthy.jpg',
    color: 'from-red-700 to-red-900',
  },
  {
    title: 'press',
    description: 'press',
    icon: <FaNewspaper className="text-white" size={32} />,
    href: '/about/press',
    image: '/soft-images/Noventa_painting.webp',
    color: 'from-red-600 to-red-800',
  },
  {
    title: 'clubs',
    description: 'clubs',
    icon: <FaAward className="text-white" size={32} />,
    href: '/about/clubs',
    image: '/soft-images/noventa-plus.jpg',
    color: 'from-red-700 to-red-900',
  },
  {
    title: 'fitnessBakers',
    description: 'fitnessBakers',
    icon: <FaHeart className="text-white" size={32} />,
    href: '/fitness-baker',
    image: '/images/Fitnessbaecker-Baeckerei-Noventa-1600x1080.jpg',
    color: 'from-red-600 to-red-800',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function AboutPage() {
  const language = useLanguageStore((state) => state.language)

  return (
    <>
      <head>
        <link
          rel="preload"
          href="/fonts/SF-Pro-Display-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/soft-images/history.jpg"
          as="image"
          imageSrcSet="/soft-images/history.jpg 1x"
        />
      </head>
      <PageWrapper className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-4 py-12 md:px-6 lg:px-8"
        >
          {}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl"
            >
              <FaHeart className="h-10 w-10" />
            </motion.div>
            <h1
              className="mb-4 text-5xl font-bold text-[#EE0A24] md:text-6xl lg:text-7xl dark:text-[#EE0A24]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {translations[language].title}
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-gray-600 md:text-3xl dark:text-gray-300">
              {translations[language].subtitle}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 md:text-xl dark:text-gray-300">
              {translations[language].description}
            </p>
          </motion.div>

          {}
          <motion.div
            variants={itemVariants}
            className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8"
          >
            {[
              {
                number: '97',
                label: translations[language].stats.years,
                icon: <FaHistory className="h-6 w-6" />,
              },
              {
                number: '160+',
                label: translations[language].stats.stores,
                icon: <FaUsers className="h-6 w-6" />,
              },
              {
                number: '10',
                label: translations[language].stats.masters,
                icon: <FaUserTie className="h-6 w-6" />,
              },
              {
                number: '1900+',
                label: translations[language].stats.employees,
                icon: <FaHeart className="h-6 w-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group rounded-2xl bg-white/80 p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800/80"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#EE0A24] md:text-4xl dark:text-[#EE0A24]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 md:text-base dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {}
          <motion.div variants={itemVariants}>
            <CardGrid>
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link href={card.href} className="block">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className={`group relative overflow-hidden rounded-3xl border-0 bg-white p-0 text-[#232323] shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:bg-[#232323] dark:text-white`}
                    >
                      {card.image && (
                        <div className="relative h-48 w-full overflow-hidden md:h-56">
                          <Image
                            src={card.image}
                            alt={
                              translations[language].cards[
                                card.title as keyof typeof translations.de.cards
                              ].title
                            }
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                      )}

                      {}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                      />

                      {}
                      <div className="p-6">
                        {}
                        <div className="mb-2 flex justify-center">
                          <div className="rounded-full bg-gradient-to-br from-red-800 to-red-900 p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                            {card.icon}
                          </div>
                        </div>

                        <h3 className="mb-2 text-xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                          {
                            translations[language].cards[
                              card.title as keyof typeof translations.de.cards
                            ].title
                          }
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300">
                          {
                            translations[language].cards[
                              card.title as keyof typeof translations.de.cards
                            ].description
                          }
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </CardGrid>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </>
  )
}
