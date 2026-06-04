import { defineType, defineField } from 'sanity'

export const comparisonFeatureType = defineType({
  name: 'comparisonFeature',
  title: 'Comparison Feature Row',
  type: 'object',
  fields: [
    defineField({
      name: 'featureName',
      title: 'Feature Name',
      type: 'string',
      description: 'e.g. Pricing, Security, Customization',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'competitorAValue',
      title: 'Product A Value',
      type: 'string',
      description: 'Value details for Product A (e.g. Self-hosted, Unlimited, $15/mo)',
    }),
    defineField({
      name: 'competitorBValue',
      title: 'Product B Value',
      type: 'string',
      description: 'Value details for Product B (e.g. Cloud only, 1000 tasks, $9/mo)',
    }),
    defineField({
      name: 'isFeatureA',
      title: 'Does Product A have it?',
      type: 'boolean',
      description: 'Render checkmark / check icon for Product A',
      initialValue: true,
    }),
    defineField({
      name: 'isFeatureB',
      title: 'Does Product B have it?',
      type: 'boolean',
      description: 'Render checkmark / check icon for Product B',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Feature Description / Explanation',
      type: 'text',
      description: 'Brief detail explaining what this feature is.',
      rows: 2,
    }),
  ],
})
