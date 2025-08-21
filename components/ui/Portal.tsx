import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

// Portal component: renders children into document.body for global overlays
export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    ref.current = document.body
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}
