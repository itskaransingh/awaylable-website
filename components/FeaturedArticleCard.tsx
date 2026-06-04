import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { urlFor } from '@/sanity/lib/image'
import { Article } from '@/types/resource'

interface FeaturedArticleCardProps {
  article: Article
}

export default function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  const { title, slug, description, featuredImage, publishedAt, tags } = article

  const formattedDate = publishedAt
    ? format(new Date(publishedAt), 'MMMM dd, yyyy')
    : ''

  const imageUrl = featuredImage
    ? urlFor(featuredImage).width(800).height(600).url()
    : '/fallback-resource.jpg'

  const categoryTag = tags && tags.length > 0 ? tags[0].toUpperCase() : 'ARTICLE'

  return (
    <div className="mb-4">
      <Link href={`/articles/${slug}`} className="group block w-full">
        <section className="flex lg:flex-row flex-col items-stretch gap-6 bg-white p-4 border border-[#E5E7EB] hover:border-[#1A56FF]/20 rounded-[32px] w-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
          <div className="rounded-[24px] w-full lg:w-3/5 aspect-[16/10] overflow-hidden shrink-0 bg-neutral-50 border border-black/[0.02]">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={500}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="flex flex-col justify-between gap-6 p-6 w-full lg:w-2/5">
            <div className="flex flex-col gap-4">
              <span style={{ fontFamily: "var(--font-jakarta)" }} className="font-semibold text-[#6B6F80] text-[10px] md:text-[11px] uppercase tracking-wider">
                {categoryTag}
              </span>
              <h2 style={{ fontFamily: "var(--font-jakarta)" }} className="font-bold text-[#0C0E14] text-2xl md:text-3xl lg:text-4xl leading-tight group-hover:text-[#1A56FF] transition-colors">
                {title}
              </h2>
              {description && (
                <p style={{ fontFamily: "var(--font-jakarta)" }} className="text-sm text-[#6B6F80] leading-[160%] line-clamp-3">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "var(--font-jakarta)" }} className="font-medium text-[#6B6F80] text-sm">{formattedDate}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags && tags.slice(0, 3).map((tag, i) => (
                  <span key={i} style={{ fontFamily: "var(--font-jakarta)" }} className="bg-[#F7F7F5] px-3 py-1 border border-[#E5E7EB] rounded-full font-medium text-[#6B6F80] text-[11px] uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Link>
    </div>
  )
}
