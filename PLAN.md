# Resources Section Restructuring Plan

## Overview
Restructure the Resources section from a single combined page into dedicated category pages while maintaining the existing design system.

---

## Phase 1: Resources Landing Page (`/resources`)

### Changes Required
**File: `app/resources/page.tsx`**

Current: Displays hero + all resources (articles, case studies, comparison boards) in sections
New: Displays hero + 3 category cards linking to sub-pages

### New Landing Page Structure
```
Hero Section (keep existing)
  - Pill badge: "Resource Center"
  - Title: "Resources"
  - Description from settings
  - Search input (REMOVE - no longer needed on hub)

Category Cards Section
  - 3-column grid (responsive)
  - Each card links to sub-page
  - Card content:
    - Icon/illustration
    - Category name
    - Short description
    - Article count
    - CTA arrow
```

### Category Card Data
| Category | Route | Description | Count Source |
|----------|-------|-------------|--------------|
| Articles | /resources/articles | Explore insights, guides, trends, and best practices related to AI customer support and automation. | `articles.length` |
| Case Studies | /resources/case-studies | See how businesses use Awaylable to improve customer support, automate workflows, and increase customer satisfaction. | `caseStudies.length` |
| Comparison Boards | /resources/comparison-boards | Compare Awaylable with leading AI support and customer service platforms to find the best solution for your business. | `comparisonBoards.length` |

### SEO Metadata
```typescript
{
  title: 'Resources | Awaylable',
  description: 'Insights, case studies and comparisons to help businesses understand AI adoption and implementation.',
  canonical: 'https://www.awaylable.in/resources',
}
```

---

## Phase 2: Articles Page (`/resources/articles`)

### New File Required
**File: `app/resources/articles/page.tsx`**

### Layout
- 3-column grid on desktop (>= 1024px)
- 2-column grid on tablet (768px - 1023px)
- 1-column grid on mobile (< 768px)

### GROQ Query
Add to `lib/queries.ts`:
```typescript
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
```

### Fetch Function
Add to `lib/sanityFetch.ts`:
```typescript
export async function fetchAllArticles(): Promise<Article[]> {
  try {
    return await client.fetch(allArticlesQuery)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}
```

### Card Design (Based on Reference Image 1)
Each card should display:
- Featured image (top, 16:9 aspect ratio)
- Category tag (e.g., "COMPANY") - top left of card
- Title (bold, 2-line clamp)
- Published date
- Entire card clickable

### SEO Metadata
```typescript
{
  title: 'Articles | Awaylable',
  description: 'Explore insights, guides, trends, and best practices related to AI customer support and automation.',
  canonical: 'https://www.awaylable.in/resources/articles',
}
```

---

## Phase 3: Case Studies Page (`/resources/case-studies`)

### New File Required
**File: `app/resources/case-studies/page.tsx`**

### Layout
- 2-column grid on desktop (>= 768px)
- 1-column grid on tablet/mobile (< 768px)

### GROQ Query
Add to `lib/queries.ts`:
```typescript
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
```

### Fetch Function
Add to `lib/sanityFetch.ts`:
```typescript
export async function fetchAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    return await client.fetch(allCaseStudiesQuery)
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}
```

### Card Design (Maintain Current Case Study Card)
- Cover image
- Client/company name
- Case study title
- Short summary
- Key outcome metric (if available)
- CTA
- Card height should remain exactly as current

### SEO Metadata
```typescript
{
  title: 'Case Studies | Awaylable',
  description: 'See how businesses use Awaylable to improve customer support, automate workflows, and increase customer satisfaction.',
  canonical: 'https://www.awaylable.in/resources/case-studies',
}
```

---

## Phase 4: Comparison Boards Page (`/resources/comparison-boards`)

### New File Required
**File: `app/resources/comparison-boards/page.tsx`**

### Layout
- Single-column list
- One comparison card per row
- Full-width card layout on desktop
- Responsive stacked layout on tablet/mobile

### GROQ Query
Add to `lib/queries.ts`:
```typescript
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
```

### Fetch Function
Add to `lib/sanityFetch.ts`:
```typescript
export async function fetchAllComparisonBoards(): Promise<ComparisonBoard[]> {
  try {
    return await client.fetch(allComparisonBoardsQuery)
  } catch (error) {
    console.error('Error fetching comparison boards:', error)
    return []
  }
}
```

### Card Design (Based on Reference Image 2 - Editorial Style)
Each card should display:
- Featured image (left side, ~40% width)
- Content (right side, ~60% width):
  - Title (bold)
  - Description text
  - Competitor names (e.g., "Awaylable vs Intercom")
  - CTA
- Cards should feel more editorial and SEO-focused

### SEO Metadata
```typescript
{
  title: 'Comparison Boards | Awaylable',
  description: 'Compare Awaylable with leading AI support and customer service platforms to find the best solution for your business.',
  canonical: 'https://www.awaylable.in/resources/comparison-boards',
}
```

---

## Phase 5: New Reusable Components

### 1. Category Hub Card Component
**File: `components/CategoryHubCard.tsx`**

Props:
```typescript
interface CategoryHubCardProps {
  title: string
  description: string
  href: string
  count: number
  icon: React.ReactNode
}
```

### 2. Article Card Component (New)
**File: `components/ArticleCard.tsx`**

Dedicated card for article listing pages with the design from reference image 1.

Props:
```typescript
interface ArticleCardProps {
  article: Article
}
```

### 3. Case Study Card Component (New)
**File: `components/CaseStudyCard.tsx`**

Dedicated card for case study listing pages maintaining current design.

Props:
```typescript
interface CaseStudyCardProps {
  caseStudy: CaseStudy
}
```

### 4. Comparison Board Card Component (New)
**File: `components/ComparisonCard.tsx`**

Horizontal editorial-style card for comparison board listing pages.

Props:
```typescript
interface ComparisonCardProps {
  comparison: ComparisonBoard
}
```

---

## Phase 6: CSS Updates

**File: `app/globals.css`**

Add new styles for:
1. Category hub cards grid
2. Article card variations
3. Comparison board horizontal cards
4. Responsive breakpoints for new layouts

---

## Phase 7: Cleanup

1. **Remove from `app/resources/page.tsx`**:
   - Search functionality
   - CategoryNav component import
   - All resource listing sections
   - Keep only hero + category hub cards

2. **Keep existing**:
   - `components/ResourceCard.tsx` (still used in related sections on detail pages)
   - `components/ResourceGrid.tsx` (still used in related sections)
   - `components/CategoryNav.tsx` (can be removed if not used elsewhere)

---

## File Structure Changes

### New Files
```
app/resources/articles/page.tsx
app/resources/case-studies/page.tsx
app/resources/comparison-boards/page.tsx
components/CategoryHubCard.tsx
components/ArticleCard.tsx
components/CaseStudyCard.tsx
components/ComparisonCard.tsx
```

### Modified Files
```
app/resources/page.tsx (simplified to hub)
lib/queries.ts (add new queries)
lib/sanityFetch.ts (add new fetch functions)
app/globals.css (add new styles)
```

---

## Implementation Order

1. Add new GROQ queries to `lib/queries.ts`
2. Add new fetch functions to `lib/sanityFetch.ts`
3. Create new card components
4. Create new category listing pages
5. Update resources landing page
6. Add CSS styles
7. Test responsive behavior
8. Verify SEO metadata
9. Clean up unused code

---

## Notes

- Maintain ISR with 60-second revalidation on all pages
- Use existing design system (fonts, colors, spacing, shadows)
- Ensure mobile responsiveness across all breakpoints
- Keep existing detail page routes unchanged
- All content fetched dynamically from Sanity
