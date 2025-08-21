'use client'

import { ArrowLeft, Star, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useLanguageStore } from '@/app/store/languageStore'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader } from '@/lib/components/ui/card'

interface Product {
  _id: string
  name: string
  description: string
  category: string
  price: number
  imageUrl?: string
  averageRating: number
  totalReviews: number
  tags: string[]
  isActive: boolean
  createdAt: string
  updatedAt: string
}

const translations = {
  de: {
    backToProducts: 'Zurück zu Produkten',
    product: 'Produkt',
    category: 'Kategorie',
    price: 'Preis',
    rating: 'Bewertung',
    reviews: 'Bewertungen',
    description: 'Beschreibung',
    tags: 'Tags',
    noImage: 'Kein Bild verfügbar',
    noReviews: 'Noch keine Bewertungen',
    noTags: 'Keine Tags',
    writeReview: 'Bewertung schreiben',
    viewReviews: 'Bewertungen anzeigen',
    categories: {
      brot: 'Brot',
      broetchen: 'Brötchen',
      fruehstuecksgebaeck: 'Frühstücksgebäck',
      feingebaeck: 'Feingebäck',
      snack: 'Snack'
    }
  },
  en: {
    backToProducts: 'Back to products',
    product: 'Product',
    category: 'Category',
    price: 'Price',
    rating: 'Rating',
    reviews: 'Reviews',
    description: 'Description',
    tags: 'Tags',
    noImage: 'No image available',
    noReviews: 'No reviews yet',
    noTags: 'No tags',
    writeReview: 'Write review',
    viewReviews: 'View reviews',
    categories: {
      brot: 'Bread',
      broetchen: 'Rolls',
      fruehstuecksgebaeck: 'Breakfast Pastries',
      feingebaeck: 'Fine Pastries',
      snack: 'Snack'
    }
  }
}

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { language } = useLanguageStore()
  const t = translations[language]

  if (!product) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          {language === 'de' ? 'Produkt nicht gefunden' : 'Product not found'}
        </p>
      </div>
    )
  }



  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'de' ? 'de-DE' : 'en-US', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  return (
    <div className="space-y-6">
      {}
      <div>
        <Button variant="ghost" asChild className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <Link href="/products" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            <ArrowLeft className="h-4 w-4" />
            {t.backToProducts}
          </Link>
        </Button>
      </div>

      {}
      <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
        <CardHeader className="pb-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-[#D72638] dark:bg-[#FFA5A5] rounded-full"></div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                  {product.name}
                </h1>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {t.categories[product.category as keyof typeof t.categories] || product.category}
                </span>
                <span className="flex items-center gap-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  {formatPrice(product.price)}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {}
            <div className="lg:col-span-1">
              {product.imageUrl ? (
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">{t.noImage}</p>
                  </div>
                </div>
              )}
            </div>

            {}
            <div className="lg:col-span-2 space-y-6">
              {}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.averageRating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.averageRating.toFixed(1)}/5 ({product.totalReviews} {t.reviews})
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                    {formatPrice(product.price)}
                  </div>
                </div>
              </div>

              {}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#D72638] dark:text-[#FFA5A5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.description}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  {product.description}
                </p>
              </div>

              {}
              {product.tags && product.tags.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-[#D72638] dark:text-[#FFA5A5]" />
                    {t.tags}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {}
              <div className="flex gap-4 pt-6">
                <Button asChild className="bg-[#D72638] hover:bg-[#B91C2C] text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  <Link href={`/reviews/new?productId=${product._id}`}>
                    {t.writeReview}
                  </Link>
                </Button>
                <Button variant="outline" asChild className="px-8 py-3 text-base font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                  <Link href={`/reviews?productId=${product._id}`}>
                    {t.viewReviews}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href={`/products/${product.category}`}>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-3 bg-[#D72638] dark:bg-[#FFA5A5] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{t.category}</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{t.categories[product.category as keyof typeof t.categories] || product.category}</p>
              </div>
            </Link>
            
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{t.price}</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{formatPrice(product.price)}</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{t.rating}</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{product.averageRating.toFixed(1)}/5</p>
            </div>
            {}
            <Link href={`/reviews?productId=${product._id}`}>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{t.reviews}</p>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{product.totalReviews}</p>
            </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 


