'use client'

import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { de, enUS } from 'date-fns/locale'
import { ArrowLeft, Edit, MessageCircle, Star, ThumbsDown, ThumbsUp, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

import { useLanguageStore } from '@/app/store/languageStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Badge } from '@/lib/components/ui/badge'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader } from '@/lib/components/ui/card'

import CommentSection from './CommentSection'
import { ReviewImages } from './ReviewImages'

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
  userId: {
    clerkId: string
    displayName: string
    avatar?: string
    imageUrl?: string
    isVerified?: boolean
  }
  productId: {
    _id: string
    name: string
    imageUrl?: string
    category: string
  }
}

const translations = {
  de: {
    backToReviews: 'Zurück zu Bewertungen',
    reviewBy: 'Bewertung von',
    product: 'Produkt',
    rating: 'Bewertung',
    comments: 'Kommentare',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    deleteConfirm: 'Sind Sie sicher, dass Sie diese Bewertung löschen möchten?',
    deleteSuccess: 'Bewertung erfolgreich gelöscht',
    deleteError: 'Fehler beim Löschen der Bewertung',
    like: 'Gefällt mir',
    dislike: 'Gefällt mir nicht',
    likeSuccess: 'Bewertung geliked',
    dislikeSuccess: 'Bewertung nicht gemocht',
    reactionError: 'Fehler bei der Reaktion',
  },
  en: {
    backToReviews: 'Back to reviews',
    reviewBy: 'Review by',
    product: 'Product',
    rating: 'Rating',
    comments: 'Comments',
    edit: 'Edit',
    delete: 'Delete',
    deleteConfirm: 'Are you sure you want to delete this review?',
    deleteSuccess: 'Review deleted successfully',
    deleteError: 'Failed to delete review',
    like: 'Like',
    dislike: 'Dislike',
    likeSuccess: 'Review liked',
    dislikeSuccess: 'Review disliked',
    reactionError: 'Failed to react to review',
  },
}

interface ReviewDetailProps {
  review: Review
}

export function ReviewDetail({ review }: ReviewDetailProps) {
  const { user } = useUser()
  const { language } = useLanguageStore()
  const t = translations[language]
  const [showComments, setShowComments] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const isOwnReview = user?.id === review.userId.clerkId
  const hasLiked = review.likes.includes(user?.id || '')
  const hasDisliked = review.dislikes.includes(user?.id || '')

  const handleReaction = async (type: 'like' | 'dislike') => {
    if (!user) {
      toast.error('Please sign in to react to reviews')
      return
    }

    try {
      const response = await fetch(`/api/reviews/${review._id}/reactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type }),
      })

      if (response.ok) {
        toast.success(type === 'like' ? t.likeSuccess : t.dislikeSuccess)
      
        window.location.reload()
      } else {
        toast.error(t.reactionError)
      }
    } catch (error) {
      console.error('Reaction error:', error)
      toast.error(t.reactionError)
    }
  }

  const handleDelete = async () => {
    if (!confirm(t.deleteConfirm)) return

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/reviews/${review._id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success(t.deleteSuccess)
        window.location.href = '/reviews'
      } else {
        const data = await response.json()
        toast.error(data.error || t.deleteError)
      }
    } catch (error) {
      console.error('Delete error:', error)
      toast.error(t.deleteError)
    } finally {
      setIsDeleting(false)
    }
  }

  const formatDate = (date: string) => {
    const locale = language === 'de' ? de : enUS
    return format(new Date(date), 'PPP', { locale })
  }

  return (
    <div className="space-y-6">
      {}
      <div>
        <Button variant="ghost" asChild>
          <Link href="/reviews" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t.backToReviews}
          </Link>
        </Button>
      </div>

      {}
      <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={review.userId.avatar || review.userId.imageUrl} alt={review.userId.displayName} />
                <AvatarFallback className="bg-[#FFF5E1] text-[#D72638] dark:bg-[#2a2a2a] dark:text-[#FFA5A5]">
                  {review.userId.displayName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                    {review.userId.displayName}
                  </h3>
                  {review.userId.isVerified && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {language === 'de' ? 'Verifiziert' : 'Verified'}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.reviewBy} {review.userId.displayName} • {formatDate(review.createdAt)}
                </p>
              </div>
            </div>
            
            {isOwnReview && (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/reviews/${review._id}/edit`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {}
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            {review.productId.imageUrl && (
              <Image 
                src={review.productId.imageUrl} 
                alt={review.productId.name}
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground">{t.product}</p>
              <Link 
                href={`/products/${review.productId._id}`}
                className="font-medium text-[#D72638] dark:text-[#FFA5A5] hover:underline truncate block"
              >
                {review.productId.name}
              </Link>
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {review.rating}/5 {t.rating}
            </span>
          </div>

          {}
          <div>
            <h2 className="text-xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">
              {review.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 break-words overflow-wrap-anywhere leading-relaxed">
              {review.content}
            </p>
          </div>

          {}
          {review.images && review.images.length > 0 && (
            <ReviewImages images={review.images} />
          )}

          {}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction('like')}
                className={`flex items-center gap-1 ${
                  hasLiked ? 'text-blue-600' : ''
                }`}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{review.likes.length}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction('dislike')}
                className={`flex items-center gap-1 ${
                  hasDisliked ? 'text-red-600' : ''
                }`}
              >
                <ThumbsDown className="h-4 w-4" />
                <span>{review.dislikes.length}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-1"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{review.totalComments} {t.comments}</span>
              </Button>
            </div>
          </div>

          {}
          {showComments && (
            <div className="pt-4 border-t">
              <CommentSection reviewId={review._id} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
} 