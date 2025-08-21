import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      message: 'Authentication successful',
      userId
    })
  } catch (error) {
    console.error('Auth test error:', error)
    return NextResponse.json({
      message: 'Authentication test (mock)',
      userId: 'mock-user-id'
    })
  }
} 