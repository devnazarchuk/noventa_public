'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import { PageWrapper } from "@/components/ui/PageWrapper";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details?: string[];
}

interface ProductPageProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
}

export default function ProductPage({ title, description, heroImage, products }: ProductPageProps) {
  return (
    <PageWrapper>
      {}
      <section className="relative h-[40vh] w-full mb-12">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover rounded-[25px]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 rounded-[25px]" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#FFF6F6] rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] overflow-hidden"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#D72638]">{product.name}</h3>
                <span className="text-lg font-semibold text-[#3A3A3A]">€{product.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 mb-4">{product.description}</p>
              {product.details && (
                <ul className="space-y-2 mb-4">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-600">• {detail}</li>
                  ))}
                </ul>
              )}
              <button className="w-full bg-[#EE0A24] text-white px-6 py-3 rounded-[20px] font-semibold shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] transition-all">
                Jetzt bestellen
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
} 