
'use server'

import connectDB from '@/lib/db/mongodb.mjs';
import Comment from '@/lib/models/Comment';
import Product from '@/lib/models/Product';
import Review from '@/lib/models/Review';

// Review Actions
export async function getReviews(page = 1, limit = 10, category = null, rating = null) {
  try {
    await connectDB();
    
    const skip = (page - 1) * limit;
    
  
    let query = {};
    if (category) {
      query['product.category'] = category;
    }
    if (rating) {
      query.rating = { $gte: parseInt(rating) };
    }
    
    const reviews = await Review.find(query)
      .populate('userId', 'displayName avatar isVerified')
      .populate('productId', 'name imageUrl category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const total = await Review.countDocuments(query);
    
    return {
      reviews,
      total,
      hasMore: skip + limit < total,
      page,
      limit,
    };
  } catch (error) {
    console.error('Get reviews error:', error);
    throw new Error('Failed to fetch reviews');
  }
}

export async function createReview(reviewData) {
  try {
    await connectDB();
    
    const { productId, rating, title, content, images, userId } = reviewData;
    
  
    if (!productId || !rating || !title || !content || !userId) {
      throw new Error('All fields are required');
    }
    
    if (rating < 1 || rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }
    
  
    const existingReview = await Review.findOne({
      productId,
      userId,
    });
    
    if (existingReview) {
      throw new Error('You have already reviewed this product');
    }
    
  
    const review = new Review({
      productId,
      userId,
      rating,
      title,
      content,
      images: images || [],
    });
    
    await review.save();
    
  
    await review.populate('userId', 'displayName avatar isVerified');
    await review.populate('productId', 'name imageUrl category');
    
    return review;
  } catch (error) {
    console.error('Create review error:', error);
    throw error;
  }
}

export async function deleteReview(reviewId, userId) {
  try {
    await connectDB();
    
    const review = await Review.findOneAndDelete({
      _id: reviewId,
      userId,
    });
    
    if (!review) {
      throw new Error('Review not found or you do not have permission to delete it');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Delete review error:', error);
    throw error;
  }
}

export async function addReaction(reviewId, userId, reactionType) {
  try {
    await connectDB();
    
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    
    await review.addReaction(userId, reactionType);
    return review;
  } catch (error) {
    console.error('Add reaction error:', error);
    throw error;
  }
}

export async function removeReaction(reviewId, userId) {
  try {
    await connectDB();
    
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    
    await review.removeReaction(userId);
    return review;
  } catch (error) {
    console.error('Remove reaction error:', error);
    throw error;
  }
}

// Comment Actions
export async function getReviewComments(reviewId, page = 1, limit = 10) {
  try {
    await connectDB();
    
    const skip = (page - 1) * limit;
    
  
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    
  
    const comments = await Comment.find({ 
      reviewId, 
      parentId: null 
    })
      .populate('userId', 'displayName avatar isVerified')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
  
    for (let comment of comments) {
      const replies = await Comment.find({ parentId: comment._id })
        .populate('userId', 'displayName avatar isVerified')
        .sort({ createdAt: 1 })
        .lean();
      comment.replies = replies;
    }
    
    const total = await Comment.countDocuments({ reviewId, parentId: null });
    
    return {
      comments,
      total,
      hasMore: skip + limit < total,
      page,
      limit,
    };
  } catch (error) {
    console.error('Get comments error:', error);
    throw error;
  }
}

export async function addComment(commentData) {
  try {
    await connectDB();
    
    const { reviewId, content, parentId, userId } = commentData;
    
  
    if (!content || content.trim().length === 0) {
      throw new Error('Comment content is required');
    }
    
    if (content.length > 500) {
      throw new Error('Comment too long (max 500 characters)');
    }
    
  
    const review = await Review.findById(reviewId);
    if (!review) {
      throw new Error('Review not found');
    }
    
  
    if (parentId) {
      const parentComment = await Comment.findById(parentId);
      if (!parentComment || !parentComment.reviewId.equals(reviewId)) {
        throw new Error('Parent comment not found');
      }
    }
    
  
    const comment = new Comment({
      reviewId,
      userId,
      content: content.trim(),
      parentId: parentId || null,
    });
    
    await comment.save();
    
  
    await comment.populate('userId', 'displayName avatar isVerified');
    
    return comment;
  } catch (error) {
    console.error('Add comment error:', error);
    throw error;
  }
}

export async function deleteComment(commentId, userId) {
  try {
    await connectDB();
    
    const comment = await Comment.findOneAndDelete({
      _id: commentId,
      userId,
    });
    
    if (!comment) {
      throw new Error('Comment not found or you do not have permission to delete it');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Delete comment error:', error);
    throw error;
  }
}

// Product Actions
export async function getProducts(page = 1, limit = 10, category = null, search = null) {
  try {
    await connectDB();
    
    const skip = (page - 1) * limit;
    
  
    let query = { isActive: true };
    
    if (category) {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }
    
    const products = await Product.find(query)
      .sort({ averageRating: -1, totalReviews: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    
    const total = await Product.countDocuments(query);
    
    return {
      products,
      total,
      hasMore: skip + limit < total,
      page,
      limit,
    };
  } catch (error) {
    console.error('Get products error:', error);
    throw error;
  }
} 