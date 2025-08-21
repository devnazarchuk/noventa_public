import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import { ProductDetail } from '@/components/products/ProductDetail'
import { ProductDetailSkeleton } from '@/components/products/ProductDetailSkeleton'

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

async function getProduct(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products/${id}`, {
      cache: 'no-store'
    })

    if (!response.ok) {
      return null
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  const data = await getProduct(id)

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