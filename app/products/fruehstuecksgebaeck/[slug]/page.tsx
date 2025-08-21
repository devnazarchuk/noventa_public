import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getProductBySlug } from '@/app/data/products'
import { ProductDetail } from '@/components/products/ProductDetail'
import { ProductDetailSkeleton } from '@/components/products/ProductDetailSkeleton'

interface FruhstucksgebaeckProductPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getFruhstucksgebaeckProduct(slug: string) {

  await new Promise(resolve => setTimeout(resolve, 100))
  
  const product = getProductBySlug(slug)
  return product ? { data: product } : null
}

export default async function FruhstucksgebaeckProductPage({ params }: FruhstucksgebaeckProductPageProps) {
  const { slug } = await params

  const data = await getFruhstucksgebaeckProduct(slug)

  if (!data) {
    notFound()
  }

  const { data: product } = data

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Suspense fallback={<ProductDetailSkeleton />}>
          <ProductDetail product={product} />
        </Suspense>
      </div>
    </div>
  )
} 