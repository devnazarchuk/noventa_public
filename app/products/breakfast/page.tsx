'use client'
import ProductPage from '@/components/templates/ProductPage';

const breakfastProducts = [
  {
    id: 1,
    name: 'Classic Breakfast',
    description: 'Our signature breakfast with fresh bread, pastries, and coffee.',
    price: 12.99,
    image: '/images/services-breakfast.jpg',
    details: [
      'Selection of fresh bread and rolls',
      'Butter croissant',
      'Coffee or tea',
      'Fresh orange juice',
      'Jam and honey'
    ]
  },
  {
    id: 2,
    name: 'Fitness Breakfast',
    description: 'Healthy breakfast option with whole grain products and fresh fruits.',
    price: 14.99,
    image: '/images/services-breakfast.jpg',
    details: [
      'Whole grain bread selection',
      'Fresh fruit salad',
      'Low-fat yogurt',
      'Green tea or coffee',
      'Nuts and seeds'
    ]
  },
  {
    id: 3,
    name: 'Business Breakfast',
    description: 'Premium breakfast selection perfect for meetings.',
    price: 16.99,
    image: '/images/services-breakfast.jpg',
    details: [
      'Premium bread and pastry selection',
      'Scrambled eggs',
      'Smoked salmon',
      'Fresh juice and coffee',
      'Selection of cheeses'
    ]
  }
];

export default function BreakfastPage() {
  return (
    <ProductPage
      title="Breakfast Selection"
      description="Start your day right with our freshly prepared breakfast options, available at 35 locations."
      heroImage="/images/services-breakfast.jpg"
      products={breakfastProducts}
    />
  );
} 