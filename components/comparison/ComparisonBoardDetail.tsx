import Link from 'next/link'
import { format } from 'date-fns'
import type {
  ComparisonBoard,
  ComparisonCTA,
  ComparisonFAQ,
  ComparisonFeature,
} from '@/types/resource'
import ComparisonCard from '@/components/ComparisonCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import ShareButton from '@/components/ShareButton'
import './comparison-board-detail.css'

interface ComparisonBoardDetailProps {
  comparison: ComparisonBoard
}

function CellValue({ row, side }: { row: ComparisonFeature; side: 'a' | 'b' }) {
  const textValue = side === 'a' ? row.competitorAValue : row.competitorBValue
  const isSupported = side === 'a' ? row.isFeatureA : row.isFeatureB

  if (textValue) {  
    return (
      <span className={side === 'a' ? 'comparison-board__cell-text--a' : 'comparison-board__cell-text--b'}>
        {textValue}
      </span>
    )
  }

  if (isSupported) {
    return (
      <span className="comparison-board__cell-yes" title="Supported" aria-label="Supported">
        ✓
      </span>
    )
  }

  return (
    <span className="comparison-board__cell-no" title="Not supported" aria-label="Not supported">
      ✕
    </span>
  )
}

function hasRowDifference(row: ComparisonFeature): boolean {
  if (row.competitorAValue || row.competitorBValue) {
    return row.competitorAValue !== row.competitorBValue
  }
  return Boolean(row.isFeatureA) !== Boolean(row.isFeatureB)
}

function SectionHead({
  id,
  label,
  title,
  subtitle,
  centered,
}: {
  id?: string
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}) {
  return (
    <header
      className="comparison-board__section-head"
    >
      {label && <p className="comparison-board__section-label">{label}</p>}
      <h2 id={id} className="comparison-board__section-title">
        {title}
      </h2>
      {subtitle && <p className="comparison-board__section-sub">{subtitle}</p>}
    </header>
  )
}

