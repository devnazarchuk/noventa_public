'use client'

import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { Star, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { useLanguageStore } from '@/app/store/languageStore'
import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'
import { Input } from '@/lib/components/ui/input'
import { Textarea } from '@/lib/components/ui/textarea'

import ProductSelector from './ProductSelector'

// Star rating component
interface StarRatingProps {
  rating: number
  onRatingChange: (rating: number) => void
  disabled?: boolean
}

const StarRating = ({ rating, onRatingChange, disabled = false }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !disabled && onRatingChange(star)}
          className={`transition-colors duration-200 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
          }`}
          disabled={disabled}
        >
          <Star
            className={`h-6 w-6 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 hover:text-yellow-300'
            }`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        {rating}/5
      </span>
    </div>
  )
}

// Form validation schema
const reviewSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  title: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Title must be less than 100 characters'),
  content: z.string().min(10, 'Review must be at least 10 characters').max(1000, 'Review must be less than 1000 characters'),
  rating: z.number().min(1, 'Rating is required').max(5, 'Rating must be between 1 and 5')
})

type ReviewFormData = z.infer<typeof reviewSchema>

interface Review {
  _id?: string
  productId?: {
    _id: string
    name: string
  } | string
  title?: string
  content?: string
  rating?: number
  images?: Array<{
    imageUrl: string
    altText?: string
  }>
}

interface ReviewFormProps {
  review?: Review
  onSuccess: () => void
  onCancel: () => void
}

interface Product {
  _id: string
  name: string
  category: string
  imageUrl?: string
}

