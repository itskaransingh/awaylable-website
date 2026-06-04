export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SEO {
  seoTitle?: string
  seoDescription?: string
  ogImage?: SanityImage
  canonicalUrl?: string
  noIndex?: boolean
}

export interface Author {
  _id: string
  name: string
  slug?: {
    current: string
  }
  avatar?: SanityImage
  role?: string
  company?: string
}

export interface BaseResource {
  _id: string
  _type: string
  title: string
  slug: string
  description: string
  featuredImage: SanityImage
  publishedAt: string
  featured?: boolean
  author?: Author
  tags?: string[]
  seo?: SEO
}

// 1. Article Type
export interface Article extends BaseResource {
  _type: 'article'
  content: any[] // Portable Text blocks
  relatedArticles?: Array<{
    _type: 'article'
    _id: string
    title: string
    slug: string
    description: string
    featuredImage: SanityImage
    publishedAt: string
    author?: {
      name: string
      role?: string
      avatar?: SanityImage
    }
  }>
}

// 2. Case Study Type
export interface CaseStudyContributor {
  name: string
  role?: string
  avatar?: SanityImage
}

export interface CaseStudyTestimonial {
  quote: string
  author: string
  role?: string
  company?: string
  companyLogo?: SanityImage
  testimonialImage?: SanityImage
}

export interface CaseStudyMetric {
  value: string
  label: string
  description?: string
}

export interface CaseStudy extends BaseResource {
  _type: 'caseStudy'
  clientName: string
  subheadline?: string
  categories?: string[]
  contributors?: CaseStudyContributor[]
  testimonial?: CaseStudyTestimonial
  audioUrl?: string
  challenge?: any[]
  solution?: any[]
  implementation?: any[]
  results?: any[]
  metrics?: CaseStudyMetric[]
  relatedCaseStudies?: Array<{
    _type: 'caseStudy'
    _id: string
    title: string
    slug: string
    description: string
    featuredImage: SanityImage
    publishedAt: string
    clientName: string
    categories?: string[]
  }>
}

// 3. Comparison Board Type
export interface ComparisonFeature {
  featureName: string
  competitorAValue?: string
  competitorBValue?: string
  isFeatureA?: boolean
  isFeatureB?: boolean
  description?: string
}

export interface ComparisonFAQ {
  question: string
  answer: string
}

export interface ComparisonCTA {
  title?: string
  description?: string
  btnText?: string
  btnUrl?: string
}

export interface ComparisonBoard extends BaseResource {
  _type: 'comparisonBoard'
  competitorA: string
  competitorB: string
  comparisonRows?: ComparisonFeature[]
  prosA?: string[]
  consA?: string[]
  prosB?: string[]
  consB?: string[]
  faqs?: ComparisonFAQ[]
  cta?: ComparisonCTA
  relatedComparisons?: Array<{
    _type: 'comparisonBoard'
    _id: string
    title: string
    slug: string
    description: string
    featuredImage: SanityImage
    publishedAt: string
    competitorA: string
    competitorB: string
  }>
}

// Resource union type
export type Resource = Article | CaseStudy | ComparisonBoard

// Resource Settings (Singleton)
export interface ResourceSettings {
  title: string
  description: string
  featuredArticles?: Array<Omit<Article, 'content' | 'relatedArticles'>>
  featuredCaseStudies?: Array<Omit<CaseStudy, 'challenge' | 'solution' | 'implementation' | 'results'>>
  featuredComparisons?: Array<Omit<ComparisonBoard, 'comparisonRows' | 'faqs' | 'cta'>>
}
