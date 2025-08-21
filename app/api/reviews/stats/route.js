import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Product from '@/lib/models/Product'
import Review from '@/lib/models/Review'

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const minRating = parseInt(searchParams.get('minRating')) || null
    const category = searchParams.get('category') || ''
    const verified = searchParams.get('verified') === 'true'
    const withPhotos = searchParams.get('withPhotos') === 'true'
    const withComments = searchParams.get('withComments') === 'true'
    const searchQuery = searchParams.get('search') || ''

    const query = {}
    if (minRating) query.rating = { $gte: minRating }

    if (category) {
    
      const products = await Product.find({ category }).select('_id')
      if (products.length) {
        query.productId = { $in: products.map(p => p._id) }
      } else {
      
        return NextResponse.json({ total: 0, avgRating: 0, totalVerified: 0, totalWithPhotos: 0 })
      }
    }

    if (verified) {
      query.isVerified = true
    }

    if (withPhotos) {
      query.images = { $exists: true, $not: { $size: 0 } }
    }

    if (withComments) {
      query.totalComments = { $gt: 0 }
    }

    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } }
      ]
    }

    const total = await Review.countDocuments(query)

    const avgAgg = await Review.aggregate([
      { $match: query },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } }
    ])

    const totalVerified = await Review.countDocuments({ ...query, isVerified: true })
    const totalWithPhotos = await Review.countDocuments({ ...query, images: { $exists: true, $not: { $size: 0 } } })

    return NextResponse.json({
      total,
      avgRating: avgAgg[0]?.avgRating || 0,
      totalVerified,
      totalWithPhotos,
    })
  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ total: 0, avgRating: 0, totalVerified: 0, totalWithPhotos: 0 })
  }
} 