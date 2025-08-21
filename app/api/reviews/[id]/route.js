import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Comment from '@/lib/models/Comment'
import Review from '@/lib/models/Review'
import User from '@/lib/models/User'

// GET - Get single review by ID
export async function GET(request, { params }) {
  try {
    await connectDB()

    const { id: reviewId } = await params

    const review = await Review.findById(reviewId)
      .populate('userId', 'displayName avatar isVerified clerkId')
      .populate('productId', 'name imageUrl category')

    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      review
    })
  } catch (error) {
    console.error('Get review error:', error)
    return NextResponse.json(
      { error: 'Failed to get review' },
      { status: 500 }
    )
  }
}

// DELETE - Delete a review
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

  
    if (!review.userId.equals(userDoc._id)) {
      return NextResponse.json(
        { error: 'You can only delete your own reviews' },
        { status: 403 }
      )
    }

  
    await Comment.deleteMany({ reviewId })

  
    await Review.findByIdAndDelete(reviewId)

    return NextResponse.json({
      message: 'Review deleted successfully'
    })
  } catch (error) {
    console.error('Delete review error:', error)
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    )
  }
}

// PUT - Update a review
export async function PUT(request, { params }) {
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
    const updateData = await request.json()

  
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

  
    if (!review.userId.equals(userDoc._id)) {
      return NextResponse.json(
        { error: 'You can only edit your own reviews' },
        { status: 403 }
      )
    }

  
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      updateData,
      { new: true }
    ).populate('userId', 'displayName avatar isVerified clerkId')
     .populate('productId', 'name imageUrl category')

    return NextResponse.json({
      message: 'Review updated successfully',
      review: updatedReview
    })
  } catch (error) {
    console.error('Update review error:', error)
    return NextResponse.json(
      { error: 'Failed to update review' },
      { status: 500 }
    )
  }
} 