import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import type { CaseStudy } from '@/types/resource'
import { urlFor } from '@/sanity/lib/image'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import CaseStudyCard from '@/components/CaseStudyCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'
import './case-study-detail.css'

interface CaseStudyDetailProps {
  caseStudy: CaseStudy
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const {
    title,
    description,
    featuredImage,
    publishedAt,
    clientName,
    categories,
    contributors,
    testimonial,
    challenge,
    solution,
    implementation,
    results,
    metrics,
    relatedCaseStudies,
  } = caseStudy

  const formattedDate = publishedAt ? format(new Date(publishedAt), 'MMMM d, yyyy') : ''

  return (
    <main className="cs-detail">
      <div className="cs-detail__shell">
        {/* Breadcrumbs */}
        <nav className="cs-detail__breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/resources/case-studies">Case Studies</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{clientName}</li>
          </ol>
        </nav>

        {/* Hero: Title + Image (same width as reading column) */}
        <header className="cs-detail__hero">
          <h1 className="cs-detail__title">{title}</h1>

          {featuredImage && (
            <div className="cs-detail__hero-image">
              <Image
                src={urlFor(featuredImage).width(1600).height(900).url()}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
          )}
        </header>

        {/* Reading Content Container */}
        <div className="cs-detail__reading">
          {/* Contributors — near top, understated */}
          {contributors && contributors.length > 0 && (
            <section className="cs-detail__section cs-detail__contributors">
              <span className="cs-detail__section-label">Contributors</span>
              <div className="cs-detail__contributors-list">
                {contributors.map((contrib, i) => (
                  <div key={i} className="cs-detail__contributor">
                    {contrib.avatar ? (
                      <div className="cs-detail__contributor-avatar">
                        <Image
                          src={urlFor(contrib.avatar).width(80).height(80).url()}
                          alt={contrib.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="cs-detail__contributor-avatar cs-detail__contributor-avatar--fallback">
                        {contrib.name[0]}
                      </div>
                    )}
                    <div className="cs-detail__contributor-info">
                      <span className="cs-detail__contributor-name">{contrib.name}</span>
                      {contrib.role && (
                        <span className="cs-detail__contributor-role">{contrib.role}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Description / Executive Summary */}
          {description && (
            <section className="cs-detail__section">
              <p className="cs-detail__lead">{description}</p>
            </section>
          )}

          {/* Challenge */}
          {challenge && challenge.length > 0 && (
            <section className="cs-detail__section">
              <h2 className="cs-detail__heading">Challenge</h2>
              <PortableTextRenderer value={challenge} className="cs-detail__prose" />
            </section>
          )}

          {/* Solution */}
          {solution && solution.length > 0 && (
            <section className="cs-detail__section">
              <h2 className="cs-detail__heading">Solution</h2>
              <PortableTextRenderer value={solution} className="cs-detail__prose" />
            </section>
          )}

          {/* Implementation */}
          {implementation && implementation.length > 0 && (
            <section className="cs-detail__section">
              <h2 className="cs-detail__heading">Implementation</h2>
              <PortableTextRenderer value={implementation} className="cs-detail__prose" />
            </section>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <section className="cs-detail__section">
              <h2 className="cs-detail__heading">Results</h2>
              <PortableTextRenderer value={results} className="cs-detail__prose" />
            </section>
          )}

          {/* Metrics — clean editorial grid */}
          {metrics && metrics.length > 0 && (
            <section className="cs-detail__section">
              <h2 className="cs-detail__heading">Key Outcomes</h2>
              <div className="cs-detail__metrics">
                {metrics.map((metric, i) => (
                  <div key={i} className="cs-detail__metric">
                    <span className="cs-detail__metric-value">{metric.value}</span>
                    <span className="cs-detail__metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Testimonial — subtle card */}
          {testimonial && (
            <section className="cs-detail__section">
              <blockquote className="cs-detail__testimonial">
                <p className="cs-detail__testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="cs-detail__testimonial-footer">
                  {testimonial.companyLogo ? (
                    <div className="cs-detail__testimonial-logo">
                      <Image
                        src={urlFor(testimonial.companyLogo).height(48).url()}
                        alt={testimonial.company || 'Client Logo'}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="cs-detail__testimonial-logo cs-detail__testimonial-logo--fallback">
                      {testimonial.author?.charAt(0) ?? '?'}

                    </div>
                  )}
                  <div className="cs-detail__testimonial-author">
                    <span className="cs-detail__testimonial-name">{testimonial.author}</span>
                    <span className="cs-detail__testimonial-role">
                      {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </section>
          )}
        </div>

        {/* CTA — subtle closing section */}
        <section className="cs-detail__cta-section">
          <div className="cs-detail__cta">
            <p className="cs-detail__cta-text">
              Interested in achieving similar results?
            </p>
            <Link href="/#pricing" className="cs-detail__cta-btn">
              Get Started <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Related Case Studies — 3-col grid */}
        {relatedCaseStudies && relatedCaseStudies.length > 0 && (
          <section className="cs-detail__related" aria-labelledby="cs-related">
            <div className="cs-detail__related-header">
              <h2 id="cs-related" className="cs-detail__related-title">Related Case Studies</h2>
            </div>
            <ResourceAnimatedList className="cs-detail__related-grid">
              {relatedCaseStudies.map((rel) => (
                <CaseStudyCard key={rel._id} caseStudy={rel as any} />
              ))}
            </ResourceAnimatedList>
          </section>
        )}
      </div>
    </main>
  )
}
