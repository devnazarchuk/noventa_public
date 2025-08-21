import { z } from 'zod'

// Review validation schema
export const reviewSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  content: z.string().min(1, 'Content is required').max(1000, 'Content too long'),
  images: z.array(z.object({
    imageUrl: z.string().url('Invalid image URL'),
    altText: z.string().optional(),
    order: z.number().optional()
  })).optional()
})

// Comment validation schema
export const commentSchema = z.object({
  content: z.string().min(1, 'Comment is required').max(500, 'Comment too long'),
  parentId: z.string().optional()
})

// Reaction validation schema
export const reactionSchema = z.object({
  reactionType: z.enum(['like', 'dislike']).optional()
})

// User profile validation schema
export const userProfileSchema = z.object({
  displayName: z.string().min(1, 'Display name is required').max(50, 'Display name too long'),
  bio: z.string().max(200, 'Bio too long').optional(),
  location: z.string().max(100, 'Location too long').optional()
})

// Validation helper function
export function validateData(schema, data) {
  try {
    return { success: true, data: schema.parse(data) }
  } catch (error) {
    return { 
      success: false, 
      errors: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    }
  }
}

// Sanitize user input
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
}

// Validate image URL
export function isValidImageUrl(url) {
  try {
    const urlObj = new URL(url)
    return ['http:', 'https:'].includes(urlObj.protocol) && 
           ['jpg', 'jpeg', 'png', 'gif', 'webp'].some(ext => 
             urlObj.pathname.toLowerCase().includes(`.${ext}`)
           )
  } catch {
    return false
  }
} 