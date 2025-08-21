// Initialize all models to ensure they are registered with Mongoose
require('./User');
require('./Product');
require('./Review');
require('./Comment');

// Export models for convenience
const User = require('./User');
const Product = require('./Product');
const Review = require('./Review');
const Comment = require('./Comment');

module.exports = {
  User,
  Product,
  Review,
  Comment
}; 