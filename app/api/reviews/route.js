import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import { getProductById, getProductBySlug } from '@/app/data/products'
import connectDB from '@/lib/db/mongodb'
import Product from '@/lib/models/Product'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const productParam = searchParams.get('productId')
    const userParam = searchParams.get('userId')
    const minRating = parseInt(searchParams.get('minRating')) || null
    const category = searchParams.get('category') || ''
    const dateRange = searchParams.get('dateRange') || ''
    const verified = searchParams.get('verified') === 'true'
    const withPhotos = searchParams.get('withPhotos') === 'true'
    const withComments = searchParams.get('withComments') === 'true'
    const searchQuery = searchParams.get('search') || ''
    const sort = searchParams.get('sort') || 'newest'

    const query = {}

  
    if (productParam) {
      const staticProduct = getProductById(productParam) || getProductBySlug(productParam)
      if (staticProduct) {
        const productDoc = await Product.findOne({ name: staticProduct.name, category: staticProduct.category })
        if (productDoc) {
          query.productId = productDoc._id
        }
      }
    }

  
    if (userParam) {
      let userDoc = null
      if (userParam.match(/^[0-9a-fA-F]{24}$/)) {
        userDoc = await User.findById(userParam)
      }
      if (!userDoc) {
        userDoc = await User.findOne({ clerkId: userParam })
      }
      if (userDoc) {
        query.userId = userDoc._id
      }
    }

    if (minRating) query.rating = { $gte: minRating }
    if (verified) query.isVerified = true
    if (withPhotos) query.images = { $exists: true, $not: { $size: 0 } }
    if (withComments) query.totalComments = { $gt: 0 }
    if (searchQuery) {
      query.$or = [
        { title: { $regex: searchQuery, $options: 'i' } },
        { content: { $regex: searchQuery, $options: 'i' } }
      ]
    }
    if (category) {
      const productIds = await Product.find({ category }).distinct('_id')
      if (productIds.length) query.productId = { $in: productIds }
    }
    if (dateRange) {
      const now = new Date()
      const start = new Date()
      if (dateRange === 'today') start.setHours(0,0,0,0)
      if (dateRange === 'week') start.setDate(now.getDate() - 7)
      if (dateRange === 'month') start.setMonth(now.getMonth() - 1)
      if (dateRange === 'year') start.setFullYear(now.getFullYear() - 1)
      if (dateRange) query.createdAt = { $gte: start }
    }

    const skip = (page - 1) * limit

    const sortOption = sort === 'rating_desc' ? { rating: -1, createdAt: -1 } : sort === 'rating_asc' ? { rating: 1, createdAt: -1 } : { createdAt: -1 }

    const reviewsDocs = await Review.find(query)
      .populate('userId', 'displayName avatar isVerified clerkId')
      .populate('productId', 'name imageUrl category')
      .sort(sortOption)
      .skip(skip)
      .limit(limit)

    const total = await Review.countDocuments(query)

  
    let userReactionMap = null
    const { userId: clerkId } = await auth()
    if (clerkId) {
      const me = await User.findOne({ clerkId })
      if (me) {
        userReactionMap = me._id
      }
    }

    const reviews = reviewsDocs.map((doc) => {
      const obj = doc.toObject()
      if (userReactionMap) {
        const uid = userReactionMap
        const liked = (doc.likes || []).some((id) => id.equals(uid))
        const disliked = (doc.dislikes || []).some((id) => id.equals(uid))
        obj.userReaction = liked ? 'like' : disliked ? 'dislike' : null
      } else {
        obj.userReaction = null
      }
      return obj
    })

    return NextResponse.json({
      reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('List reviews error:', error)
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connectDB()

    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { productId, rating, title, content, images } = body || {}

    if (!productId || !rating || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

  
    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    console.log('Looking for product with ID/slug:', productId)
    
  
    const staticProduct = getProductById(productId) || getProductBySlug(productId)
    console.log('Static product found:', staticProduct ? {
      _id: staticProduct._id,
      name: staticProduct.name,
      slug: staticProduct.slug,
      category: staticProduct.category
    } : null)
    
    if (!staticProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }

    console.log('Searching for product in DB:', {
      name: staticProduct.name,
      category: staticProduct.category
    })
    
  
    let productDoc = await Product.findOne({ name: staticProduct.name, category: staticProduct.category })
    console.log('Found product by name/category:', productDoc ? {
      _id: productDoc._id,
      name: productDoc.name,
      category: productDoc.category
    } : null)
    
    if (!productDoc) {
      console.log('Creating new product in DB...')
      const newProduct = new Product({
        name: staticProduct.name,
        description: staticProduct.description || staticProduct.name,
        category: staticProduct.category,
        price: staticProduct.price ?? 0,
        imageUrl: staticProduct.imageUrl,
        tags: staticProduct.tags || [],
        isActive: true,
      })
      productDoc = await newProduct.save()
      console.log('New product saved:', {
        _id: productDoc._id,
        name: productDoc.name,
        category: productDoc.category
      })
    }

    console.log('Product doc:', {
      _id: productDoc._id,
      name: productDoc.name,
      category: productDoc.category
    })

  
    const existing = await Review.findOne({ productId: productDoc._id, userId: userDoc._id })
    if (existing) {
      return NextResponse.json({ error: 'You have already reviewed this product' }, { status: 409 })
    }

    console.log('Creating review with:', {
      productId: productDoc._id,
      userId: userDoc._id,
      rating,
      title: title.trim(),
      content: content.trim(),
      images: Array.isArray(images) ? images : [],
    })

    const review = new Review({
      productId: productDoc._id,
      userId: userDoc._id,
      rating,
      title: title.trim(),
      content: content.trim(),
      images: Array.isArray(images) ? images : [],
    })

    await review.save()
    await review.populate('userId', 'displayName avatar isVerified clerkId')
    await review.populate('productId', 'name imageUrl category')

    return NextResponse.json({
      message: 'Review created successfully',
      review,
    }, { status: 201 })
  } catch (error) {
    console.error('Create review error:', error)
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
} 