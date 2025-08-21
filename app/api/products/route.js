import { NextResponse } from 'next/server'

// GET - Get all products
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const isActive = searchParams.get('isActive') !== 'false'

  
    const allProducts = require('@/app/data/products').allProducts
    
  
    const apiProducts = allProducts.map(product => ({
      _id: product._id,
      name: product.name,
      category: product.category,
      imageUrl: product.imageUrl,
      averageRating: product.averageRating || 0,
      totalReviews: product.totalReviews || 0,
      price: product.price
    }))
    
  
    let filteredProducts = apiProducts
    if (category) {
      filteredProducts = apiProducts.filter(product => product.category === category)
    }
    
  
    filteredProducts = filteredProducts.filter(() => isActive ? true : false)
    
  
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
    
    return NextResponse.json({
      success: true,
      message: 'Success',
      data: filteredProducts
    })
  } catch (error) {
    console.error('Products API error:', error)
  
    return NextResponse.json({
      success: true,
      message: 'Success',
      data: []
    })
  }
} 
