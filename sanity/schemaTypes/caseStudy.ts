import { defineType, defineField } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
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
      description: 'Pin this case study to featured section.',
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
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      description: 'e.g. Tata Capital',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      description: 'Short subtitle displayed in Case Study detail header',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Financial Services, Enterprise AI',
    }),
    defineField({
      name: 'contributors',
      title: 'Contributors',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contributor',
          title: 'Contributor',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'avatar', type: 'image', title: 'Avatar Image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial Block',
      type: 'object',
      fields: [
        { name: 'quote', type: 'text', title: 'Quote text', rows: 4 },
        { name: 'author', type: 'string', title: 'Author Name' },
        { name: 'role', type: 'string', title: 'Author Role' },
        { name: 'company', type: 'string', title: 'Author Company' },
        { name: 'companyLogo', type: 'image', title: 'Company Logo' },
        { name: 'testimonialImage', type: 'image', title: 'Testimonial Accompanying Image' },
      ],
    }),
    defineField({
      name: 'audioUrl',
      title: 'Audio File URL',
      type: 'string',
      description: 'Optional path to audio walkthrough file.',
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge Section',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'Solution Section',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'implementation',
      title: 'Implementation Section',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'results',
      title: 'Results Section',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics & Outcomes',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'metric',
          title: 'Metric Stat',
          fields: [
            { name: 'value', type: 'string', title: 'Metric Value (e.g. 20L+, 8.5x)' },
            { name: 'label', type: 'string', title: 'Metric Title (e.g. Scalability)' },
            { name: 'description', type: 'string', title: 'Description Details' },
          ],
        },
      ],
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
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
      client: 'clientName',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, client, media } = selection
      return {
        title,
        subtitle: client ? `Client: ${client}` : '',
        media,
      }
    },
  },
})
