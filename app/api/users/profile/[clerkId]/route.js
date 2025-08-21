import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

// GET - Get user profile by Clerk ID
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const { clerkId } = await params
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    
    const skip = (page - 1) * limit
    
  
    const user = await User.findOne({ clerkId }).select('displayName avatar bio createdAt')
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
    
  
    const totalLikes = await Review.aggregate([
      { $match: { userId: user._id } },
      { $project: { totalLikes: { $size: '$likes' } } },
      { $group: { _id: null, total: { $sum: '$totalLikes' } } }
    ])
    
    const totalDislikes = await Review.aggregate([
      { $match: { userId: user._id } },
      { $project: { totalDislikes: { $size: '$dislikes' } } },
      { $group: { _id: null, total: { $sum: '$totalDislikes' } } }
    ])
    
    const avgRating = await Review.aggregate([
      { $match: { userId: user._id } },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } }
    ])
    
    return NextResponse.json({
      user: {
        ...user.toObject(),
        stats: {
          totalReviews: total,
          totalLikes: totalLikes[0]?.total || 0,
          totalDislikes: totalDislikes[0]?.total || 0,
          avgRating: Math.round((avgRating[0]?.avgRating || 0) * 10) / 10
        }
      },
      reviews,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Get user profile error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    )
  }
} 