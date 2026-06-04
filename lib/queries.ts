import { groq } from 'next-sanity'

// Fetch resource settings (singleton)
export const resourceSettingsQuery = groq`
  *[_type == "resourceSettings"][0] {
    title,
    description,
    featuredArticles[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      author-> { name, role, avatar },
      tags
    },
    featuredCaseStudies[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      clientName,
      categories
    },
    featuredComparisons[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      competitorA,
      competitorB
    }
  }
`

// Fetch all resources for preview and listing
export const allResourcesQuery = groq`
  {
    "articles": *[_type == "article"] | order(publishedAt desc) {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      author-> { name, role, avatar, company },
      tags
    },
    "caseStudies": *[_type == "caseStudy"] | order(publishedAt desc) {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      clientName,
      subheadline,
      categories,
      tags
    },
    "comparisonBoards": *[_type == "comparisonBoard"] | order(publishedAt desc) {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      featured,
      competitorA,
      competitorB,
      tags
    }
  }
`

// Fetch single article by slug
export const singleArticleQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    author-> { name, slug, avatar, role, company },
    tags,
    content,
    relatedArticles[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      author-> { name, role, avatar }
    },
    seo {
      seoTitle,
      seoDescription,
      ogImage,
      canonicalUrl,
      noIndex
    }
  }
`

// Fetch single case study by slug
export const singleCaseStudyQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    author-> { name, role, avatar },
    clientName,
    subheadline,
    categories,
    tags,
    contributors[] {
      name,
      role,
      avatar
    },
    testimonial {
      quote,
      author,
      role,
      company,
      companyLogo,
      testimonialImage
    },
    audioUrl,
    challenge,
    solution,
    implementation,
    results,
    metrics[] {
      value,
      label,
      description
    },
    relatedCaseStudies[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      clientName,
      categories
    },
    seo {
      seoTitle,
      seoDescription,
      ogImage,
      canonicalUrl,
      noIndex
    }
  }
`

// Fetch single comparison board by slug
export const singleComparisonQuery = groq`
  *[_type == "comparisonBoard" && slug.current == $slug][0] {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    author-> { name, role, avatar },
    tags,
    competitorA,
    competitorB,
    comparisonRows[] {
      featureName,
      competitorAValue,
      competitorBValue,
      isFeatureA,
      isFeatureB,
      description
    },
    prosA,
    consA,
    prosB,
    consB,
    faqs[] {
      question,
      answer
    },
    cta {
      title,
      description,
      btnText,
      btnUrl
    },
    relatedComparisons[]-> {
      _type,
      _id,
      title,
      "slug": slug.current,
      description,
      featuredImage,
      publishedAt,
      competitorA,
      competitorB
    },
    seo {
      seoTitle,
      seoDescription,
      ogImage,
      canonicalUrl,
      noIndex
    }
  }
`

// Fetch all articles for listing page
export const allArticlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    author-> { name, role, avatar, company },
    tags,
    content
  }
`

// Fetch all case studies for listing page
export const allCaseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    clientName,
    subheadline,
    categories,
    tags
  }
`

// Fetch all comparison boards for listing page
export const allComparisonBoardsQuery = groq`
  *[_type == "comparisonBoard"] | order(publishedAt desc) {
    _type,
    _id,
    title,
    "slug": slug.current,
    description,
    featuredImage,
    publishedAt,
    featured,
    competitorA,
    competitorB,
    tags
  }
`
