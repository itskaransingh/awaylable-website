import { ReactNode } from 'react'

interface ResourceGridProps {
  children: ReactNode
}

export default function ResourceGrid({ children }: ResourceGridProps) {
  return (
    <div className="partner-benefit-grid resource-grid">
      {children}
    </div>
  )
}
