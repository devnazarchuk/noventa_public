import { allProducts } from '@/app/data/products'

// Transform full product data to API format
export const transformToApiFormat = (products = allProducts) => {
  return products.map(product => ({
    _id: product._id,
    name: product.name,
    category: product.category,
    imageUrl: product.imageUrl,
    averageRating: product.averageRating || 0,
    totalReviews: product.totalReviews || 0,
    price: product.price
  }))
}

// Transform to database format for seeding
export const transformToDbFormat = (products = allProducts) => {
  return products.map(product => ({
    name: product.name,
    description: product.description,
    category: product.category,
    price: product.price,
    imageUrl: product.imageUrl,
    tags: product.tags,
    averageRating: product.averageRating || 0,
    totalReviews: product.totalReviews || 0,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }))
}

// Transform to frontend format (with additional fields)
export const transformToFrontendFormat = (products = allProducts) => {
  return products.map(product => ({
    id: product._id,
    name: product.name,
    nameDe: product.nameDe,
    slug: product.slug,
    description: product.description,
    descriptionDe: product.descriptionDe,
    category: product.category,
    price: product.price,
    priceDe: product.priceDe,
    image: product.imageUrl,
    averageRating: product.averageRating || 0,
    totalReviews: product.totalReviews || 0,
    tags: product.tags,
    isActive: product.isActive
  }))
} 