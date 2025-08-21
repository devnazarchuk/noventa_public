const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  images: [{
    imageUrl: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    }
  }],
  isVerified: {
    type: Boolean,
    default: false
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
  }],
  totalComments: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Ensure one review per user per product
reviewSchema.index({ productId: 1, userId: 1 }, { unique: true });

// Update product rating when review is saved/updated/deleted
reviewSchema.post('save', async function() {
  const Product = mongoose.model('Product');
  const product = await Product.findById(this.productId);
  if (product) {
    await product.updateRating();
  }
});

reviewSchema.post('findOneAndUpdate', async function() {
  const Product = mongoose.model('Product');
  const product = await Product.findById(this.productId);
  if (product) {
    await product.updateRating();
  }
});

reviewSchema.post('findOneAndDelete', async function() {
  const Product = mongoose.model('Product');
  const product = await Product.findById(this.productId);
  if (product) {
    await product.updateRating();
  }
});

// Virtual for total reactions
reviewSchema.virtual('totalReactions').get(function() {
  return this.likes.length + this.dislikes.length;
});

// Method to add reaction
reviewSchema.methods.addReaction = function(userId, reactionType) {
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
reviewSchema.methods.removeReaction = function(userId) {
  this.likes = this.likes.filter(id => !id.equals(userId));
  this.dislikes = this.dislikes.filter(id => !id.equals(userId));
  return this.save();
};

module.exports = mongoose.models.Review || mongoose.model('Review', reviewSchema); 