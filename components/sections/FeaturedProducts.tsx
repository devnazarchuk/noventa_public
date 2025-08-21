'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Heart, Image as ImageIcon, Plus, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const products = [
  {
    id: 1,
    name: 'Sourdough Artisan',
    price: '€6.50',
    originalPrice: '€7.20',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop&crop=center',
    badge: 'Bestseller',
    badgeColor: 'bg-green-500 text-white',
    rating: 4.9,
    reviews: 234,
    description: 'Traditional sourdough with a perfect crust',
    tags: ['Organic', 'Handmade'],
    discount: 10,
  },
  {
    id: 2,
    name: 'Butter Croissant',
    price: '€2.80',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center',
    badge: 'Fresh',
    badgeColor: 'bg-orange-500 text-white',
    rating: 4.8,
    reviews: 189,
    description: 'Flaky, buttery perfection every morning',
    tags: ['Fresh Daily', 'Premium'],
  },
  {
    id: 3,
    name: 'Chocolate Éclair',
    price: '€4.20',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center',
    badge: 'Limited',
    badgeColor: 'bg-purple-500 text-white',
    rating: 4.9,
    reviews: 156,
    description: 'Rich chocolate cream in delicate pastry',
    tags: ['Artisan', 'Premium'],
  },
  {
    id: 4,
    name: 'Cinnamon Roll',
    price: '€3.50',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop&crop=center',
    badge: 'Popular',
    badgeColor: 'bg-blue-500 text-white',
    rating: 4.7,
    reviews: 298,
    description: 'Warm, gooey, and perfectly spiced',
    tags: ['Comfort', 'Sweet'],
  },
]

export function FeaturedProducts() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <section className="to-primary-50/30 bg-gradient-to-br from-neutral-50 py-12 sm:py-16 lg:py-20 dark:from-neutral-900 dark:to-neutral-800">
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
            <Clock className="text-primary-600 dark:text-primary-400 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-primary-700 dark:text-primary-300 text-break-words text-xs font-medium sm:text-sm">
              {t.featuredProducts.badge}
            </span>
          </motion.div>

          <h2 className="font-display text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl text-gradient from-primary-600 to-primary-800 text-break-words mb-4 bg-gradient-to-r bg-clip-text font-bold text-transparent sm:mb-6">
            {t.featuredProducts.title}
          </h2>
          <p className="text-responsive-base sm:text-responsive-lg text-break-words mx-auto max-w-2xl px-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t.featuredProducts.description}
          </p>
        </motion.div>

        <motion.div
          className="grid-responsive-4 grid gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeInUp} className="group">
              <Card
                interactive
                className="h-full overflow-hidden bg-white transition-all duration-500 group-hover:-translate-y-3 hover:shadow-2xl dark:bg-neutral-800"
              >
                <div className="relative h-40 overflow-hidden sm:h-48">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700">
                      <div className="text-center">
                        <ImageIcon className="mx-auto mb-2 h-8 w-8 text-neutral-400 sm:h-12 sm:w-12 dark:text-neutral-500" />
                        <p className="text-break-words text-xs font-medium text-neutral-500 sm:text-sm dark:text-neutral-400">
                          {t.featuredProducts.noImageAvailable}
                        </p>
                        <p className="text-break-words text-xs text-neutral-400 dark:text-neutral-500">
                          {t.featuredProducts.noPhotoAvailable}
                        </p>
                      </div>
                    </div>
                  )}

                  {}
                  <div
                    className={`absolute top-2 left-2 rounded-full px-2 py-1 text-xs font-bold sm:top-3 sm:left-3 sm:px-3 ${product.badgeColor} text-break-words shadow-sm`}
                  >
                    {product.badge}
                  </div>

                  {}
                  {product.discount && (
                    <div className="absolute top-2 right-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white sm:top-3 sm:right-3">
                      -{product.discount}%
                    </div>
                  )}

                  {}
                  <motion.button
                    className="group-hover:bg-primary-600 absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:text-white sm:right-3 sm:bottom-3 sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.button>

                  {}
                  <motion.button
                    className="bg-primary-600 absolute bottom-2 left-2 flex h-8 w-8 items-center justify-center rounded-full text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 sm:bottom-3 sm:left-3 sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.button>
                </div>

                <div className="p-4 sm:p-5">
                  {}
                  <div className="mb-3 flex flex-wrap gap-1">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 border-primary-100 dark:border-primary-700/50 text-break-words rounded-full border px-2 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {}
                  <h3 className="font-display group-hover:text-primary-600 dark:group-hover:text-primary-400 text-break-words mb-2 text-base font-bold text-neutral-800 transition-colors sm:text-lg dark:text-neutral-200">
                    {product.name}
                  </h3>
                  <p className="text-break-words mb-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {product.description}
                  </p>

                  {}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i <= Math.floor(product.rating) ? 'fill-current text-yellow-400' : 'text-neutral-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {product.rating}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      ({product.reviews})
                    </span>
                  </div>

                  {}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-primary-600 dark:text-primary-400 text-base font-bold sm:text-lg">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through dark:text-neutral-500">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    className="group-hover:bg-primary-700 text-break-words mt-4 w-full transition-colors"
                    size="sm"
                  >
                    <span className="text-break-words">{t.featuredProducts.addToCart}</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button variant="ghost" size="lg" className="group">
            <Link href="/products" className="text-break-words flex items-center gap-2">
              <span className="text-break-words">{t.featuredProducts.viewAllProducts}</span>
              <Award className="h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
