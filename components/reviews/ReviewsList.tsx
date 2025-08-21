'use client'

import { ChevronDown, Loader2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent } from '@/lib/components/ui/card'

import ReviewCard from './ReviewCard'

interface ReviewsListProps {
  productId?: string
  userId?: string
  minRating?: number | null
  category?: string
  dateRange?: string
  verifiedOnly?: boolean
  withPhotos?: boolean
  withComments?: boolean
  searchQuery?: string
  sort?: 'newest' | 'rating_desc' | 'rating_asc'
}

interface ReviewWithRelations {
  _id: string
  productId: {
    _id: string
    name: string
    imageUrl?: string
    category?: string
  }
  userId: {
    _id: string
    displayName?: string
    avatar?: string
    isVerified?: boolean
    clerkId: string
  }
  rating: number
  title: string
  content: string
  images: Array<{
    imageUrl: string
    altText?: string
    order: number
  }>
  likes: string[]
  dislikes: string[]
  totalComments: number
  isVerified: boolean
  isModerated: boolean
  createdAt: string
  updatedAt: string
  userReaction?: 'like' | 'dislike' | null
}

export function ReviewsList({ productId, userId, minRating, category, dateRange, verifiedOnly, withPhotos, withComments, searchQuery, sort = 'newest' }: ReviewsListProps) {
  const [reviews, setReviews] = useState<ReviewWithRelations[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [total, setTotal] = useState(0)
  const limit = 10

  const loadReviews = useCallback(async () => {
    try {
      setIsLoading(true)
      
      const params = new URLSearchParams()
      params.set('page', String(page))
      params.set('limit', String(limit))
      if (minRating) params.set('minRating', String(minRating))
      if (category) params.set('category', category)
      if (dateRange) params.set('dateRange', dateRange)
      if (verifiedOnly) params.set('verified', 'true')
      if (withPhotos) params.set('withPhotos', 'true')
      if (withComments) params.set('withComments', 'true')
      if (searchQuery) params.set('search', searchQuery)
      if (sort) params.set('sort', sort)

      let url = `/api/reviews?${params.toString()}`
      if (productId) {
        url = `/api/reviews?productId=${productId}&${params.toString()}`
      }
      if (userId) {
        url = `/api/reviews?userId=${userId}&${params.toString()}`
      }

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Failed to fetch reviews')
      }

      const data = await response.json()
      
      if (page === 1) {
        setReviews(data.reviews)
      } else {
        setReviews(prev => [...prev, ...data.reviews])
      }
      
      setTotal(data.pagination?.total || data.total)
      setHasMore(data.pagination?.pages > page || data.hasMore)
    } catch (error) {
      console.error('Error loading reviews:', error)
    } finally {
      setIsLoading(false)
    }
  }, [page, productId, userId, minRating, category, dateRange, verifiedOnly, withPhotos, withComments, searchQuery, sort, limit])

  useEffect(() => {
    loadReviews()
  }, [loadReviews])


  useEffect(() => {
    setPage(1)
  }, [minRating, category, dateRange, verifiedOnly, withPhotos, withComments, searchQuery, sort, productId, userId])

  const handleLoadMore = () => {
    setPage(prev => prev + 1)
  }

  const handleReviewDelete = (reviewId: string) => {
    setReviews(prev => prev.filter(review => review._id !== reviewId))
    setTotal(prev => Math.max(0, prev - 1))
  }

  if (isLoading && page === 1) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-[#D72638] dark:text-[#FFA5A5]" />
      </div>
    )
  }

  if (reviews.length === 0 && !isLoading) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-6xl">📝</div>
            <h3 className="text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5]">
              No reviews yet
            </h3>
            <p className="text-muted-foreground">
              {productId 
                ? 'Be the first to leave a review for this product!'
                : 'Reviews will appear here when users start adding them.'
              }
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            review={{
              ...review,
              userId: {
                ...review.userId,
                clerkId: review.userId.clerkId ?? '',
                displayName: review.userId.displayName ?? 'Anonymous',
              },
              productId: (() => { // Null-safe product access
                const p = review.productId as { _id: string; name: string; imageUrl: string; category: string } | null
                const fallback = { _id: '', name: 'Unknown product', imageUrl: '', category: '' }
                const merged = { ...(p || fallback) }
                if (!merged.category) merged.category = ''
                return merged
              })()
            }}
            onDelete={handleReviewDelete}
          />
        ))}
      </div>

      {}
      {hasMore && (
        <div className="flex items-center justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={isLoading}
            variant="outline"
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Load more
              </>
            )}
          </Button>
        </div>
      )}

      {}
      {total > 0 && (
        <div className="text-center text-sm text-muted-foreground">
            Showing {reviews.length} of {total} reviews
        </div>
      )}
    </div>
  )
} 