function ComparisonTable({
  rows,
  competitorA,
  competitorB,
  showDescriptions,
}: {
  rows: ComparisonFeature[]
  competitorA: string
  competitorB: string
  showDescriptions?: boolean
}) {
  return (
    <div className="comparison-board__table-wrap">
      <div className="comparison-board__table-scroll">
        <table className="comparison-board__table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col" className="cb-col-a">
                {competitorA}
              </th>
              <th scope="col" className="cb-col-b">
                {competitorB}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={`${row.featureName}-${idx}`}>
                <th scope="row">
                  <span className="comparison-board__feature-name">{row.featureName}</span>
                  {showDescriptions && row.description && (
                    <span className="comparison-board__feature-desc">{row.description}</span>
                  )}
                </th>
                <td className="cb-col-a">
                  <CellValue row={row} side="a" />
                </td>
                <td className="cb-col-b">
                  <CellValue row={row} side="b" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ProsConsCard({
  name,
  pros,
  cons,
  accent,
}: {
  name: string
  pros?: string[]
  cons?: string[]
  accent?: boolean
}) {
  if ((!pros || pros.length === 0) && (!cons || cons.length === 0)) return null

  return (
    <article className="comparison-board__card">
      <h3 className={`comparison-board__card-title${accent ? ' comparison-board__card-title--accent' : ''}`}>
        {name}
      </h3>

      {pros && pros.length > 0 && (
        <div>
          <h4 className="comparison-board__list-label comparison-board__list-label--pro">Pros</h4>
          <ul className="comparison-board__list">
            {pros.map((item, i) => (
              <li key={i}>
                <span className="comparison-board__list-icon--pro" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {cons && cons.length > 0 && (
        <div className={pros && pros.length > 0 ? 'comparison-board__list-divider' : undefined}>
          <h4 className="comparison-board__list-label comparison-board__list-label--con">Cons</h4>
          <ul className="comparison-board__list">
            {cons.map((item, i) => (
              <li key={i}>
                <span className="comparison-board__list-icon--con" aria-hidden="true">
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

function FaqAccordion({ faqs }: { faqs: ComparisonFAQ[] }) {
  return (
    <div className="comparison-board__faq">
      {faqs.map((faq, idx) => (
        <details key={idx} className="comparison-board__faq-item">
          <summary className="comparison-board__faq-q">
            <span>{faq.question}</span>
            <span className="comparison-board__faq-chevron" aria-hidden="true" />
          </summary>
          <div className="comparison-board__faq-a">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

function CtaBlock({ cta }: { cta: ComparisonCTA }) {
  if (!cta.title) return null

  return (
    <aside className="comparison-board__cta" aria-label="Recommendation">
      <p className="comparison-board__section-label">Recommendation</p>
      <h2 className="comparison-board__cta-title">{cta.title}</h2>
      {cta.description && <p className="comparison-board__cta-desc">{cta.description}</p>}
      {cta.btnUrl && (
        <Link href={cta.btnUrl} className="comparison-board__cta-btn">
          {cta.btnText || 'Get started'}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </aside>
  )
}

export default function ComparisonBoardDetail({ comparison }: ComparisonBoardDetailProps) {
  const {
    title,
    description,
    publishedAt,
    competitorA,
    competitorB,
    comparisonRows = [],
    prosA,
    consA,
    prosB,
    consB,
    faqs,
    cta,
    relatedComparisons,
  } = comparison

  const formattedDate = publishedAt ? format(new Date(publishedAt), 'MMMM d, yyyy') : ''
  const hasRows = comparisonRows.length > 0
  const keyDifferences = comparisonRows.filter(hasRowDifference)
  const hasProsCons =
    (prosA?.length ?? 0) > 0 ||
    (consA?.length ?? 0) > 0 ||
    (prosB?.length ?? 0) > 0 ||
    (consB?.length ?? 0) > 0
  const hasUseCases = (prosA?.length ?? 0) > 0 || (prosB?.length ?? 0) > 0

  return (
    <main className="comparison-board">
      <div className="comparison-board__shell">
        <nav className="comparison-board__breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/comparison-board">Comparison Board</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">
              {competitorA} vs {competitorB}
            </li>
          </ol>
        </nav>

        <header className="comparison-board__section">
          <p className="comparison-board__eyebrow">Comparison Board</p>
          <p className="comparison-board__matchup">
            {competitorA} vs {competitorB}
          </p>
          <h1 className="comparison-board__title">{title}</h1>
          {description && <p className="comparison-board__dek">{description}</p>}
          {formattedDate && (
            <div className="comparison-board__meta">
              <time dateTime={publishedAt}>{formattedDate}</time>
              <ShareButton />
            </div>  
          )}
        </header>

        {hasRows && (
          <section
            className="comparison-board__section comparison-board__section--tight-top"
            aria-labelledby="cb-summary"
          >
            <div className="comparison-board__inner">
              <SectionHead id="cb-summary" label="At a glance" title="Comparison overview" />
              <div className="comparison-board__overview-card">
                <ComparisonTable rows={comparisonRows} competitorA={competitorA} competitorB={competitorB} />
              </div>
            </div>
          </section>
        )}

        {hasRows && (
          <section
            className="comparison-board__section comparison-board__section--after-hero"
            aria-labelledby="cb-matrix"
          >
            <div className="comparison-board__inner">
              <SectionHead id="cb-matrix" label="Feature analysis" title="Side-by-side comparison" />
              <ComparisonTable
                rows={comparisonRows}
                competitorA={competitorA}
                competitorB={competitorB}
                showDescriptions
              />
            </div>
          </section>
        )}

        {keyDifferences.length > 0 && (
          <section className="comparison-board__section" aria-labelledby="cb-diverge">
            <div className="comparison-board__inner">
              <SectionHead
                id="cb-diverge"
                label="Key differences"
                title="Where they diverge"
                centered
              />
              <div className="comparison-board__diff-grid">
                {keyDifferences.map((row, idx) => (
                  <article key={`${row.featureName}-${idx}`} className="comparison-board__card">
                    <h3 className="comparison-board__card-title">{row.featureName}</h3>
                    {row.description && <p className="comparison-board__card-body">{row.description}</p>}
                    <div className="comparison-board__diff-values">
                      <div className="comparison-board__diff-pill comparison-board__diff-pill--a">
                        <span className="comparison-board__diff-label">{competitorA}</span>
                        <CellValue row={row} side="a" />
                      </div>
                      <div className="comparison-board__diff-pill">
                        <span className="comparison-board__diff-label">{competitorB}</span>
                        <CellValue row={row} side="b" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasProsCons && (
          <section className="comparison-board__section" aria-labelledby="cb-pros">
            <div className="comparison-board__inner">
              <div className="comparison-board__section-head">
                <SectionHead id="cb-pros" label="Detailed comparison" title="Pros & cons" />
              </div>
              <div className="comparison-board__two-col">
                <ProsConsCard name={competitorA} pros={prosA} cons={consA} accent />
                <ProsConsCard name={competitorB} pros={prosB} cons={consB} />
              </div>
            </div>
          </section>
        )}

        {!hasRows && hasProsCons && (
          <section className="comparison-board__section" aria-labelledby="cb-summary-fallback">
            <div className="comparison-board__inner">
              <SectionHead id="cb-summary-fallback" title="Comparison overview" />
              <div className="comparison-board__two-col">
                <ProsConsCard name={competitorA} pros={prosA} cons={consA} accent />
                <ProsConsCard name={competitorB} pros={prosB} cons={consB} />
              </div>
            </div>
          </section>
        )}

        {hasUseCases && (
          <section className="comparison-board__section" aria-labelledby="cb-use-cases">
            <div className="comparison-board__inner">
                <SectionHead
                  id="cb-use-cases"
                  label="Use cases"
                  title="Which option is right for me?"
                />
              
              <div className="comparison-board__two-col">
                {prosA && prosA.length > 0 && (
                  <article className="comparison-board__card">
                    <h3 className="comparison-board__card-title comparison-board__card-title--accent">
                      Choose {competitorA} when
                    </h3>
                    <ul className="comparison-board__list comparison-board__use-list comparison-board__use-list--a">
                      {prosA.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )}
                {prosB && prosB.length > 0 && (
                  <article className="comparison-board__card">
                    <h3 className="comparison-board__card-title">Choose {competitorB} when</h3>
                    <ul className="comparison-board__list comparison-board__use-list">
                      {prosB.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )}
              </div>
            </div>
          </section>
        )}

        {faqs && faqs.length > 0 && (
          <section className="comparison-board__section" aria-labelledby="cb-faq">
            <div className="comparison-board__inner">
              <div className="comparison-board__prose">
                <SectionHead
                  id="cb-faq"
                  label="FAQ"
                  title="Frequently asked questions"
                  centered
                />
                <FaqAccordion faqs={faqs} />
              </div>
            </div>
          </section>
        )}

        {cta?.title && (
          <section className="comparison-board__section">
            <div className="comparison-board__inner">
              <div className="comparison-board__prose">
                <CtaBlock cta={cta} />
              </div>
            </div>
          </section>
        )}

        {relatedComparisons && relatedComparisons.length > 0 && (
          <section className="comparison-board__section comparison-board__related" aria-labelledby="cb-related">
            <div className="comparison-board__inner">
              <SectionHead id="cb-related" title="Related comparisons" />
              <ResourceAnimatedList className="comparison-board__related-grid">
                {relatedComparisons.map((rel) => (
                  <ComparisonCard key={rel._id} comparison={rel} />
                ))}
              </ResourceAnimatedList>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
