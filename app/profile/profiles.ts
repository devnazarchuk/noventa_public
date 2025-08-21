import { auth } from '@clerk/nextjs/server'

import connectDB from '@/lib/db/mongodb'
import User from '@/lib/models/User'

export async function getCurrentProfile() {
  try {
    const { userId } = await auth()
    if (!userId) return null

    await connectDB()
    const user = await User.findOne({ clerkId: userId })
    
    return user ? {
      id: user._id,
      clerkId: user.clerkId,
      displayName: user.displayName,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
      location: user.location,
      isVerified: user.isVerified,
      createdAt: user.createdAt
    } : null
  } catch (error) {
    console.error('Error getting current profile:', error)
    return null
  }
}

export async function getProfileByUserId(userId: string) {
  try {
    await connectDB()
    const user = await User.findOne({ clerkId: userId })
    
    return user ? {
      id: user._id,
      clerkId: user.clerkId,
      displayName: user.displayName,
      email: user.email,
      avatar: user.avatar,
      bio: user.bio,
      location: user.location,
      isVerified: user.isVerified,
      createdAt: user.createdAt
    } : null
  } catch (error) {
    console.error('Error getting profile by userId:', error)
    return null
  }
} 