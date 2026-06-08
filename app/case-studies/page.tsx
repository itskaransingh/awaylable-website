import { fetchAllCaseStudies } from '@/lib/sanityFetch'
import CaseStudyCard from '@/components/CaseStudyCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ResourceCategoryShell from '@/components/ResourceCategoryShell'
import ComingSoon from '@/components/ComingSoon'

export const revalidate = 60

export async function generateMetadata() {
  return {
    title: 'Case Studies | Awaylable',
    description:
      'See how businesses use Awaylable to improve customer support, automate workflows, and increase customer satisfaction.',
    alternates: {
      canonical: 'https://www.awaylable.in/case-studies',
    },
    openGraph: {
      title: 'Case Studies | Awaylable',
      description:
        'See how businesses use Awaylable to improve customer support, automate workflows, and increase customer satisfaction.',
      url: 'https://www.awaylable.in/case-studies',
      type: 'website',
    },
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await fetchAllCaseStudies()

  return (
    <ResourceCategoryShell
      heroTitle="Real-world client outcomes and implementations."
      heroDescription="Explore customer success stories, metrics, and implementations."
      gridVariant="case-studies"
    >
      {caseStudies.length === 0 ? (
        <ComingSoon />
      ) : (
        <ResourceAnimatedList>
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy._id} caseStudy={caseStudy} />
          ))}
        </ResourceAnimatedList>
      )}
    </ResourceCategoryShell>
  )
}
