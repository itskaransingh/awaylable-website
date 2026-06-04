import { notFound } from 'next/navigation'
import { fetchComparisonBySlug } from '@/lib/sanityFetch'
import { urlFor } from '@/sanity/lib/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ComparisonBoardDetail from '@/components/comparison/ComparisonBoardDetail'

export const revalidate = 60

interface ComparisonPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: ComparisonPageProps) {
  const params = await props.params
  const comparison = await fetchComparisonBySlug(params.slug)

  if (!comparison) return {}

  const seoTitle = comparison.seo?.seoTitle || `${comparison.title} | Head-to-Head Comparison`
  const seoDesc = comparison.seo?.seoDescription || comparison.description
  const ogImg = comparison.seo?.ogImage || comparison.featuredImage
  const ogUrl =
    comparison.seo?.canonicalUrl || `https://www.awaylable.in/comparison-board/${params.slug}`

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
      publishedTime: comparison.publishedAt,
      images: ogImg
        ? [
            {
              url: urlFor(ogImg).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: comparison.title,
            },
          ]
        : [],
    },
    robots: {
      index: !comparison.seo?.noIndex,
      follow: !comparison.seo?.noIndex,
    },
  }
}

export default async function ComparisonDetailPage(props: ComparisonPageProps) {
  const params = await props.params
  const comparison = await fetchComparisonBySlug(params.slug)

  if (!comparison) {
    return notFound()
  }

  return (
    <>
      <SiteHeader />
      <ComparisonBoardDetail comparison={comparison} />
      <SiteFooter />
    </>
  )
}