function ReviewForm({ review, onSuccess, onCancel }: ReviewFormProps) {
  const { isSignedIn } = useUser()
  const { language } = useLanguageStore()
  const [rating, setRating] = useState(review?.rating || 0)
  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>(review?.images?.map((img) => img.imageUrl) || [])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const translations = {
    de: {
      signInRequired: 'Anmeldung erforderlich',
      signInMessage: 'Sie müssen sich anmelden, um Bewertungen zu schreiben und mit anderen Benutzern zu interagieren.',
      signIn: 'Anmelden',
      signUp: 'Registrieren',
      editReview: 'Bewertung bearbeiten',
      writeReview: 'Bewertung schreiben',
      product: 'Produkt',
      productCannotChange: 'Das Produkt kann beim Bearbeiten einer Bewertung nicht geändert werden',
      selectProduct: 'Produkt auswählen',
      loadingProducts: 'Produkte werden geladen...',
      noProducts: 'Keine Produkte gefunden',
      rating: 'Bewertung',
      title: 'Titel',
      titlePlaceholder: 'Geben Sie einen Titel für Ihre Bewertung ein',
      content: 'Bewertung',
      contentPlaceholder: 'Teilen Sie Ihre Gedanken über das Produkt...',
      images: 'Bilder (optional)',
      addImage: 'Bild hinzufügen',
      maxImages: 'Maximal 5 Bilder. Unterstützte Formate: JPG, PNG, GIF',
      cancel: 'Abbrechen',
      submitting: 'Wird übermittelt...',
      uploadingImages: 'Bilder werden hochgeladen...',
      updateReview: 'Bewertung aktualisieren',
      submitReview: 'Bewertung übermitteln',
      reviewUpdated: 'Bewertung erfolgreich aktualisiert!',
      reviewSubmitted: 'Bewertung erfolgreich übermittelt!',
      failedToSubmit: 'Fehler beim Übermitteln der Bewertung',
      failedToUpdate: 'Fehler beim Aktualisieren der Bewertung'
    },
    en: {
      signInRequired: 'Sign In Required',
      signInMessage: 'You need to sign in to write reviews and interact with other users\' content.',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      editReview: 'Edit Review',
      writeReview: 'Write a Review',
      product: 'Product',
      productCannotChange: 'Product cannot be changed when editing a review',
      selectProduct: 'Select a product',
      loadingProducts: 'Loading products...',
      noProducts: 'No products found',
      rating: 'Rating',
      title: 'Title',
      titlePlaceholder: 'Enter a title for your review',
      content: 'Review',
      contentPlaceholder: 'Share your thoughts about the product...',
      images: 'Images (optional)',
      addImage: 'Add Image',
      maxImages: 'Maximum 5 images. Supported formats: JPG, PNG, GIF',
      cancel: 'Cancel',
      submitting: 'Submitting...',
      uploadingImages: 'Uploading Images...',
      updateReview: 'Update Review',
      submitReview: 'Submit Review',
      reviewUpdated: 'Review updated successfully!',
      reviewSubmitted: 'Review submitted successfully!',
      failedToSubmit: 'Failed to submit review',
      failedToUpdate: 'Failed to update review'
    }
  }

  const t = translations[language]
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [currentProductId, setCurrentProductId] = useState(typeof review?.productId === 'string' ? review.productId : review?.productId?._id || '')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      productId: typeof review?.productId === 'string' ? review.productId : review?.productId?._id || '',
      title: review?.title || '',
      content: review?.content || '',
      rating: review?.rating || 0
    }
  })


  useEffect(() => {
    if (review) {
      const productId = typeof review.productId === 'string' ? review.productId : review.productId?._id || ''
      setValue('productId', productId)
      setValue('title', review.title || '')
      setValue('content', review.content || '')
      setValue('rating', review.rating || 0)
      setRating(review.rating || 0)
      setImageUrls(review.images?.map((img) => img.imageUrl) || [])
      setCurrentProductId(productId)
    }
  }, [review, setValue])


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.ok) {
          const data = await response.json()
          setProducts(data.data || [])
        } else {
          toast.error('Failed to load products')
        }
      } catch (error) {
        console.error('Error loading products:', error)
        toast.error('Failed to load products')
      } finally {
        setIsLoadingProducts(false)
      }
    }

    loadProducts()
  }, [])


  useEffect(() => {
    setValue('rating', rating)
  }, [rating, setValue])


  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    if (files.length + selectedImages.length > 5) {
      toast.error('Maximum 5 images allowed')
      return
    }
    setSelectedImages(prev => [...prev, ...files])
  }


  const removeSelectedImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index))
  }


  const removeUploadedImage = (index: number) => {
    setImageUrls(prev => prev.filter((_, i) => i !== index))
  }


  const uploadImages = async (files: File[]): Promise<string[]> => {
    setIsUploading(true)
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          throw new Error('Failed to upload image')
        }

        const data = await response.json()
      
        return data.url || data.secure_url
      })

      const urls = await Promise.all(uploadPromises)
      return urls.filter((u) => typeof u === 'string' && u.length > 0)
    } finally {
      setIsUploading(false)
    }
  }


  const onSubmit = async (data: ReviewFormData) => {
    if (!isSignedIn) {
      toast.error('Please sign in to submit a review')
      return
    }

    if (rating === 0) {
      toast.error('Please select a rating')
      return
    }

    try {
      setIsSubmitting(true)
      console.log('Submitting review data:', data)

    
      let uploadedImageUrls: string[] = []
      if (selectedImages.length > 0) {
        uploadedImageUrls = (await uploadImages(selectedImages)).filter(Boolean)
        console.log('Uploaded images:', uploadedImageUrls)
      }

    
      const allImages = [
        ...imageUrls.map((url, index) => ({
          imageUrl: url,
          altText: `Review image ${index + 1}`,
          order: index
        })),
        ...uploadedImageUrls.map((url, index) => ({
          imageUrl: url,
          altText: `Uploaded image ${index + 1}`,
          order: imageUrls.length + index
        }))
      ]

      const reviewData = {
        ...data,
        images: allImages
      }

      console.log('Final review data:', reviewData)

      const url = review ? `/api/reviews/${review._id}` : '/api/reviews'
      const method = review ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
      })

      console.log('Response status:', response.status)
      const responseData = await response.json()
      console.log('Response data:', responseData)

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to submit review')
      }

      toast.success(review ? t.reviewUpdated : t.reviewSubmitted)
      onSuccess()
    } catch (error) {
      console.error('Error submitting review:', error)
      toast.error(error instanceof Error ? error.message : (review ? t.failedToUpdate : t.failedToSubmit))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isSignedIn) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-responsive-md">
        <CardHeader>
          <CardTitle className="text-center text-foreground">{t.signInRequired}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            {t.signInMessage}
          </p>
          <div className="flex gap-2 justify-center">
            <Button onClick={() => window.location.href = '/sign-in'} className="shadow-button hover:shadow-button-hover">
              {t.signIn}
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/sign-up'} className="shadow-button hover:shadow-button-hover">
              {t.signUp}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-responsive-md hover:shadow-responsive-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-foreground">{review ? t.editReview : t.writeReview}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">{t.product}</label>
            {review && (
              <p className="text-sm text-muted-foreground">
                {t.productCannotChange}
              </p>
            )}
            <ProductSelector
              products={products}
              selectedProductId={currentProductId}
              onProductSelect={(productId) => {
                if (!review) { // Only allow changing product for new reviews
                  setValue('productId', productId)
                  setCurrentProductId(productId)
                }
              }}
              isLoading={isLoadingProducts}
            />
            {errors.productId && (
              <p className="text-sm text-red-600 dark:text-red-400">{errors.productId.message}</p>
            )}
          </div>

          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t.rating}</label>
            <StarRating
              rating={rating}
              onRatingChange={setRating}
            />
            {errors.rating && (
              <p className="text-sm text-red-600 dark:text-red-400">{errors.rating.message}</p>
            )}
          </div>

          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t.title}</label>
            <Input
              {...register('title')}
              placeholder={t.titlePlaceholder}
              maxLength={100}
              className="border-border-light dark:border-border-light focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-foreground"
            />
            {errors.title && (
              <p className="text-sm text-red-600 dark:text-red-400">{errors.title.message}</p>
            )}
          </div>

          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t.content}</label>
            <Textarea
              {...register('content')}
              placeholder={t.contentPlaceholder}
              rows={6}
              maxLength={1000}
              className="border-border-light dark:border-border-light focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-gray-800 text-foreground resize-none"
            />
            {errors.content && (
              <p className="text-sm text-red-600 dark:text-red-400">{errors.content.message}</p>
            )}
          </div>

          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">{t.images}</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              {imageUrls.map((url, index) => (
                <div key={`existing-${index}`} className="relative group">
                  <Image
                    src={url}
                    alt={`Review image ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                    width={1000}
                    height={1000}
                  />
                  <button
                    type="button"
                    onClick={() => removeUploadedImage(index)}
                    className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              
              {selectedImages.map((file, index) => (
                <div key={`selected-${index}`} className="relative group">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Selected image ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg shadow-soft"
                    width={1000}
                    height={1000}
                  />
                  <button
                    type="button"
                    onClick={() => removeSelectedImage(index)}
                    className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              
              {imageUrls.length + selectedImages.length < 5 && (
                <label className="w-full h-24 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                  <div className="w-full h-24 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 dark:hover:border-gray-500 transition-colors bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {t.addImage}
                    </span>
                  </div>
                </label>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{t.maxImages}</p>
          </div>

          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
              className="shadow-button hover:shadow-button-hover"
            >
              {t.cancel}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting || isUploading}
              className="bg-[#D72638] hover:bg-[#B91C2C] text-white shadow-button hover:shadow-button-hover transition-all duration-200"
            >
              {isSubmitting ? (
                t.submitting
              ) : isUploading ? (
                t.uploadingImages
              ) : review ? (
                t.updateReview
              ) : (
                t.submitReview
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export { ReviewForm }
export default ReviewForm 