'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface ResourceAnimatedListProps {
  children: ReactNode
  className?: string
}

export default function ResourceAnimatedList({ children, className = '' }: ResourceAnimatedListProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = root.querySelectorAll<HTMLElement>('.resource-reveal-item')
    items.forEach((item, index) => {
      item.style.animationDelay = `${Math.min(index * 0.08, 0.48)}s`
    })
  }, [children])

  return (
    <div ref={ref} className={`resource-page-enter ${className}`.trim()}>
      {children}
    </div>
  )
}
