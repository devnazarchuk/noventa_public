import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

// POST - Add/update reaction to review
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

    const { id: reviewId } = await params
    const { reactionType } = await request.json()

  
    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const review = await Review.findById(reviewId)
    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      )
    }

  
    review.likes = review.likes.filter(id => !id.equals(userDoc._id))
    review.dislikes = review.dislikes.filter(id => !id.equals(userDoc._id))

  
    if (reactionType === 'like') {
      review.likes.push(userDoc._id)
    } else if (reactionType === 'dislike') {
      review.dislikes.push(userDoc._id)
    }

    await review.save()

    return NextResponse.json({
      message: 'Reaction updated successfully',
      review: {
        _id: review._id,
        likes: review.likes,
        dislikes: review.dislikes
      }
    })
  } catch (error) {
    console.error('Review reaction error:', error)
    return NextResponse.json(
      { error: 'Failed to update reaction' },
      { status: 500 }
    )
  }
}

// DELETE - Remove reaction from review
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

    const { id: reviewId } = await params

  
    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const review = await Review.findById(reviewId)
    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      )
    }

  
    review.likes = review.likes.filter(id => !id.equals(userDoc._id))
    review.dislikes = review.dislikes.filter(id => !id.equals(userDoc._id))

    await review.save()

    return NextResponse.json({
      message: 'Reaction removed successfully',
      review: {
        _id: review._id,
        likes: review.likes,
        dislikes: review.dislikes
      }
    })
  } catch (error) {
    console.error('Review reaction error:', error)
    return NextResponse.json(
      { error: 'Failed to remove reaction' },
      { status: 500 }
    )
  }
} 