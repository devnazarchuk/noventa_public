'use client'

import { Suspense } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { ReviewForm } from '@/components/reviews/ReviewForm'
import { Card, CardContent } from '@/lib/components/ui/card'

function ReviewFormWrapper() {
  return (
    <ReviewForm 
      onSuccess={() => {
      
        window.location.href = '/reviews'
      }}
      onCancel={() => {
        window.history.back()
      }}
    />
  )
}

export default function NewReviewPage() {
  const { language } = useLanguageStore()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
          {}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">
            {language === 'de' ? 'Bewertung schreiben' : 'Write a review'}
          </h1>
          <p className="text-muted-foreground">
            {language === 'de' ? 'Teilen Sie Ihre Gedanken über das Produkt' : 'Share your thoughts about the product'}
          </p>
        </div>

        {}
        <Suspense fallback={<ReviewFormSkeleton />}>
          <ReviewFormWrapper />
        </Suspense>
      </div>
    </div>
  )
}

function ReviewFormSkeleton() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 