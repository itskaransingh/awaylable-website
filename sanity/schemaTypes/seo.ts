import { defineType, defineField } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom page title for search engines. Keep it under 60 characters.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search results snippets. Keep it under 160 characters.',
      rows: 3,
    }),
    defineField({
      name: 'ogImage',
      title: 'OpenGraph Image',
      type: 'image',
      description: 'Image displayed when link is shared on social media platforms.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The preferred URL for this page to prevent duplicate content issues.',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this resource.',
      initialValue: false,
    }),
  ],
})
