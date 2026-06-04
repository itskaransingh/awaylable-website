import { defineType, defineField } from 'sanity'

export const resourceSettingsType = defineType({
  name: 'resourceSettings',
  title: 'Resource Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Center Main Title',
      type: 'string',
      initialValue: 'Resources',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Resource Center Description',
      type: 'text',
      initialValue: 'Insights, case studies and comparisons to help businesses understand AI adoption and implementation.',
      validation: (rule) => rule.required().max(300),
      rows: 3,
    }),
    defineField({
      name: 'featuredArticles',
      title: 'Featured Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
      description: 'Hand-selected articles to showcase as featured.',
    }),
    defineField({
      name: 'featuredCaseStudies',
      title: 'Featured Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
      description: 'Hand-selected case studies to showcase as featured.',
    }),
    defineField({
      name: 'featuredComparisons',
      title: 'Featured Comparison Boards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'comparisonBoard' }] }],
      description: 'Hand-selected comparison boards to showcase as featured.',
    }),
  ],
})
