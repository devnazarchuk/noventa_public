import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader } from '@/lib/components/ui/card'

export function ProductDetailSkeleton() {
  return (
    <div className="space-y-6">
      {}
      <div>
        <Button variant="ghost" asChild>
          <Link href="/products" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>
        </Button>
      </div>

      {}
      <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 animate-pulse" />
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse" />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
            </div>

            {}
            <div className="space-y-6">
              {}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  ))}
                </div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse" />
              </div>

              {}
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse" />
                </div>
              </div>

              {}
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse" />
                  ))}
                </div>
              </div>

              {}
              <div className="flex gap-3 pt-4">
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse" />
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse" />
              </div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto animate-pulse" />
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto animate-pulse" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 