'use client'

import { useUser } from '@clerk/nextjs'
import { Calendar, Edit, MapPin } from 'lucide-react'

import { useLanguageStore } from '@/app/store/languageStore'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Badge } from '@/lib/components/ui/badge'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'

interface Profile {
  displayName?: string
  bio?: string
  location?: string
  avatar?: string
  membership?: string
  createdAt: string
}

interface UserProfileProps {
  profile?: Profile | null
  isOwnProfile?: boolean
  onEdit?: () => void
}

export function UserProfile({ profile, isOwnProfile = false, onEdit }: UserProfileProps) {
  const { user } = useUser()
  const { language } = useLanguageStore()


  if (!profile) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            {isOwnProfile ? (language === 'de' ? 'Profil nicht gefunden' : 'Profile not found') : (language === 'de' ? 'Benutzer nicht gefunden' : 'User not found')}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
            {profile.displayName || 'Anonymous user'}
          </CardTitle>
          {isOwnProfile && onEdit && (
            <Button
              onClick={onEdit}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              {language === 'de' ? 'Bearbeiten' : 'Edit'}
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {}
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar || user?.imageUrl} alt={profile.displayName || 'Avatar'} />
            <AvatarFallback className="text-lg bg-[#FFF5E1] text-[#D72638] dark:bg-[#2a2a2a] dark:text-[#FFA5A5]">
              {profile.displayName?.charAt(0).toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-[#FFF5E1] text-[#D72638] dark:bg-[#2a2a2a] dark:text-[#FFA5A5]">
                {profile.membership === 'pro' ? 'Pro' : 'Free'}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Since {new Date(profile.createdAt).toLocaleDateString('en-US')}</span>
              </div>
            </div>
            
            {profile.location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            )}
          </div>
        </div>

        {}
        {profile.bio && (
          <div className="space-y-2">
            <h3 className="font-semibold text-[#D72638] dark:text-[#FFA5A5]">{language === 'de' ? 'Über mich' : 'About me'}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
          </div>
        )}

        {}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
            <div className="text-sm text-muted-foreground">{language === 'de' ? 'Bewertungen' : 'Reviews'}</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">0</div>
            <div className="text-sm text-muted-foreground">{language === 'de' ? 'Kommentare' : 'Comments'}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 