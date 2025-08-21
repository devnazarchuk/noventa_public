const mongoose = require('mongoose');

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/noventa';

async function testSeed() {
  try {
    console.log('🔧 Testing seed process...');
    
  
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to database');
    
  
    require('./lib/models/User');
    require('./lib/models/Product');
    require('./lib/models/Review');
    
    const User = mongoose.model('User');
    const Product = mongoose.model('Product');
    const Review = mongoose.model('Review');
    
    console.log('✅ Models loaded');
    
  
    const productCount = await Product.countDocuments();
    console.log(`📊 Found ${productCount} products in database`);
    
    if (productCount === 0) {
      console.log('❌ No products found!');
      return;
    }
    
  
    const userCount = await User.countDocuments({ clerkId: { $regex: /^seed_/ } });
    console.log(`👥 Found ${userCount} seed users in database`);
    
  
    const reviewCount = await Review.countDocuments();
    console.log(`📝 Found ${reviewCount} reviews in database`);
    
    console.log('✅ Database check completed');
    
  } catch (error) {
    console.error('❌ Error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from database');
  }
}

testSeed(); 