import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlFor } from '@/sanity/lib/image'
import { CaseStudy } from '@/types/resource'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { title, slug, description, featuredImage, publishedAt, clientName, metrics, categories } = caseStudy

  const formattedDate = publishedAt
    ? format(new Date(publishedAt), 'MMMM d, yyyy')
    : ''

  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(400).height(200).url()
    : '/fallback-resource.jpg'

  return (
    <Link href={`/case-studies/${slug}`} className="case-study-card resource-reveal-item">
      <div className="case-study-card-image-wrap">
        <Image
          src={imageUrl}
          alt={clientName || title}
          width={800}
          height={500}
          className="case-study-card-image"
          loading="lazy"
        />
        <span className="case-study-card-badge">Case Study</span>
      </div>

      <div className="case-study-card-body">
        <div className="case-study-card-meta">
          <span className="case-study-card-client">{clientName}</span>
          {formattedDate && (
            <>
              <span aria-hidden="true">•</span>
              <time dateTime={publishedAt}>{formattedDate}</time>
            </>
          )}
        </div>

        <h3 className="case-study-card-title">{title}</h3>

        {description && <p className="case-study-card-description">{description}</p>}

        {categories && categories.length > 0 && (
          <div className="case-study-card-tags">
            {categories.slice(0, 2).map((category) => (
              <span key={category} className="case-study-card-tag">
                {category}
              </span>
            ))}
          </div>
        )}

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-black/[0.04]">
            {metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="flex flex-col gap-0.5">
                <span
                  style={{ fontFamily: 'var(--font-instrument)' }}
                  className="text-xl text-[#1A56FF] leading-none"
                >
                  {metric.value}
                </span>
                <span className="text-[10px] font-semibold text-[#6B6F80] uppercase tracking-wide line-clamp-2">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <span className="case-study-card-cta">
          Read Story <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}
