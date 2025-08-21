'use client'

import { MessageSquare, Plus, Star } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent } from '@/lib/components/ui/card'

import { MyReviewsTranslations } from './MyReviewsTranslations'

export default function MyReviewsHeaderClient() {
  const t = MyReviewsTranslations()
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">
          <t.Title />
        </h1>
        <p className="text-muted-foreground">
          <t.Subtitle />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#FFF5E1] dark:bg-[#2a2a2a]">
                <Plus className="h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  <t.WriteReview />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <t.ShareExperience />
                </p>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]">
              <Link href="/reviews/new">
                <t.Create />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#FFF5E1] dark:bg-[#2a2a2a]">
                <Star className="h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  <t.AllReviews />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <t.LookAtAllReviews />
                </p>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]">
              <Link href="/reviews">
                <t.LookAtAllReviews />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#FFF5E1] dark:bg-[#2a2a2a]">
                <MessageSquare className="h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                  <t.MyComments />
                </h3>
                <p className="text-sm text-muted-foreground">
                  <t.CommentsHistory />
                </p>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]">
              <Link href="/reviews/my/comments">
                <t.MyComments />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
} 