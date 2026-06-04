import { ReactNode } from 'react'

interface ResourceContentContainerProps {
  children: ReactNode
  /** Horizontal inset only — use for hero and category nav alignment */
  insetOnly?: boolean
  className?: string
}

export default function ResourceContentContainer({
  children,
  insetOnly = false,
  className = '',
}: ResourceContentContainerProps) {
  const modifier = insetOnly ? 'resource-content-container--inset-only' : ''

  return (
    <div className={`resource-content-container ${modifier} ${className}`.trim()}>
      {children}
    </div>
  )
}
