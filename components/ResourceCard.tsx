import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlFor } from '@/sanity/lib/image'
import { Resource } from '@/types/resource'

interface ResourceCardProps {
  resource: Resource
}

// Simple reading time estimator for articles
function calculateReadingTime(content: any[]): number {
  if (!content || !Array.isArray(content)) return 3
  let text = ''
  content.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          text += child.text + ' '
        }
      })
    }
  })
  const wordCount = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200)) // 200 words per minute
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const { _type, title, slug, description, featuredImage, publishedAt } = resource

  // Category and Badge Styling
  let categoryLabel = ''
  let categoryUrl = ''
  let badgeClass = ''
  let ctaLabel = 'Read More'

  if (_type === 'article') {
    categoryLabel = 'Article'
    categoryUrl = `/articles/${slug}`
    badgeClass = 'badge-article'
    ctaLabel = 'Read Article'
  } else if (_type === 'caseStudy') {
    categoryLabel = 'Case Study'
    categoryUrl = `/case-studies/${slug}`
    badgeClass = 'badge-case-study'
    ctaLabel = 'View Story'
  } else if (_type === 'comparisonBoard') {
    categoryLabel = 'Comparison'
    categoryUrl = `/comparison-board/${slug}`
    badgeClass = 'badge-comparison'
    ctaLabel = 'Compare Products'
  }

  const formattedDate = publishedAt
    ? format(new Date(publishedAt), 'MMMM dd, yyyy')
    : ''

  // Safe image resolution
  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(600).height(400).url()
    : '/fallback-resource.jpg'

  return (
    <article className="partner-type-card resource-card">
      <div className="resource-card-image-wrap">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="resource-card-image"
          loading="lazy"
        />
        <div className={`resource-card-badge ${badgeClass}`}>
          {categoryLabel}
        </div>
      </div>
      <div className="partner-card-body resource-card-body">
        <div className="resource-card-meta">
          <time dateTime={publishedAt}>{formattedDate}</time>
          {_type === 'article' && (
            <>
              <span className="resource-meta-dot">•</span>
              <span>{calculateReadingTime((resource as any).content)} min read</span>
            </>
          )}
        </div>
        <h3 className="resource-card-title">{title}</h3>
        <p className="resource-card-description">{description}</p>
        <Link href={categoryUrl} className="partner-card-cta resource-card-cta">
          {ctaLabel} &rarr;
        </Link>
      </div>
    </article>
  )
}
