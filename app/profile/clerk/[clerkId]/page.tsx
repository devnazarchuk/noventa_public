import { Calendar, MapPin, Star, ThumbsDown, ThumbsUp } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { UserReviews } from '@/components/profile/UserReviews'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Badge } from '@/lib/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'

import { 
  Average, 
  DateFormatter, 
  Dislikes, 
  Likes, 
  MemberSince, 
  Reviews, 
  ReviewsBy, 
  Verified} from './UserProfileTranslations'

interface UserProfilePageProps {
  params: Promise<{
    clerkId: string
  }>
}

async function getUserProfile(clerkId: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/users/profile/${clerkId}`, {
      cache: 'no-store'
    })
    
    if (!response.ok) {
      return null
    }
    
    return response.json()
  } catch (error) {
    console.error('Error fetching user profile:', error)
    return null
  }
}

export default async function UserProfilePage({ params }: UserProfilePageProps) {
  const { clerkId } = await params
  
  const data = await getUserProfile(clerkId)
  
  if (!data) {
    notFound()
  }
  
  const { user, reviews, pagination } = data

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {}
        <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.displayName} />
                <AvatarFallback className="text-2xl bg-[#FFF5E1] text-[#D72638] dark:bg-[#2a2a2a] dark:text-[#FFA5A5]">
                  {user.displayName.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                      {user.displayName}
                    </h1>
                    {user.isVerified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <Verified />
                      </Badge>
                    )}
                  </div>
                  
                  {user.bio && (
                    <p className="text-muted-foreground max-w-2xl">
                      {user.bio}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {user.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        <MemberSince /> <DateFormatter date={user.createdAt} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {user.stats.totalReviews}
              </div>
              <div className="text-sm text-muted-foreground">
                <Reviews />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {user.stats.avgRating.toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Average />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {user.stats.totalLikes}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <Likes />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
                {user.stats.totalDislikes}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <ThumbsDown className="h-4 w-4" />
                <Dislikes />
              </div>
            </CardContent>
          </Card>
        </div>

        {}
        <Card className="bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
              <ReviewsBy /> {user.displayName}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<ReviewsSkeleton />}>
              <UserReviews 
                userId={clerkId} 
                initialReviews={reviews}
                initialPagination={pagination}
              />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ReviewsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        </div>
      ))}
    </div>
  )
} 