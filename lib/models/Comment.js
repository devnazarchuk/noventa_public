const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  isModerated: {
    type: Boolean,
    default: false
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  dislikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

// Update review comment count when comment is saved/deleted
commentSchema.post('save', async function() {
  const Review = mongoose.model('Review');
  const review = await Review.findById(this.reviewId);
  if (review) {
    const commentCount = await mongoose.model('Comment').countDocuments({ reviewId: this.reviewId });
    review.totalComments = commentCount;
    await review.save();
  }
});

commentSchema.post('findOneAndDelete', async function() {
  const Review = mongoose.model('Review');
  const review = await Review.findById(this.reviewId);
  if (review) {
    const commentCount = await mongoose.model('Comment').countDocuments({ reviewId: this.reviewId });
    review.totalComments = commentCount;
    await review.save();
  }
});

// Virtual for replies
commentSchema.virtual('replies', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentId'
});

// Method to add reaction
commentSchema.methods.addReaction = function(userId, reactionType) {
  if (reactionType === 'like') {
  
    this.dislikes = this.dislikes.filter(id => !id.equals(userId));
  
    if (!this.likes.some(id => id.equals(userId))) {
      this.likes.push(userId);
    }
  } else if (reactionType === 'dislike') {
  
    this.likes = this.likes.filter(id => !id.equals(userId));
  
    if (!this.dislikes.some(id => id.equals(userId))) {
      this.dislikes.push(userId);
    }
  }
  return this.save();
};

// Method to remove reaction
commentSchema.methods.removeReaction = function(userId) {
  this.likes = this.likes.filter(id => !id.equals(userId));
  this.dislikes = this.dislikes.filter(id => !id.equals(userId));
  return this.save();
};

module.exports = mongoose.models.Comment || mongoose.model('Comment', commentSchema); 