import { fetchAllComparisonBoards } from '@/lib/sanityFetch'
import ComparisonCard from '@/components/ComparisonCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ResourceCategoryShell from '@/components/ResourceCategoryShell'

export const revalidate = 60

export async function generateMetadata() {
  return {
    title: 'Comparison Board | Awaylable',
    description:
      'Compare Awaylable with leading AI support and customer service platforms to find the best solution for your business.',
    alternates: {
      canonical: 'https://www.awaylable.in/comparison-board',
    },
    openGraph: {
      title: 'Comparison Board | Awaylable',
      description:
        'Compare Awaylable with leading AI support and customer service platforms to find the best solution for your business.',
      url: 'https://www.awaylable.in/comparison-board',
      type: 'website',
    },
  }
}

export default async function ComparisonBoardPage() {
  const comparisonBoards = await fetchAllComparisonBoards()

  return (
    <ResourceCategoryShell
      heroTitle="Compare tools, platforms and solutions."
      heroDescription="Compare Awaylable with leading AI support and customer service platforms to find the best solution for your business."
      gridVariant="comparisons"
    >
      {comparisonBoards.length === 0 ? (
        <div className="resource-empty-state">
          <h2 className="resource-empty-state-title">No Comparisons Found</h2>
          <p className="resource-empty-state-text">
            We couldn&apos;t find any comparison boards at this time. Please check back later.
          </p>
        </div>
      ) : (
        <ResourceAnimatedList className="comparisons-list">
          {comparisonBoards.map((comparison) => (
            <ComparisonCard key={comparison._id} comparison={comparison} />
          ))}
        </ResourceAnimatedList>
      )}
    </ResourceCategoryShell>
  )
}
