import { type SchemaTypeDefinition } from 'sanity'
import { seoType } from './seo'
import { authorType } from './author'
import { articleType } from './article'
import { caseStudyType } from './caseStudy'
import { comparisonFeatureType } from './comparisonFeature'
import { comparisonBoardType } from './comparisonBoard'
import { resourceSettingsType } from './resourceSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    authorType,
    articleType,
    caseStudyType,
    comparisonFeatureType,
    comparisonBoardType,
    resourceSettingsType,
  ],
}
