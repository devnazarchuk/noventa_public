'use client'

import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { useLanguageStore } from '@/app/store/languageStore'
import { reviewsTranslations } from '@/app/translations'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { Label } from '@/lib/components/ui/label'
import { Textarea } from '@/lib/components/ui/textarea'

const profileSchema = z.object({
  displayName: z.string().min(2, 'Display name must be at least 2 characters').max(50, 'Display name must be less than 50 characters'),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  location: z.string().max(100, 'Location must be less than 100 characters').optional(),
})

type ProfileFormData = z.infer<typeof profileSchema>

interface Profile {
  displayName?: string
  bio?: string
  location?: string
  avatar?: string
}

interface ProfileEditProps {
  profile?: Profile
  onSuccess?: () => void
  onCancel?: () => void
}

export function ProfileEdit({ profile, onSuccess, onCancel }: ProfileEditProps) {
  const { user } = useUser()
  const { language } = useLanguageStore()
  const t = reviewsTranslations[language as keyof typeof reviewsTranslations] || reviewsTranslations.en
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(profile?.avatar || null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: profile?.displayName || '',
      bio: profile?.bio || '',
      location: profile?.location || '',
    },
  })


  const handleAvatarSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error(language === 'de' ? 'Bitte wählen Sie ein Bild aus' : 'Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error(language === 'de' ? 'Bild darf nicht größer als 5MB sein' : 'Image must be smaller than 5MB')
      return
    }

  
    const reader = new FileReader()
    reader.onload = (e) => {
      setAvatarPreview(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }


  const removeAvatar = () => {
    setAvatarPreview(null)
  }


  const onSubmit = async (data: ProfileFormData) => {
    if (!user) {
      toast.error(t.loginRequired)
      return
    }

    try {
      setIsSubmitting(true)

      const profileData = {
        userId: user.id,
        displayName: data.displayName,
        bio: data.bio || null,
        location: data.location || null,
        avatar: avatarPreview,
      }

    
      console.log('Profile data to update:', profileData)
      toast.success(t.profileSuccess)
      onSuccess?.()
    } catch (error) {
      console.error('Error updating profile:', error)
      toast.error(t.profileError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white dark:bg-[#232323] shadow-sm border border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
          {t.editProfile}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {}
          <div className="space-y-4">
            <Label className="text-sm font-medium text-[#D72638] dark:text-[#FFA5A5]">
              {t.avatar}
            </Label>
            
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={avatarPreview || undefined} alt="Profile" />
                <AvatarFallback className="bg-[#FFF5E1] text-[#D72638] dark:bg-[#2a2a2a] dark:text-[#FFA5A5] text-lg">
                  {profile?.displayName?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarSelect}
                    className="hidden"
                    id="avatar-upload"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer text-sm text-[#D72638] dark:text-[#FFA5A5] hover:underline"
                  >
                    {language === 'de' ? 'Bild auswählen' : 'Choose image'}
                  </label>
                  {avatarPreview && (
                    <button
                      type="button"
                      onClick={removeAvatar}
                      className="ml-2 text-sm text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="displayName" className="text-sm font-medium text-[#D72638] dark:text-[#FFA5A5]">
              {t.displayName} *
            </Label>
            <Input
              id="displayName"
              {...register('displayName')}
              placeholder={language === 'de' ? 'Ihr Anzeigename...' : 'Your display name...'}
              className="border-gray-300 dark:border-gray-600 focus:border-[#D72638] dark:focus:border-[#FFA5A5]"
            />
            {errors.displayName && (
              <p className="text-sm text-red-500">{errors.displayName.message}</p>
            )}
          </div>

          {}
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium text-[#D72638] dark:text-[#FFA5A5]">
              {t.bio}
            </Label>
            <Textarea
              id="bio"
              {...register('bio')}
              placeholder={language === 'de' ? 'Erzählen Sie etwas über sich...' : 'Tell us about yourself...'}
              className="min-h-[100px] border-gray-300 dark:border-gray-600 focus:border-[#D72638] dark:focus:border-[#FFA5A5]"
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>

          {}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-[#D72638] dark:text-[#FFA5A5]">
              {t.location}
            </Label>
            <Input
              id="location"
              {...register('location')}
              placeholder={language === 'de' ? 'Ihr Standort...' : 'Your location...'}
              className="border-gray-300 dark:border-gray-600 focus:border-[#D72638] dark:focus:border-[#FFA5A5]"
            />
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location.message}</p>
            )}
          </div>

          {}
          <div className="flex items-center justify-end gap-3 pt-4">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                {t.cancel}
              </Button>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#D72638] hover:bg-[#B91C1C] text-white dark:bg-[#FFA5A5] dark:hover:bg-[#FF8A8A] dark:text-[#1a1a1a]"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  {language === 'de' ? 'Wird gespeichert...' : 'Saving...'}
                </div>
              ) : (
                t.save
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 