'use client'

import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { de, enUS } from 'date-fns/locale'
import { Edit, ExternalLink, MessageCircle, ThumbsDown, ThumbsUp, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'

import { useLanguageStore } from '@/app/store/languageStore'
import AuthCard from '@/components/ui/AuthCard'
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

interface ReviewCardProps {
  review: Review
  onReactionChange?: (reviewId: string, reactionType: 'like' | 'dislike' | null) => void
  onEdit?: (review: Review) => void
  onDelete?: (reviewId: string) => void
}

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewCard({ review, onReactionChange, onEdit, onDelete }: ReviewCardProps) {
  const { user, isSignedIn } = useUser()
  const { language } = useLanguageStore()
  const [showComments, setShowComments] = useState(false)
  const [showAuthCard, setShowAuthCard] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const isAuthor = isSignedIn && user?.id === review.userId?.clerkId
  const [likes, setLikes] = useState<number>(review.likes?.length || 0)
  const [dislikes, setDislikes] = useState<number>(review.dislikes?.length || 0)
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(
    (review as { userReaction?: 'like' | 'dislike' | null }).userReaction ?? (user?.id && review.likes?.includes(user.id) ? 'like' : user?.id && review.dislikes?.includes(user.id) ? 'dislike' : null)
  )

  const handleReaction = async (reactionType: 'like' | 'dislike' | null) => {
    if (!isSignedIn) {
      setShowAuthCard(true)
      return
    }

    try {
    
      const prev = { userReaction, likes, dislikes }
      if (reactionType === 'like') {
        if (userReaction === 'like') {
        
          setUserReaction(null)
          setLikes(likes - 1)
        } else {
          setUserReaction('like')
          setLikes(likes + 1)
          if (userReaction === 'dislike') setDislikes(dislikes - 1)
        }
      } else if (reactionType === 'dislike') {
        if (userReaction === 'dislike') {
          setUserReaction(null)
          setDislikes(dislikes - 1)
        } else {
          setUserReaction('dislike')
          setDislikes(dislikes + 1)
          if (userReaction === 'like') setLikes(likes - 1)
        }
      } else {
        if (userReaction === 'like') setLikes(likes - 1)
        if (userReaction === 'dislike') setDislikes(dislikes - 1)
        setUserReaction(null)
      }

      const method = reactionType ? 'POST' : 'DELETE'
      const body = reactionType ? JSON.stringify({ reactionType }) : undefined

      const response = await fetch(`/api/reviews/${review._id}/reactions`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })

      if (response.ok) {
        onReactionChange?.(review._id, reactionType)
      } else {
      
        setUserReaction(prev.userReaction)
        setLikes(prev.likes)
        setDislikes(prev.dislikes)
        toast.error('Failed to update reaction')
      }
    } catch (error) {
      console.error('Reaction error:', error)
    
      setUserReaction(user?.id && review.likes?.includes(user.id) ? 'like' : user?.id && review.dislikes?.includes(user.id) ? 'dislike' : null)
      setLikes(review.likes?.length || 0)
      setDislikes(review.dislikes?.length || 0)
      toast.error('Failed to update reaction')
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this review?')) {
      return
    }

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/reviews/${review._id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        onDelete?.(review._id)
        toast.success('Review deleted successfully')
      } else {
        const error = await response.json()
        toast.error(error.error || 'Failed to delete review')
      }
    } catch (error) {
      console.error('Delete error:', error)
      toast.error('Failed to delete review')
    } finally {
      setIsDeleting(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const locale = language === 'de' ? de : enUS
    return format(date, 'MMM dd, yyyy', { locale })
  }

  return (
    <>
      <Card className="card shadow-responsive-md hover:shadow-responsive-lg transition-all duration-300 border border-border-light dark:border-border-light">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Avatar className="h-10 w-10 shadow-soft">
                <AvatarImage src={review.userId?.imageUrl} alt={review.userId?.displayName} />
                <AvatarFallback className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                  {review.userId?.displayName?.charAt(0)?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-sm sm:text-base text-foreground truncate">
                    {review.userId?.displayName || 'Anonymous'}
                  </h3>
                  {isAuthor && (
                    <Badge variant="secondary" className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                      {language === 'de' ? 'Du' : 'You'}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatDate(review.createdAt)}</span>
                  {review.productId && (
                    <>
                      <span>•</span>
                      <span className="truncate">{review.productId.name}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isAuthor && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit?.(review)}
                    className="h-8 w-8 p-0 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {}
          {review.productId && (
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
                <p className="text-xs text-muted-foreground">
                  {language === 'de' ? 'Produkt' : 'Product'}
                </p>
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
          )}

          {}
          <div className="flex items-center gap-2">
            <StarRating rating={review.rating} />
            <span className="text-sm text-muted-foreground">
              {review.rating}/5
            </span>
          </div>

          {}
          {review.title && (
            <div className="flex items-center justify-between">
              <Link href={`/reviews/${review._id}`} className="hover:underline">
                <h4 className="font-semibold text-base sm:text-lg text-foreground">
                  {review.title}
                </h4>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 w-8 p-0 hover:bg-primary-50 dark:hover:bg-primary-900/20"
              >
                <Link href={`/reviews/${review._id}`}>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}

          {}
          <p className="text-sm sm:text-base text-foreground leading-relaxed break-words overflow-wrap-anywhere">
            {review.content}
          </p>

          {}
          {review.images && review.images.length > 0 && (
            <ReviewImages images={review.images} />
          )}

          {}
          <div className="flex items-center justify-between pt-2 border-t border-border-light dark:border-border-light">
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction(userReaction === 'like' ? null : 'like')}
                className={`h-8 px-2 sm:px-3 transition-colors ${
                  userReaction === 'like'
                    ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
                    : 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400'
                }`}
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span className="text-xs sm:text-sm">{likes}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleReaction(userReaction === 'dislike' ? null : 'dislike')}
                className={`h-8 px-2 sm:px-3 transition-colors ${
                  userReaction === 'dislike'
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                    : 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400'
                }`}
              >
                <ThumbsDown className="h-4 w-4 mr-1" />
                <span className="text-xs sm:text-sm">{dislikes}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowComments(!showComments)}
                className="h-8 px-2 sm:px-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="text-xs sm:text-sm">{review.totalComments || 0}</span>
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-8 px-2 sm:px-3 text-xs sm:text-sm"
              >
                <a href={`/reviews/${review._id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                  {language === 'de' ? 'Bewertung' : 'Review'}
                </a>
              </Button>
              {review.productId && (
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 px-2 sm:px-3 text-xs sm:text-sm"
                >
                  <a href={`/products/${review.productId._id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                    {language === 'de' ? 'Produkt' : 'Product'}
                  </a>
                </Button>
              )}
            </div>
          </div>

          {}
          {showComments && (
            <div className="pt-4 border-t border-border-light dark:border-border-light">
              <CommentSection reviewId={review._id} />
            </div>
          )}
        </CardContent>
      </Card>

      {showAuthCard && (
        <AuthCard isOpen={showAuthCard} onClose={() => setShowAuthCard(false)} />
      )}
    </>
  )
} 