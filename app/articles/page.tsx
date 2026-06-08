import { fetchAllArticles } from '@/lib/sanityFetch'
import ArticleCard from '@/components/ArticleCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ResourceCategoryShell from '@/components/ResourceCategoryShell'

export const revalidate = 60

export async function generateMetadata() {
  return {
    title: 'Articles | Awaylable',
    description:
      'Explore insights, guides, trends, and best practices related to AI customer support and automation.',
    alternates: {
      canonical: 'https://www.awaylable.in/articles',
    },
    openGraph: {
      title: 'Articles | Awaylable',
      description:
        'Explore insights, guides, trends, and best practices related to AI customer support and automation.',
      url: 'https://www.awaylable.in/articles',
      type: 'website',
    },
  }
}

export default async function ArticlesPage() {
  const articles = await fetchAllArticles()

  return (
    <ResourceCategoryShell
      heroTitle="Insights, strategies and product thinking for modern SaaS teams."
      heroDescription="Explore guides, industry insights, product updates and deep dives."
      gridVariant="articles"
    >
      {articles.length === 0 ? (
        <div className="resource-empty-state">
          <h2 className="resource-empty-state-title">No Articles Found</h2>
          <p className="resource-empty-state-text">
            We couldn&apos;t find any articles at this time. Please check back later.
          </p>
        </div>
      ) : (
        <ResourceAnimatedList>
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </ResourceAnimatedList>
      )}
    </ResourceCategoryShell>
  )
}
