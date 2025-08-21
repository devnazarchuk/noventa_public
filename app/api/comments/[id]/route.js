import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import Comment from '@/lib/models/Comment'
import User from '@/lib/models/User'

export async function PUT(request, { params }) {
  try {
    await connectDB()
    const { userId } = await auth()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const { content } = await request.json()
    if (!content || !content.trim()) return NextResponse.json({ error: 'Content required' }, { status: 400 })

    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const comment = await Comment.findById(id)
    if (!comment) return NextResponse.json({ error: 'Comment not found' }, { status: 404 })

    if (!comment.userId.equals(userDoc._id)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    comment.content = content.trim()
    await comment.save()

    return NextResponse.json({ message: 'Updated', comment })
  } catch (e) {
    console.error('Update comment error:', e)
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB()
    const { userId } = await auth()
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params

    const userDoc = await User.findOne({ clerkId: userId })
    if (!userDoc) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const comment = await Comment.findById(id)
    if (!comment) return NextResponse.json({ error: 'Comment not found' }, { status: 404 })

  
    if (!comment.userId.equals(userDoc._id)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    await Comment.findByIdAndDelete(id)
    return NextResponse.json({ message: 'Deleted' })
  } catch (e) {
    console.error('Delete comment error:', e)
    return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 })
  }
} 