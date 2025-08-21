'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Sourdough Bread',
    description: 'Traditional sourdough bread made with our 100-year-old starter',
    price: 6.99,
    category: 'bread',
    image: '/images/sourdough.jpg',
  },
  {
    id: 2,
    name: 'Chocolate Croissant',
    description: 'Buttery croissant filled with rich dark chocolate',
    price: 4.99,
    category: 'pastries',
    image: '/images/croissant.jpg',
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    description: 'Classic red velvet cake with cream cheese frosting',
    price: 29.99,
    category: 'cakes',
    image: '/images/red-velvet.jpg',
  },

];

const categories = [
  { key: 'all', label: 'Alle' },
  { key: 'bread', label: 'Brot' },
  { key: 'pastries', label: 'Gebäck' },
  { key: 'cakes', label: 'Kuchen' },
];

export default function MenuPage() {
  return (
    <main className="min-h-screen py-16" style={{ fontFamily: 'Poppins, sans-serif', background: '#FFF6F6' }}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center text-4xl font-bold text-[#D72638]"
        >
          Unser Menü
        </motion.h1>

        {}
        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category.key}
              className="rounded-full bg-[#FFF5E1] px-6 py-2 capitalize hover:bg-[#FFE2E2] focus:bg-[#FFD6D6] text-[#D72638] font-semibold shadow-md transition-all"
              aria-label={`Filter: ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-[25px] bg-white shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
                <p className="mb-4 text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#D72638]">€{product.price.toFixed(2)}</span>
                  <span className="rounded-full bg-[#FFF5E1] px-3 py-1 text-sm capitalize text-[#D72638] font-semibold">
                    {categories.find((c) => c.key === product.category)?.label || product.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 