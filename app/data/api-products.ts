import { allProducts } from './products'

// Transform allProducts to API format
export const apiProducts = allProducts.map(product => ({
  _id: product._id,
  name: product.name,
  category: product.category,
  imageUrl: product.imageUrl,
  averageRating: product.averageRating || 0,
  totalReviews: product.totalReviews || 0,
  price: product.price
}))

// Helper functions for API
export const getApiProductsByCategory = (category: string) => {
  return apiProducts.filter(product => product.category === category)
}

export const getApiProductById = (id: string) => {
  return apiProducts.find(product => product._id === id)
}

export const getApiProductBySlug = (slug: string) => {
  return apiProducts.find(product => product._id === slug)
} 