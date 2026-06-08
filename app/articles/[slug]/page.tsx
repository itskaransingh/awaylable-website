import { notFound } from 'next/navigation'
import { fetchArticleBySlug } from '@/lib/sanityFetch'
import { urlFor } from '@/sanity/lib/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ArticleDetail from '@/components/article/ArticleDetail'

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

  return (
    <>
      <SiteHeader />
      <ArticleDetail article={article} />
      <SiteFooter />
    </>
  )
}
