'use client'

import { formatDistanceToNow } from 'date-fns'
import { de, enUS } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, MessageSquare, Star, ThumbsDown, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { ReviewImages } from '@/components/reviews/ReviewImages'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader } from '@/lib/components/ui/card'

interface Review {
  _id: string
  title: string
  content: string
  rating: number
  images: Array<{
    imageUrl: string
    altText?: string
    order?: number
  }>
  likes: string[]
  dislikes: string[]
  totalComments: number
  createdAt: string
  productId: {
    _id: string
    name: string
    imageUrl?: string
    category: string
  }
}

interface UserReviewsProps {
  userId: string
  initialReviews: Review[]
  initialPagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export function UserReviews({ userId, initialReviews, initialPagination }: UserReviewsProps) {
  const { language } = useLanguageStore()
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [pagination, setPagination] = useState(initialPagination)
  const [isLoading, setIsLoading] = useState(false)

  const loadPage = async (page: number) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/users/profile/${userId}/reviews?page=${page}&limit=${pagination.limit}`)
      
      if (response.ok) {
        const data = await response.json()
        setReviews(data.reviews)
        setPagination(data.pagination)
      }
    } catch (error) {
      console.error('Error loading reviews:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (date: string) => {
    return formatDistanceToNow(new Date(date), { 
      addSuffix: true, 
      locale: language === 'de' ? de : enUS 
    })
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">
          {language === 'de' ? 'Noch keine Bewertungen' : 'No reviews yet'}
        </div>
        <Button asChild>
          <Link href="/reviews/new">
            {language === 'de' ? 'Erste Bewertung schreiben' : 'Write your first review'}
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review._id} className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(review.createdAt)}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <Link href={`/reviews/${review._id}`}>
                    <Button variant="outline" size="sm">
                      {language === 'de' ? 'Bewertung' : 'Review'}
                    </Button>
                  </Link>
                  
                  {review.productId && review.productId._id && (
                    <Link href={`/products/${review.productId._id}`}>
                      <Button variant="outline" size="sm">
                        {language === 'de' ? 'Produkt' : 'Product'}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {}
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {review.productId.imageUrl && (
                  <Image
                    width={48}
                    height={48}
                    src={review.productId.imageUrl}
                    alt={review.productId.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-[#D72638] dark:text-[#FFA5A5] truncate">
                    {review.productId.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.productId.category}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="text-xs"
                >
                  <Link href={`/products/${review.productId._id}`}>
                    {language === 'de' ? 'Ansehen' : 'View'}
                  </Link>
                </Button>
              </div>

              {}
              <Link href={`/reviews/${review._id}`} className="hover:underline">
                <h3 className="font-semibold text-lg text-[#D72638] dark:text-[#FFA5A5]">
                  {review.title}
                </h3>
              </Link>

              {}
              <p className="text-sm text-muted-foreground leading-relaxed break-words overflow-wrap-anywhere">
                {review.content}
              </p>

              {}
              {review.images && review.images.length > 0 && (
                <ReviewImages images={review.images} />
              )}

              {}
              <div className="flex items-center gap-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{review.likes.length}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <ThumbsDown className="h-4 w-4" />
                  <span>{review.dislikes.length}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>{review.totalComments}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {}
      {pagination.pages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => loadPage(pagination.page - 1)}
            disabled={pagination.page <= 1 || isLoading}
          >
            <ChevronLeft className="h-4 w-4" />
            {language === 'de' ? 'Zurück' : 'Previous'}
          </Button>
          
          <div className="flex items-center gap-1">
            {[...Array(pagination.pages)].map((_, i) => {
              const page = i + 1
              const isCurrent = page === pagination.page
              const isNearCurrent = Math.abs(page - pagination.page) <= 1
              const isFirst = page === 1
              const isLast = page === pagination.pages
              
              if (isCurrent || isNearCurrent || isFirst || isLast) {
                return (
                  <Button
                    key={page}
                    variant={isCurrent ? "default" : "outline"}
                    size="sm"
                    onClick={() => loadPage(page)}
                    disabled={isLoading}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                )
              } else if (page === pagination.page - 2 || page === pagination.page + 2) {
                return <span key={page} className="px-2">...</span>
              }
              return null
            })}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => loadPage(pagination.page + 1)}
            disabled={pagination.page >= pagination.pages || isLoading}
          >
            {language === 'de' ? 'Weiter' : 'Next'}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {}
      {isLoading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#D72638] mx-auto"></div>
        </div>
      )}
    </div>
  )
} 