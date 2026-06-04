import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlFor } from '@/sanity/lib/image'
import { Article } from '@/types/resource'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, slug, description, featuredImage, publishedAt, tags } = article

  const formattedDate = publishedAt
    ? format(new Date(publishedAt), 'MMMM d, yyyy')
    : ''

  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(600).height(400).url()
    : '/fallback-resource.jpg'

  const categoryTag = tags && tags.length > 0 ? tags[0].toUpperCase() : 'ARTICLE'

  return (
    <Link href={`/articles/${slug}`} className="article-card resource-reveal-item">
      <div className="article-card-body">
        <span className="article-card-tag">{categoryTag}</span>
        <h3 className="article-card-title">{title}</h3>
        {description && <p className="article-card-excerpt">{description}</p>}
        {formattedDate && <time className="article-card-date" dateTime={publishedAt}>{formattedDate}</time>}
      </div>
      <div className="article-card-image-wrap">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="article-card-image"
          loading="lazy"
        />
      </div>
    </Link>
  )
}
