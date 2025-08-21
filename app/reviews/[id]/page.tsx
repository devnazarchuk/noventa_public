import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { ReviewDetail } from '@/components/reviews/ReviewDetail'
import { ReviewDetailSkeleton } from '@/components/reviews/ReviewDetailSkeleton'

interface ReviewPageProps {
  params: Promise<{
    id: string
  }>
}

async function getReview(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/reviews/${id}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      return null
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching review:', error)
    return null
  }
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params
  
  const data = await getReview(id)
  
  if (!data) {
    notFound()
  }
  
  const { review } = data

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Suspense fallback={<ReviewDetailSkeleton />}>
          <ReviewDetail review={review} />
        </Suspense>
      </div>
    </div>
  )
} 