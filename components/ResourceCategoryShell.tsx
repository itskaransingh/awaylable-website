import { ReactNode } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import ResourcePageHeader from '@/components/ResourcePageHeader'
import CategoryNav from '@/components/CategoryNav'
import ResourceContentContainer from '@/components/resources/ResourceContentContainer'

export type ResourceGridVariant = 'articles' | 'case-studies' | 'comparisons'

interface ResourceCategoryShellProps {
  heroTitle: string
  heroDescription: string
  gridVariant: ResourceGridVariant
  children: ReactNode
}

export default function ResourceCategoryShell({
  heroTitle,
  heroDescription,
  gridVariant,
  children,
}: ResourceCategoryShellProps) {
  return (
    <>
      <SiteHeader />

      <main className="resources-theme resource-listing-page">
        <ResourceContentContainer insetOnly>
          <ResourcePageHeader title={heroTitle} description={heroDescription} />
        </ResourceContentContainer>

        <section className="resource-category-body" aria-label="Resource listings">
          <ResourceContentContainer insetOnly>
            <CategoryNav />
          </ResourceContentContainer>

          <ResourceContentContainer>
            <div className={`resource-grid-shell resource-grid-shell--${gridVariant}`}>{children}</div>
          </ResourceContentContainer>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
