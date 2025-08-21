const { auth, currentUser } = require('@clerk/nextjs/server');
const User = require('../models/User');

// Clerk-based auth middleware for API routes
async function authMiddleware() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { error: { message: 'Unauthorized', status: 401 } };
    }

  
    let user = await User.findOne({ clerkId: userId });
    
    if (!user) {
    
      const clerkUser = await currentUser();
      
      if (!clerkUser) {
        return { error: { message: 'User not found in Clerk', status: 404 } };
      }

    
      user = await User.create({
        clerkId: userId,
        displayName: clerkUser.firstName && clerkUser.lastName 
          ? `${clerkUser.firstName} ${clerkUser.lastName}`
          : clerkUser.username || 'User',
        email: clerkUser.emailAddresses[0]?.emailAddress || '',
        avatar: clerkUser.imageUrl,
        isVerified: true
      });
    }

    return { user };
  } catch (error) {
    console.error('Auth middleware error:', error);
    return { error: { message: 'Authentication failed', status: 401 } };
  }
}

// Optional auth middleware (user can be null)
async function optionalAuthMiddleware() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return { user: null };
    }

    const user = await User.findOne({ clerkId: userId });
    return { user };
  } catch {
    return { user: null };
  }
}

// Admin middleware
async function adminMiddleware() {
  const authResult = await authMiddleware();
  
  if (authResult.error) {
    return authResult;
  }

  if (!authResult.user || authResult.user.role !== 'admin') {
    return { error: { message: 'Admin access required', status: 403 } };
  }

  return authResult;
}

module.exports = {
  authMiddleware,
  optionalAuthMiddleware,
  adminMiddleware,
}; 