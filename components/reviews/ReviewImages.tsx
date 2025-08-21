'use client'

import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { Dialog, DialogContent } from '@/lib/components/ui/dialog'

interface ReviewImage {
  imageUrl: string
  altText?: string
  order?: number
}

interface ReviewImagesProps {
  images: ReviewImage[]
}

export function ReviewImages({ images }: ReviewImagesProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
    setIsLightboxOpen(true)
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextImage()
    } else if (e.key === 'ArrowLeft') {
      prevImage()
    } else if (e.key === 'Escape') {
      setIsLightboxOpen(false)
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.imageUrl}
              alt={image.altText || `Review image ${index + 1}`}
              className="w-full h-32 object-cover transition-transform group-hover:scale-105"
              width={400}
              height={300}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center pointer-events-none">
              <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
          </div>
        ))}
      </div>

      {}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
          <div className="relative" onKeyDown={handleKeyDown} tabIndex={0}>
            {}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 h-10 w-10 p-0 bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </Button>

            {}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 p-0 bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 p-0 bg-black/50 text-white hover:bg-black/70"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {}
            <div className="flex items-center justify-center min-h-[60vh] p-8">
              <Image
                src={images[selectedImageIndex]?.imageUrl}
                alt={images[selectedImageIndex]?.altText || `Review image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                width={1000}
                height={1000}
              />
            </div>

            {}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 