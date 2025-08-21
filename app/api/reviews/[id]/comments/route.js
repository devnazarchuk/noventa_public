import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Comment from '@/lib/models/Comment'
import User from '@/lib/models/User'

// GET - Get comments for a specific review
export async function GET(request, { params }) {
  try {
    await connectDB()
    
    const { id: reviewId } = await params
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const skip = (page - 1) * limit

  
    const top = await Comment.find({ reviewId, parentId: null })
      .populate('userId', 'displayName avatar isVerified clerkId')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

  
    const ids = top.map(c => c._id)
    const replies = await Comment.find({ parentId: { $in: ids } })
      .populate('userId', 'displayName avatar isVerified clerkId')
      .sort({ createdAt: 1 })

  
    const byParent = replies.reduce((m, r) => {
      const key = r.parentId?.toString() || ''
      if (!m[key]) m[key] = []
      m[key].push(r)
      return m
    }, {})

    const comments = top.map(c => ({ ...c.toObject(), replies: byParent[c._id.toString()] || [] }))

    const total = await Comment.countDocuments({ reviewId, parentId: null })

    return NextResponse.json({
      comments,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Get comments error:', error)
    return NextResponse.json(
      { error: 'Failed to get comments' },
      { status: 500 }
    )
  }
}

// POST - Add a comment to a review
export async function POST(request, { params }) {
  try {
    await connectDB()
    
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const { id: reviewId } = await params
    const { content, parentId } = await request.json()
    
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { error: 'Comment content is required' },
        { status: 400 }
      )
    }

  
    let userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      userDoc = await User.create({ clerkId: userId, displayName: 'User' })
    }

    const comment = new Comment({
      reviewId,
      userId: userDoc._id,
      content: content.trim(),
      parentId: parentId || null
    })

    await comment.save()
    await comment.populate('userId', 'displayName avatar isVerified clerkId')
    await comment.populate('parentId', 'content userId')

    return NextResponse.json({
      message: 'Comment added successfully',
      comment
    }, { status: 201 })
  } catch (error) {
    console.error('Add comment error:', error)
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    )
  }
} 
