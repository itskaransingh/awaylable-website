import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { fetchArticleBySlug } from '@/lib/sanityFetch'
import { calculateReadingTime } from '@/lib/articleReadingTime'
import { urlFor } from '@/sanity/lib/image'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ArticleCard from '@/components/ArticleCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ShareButton from '@/components/ShareButton'

export const revalidate = 60

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: ArticlePageProps) {
  const params = await props.params
  const article = await fetchArticleBySlug(params.slug)

  if (!article) return {}

  const seoTitle = article.seo?.seoTitle || `${article.title} | Awaylable`
  const seoDesc = article.seo?.seoDescription || article.description
  const ogImg = article.seo?.ogImage || article.featuredImage
  const ogUrl = article.seo?.canonicalUrl || `https://www.awaylable.in/articles/${params.slug}`

  return {
    title: seoTitle,
    description: seoDesc,
    alternates: {
      canonical: ogUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDesc,
      url: ogUrl,
      type: 'article',
      publishedTime: article.publishedAt,
      images: ogImg
        ? [
            {
              url: urlFor(ogImg).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
    robots: {
      index: !article.seo?.noIndex,
      follow: !article.seo?.noIndex,
    },
  }
}

export default async function ArticleDetailPage(props: ArticlePageProps) {
  const params = await props.params
  const article = await fetchArticleBySlug(params.slug)

  if (!article) {
    return notFound()
  }

  const { title, description, featuredImage, publishedAt, tags, content, relatedArticles, author } = article

  const formattedDate = publishedAt ? format(new Date(publishedAt), 'MMMM d, yyyy') : ''
  const readingTime = calculateReadingTime(content)
  const primaryTag = tags && tags.length > 0 ? tags[0] : null
  const showAuthor = Boolean(author?.name)

  return (
    <>
      <SiteHeader />

      <main className="resources-theme article-page">
        <div className="article-page-shell">
          <article>
            <header className="article-hero">
              {primaryTag && <span className="article-category-badge">{primaryTag}</span>}

              <h1 className="article-title">{title}</h1>

              {description && <p className="article-dek">{description}</p>}

              <div className="article-meta">
                <div className="article-meta-details">
                  {formattedDate && <time dateTime={publishedAt}>{formattedDate}</time>}
                  {formattedDate && readingTime > 0 && <span className="article-meta-divider" aria-hidden="true">•</span>}
                  {readingTime > 0 && <span>{readingTime} min read</span>}
                </div>
                <ShareButton />
              </div>
            </header>

            {featuredImage && (
              <div className="article-featured-image">
                <Image
                  src={urlFor(featuredImage).width(1100).height(788).url()}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
              </div>
            )}

            {content && content.length > 0 && (
              <section className="article-content-section" aria-label="Article body">
                <div className="article-content-column">
                  <PortableTextRenderer value={content} />
                </div>
              </section>
            )}

            {showAuthor && author && (
              <section className="article-author-section" aria-label="Author">
                <p className="article-author-label">Written by</p>
                <div className="article-author-card">
                  {author.avatar && (
                    <div className="article-author-avatar">
                      <Image
                        src={urlFor(author.avatar).width(112).height(112).url()}
                        alt={author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="article-author-name">{author.name}</p>
                    {(author.role || author.company) && (
                      <p className="article-author-role">
                        {[author.role, author.company].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            )}

            {relatedArticles && relatedArticles.length > 0 && (
              <section className="article-related-section" aria-label="Related articles">
                <p className="article-related-eyebrow">Keep reading</p>
                <h2 className="article-related-title">Related articles</h2>
                <div className="resource-grid-shell resource-grid-shell--articles">
                  <ResourceAnimatedList className="articles-grid">
                    {relatedArticles.map((related) => (
                      <ArticleCard key={related._id} article={related as any} />
                    ))}
                  </ResourceAnimatedList>
                </div>
              </section>
            )}
          </article>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
