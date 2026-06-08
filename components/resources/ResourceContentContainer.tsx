import { ReactNode } from 'react'

interface ResourceContentContainerProps {
  children: ReactNode
  className?: string
}

/**
 * Single source of truth for resource category page width and horizontal inset.
 * All listing pages share this container — do not add page-level padding.
 */
export default function ResourceContentContainer({
  children,
  className = '',
}: ResourceContentContainerProps) {
  return (
    <div className={`resource-content-container ${className}`.trim()}>
      {children}
    </div>
  )
}
