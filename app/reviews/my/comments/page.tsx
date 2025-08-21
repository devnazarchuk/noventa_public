'use client'

import { ChevronDown, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback,useEffect, useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent } from '@/lib/components/ui/card'

interface Comment {
  _id: string
  content: string
  createdAt: string
  reviewId: {
    _id: string
    title: string
    rating: number
    productId?: { _id: string; name: string; imageUrl?: string; category?: string }
  }
}

export default function MyCommentsPage() {
  const [comments, setComments] = useState<Comment[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)

  const load = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/comments/user?page=${page}&limit=10`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments)
        setHasMore(data.pagination.page < data.pagination.pages)
      }
    } catch (error) {
      console.error('Error loading comments:', error)
    } finally {
      setIsLoading(false)
    }
  }, [page])

  useEffect(() => {
    load()
  }, [load])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5] mb-2">My comments</h1>
          <p className="text-muted-foreground">History of your comments with links to reviewed products.</p>
        </div>

        {comments.length === 0 && !isLoading && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-6xl">💬</div>
              <p className="mt-2 text-muted-foreground">No comments yet.</p>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          {comments.map((c) => (
            <Card key={c._id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex gap-4">
                <div className="shrink-0 relative h-14 w-14 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  {c.reviewId?.productId?.imageUrl ? (
                    <Image src={c.reviewId.productId.imageUrl} alt={c.reviewId.productId.name} fill className="object-cover" />
                  ) : (
                    <MessageSquare className="h-6 w-6 text-gray-400" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{new Date(c.createdAt).toLocaleString()}</span>
                    {c.reviewId?.productId?.name && (
                      <>
                        <span>•</span>
                        <Link href={`/products/${c.reviewId.productId._id}`} className="text-[#D72638] dark:text-[#FFA5A5] hover:underline truncate">
                          {c.reviewId.productId.name}
                        </Link>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-foreground break-words">{c.content}</p>
                  {c.reviewId?._id && (
                    <div className="mt-2 text-sm">
                      <Link href={`/reviews/${c.reviewId._id}`} className="text-[#D72638] dark:text-[#FFA5A5] hover:underline">
                        View review
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <Button variant="outline" disabled={isLoading} onClick={() => setPage(p => p + 1)} className="flex items-center gap-2">
              <ChevronDown className="h-4 w-4" />
              {isLoading ? 'Loading...' : 'Load more'}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
} 