import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Comment from '@/lib/models/Comment'
import Product from '@/lib/models/Product'
import User from '@/lib/models/User'

export async function GET(request) {
  try {
    await connectDB()

    const { userId: clerkId } = await auth()

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const userParam = searchParams.get('userId')

    let userDoc = null
    if (userParam && userParam.match(/^[0-9a-fA-F]{24}$/)) {
      userDoc = await User.findById(userParam)
    }
    if (!userDoc && userParam) {
      userDoc = await User.findOne({ clerkId: userParam })
    }
    if (!userDoc && clerkId) {
      userDoc = await User.findOne({ clerkId })
    }
    if (!userDoc) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const skip = (page - 1) * limit

    const comments = await Comment.find({ userId: userDoc._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate({
        path: 'reviewId',
        populate: [
          { path: 'productId', model: Product, select: 'name imageUrl category' },
          { path: 'userId', model: User, select: 'displayName avatar clerkId' },
        ]
      })

    const total = await Comment.countDocuments({ userId: userDoc._id })

    return NextResponse.json({
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      }
    })
  } catch (e) {
    console.error('List user comments error:', e)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
} 