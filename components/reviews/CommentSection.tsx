'use client'

import { useUser } from '@clerk/nextjs'
import { format } from 'date-fns'
import { de, enUS } from 'date-fns/locale'
import { Edit, Reply, Send,ThumbsDown, ThumbsUp, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

import { useLanguageStore } from '@/app/store/languageStore'
import AuthCard from '@/components/ui/AuthCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar'
import { Button } from '@/lib/components/ui/button'
import { Textarea } from '@/lib/components/ui/textarea'

interface Comment {
  _id: string
  content: string
  createdAt: string
  userId: {
    clerkId: string
    displayName: string
    avatar?: string
  }
  likes: string[]
  dislikes: string[]
  replies?: Comment[]
}

interface CommentSectionProps {
  reviewId: string
}

export default function CommentSection({ reviewId }: CommentSectionProps) {
  const { user, isSignedIn } = useUser()
  const { language } = useLanguageStore()
  
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [editingComment, setEditingComment] = useState<string | null>(null)
  const [editContent, setEditContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showAuthCard, setShowAuthCard] = useState(false)


  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}/comments`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments || [])
      }
    } catch (error) {
      console.error('Error loading comments:', error)
    }
  }, [reviewId])

  useEffect(() => {
    loadComments()
  }, [reviewId, loadComments])


  const handleAddComment = async () => {
    if (!isSignedIn) {
      setShowAuthCard(true)
      return
    }

    if (!newComment.trim()) {
      toast.error('Comment cannot be empty')
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`/api/reviews/${reviewId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: newComment })
      })

      if (!response.ok) {
        throw new Error('Failed to add comment')
      }

      setNewComment('')
      loadComments()
      toast.success('Comment added successfully')
    } catch (error) {
      console.error('Error adding comment:', error)
      toast.error('Failed to add comment')
    } finally {
      setIsLoading(false)
    }
  }


  const handleAddReply = async (parentId: string) => {
    if (!isSignedIn) {
      toast.error('Please sign in to reply')
      return
    }

    if (!replyContent.trim()) {
      toast.error('Reply cannot be empty')
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`/api/reviews/${reviewId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          content: replyContent,
          parentId 
        })
      })

      if (!response.ok) {
        throw new Error('Failed to add reply')
      }

      setReplyContent('')
      setReplyingTo(null)
      loadComments()
      toast.success('Reply added successfully')
    } catch (error) {
      console.error('Error adding reply:', error)
      toast.error('Failed to add reply')
    } finally {
      setIsLoading(false)
    }
  }


  const handleEditComment = async (commentId: string) => {
    if (!editContent.trim()) {
      toast.error('Comment cannot be empty')
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: editContent })
      })

      if (!response.ok) {
        throw new Error('Failed to edit comment')
      }

      setEditContent('')
      setEditingComment(null)
      loadComments()
      toast.success('Comment updated successfully')
    } catch (error) {
      console.error('Error editing comment:', error)
      toast.error('Failed to edit comment')
    } finally {
      setIsLoading(false)
    }
  }


  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete comment')
      }

      loadComments()
      toast.success('Comment deleted successfully')
    } catch (error) {
      console.error('Error deleting comment:', error)
      toast.error('Failed to delete comment')
    } finally {
      setIsLoading(false)
    }
  }


  const handleCommentReaction = async (commentId: string, reactionType: 'like' | 'dislike') => {
    if (!isSignedIn) {
      setShowAuthCard(true)
      return
    }

    try {
    
      setComments(prev => prev.map(c => {
        if (c._id !== commentId) return c
        const isLike = reactionType === 'like'
        const newC = { ...c }
        if (isLike) {
        
          const already = (newC.likes || []).some(id => id === user?.id)
          newC.likes = already ? (newC.likes || []).filter(id => id !== user?.id) : [ ...(newC.likes || []), user!.id ]
        
          newC.dislikes = (newC.dislikes || []).filter(id => id !== user?.id)
        } else {
          const already = (newC.dislikes || []).some(id => id === user?.id)
          newC.dislikes = already ? (newC.dislikes || []).filter(id => id !== user?.id) : [ ...(newC.dislikes || []), user!.id ]
          newC.likes = (newC.likes || []).filter(id => id !== user?.id)
        }
        return newC
      }))

      const response = await fetch(`/api/comments/${commentId}/reactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reactionType })
      })

      if (!response.ok) {
      
        await loadComments()
        throw new Error('Failed to update reaction')
      }

    
      toast.success('Reaction updated')
    } catch (error) {
      console.error('Error updating reaction:', error)
      toast.error('Failed to update reaction')
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, 'MMM dd, yyyy HH:mm', {
      locale: language === 'de' ? de : enUS
    })
  }

  const canEditComment = (comment: Comment) => {
    return isSignedIn && user?.id === comment.userId.clerkId
  }

  const canDeleteComment = (comment: Comment) => {
    return canEditComment(comment) || user?.publicMetadata?.role === 'admin'
  }

    return (
    <div className="space-y-4">
      {}
      {isSignedIn ? (
        <div className="space-y-2">
          <Textarea
            placeholder={language === 'de' ? 'Schreiben Sie einen Kommentar...' : 'Write a comment...'}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={3}
          />
          <div className="flex justify-end">
            <Button
              onClick={handleAddComment}
              disabled={isLoading || !newComment.trim()}
              size="sm"
            >
              <Send className="h-4 w-4 mr-2" />
              {language === 'de' ? 'Kommentar hinzufügen' : 'Add Comment'}
            </Button>
          </div>
        </div>
      ) : (
        <AuthCard
          isOpen={showAuthCard}
          onClose={() => setShowAuthCard(false)}
        />
      )}

      {}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
                <AvatarImage src={comment.userId.avatar} alt={comment.userId.displayName} />
                <AvatarFallback>
                  {comment.userId.displayName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">
                    {comment.userId.displayName}
                </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(comment.createdAt)}
                </span>
              </div>
              
                {editingComment === comment._id ? (
                  <div className="space-y-2">
                    <Textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={2}
                    />
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleEditComment(comment._id)}
                        disabled={isLoading}
                      >
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingComment(null)
                          setEditContent('')
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-gray-700 dark:text-gray-300 break-words overflow-wrap-anywhere">
                    {comment.content}
                  </p>
                )}

                {}
                <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                    onClick={() => handleCommentReaction(comment._id, 'like')}
                    className="flex items-center gap-1 text-xs"
                >
                    <ThumbsUp className="h-3 w-3" />
                    <span>{comment.likes?.length || 0}</span>
                </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCommentReaction(comment._id, 'dislike')}
                    className="flex items-center gap-1 text-xs"
                  >
                    <ThumbsDown className="h-3 w-3" />
                    <span>{comment.dislikes?.length || 0}</span>
                  </Button>

              <Button
                variant="ghost"
                size="sm"
                    onClick={() => setReplyingTo(replyingTo === comment._id ? null : comment._id)}
                    className="flex items-center gap-1 text-xs"
              >
                <Reply className="h-3 w-3" />
                    {language === 'de' ? 'Antworten' : 'Reply'}
                  </Button>

                  {canEditComment(comment) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setEditingComment(comment._id)
                        setEditContent(comment.content)
                      }}
                      className="flex items-center gap-1 text-xs"
                    >
                      <Edit className="h-3 w-3" />
                      {language === 'de' ? 'Bearbeiten' : 'Edit'}
                    </Button>
                  )}

                  {canDeleteComment(comment) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteComment(comment._id)}
                      className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                      {language === 'de' ? 'Löschen' : 'Delete'}
              </Button>
            )}
        </div>

                {}
                {replyingTo === comment._id && (
                  <div className="mt-3 space-y-2">
            <Textarea
                      placeholder={language === 'de' ? 'Antwort schreiben...' : 'Write a reply...'}
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
                      rows={2}
            />
                    <div className="flex gap-2">
              <Button
                size="sm"
                        onClick={() => handleAddReply(comment._id)}
                        disabled={isLoading || !replyContent.trim()}
              >
                        Reply
              </Button>
              <Button
                        size="sm"
                variant="outline"
                onClick={() => {
                  setReplyingTo(null)
                  setReplyContent('')
                }}
              >
                        Cancel
              </Button>
            </div>
          </div>
        )}

                {}
        {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-3 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply._id} className="ml-4 border-l border-gray-200 dark:border-gray-700 pl-3">
                        <div className="flex items-start gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={reply.userId.avatar} alt={reply.userId.displayName} />
                            <AvatarFallback className="text-xs">
                              {reply.userId.displayName.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-xs">
                                {reply.userId.displayName}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatDate(reply.createdAt)}
                              </span>
                            </div>
                            
                            {editingComment === reply._id ? (
                              <div className="space-y-2 mt-2">
                                <Textarea
                                  value={editContent}
                                  onChange={(e) => setEditContent(e.target.value)}
                                  rows={2}
                                  className="text-xs"
                                />
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    onClick={() => handleEditComment(reply._id)}
                                    disabled={isLoading}
                                    className="text-xs"
                                  >
                                    Save
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      setEditingComment(null)
                                      setEditContent('')
                                    }}
                                    className="text-xs"
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <p className="text-xs text-gray-700 dark:text-gray-300 mt-1 break-words overflow-wrap-anywhere">
                                {reply.content}
                              </p>
                            )}
                            
                            {}
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCommentReaction(reply._id, 'like')}
                                className="flex items-center gap-1 text-xs h-6 px-2"
                              >
                                <ThumbsUp className="h-2 w-2" />
                                <span>{reply.likes?.length || 0}</span>
                              </Button>

                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCommentReaction(reply._id, 'dislike')}
                                className="flex items-center gap-1 text-xs h-6 px-2"
                              >
                                <ThumbsDown className="h-2 w-2" />
                                <span>{reply.dislikes?.length || 0}</span>
                              </Button>

                              {canEditComment(reply) && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => {
                                    setEditingComment(reply._id)
                                    setEditContent(reply.content)
                                  }}
                                  className="flex items-center gap-1 text-xs h-6 px-2"
                                >
                                  <Edit className="h-2 w-2" />
                                  {language === 'de' ? 'Bearbeiten' : 'Edit'}
                                </Button>
                              )}

                              {canDeleteComment(reply) && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteComment(reply._id)}
                                  className="flex items-center gap-1 text-xs h-6 px-2 text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="h-2 w-2" />
                                  {language === 'de' ? 'Löschen' : 'Delete'}
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
          </div>
        )}
      </div>
            </div>
          </div>
        ))}
      </div>

      {comments.length === 0 && (
        <div className="text-center text-muted-foreground py-8">
          {language === 'de' ? 'Noch keine Kommentare' : 'No comments yet'}
        </div>
      )}

      {}
      <AuthCard
        isOpen={showAuthCard}
        onClose={() => setShowAuthCard(false)}
      />
    </div>
  )
} 