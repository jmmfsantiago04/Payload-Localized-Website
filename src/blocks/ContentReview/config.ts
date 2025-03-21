import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const ContentReview: Block = {
  slug: 'content-review',
  interfaceName: 'ContentReviewBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      localized: true,
      label: 'Section Description',
    },
    {
      name: 'reviews',
      type: 'array',
      label: 'Review Cards',
      localized: true,
      required: false,
      fields: [
        {
          name: 'reviewerInitial',
          type: 'text',
          required: false,
          label: 'Reviewer Initial',
        },
        {
          name: 'reviewerName',
          type: 'text',
          required: false,
          label: 'Reviewer Name',
        },
        {
          name: 'reviewText',
          type: 'textarea',
          required: false,
          localized: true,
          label: 'Review Text',
        },
        {
          name: 'readMoreLink',
          type: 'text',
          required: false,
          label: 'Read More Link',
        }
      ]
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Action Buttons',
      localized: true,
      required: false,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: false,
          localized: true,
          label: 'Button Label',
        },
        {
          name: 'link',
          type: 'text',
          required: false,
          label: 'Button Link',
        }
      ]
    }
  ],
  labels: {
    plural: 'Content Reviews',
    singular: 'Content Review',
  },
}
