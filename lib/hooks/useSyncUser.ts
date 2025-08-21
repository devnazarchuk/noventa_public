import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'

export function useSyncUser() {
  const { user, isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn && user) {
    
      fetch('/api/sync-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(error => {
        console.error('Failed to sync user:', error)
      })
    }
  }, [isSignedIn, user])
} 