'use client'
import ProductPage from '@/components/templates/ProductPage';

const rollProducts = [
  {
    id: 1,
    name: 'Classic Kaiser Roll',
    description: 'Traditional German-style Kaiser roll with a crispy crust.',
    price: 0.99,
    image: '/images/Brötchenmix_Tüte-2-e1575032708501-768x942.jpg',
    details: [
      'Perfect for sandwiches',
      'Crispy exterior',
      'Light and fluffy inside',
      'Made fresh daily'
    ]
  },
  {
    id: 2,
    name: 'Multigrain Roll',
    description: 'Healthy multigrain roll packed with seeds and grains.',
    price: 1.29,
    image: '/images/Brötchenmix_Tüte-2-e1575032708501-768x942.jpg',
    details: [
      'High in fiber',
      'Contains 7 different grains',
      'Rich in nutrients',
      'Perfect for health-conscious customers'
    ]
  },
  {
    id: 3,
    name: 'Pretzel Roll',
    description: 'Bavarian-style pretzel roll with a dark, glossy crust.',
    price: 1.49,
    image: '/images/Brötchenmix_Tüte-2-e1575032708501-768x942.jpg',
    details: [
      'Traditional lye coating',
      'Authentic Bavarian recipe',
      'Perfect with butter',
      'Great for sandwiches'
    ]
  }
];

export default function RollsPage() {
  return (
    <ProductPage
      title="Fresh Rolls & Buns"
      description="Start your day with our freshly baked rolls and buns, prepared daily in our bakery."
      heroImage="/images/Brötchenmix_Tüte-2-e1575032708501-768x942.jpg"
      products={rollProducts}
    />
  );
} 