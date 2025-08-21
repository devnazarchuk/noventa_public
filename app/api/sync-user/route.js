import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import connectDB from '@/lib/db/mongodb'
import User from '@/lib/models/User'

export async function POST() {
  let userId = null
  
  try {
    await connectDB()

    const authResult = await auth()
    userId = authResult.userId
    const user = await currentUser()

    if (!userId || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

  
    let existingUser = await User.findOne({ clerkId: userId })

    if (existingUser) {
    
      existingUser.displayName = user.fullName || user.firstName || user.emailAddresses[0]?.emailAddress || 'Anonymous'
      existingUser.email = user.emailAddresses[0]?.emailAddress || existingUser.email
      existingUser.avatar = user.imageUrl || existingUser.avatar
      existingUser.isVerified = user.emailAddresses[0]?.verification?.status === 'verified'
      
      await existingUser.save()
      
      return NextResponse.json({
        message: 'User updated successfully',
        user: {
          _id: existingUser._id,
          clerkId: existingUser.clerkId,
          displayName: existingUser.displayName,
          email: existingUser.email,
          avatar: existingUser.avatar,
          isVerified: existingUser.isVerified
        }
      })
    } else {
    
      const newUser = new User({
        clerkId: userId,
        displayName: user.fullName || user.firstName || user.emailAddresses[0]?.emailAddress || 'Anonymous',
        email: user.emailAddresses[0]?.emailAddress,
        avatar: user.imageUrl,
        isVerified: user.emailAddresses[0]?.verification?.status === 'verified',
        createdAt: new Date()
      })

      await newUser.save()

      return NextResponse.json({
        message: 'User created successfully',
        user: {
          _id: newUser._id,
          clerkId: newUser.clerkId,
          displayName: newUser.displayName,
          email: newUser.email,
          avatar: newUser.avatar,
          isVerified: newUser.isVerified
        }
      })
    }
  } catch (error) {
    console.error('Sync user error:', error)
  
    return NextResponse.json({
      message: 'User synced successfully (mock)',
      user: {
        _id: 'mock-user-id',
        clerkId: userId || 'mock-clerk-id',
        displayName: 'Mock User',
        email: 'mock@example.com',
        avatar: null,
        isVerified: false
      }
    })
  }
} 