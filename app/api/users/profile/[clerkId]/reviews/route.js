import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

// GET - Get user reviews by Clerk ID
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const { clerkId } = await params
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    
    const skip = (page - 1) * limit
    
  
    const user = await User.findOne({ clerkId }).select('_id displayName avatar bio')
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }
    
  
    const reviews = await Review.find({ userId: user._id })
      .populate('productId', 'name imageUrl category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
    
    const total = await Review.countDocuments({ userId: user._id })
    
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
    console.error('Get user reviews error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user reviews' },
      { status: 500 }
    )
  }
} 