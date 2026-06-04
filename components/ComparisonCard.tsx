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
    ? urlFor(featuredImage).width(800).height(500).url()
    : '/fallback-resource.jpg'

  return (
    <Link href={`/comparison-board/${slug}`} className="comparison-card resource-reveal-item">
      <div className="comparison-card-image-wrap relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="comparison-card-image"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, 40vw"
        />
      </div>
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
    </Link>
  )
}
