import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { ComparisonBoard } from '@/types/resource'

interface ComparisonCardProps {
  comparison: ComparisonBoard
}

export default function ComparisonCard({ comparison }: ComparisonCardProps) {
  const { title, slug, description, featuredImage, competitorA, competitorB } = comparison

  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(1200).height(680).url()
    : '/fallback-resource.jpg'

  return (
    <Link href={`/comparison-board/${slug}`} className="comparison-card resource-reveal-item">
      {/* Text block — competitors badge, title, description, CTA */}
      <div className="comparison-card-body">
        <div className="comparison-card-meta">
          <span className="comparison-card-competitors">
            {competitorA} vs {competitorB}
          </span>
        </div>
        <h3 className="comparison-card-title">{title}</h3>
        {description && <p className="comparison-card-description">{description}</p>}
        <span className="comparison-card-cta">
          Read More <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
      {/* Inset thumbnail at the bottom */}
      <div className="comparison-card-image-wrap">
        <Image
          src={imageUrl}
          alt={title}
          width={1200}
          height={680}
          className="comparison-card-image"
          loading="lazy"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 1200px"
        />
      </div>
    </Link>
  )
}

