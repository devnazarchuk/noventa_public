import { NextResponse } from 'next/server';

import connectDB from '@/lib/db/mongodb';
import User from '@/lib/models/User';
import { generateToken } from '@/lib/utils/jwt';

export async function POST(request) {
  try {
    await connectDB();
    
    const { displayName, email, password } = await request.json();

  
    if (!displayName || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

  
    const user = new User({
      displayName,
      email,
      password,
    });

    await user.save();

  
    const token = generateToken({ userId: user._id });

    return NextResponse.json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        displayName: user.displayName,
        email: user.email,
        avatar: user.avatar,
        bio: user.bio,
        location: user.location,
        membership: user.membership,
        isVerified: user.isVerified,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 
