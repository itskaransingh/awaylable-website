import { client } from '@/sanity/lib/client'
import {
  allResourcesQuery,
  resourceSettingsQuery,
  singleArticleQuery,
  singleCaseStudyQuery,
  singleComparisonQuery,
  allArticlesQuery,
  allCaseStudiesQuery,
  allComparisonBoardsQuery,
} from './queries'
import {
  Article,
  CaseStudy,
  ComparisonBoard,
  ResourceSettings,
} from '@/types/resource'

// Fetch all resources at once
export async function fetchAllResources(): Promise<{
  articles: Article[]
  caseStudies: CaseStudy[]
  comparisonBoards: ComparisonBoard[]
}> {
  try {
    const data = await client.fetch(allResourcesQuery)
    return {
      articles: data?.articles || [],
      caseStudies: data?.caseStudies || [],
      comparisonBoards: data?.comparisonBoards || [],
    }
  } catch (error) {
    console.error('Error fetching resources listing:', error)
    return {
      articles: [],
      caseStudies: [],
      comparisonBoards: [],
    }
  }
}

// Fetch singleton resource settings
export async function fetchResourceSettings(): Promise<ResourceSettings | null> {
  try {
    return await client.fetch(resourceSettingsQuery)
  } catch (error) {
    console.error('Error fetching resource settings:', error)
    return null
  }
}

// Fetch a single Article by slug
export async function fetchArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await client.fetch(singleArticleQuery, { slug })
  } catch (error) {
    console.error(`Error fetching article with slug "${slug}":`, error)
    return null
  }
}

// Fetch a single Case Study by slug
export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    return await client.fetch(singleCaseStudyQuery, { slug })
  } catch (error) {
    console.error(`Error fetching case study with slug "${slug}":`, error)
    return null
  }
}

// Fetch a single Comparison Board by slug
export async function fetchComparisonBySlug(slug: string): Promise<ComparisonBoard | null> {
  try {
    return await client.fetch(singleComparisonQuery, { slug })
  } catch (error) {
    console.error(`Error fetching comparison board with slug "${slug}":`, error)
    return null
  }
}

// Fetch all articles for listing page
export async function fetchAllArticles(): Promise<Article[]> {
  try {
    return await client.fetch(allArticlesQuery)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

// Fetch all case studies for listing page
export async function fetchAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await client.fetch(allCaseStudiesQuery)
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

// Fetch all comparison boards for listing page
export async function fetchAllComparisonBoards(): Promise<ComparisonBoard[]> {
  try {
    return await client.fetch(allComparisonBoardsQuery)
  } catch (error) {
    console.error('Error fetching comparison boards:', error)
    return []
  }
}
