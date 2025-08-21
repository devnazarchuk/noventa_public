import { auth } from '@clerk/nextjs/server'
import { MessageSquare, Settings, Star } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import { getCurrentProfile } from '@/app/profile/profiles'
import { UserProfile } from '@/components/profile/UserProfile'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent } from '@/lib/components/ui/card'

import { ProfileTranslations } from './ProfileTranslations'

export default async function ProfilePage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const profile = await getCurrentProfile()
  const t = ProfileTranslations()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">
            <t.Title />
          </h1>
          <p className="text-muted-foreground">
            <t.Subtitle />
          </p>
        </div>

        {}
        <Suspense fallback={<ProfileSkeleton />}>
          <UserProfile 
            profile={profile} 
            isOwnProfile={true}
          />
        </Suspense>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#FFF5E1] dark:bg-[#2a2a2a]">
                  <Star className="h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                    <t.MyReviews />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <t.MyReviewsSubtitle />
                  </p>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]">
                <Link href="/reviews/my">
                  <t.MyReviews />
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

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#FFF5E1] dark:bg-[#2a2a2a]">
                  <Settings className="h-6 w-6 text-[#D72638] dark:text-[#FFA5A5]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">
                    <t.Settings />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <t.SecurityPrivacy />
                  </p>
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]">
                <Link href="/profile/settings">
                  <t.Settings />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-[#D72638] dark:text-[#FFA5A5] mb-4">
              <t.ActivityStatistics />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
                <div className="text-sm text-muted-foreground"><t.Reviews /></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
                <div className="text-sm text-muted-foreground"><t.Comments /></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
                <div className="text-sm text-muted-foreground"><t.Likes /></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
                <div className="text-sm text-muted-foreground"><t.DaysInSystem /></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProfileSkeleton() {
  return (
    <Card className="w-full max-w-2xl mx-auto animate-pulse">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          <div className="flex items-start gap-4">
            <div className="h-20 w-20 bg-gray-200 dark:bg-gray-700 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 mx-auto mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto" />
            </div>
            <div className="text-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 mx-auto mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20 mx-auto" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 