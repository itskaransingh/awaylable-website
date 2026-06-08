import { notFound } from 'next/navigation'
import { fetchCaseStudyBySlug } from '@/lib/sanityFetch'
import { urlFor } from '@/sanity/lib/image'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CaseStudyDetail from '@/components/case-study/CaseStudyDetail'

export const revalidate = 60

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: CaseStudyPageProps) {
  const params = await props.params
  const caseStudy = await fetchCaseStudyBySlug(params.slug)

  if (!caseStudy) return {}

  const seoTitle = caseStudy.seo?.seoTitle || `${caseStudy.title} | Case Story`
  const seoDesc = caseStudy.seo?.seoDescription || caseStudy.description
  const ogImg = caseStudy.seo?.ogImage || caseStudy.featuredImage
  const ogUrl = caseStudy.seo?.canonicalUrl || `https://www.awaylable.in/resources/case-studies/${params.slug}`

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
      publishedTime: caseStudy.publishedAt,
      images: ogImg
        ? [
            {
              url: urlFor(ogImg).width(1200).height(630).url(),
              width: 1200,
              height: 630,
              alt: caseStudy.title,
            },
          ]
        : [],
    },
    robots: {
      index: !caseStudy.seo?.noIndex,
      follow: !caseStudy.seo?.noIndex,
    },
  }
}

export default async function CaseStudyDetailPage(props: CaseStudyPageProps) {
  const params = await props.params
  const caseStudy = await fetchCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return notFound()
  }

  return (
    <>
      <SiteHeader />
      <CaseStudyDetail caseStudy={caseStudy} />
      <SiteFooter />
    </>
  )
}
