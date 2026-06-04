import { defineType, defineField } from 'sanity'

export const comparisonBoardType = defineType({
  name: 'comparisonBoard',
  title: 'Comparison Board',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Used for grids, search excerpts, and listings.',
      validation: (rule) => rule.required().max(200),
      rows: 3,
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At Date',
      type: 'datetime',
      validation: (rule) => rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Toggle',
      type: 'boolean',
      description: 'Pin this comparison board to featured section.',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'competitorA',
      title: 'Product A (Competitor A Name)',
      type: 'string',
      description: 'e.g. Awaylable',
      validation: (rule) => rule.required(),
      initialValue: 'Awaylable',
    }),
    defineField({
      name: 'competitorB',
      title: 'Product B (Competitor B Name)',
      type: 'string',
      description: 'e.g. Make, Zapier',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'comparisonRows',
      title: 'Comparison Table Rows',
      type: 'array',
      of: [{ type: 'comparisonFeature' }],
    }),
    defineField({
      name: 'prosA',
      title: 'Product A Pros List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'consA',
      title: 'Product A Cons List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'prosB',
      title: 'Product B Pros List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'consB',
      title: 'Product B Cons List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faq',
          title: 'FAQ Question',
          fields: [
            { name: 'question', type: 'string', title: 'Question' },
            { name: 'answer', type: 'text', title: 'Answer', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call-To-Action Block',
      type: 'object',
      fields: [
        { name: 'title', type: 'string', title: 'CTA Title' },
        { name: 'description', type: 'text', title: 'CTA Description', rows: 2 },
        { name: 'btnText', type: 'string', title: 'Button Text' },
        { name: 'btnUrl', type: 'string', title: 'Button URL' },
      ],
    }),
    defineField({
      name: 'relatedComparisons',
      title: 'Related Comparison Boards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'comparisonBoard' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      compA: 'competitorA',
      compB: 'competitorB',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, compA, compB, media } = selection
      return {
        title,
        subtitle: `${compA || 'Awaylable'} vs ${compB || 'Competitor'}`,
        media,
      }
    },
  },
})
