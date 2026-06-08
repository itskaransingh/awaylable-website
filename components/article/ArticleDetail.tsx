import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Article } from '@/types/resource'
import { urlFor } from '@/sanity/lib/image'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import ArticleCard from '@/components/ArticleCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ShareButton from '@/components/ShareButton'
import { calculateReadingTime } from '@/lib/articleReadingTime'
import './article-detail.css'

interface ArticleDetailProps {
  article: Article
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  const {
    title,
    description,
    featuredImage,
    publishedAt,
    tags,
    content,
    author,
    relatedArticles,
  } = article

  const formattedDate = publishedAt ? format(new Date(publishedAt), 'MMMM d, yyyy') : ''
  const readingTime = content ? calculateReadingTime(content) : 0
  const showAuthor = Boolean(author?.name)

  return (
    <main className="art-detail">
      <div className="art-detail__shell">
        {/* Breadcrumbs */}
        <nav className="art-detail__breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        {/* Hero: Title + Meta (same width as reading column) */}
        <header className="art-detail__hero">
          <h1 className="art-detail__title">{title}</h1>

          {tags && tags.length > 0 && (
            <div className="art-detail__tags">
              {tags.map((tag) => (
                <span key={tag} className="art-detail__tag">{tag}</span>
              ))}
            </div>
          )}

          <div className="art-detail__meta">
            <div className="art-detail__meta-left">
              {showAuthor && author && (
                <div className="art-detail__author">
                  {author.avatar ? (
                    <div className="art-detail__author-avatar">
                      <Image
                        src={urlFor(author.avatar).width(80).height(80).url()}
                        alt={author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="art-detail__author-avatar art-detail__author-avatar--fallback">
                      {author.name[0]}
                    </div>
                  )}
                  <div className="art-detail__author-info">
                    <span className="art-detail__author-name">{author.name}</span>
                    {(author.role || author.company) && (
                      <span className="art-detail__author-role">
                        {[author.role, author.company].filter(Boolean).join(' · ')}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="art-detail__meta-right">
              {formattedDate && <time dateTime={publishedAt}>{formattedDate}</time>}
              {formattedDate && readingTime > 0 && <span aria-hidden="true">·</span>}
              {readingTime > 0 && <span>{readingTime} min read</span>}
              <ShareButton />
            </div>
          </div>
        </header>

        {/* Featured Image — contained within reading column */}
        {featuredImage && (
          <div className="art-detail__hero-image">
            <Image
              src={urlFor(featuredImage).width(1360).height(768).url()}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 680px) 100vw, 680px"
            />
          </div>
        )}

        {/* Reading Content Container */}
        {content && content.length > 0 && (
          <div className="art-detail__reading">
            <PortableTextRenderer value={content} className="art-detail__prose" />
          </div>
        )}

        {/* CTA — subtle closing section */}
        <section className="art-detail__cta-section">
          <div className="art-detail__cta">
            <p className="art-detail__cta-text">
              Interested in achieving similar results?
            </p>
            <Link href="/#pricing" className="art-detail__cta-btn">
              Get Started <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Related Articles — grid */}
        {relatedArticles && relatedArticles.length > 0 && (
          <section className="art-detail__related" aria-labelledby="art-related">
            <div className="art-detail__related-header">
              <h2 id="art-related" className="art-detail__related-title">Related Articles</h2>
            </div>
            <ResourceAnimatedList className="art-detail__related-grid">
              {relatedArticles.map((related) => (
                <ArticleCard key={related._id} article={related as any} />
              ))}
            </ResourceAnimatedList>
          </section>
        )}
      </div>
    </main>
  )
}
