import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { getProductBySlug } from '@/app/data/products'
import { ProductDetail } from '@/components/products/ProductDetail'
import { ProductDetailSkeleton } from '@/components/products/ProductDetailSkeleton'

interface FeingebaeckProductPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getFeingebaeckProduct(slug: string) {

  await new Promise(resolve => setTimeout(resolve, 100))
  
  const product = getProductBySlug(slug)
  return product ? { data: product } : null
}

export default async function FeingebaeckProductPage({ params }: FeingebaeckProductPageProps) {
  const { slug } = await params

  const data = await getFeingebaeckProduct(slug)

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