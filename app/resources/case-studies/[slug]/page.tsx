import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { fetchCaseStudyBySlug } from '@/lib/sanityFetch'
import { urlFor } from '@/sanity/lib/image'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CaseStudyCard from '@/components/CaseStudyCard'
import ResourceAnimatedList from '@/components/ResourceAnimatedList'

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
  const ogUrl = caseStudy.seo?.canonicalUrl || `https://www.awaylable.in/case-studies/${params.slug}`

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

  const {
    title,
    description,
    featuredImage,
    clientName,
    categories,
    contributors,
    testimonial,
    challenge,
    solution,
    implementation,
    metrics,
    relatedCaseStudies,
  } = caseStudy

  return (
    <>
      <SiteHeader />

      <main className="resources-theme case-study-page">
        <article>
          {/* Hero: title → cover image */}
          <header className="case-study-hero case-study-reveal">
            <div className="case-study-hero-inner">
              <nav className="case-study-breadcrumbs" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/case-studies">Case Studies</Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="case-study-breadcrumbs-current">{clientName}</li>
                </ol>
              </nav>

              <span className="case-study-eyebrow">
                {clientName} × Awaylable Case Study
              </span>

              <h1 className="case-study-hero-title">{title}</h1>

              {featuredImage && (
                <div className="case-study-hero-image case-study-reveal case-study-reveal--delay-1">
                  <Image
                    src={urlFor(featuredImage).width(1600).height(900).url()}
                    alt={clientName}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>
              )}
            </div>
          </header>

          {/* Intro: description + facts strip */}
          <div className="case-study-content case-study-reveal case-study-reveal--delay-2">
            {(description || (categories && categories.length > 0) || clientName) && (
              <section className="case-study-section case-study-section--intro">
                {description && <p className="case-study-intro-dek">{description}</p>}

                <div className="case-study-facts-strip">
                  <div className="case-study-facts-item">
                    <span className="case-study-facts-label">Industry</span>
                    <span className="case-study-facts-value">
                      {categories && categories.length > 0 ? categories[0] : 'Electronics — SaaS'}
                    </span>
                  </div>
                  <div className="case-study-facts-item">
                    <span className="case-study-facts-label">Client</span>
                    <span className="case-study-facts-value">{clientName}</span>
                  </div>
                  {metrics &&
                    metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="case-study-facts-item">
                        <span className="case-study-facts-label">{metric.label}</span>
                        <span className="case-study-facts-value">{metric.value}</span>
                      </div>
                    ))}
                </div>
              </section>
            )}

            {contributors && contributors.length > 0 && (
              <section className="case-study-section case-study-reveal">
                <span className="case-study-section-eyebrow">Insights From</span>
                <div className="case-study-contributors">
                  {contributors.map((contrib, i) => (
                    <div key={i} className="case-study-contributor">
                      {contrib.avatar ? (
                        <div className="case-study-contributor-avatar">
                          <Image
                            src={urlFor(contrib.avatar).width(80).height(80).url()}
                            alt={contrib.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="case-study-contributor-avatar case-study-contributor-avatar--fallback">
                          {contrib.name[0]}
                        </div>
                      )}
                      <div>
                        <span className="case-study-contributor-name">{contrib.name}</span>
                        {contrib.role && (
                          <span className="case-study-contributor-role">{contrib.role}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {challenge && challenge.length > 0 && (
              <section className="case-study-section case-study-reveal">
                <div className="case-study-split">
                  <div className="case-study-split-main">
                    <div className="case-study-section-label">
                      <span className="case-study-section-dot case-study-section-dot--challenge" />
                      <span>The Challenge</span>
                    </div>
                    <h2 className="case-study-section-heading">Understanding the Constraints</h2>
                    <PortableTextRenderer value={challenge} className="case-study-prose" />
                  </div>

                  <aside className="case-study-split-aside">
                    <div className="case-study-status-card case-study-status-card--before">
                      <div className="case-study-status-card-header">
                        <span>{clientName} — Before</span>
                      </div>
                      <div className="case-study-status-card-body">
                        <div className="case-study-status-row">
                          <span>Daily support time</span>
                          <span>3+ hours</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>Queries automated</span>
                          <span>0%</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>After-hours coverage</span>
                          <span>None</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>Concurrency limit</span>
                          <span>1 query at a time</span>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {solution && solution.length > 0 && (
              <section className="case-study-section case-study-reveal">
                <div className="case-study-split">
                  <div className="case-study-split-main">
                    <div className="case-study-section-label">
                      <span className="case-study-section-dot case-study-section-dot--solution" />
                      <span>The Solution</span>
                    </div>
                    <h2 className="case-study-section-heading">AI voice and support automation</h2>
                    <PortableTextRenderer value={solution} className="case-study-prose" />
                  </div>

                  <aside className="case-study-split-aside">
                    <div className="case-study-status-card case-study-status-card--after">
                      <div className="case-study-status-card-header">
                        <span>{clientName} — After</span>
                      </div>
                      <div className="case-study-status-card-body">
                        <div className="case-study-status-row">
                          <span>Daily support time</span>
                          <span>~20 minutes</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>Queries automated</span>
                          <span>90%</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>After-hours coverage</span>
                          <span>24 / 7 Always-on</span>
                        </div>
                        <div className="case-study-status-row">
                          <span>Escalation rate</span>
                          <span>10%</span>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
            )}

            {metrics && metrics.length > 0 && (
              <section className="case-study-section case-study-reveal">
                <div className="case-study-metrics-panel">
                  <div className="case-study-metrics-header">
                    <h2 className="case-study-metrics-title">The numbers, within the first month.</h2>
                    <p className="case-study-metrics-subtitle">
                      Results that arrived immediately — and a foundation built to compound over time.
                    </p>
                  </div>
                  <div className="case-study-metrics-grid">
                    {metrics.map((metric, i) => (
                      <div key={i} className="case-study-metric-cell">
                        <div className="case-study-metric-value">{metric.value}</div>
                        <div className="case-study-metric-label">{metric.label}</div>
                        {metric.description && (
                          <p className="case-study-metric-description">{metric.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {implementation && implementation.length > 0 && (
              <section className="case-study-section case-study-reveal">
                <div className="case-study-section-label">
                  <span className="case-study-section-dot case-study-section-dot--implementation" />
                  <span>The Implementation</span>
                </div>
                <h2 className="case-study-section-heading">Strategy & Execution</h2>
                <PortableTextRenderer value={implementation} className="case-study-prose" />
              </section>
            )}
          </div>

          {testimonial && (
            <section className="case-study-testimonial-band case-study-reveal">
              <div className="case-study-testimonial-inner">
                <span className="case-study-testimonial-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="case-study-testimonial-quote">{testimonial.quote}</p>
                <div className="case-study-testimonial-author">
                  {testimonial.companyLogo ? (
                    <div className="case-study-testimonial-logo">
                      <Image
                        src={urlFor(testimonial.companyLogo).width(80).height(80).url()}
                        alt={testimonial.company || 'Client Logo'}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="case-study-testimonial-logo case-study-testimonial-logo--fallback">
                      {testimonial.author[0]}
                    </div>
                  )}
                  <div>
                    <span className="case-study-testimonial-name">{testimonial.author}</span>
                    <span className="case-study-testimonial-role">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="case-study-content case-study-section case-study-reveal">
            <div className="case-study-cta-panel">
              <div className="case-study-cta-pattern" aria-hidden="true">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="case-study-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#case-study-grid)" />
                </svg>
              </div>
              <div className="case-study-cta-inner">
                <span className="case-study-cta-badge">Deploy Smarter</span>
                <h2 className="case-study-cta-title">
                  Your customers are asking questions right now. Is anyone answering?
                </h2>
                <p className="case-study-cta-text">
                  See how Awaylable turns your website traffic into customer conversations — and
                  conversations into customers.
                </p>
                <div className="case-study-cta-actions">
                  <Link href="/#pricing" className="btn-sarvam-primary case-study-cta-btn-primary">
                    <span className="btn-label">Talk to Sales &rarr;</span>
                  </Link>
                  <Link href="/#cta" className="btn-sarvam-secondary case-study-cta-btn-secondary">
                    <span className="btn-label">Book a Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {relatedCaseStudies && relatedCaseStudies.length > 0 && (
            <section className="case-study-related case-study-reveal">
              <div className="case-study-related-inner">
                <span className="case-study-related-eyebrow">Related Stories</span>
                <h2 className="case-study-related-title">More Customer Success</h2>
                <ResourceAnimatedList className="case-studies-grid case-study-related-grid">
                  {relatedCaseStudies.map((rel) => (
                    <CaseStudyCard key={rel._id} caseStudy={rel as any} />
                  ))}
                </ResourceAnimatedList>
              </div>
            </section>
          )}
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
