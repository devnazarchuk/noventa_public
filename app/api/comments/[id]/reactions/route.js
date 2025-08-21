import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Comment from '@/lib/models/Comment'
import User from '@/lib/models/User'

// POST - Add/update reaction to comment
export async function POST(request, { params }) {
  try {
    await connectDB()

    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id: commentId } = await params
    const { reactionType } = await request.json()

  
    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const comment = await Comment.findById(commentId)
    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      )
    }

  
    comment.likes = comment.likes.filter(id => !id.equals(userDoc._id))
    comment.dislikes = comment.dislikes.filter(id => !id.equals(userDoc._id))

  
    if (reactionType === 'like') {
      comment.likes.push(userDoc._id)
    } else if (reactionType === 'dislike') {
      comment.dislikes.push(userDoc._id)
    }

    await comment.save()

    return NextResponse.json({
      message: 'Reaction updated successfully',
      comment: {
        _id: comment._id,
        likes: comment.likes,
        dislikes: comment.dislikes
      }
    })
  } catch (error) {
    console.error('Comment reaction error:', error)
    return NextResponse.json(
      { error: 'Failed to update reaction' },
      { status: 500 }
    )
  }
}

// DELETE - Remove reaction from comment
export async function DELETE(request, { params }) {
  try {
    await connectDB()

    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { id: commentId } = await params

  
    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const comment = await Comment.findById(commentId)
    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      )
    }

  
    comment.likes = comment.likes.filter(id => !id.equals(userDoc._id))
    comment.dislikes = comment.dislikes.filter(id => !id.equals(userDoc._id))

    await comment.save()

    return NextResponse.json({
      message: 'Reaction removed successfully',
      comment: {
        _id: comment._id,
        likes: comment.likes,
        dislikes: comment.dislikes
      }
    })
  } catch (error) {
    console.error('Comment reaction error:', error)
    return NextResponse.json(
      { error: 'Failed to remove reaction' },
      { status: 500 }
    )
  }
} 