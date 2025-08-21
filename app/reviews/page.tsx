'use client'

import { Filter,Star } from 'lucide-react'
import Link from 'next/link'
import { Suspense, useEffect, useMemo, useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { reviewsTranslations } from '@/app/translations'
import { ReviewsList } from '@/components/reviews/ReviewsList'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'

export default function ReviewsPage() {
  const { language } = useLanguageStore()
  const t = reviewsTranslations[language as keyof typeof reviewsTranslations] || reviewsTranslations.en


  const [minRating, setMinRating] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')
  const [dateRange, setDateRange] = useState<string>('')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [withPhotos, setWithPhotos] = useState(false)
  const [withComments, setWithComments] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort] = useState<'newest' | 'rating_desc' | 'rating_asc'>('newest')


  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const [totalVerified, setTotalVerified] = useState(0)
  const [totalWithPhotos, setTotalWithPhotos] = useState(0)


  const statsQuery = useMemo(() => {
    const params = new URLSearchParams()
    if (minRating) params.set('minRating', String(minRating))
    if (category) params.set('category', category)
    if (dateRange) params.set('dateRange', dateRange)
    if (verifiedOnly) params.set('verified', 'true')
    if (withPhotos) params.set('withPhotos', 'true')
    if (withComments) params.set('withComments', 'true')
    if (searchQuery) params.set('search', searchQuery)
    params.set('limit', '1')
    return params.toString()
  }, [minRating, category, dateRange, verifiedOnly, withPhotos, withComments, searchQuery])

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetch(`/api/reviews/stats?${statsQuery}`)
        if (!res.ok) return
        const data = await res.json()
        setTotal(data.total || 0)
        setAvg(data.avgRating || 0)
        setTotalVerified(data.totalVerified || 0)
        setTotalWithPhotos(data.totalWithPhotos || 0)
      } catch {
        console.error('Error loading stats')
      }
    }
    loadStats()
  }, [statsQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">
            {t.reviews}
          </h1>
          <p className="text-muted-foreground">
            {language === 'de' ? 'Kundenbewertungen unserer Produkte' : 'Customer reviews of our products'}
          </p>
        </div>

        {}
        <Card>
          <CardHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  {language === 'de' ? 'Filter & Sortierung' : 'Filters & Sorting'}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">{t.filters}</span>
                </div>
              </div>
              
              {}
              <div className="flex items-center gap-2 text-sm">
                <label className="font-medium">{language === 'de' ? 'Sortierung:' : 'Sort by:'}</label>
                <select
                  className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 bg-white dark:bg-gray-800"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as 'newest' | 'rating_desc' | 'rating_asc')}
                >
                  <option value="newest">{t.sortNewest}</option>
                  <option value="rating_desc">{t.sortRatingDesc}</option>
                  <option value="rating_asc">{t.sortRatingAsc}</option>
                </select>
              </div>
                            <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'de' ? 'Suche' : 'Search'}</label>
                <input
                  type="text"
                  placeholder={language === 'de' ? 'Nach Bewertungen suchen...' : 'Search reviews...'}
                  className="w-full text-sm border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 bg-white dark:bg-gray-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
              {}
              <div className="space-y-2">
                <label className="text-sm font-medium">{t.rating}</label>
                <div className="flex flex-wrap items-center gap-2">
                  {[5, 4, 3, 2, 1].map((r) => (
                    <button
                      key={r}
                      className={`flex items-center gap-1 text-sm transition-colors ${minRating === r ? 'text-[#D72638] dark:text-[#FFA5A5]' : 'text-muted-foreground hover:text-[#D72638] dark:hover:text-[#FFA5A5]'}`}
                      onClick={() => setMinRating(minRating === r ? null : r)}
                      aria-pressed={minRating === r}
                    >
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {r}+
                    </button>
                  ))}
                </div>
              </div>

              {}
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'de' ? 'Kategorie' : 'Category'}</label>
                <select
                  className="w-full text-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">{language === 'de' ? 'Alle Kategorien' : 'All Categories'}</option>
                  <option value="brot">{language === 'de' ? 'Brot' : 'Bread'}</option>
                  <option value="broetchen">{language === 'de' ? 'Brötchen' : 'Rolls'}</option>
                  <option value="fruehstuecksgebaeck">{language === 'de' ? 'Frühstücksgebäck' : 'Breakfast Pastries'}</option>
                  <option value="feingebaeck">{language === 'de' ? 'Feingebäck' : 'Fine Pastries'}</option>
                  <option value="snack">{language === 'de' ? 'Snack' : 'Snack'}</option>
                </select>
              </div>

              {}
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'de' ? 'Datum' : 'Date'}</label>
                <select
                  className="w-full text-sm border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-800"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="">{language === 'de' ? 'Jederzeit' : 'Any time'}</option>
                  <option value="today">{language === 'de' ? 'Heute' : 'Today'}</option>
                  <option value="week">{language === 'de' ? 'Diese Woche' : 'This week'}</option>
                  <option value="month">{language === 'de' ? 'Diesen Monat' : 'This month'}</option>
                  <option value="year">{language === 'de' ? 'Dieses Jahr' : 'This year'}</option>
                </select>
              </div>

              {}
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === 'de' ? 'Typ' : 'Type'}</label>
                <div className="space-y-1">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} />
                    {t.verifiedBuyer}
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" checked={withPhotos} onChange={(e) => setWithPhotos(e.target.checked)} />
                    {language === 'de' ? 'Mit Fotos' : 'With photos'}
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" checked={withComments} onChange={(e) => setWithComments(e.target.checked)} />
                    {language === 'de' ? 'Mit Kommentaren' : 'With comments'}
                  </label>
                </div>
              </div>

              {}
              <div className="flex items-end">
                <Button asChild className="px-10 text-center text-sm">
                  <Link href="/reviews/new" className="flex items-center">
                    <Star className="h-4 w-4" />
                    {t.addReview}
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{total}</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Bewertungen gesamt' : 'Total reviews'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{avg.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Durchschnittliche Bewertung' : 'Average rating'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{totalVerified}</div>
              <div className="text-sm text-muted-foreground">{t.verifiedBuyer}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{totalWithPhotos}</div>
              <div className="text-sm text-muted-foreground">{language === 'de' ? 'Bewertungen mit Fotos' : 'Reviews with photos'}</div>
            </CardContent>
          </Card>
        </div>

        {}
        <Suspense fallback={<ReviewsSkeleton />}>
          <ReviewsList
            minRating={minRating || undefined}
            category={category || undefined}
            dateRange={dateRange || undefined}
            verifiedOnly={verifiedOnly}
            withPhotos={withPhotos}
            withComments={withComments}
            searchQuery={searchQuery}
            sort={sort}
          />
        </Suspense>
      </div>
    </div>
  )
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 