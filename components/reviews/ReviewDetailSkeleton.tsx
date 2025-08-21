import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader } from '@/lib/components/ui/card'

export function ReviewDetailSkeleton() {
  return (
    <div className="space-y-6">
      {}
      <div>
        <Button variant="ghost" asChild>
          <Link href="/reviews" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to reviews
          </Link>
        </Button>
      </div>

      {}
      <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-48 animate-pulse" />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {}
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            <div className="space-y-1">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
            </div>
          </div>

          {}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              ))}
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
          </div>

          {}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse" />
            </div>
          </div>

          {}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 