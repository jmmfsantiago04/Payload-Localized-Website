import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'mediumImpact',
      options: [
        { label: 'None', value: 'none' },
        { label: 'High Impact', value: 'highImpact' },
        { label: 'Medium Impact', value: 'mediumImpact' },
        { label: 'Low Impact', value: 'lowImpact' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'highlightedText',
      type: 'text',
      required: false,
      localized: true,
      admin: {
        description: 'Text to highlight in Korean version (e.g., "미국 서부")',
        condition: (data) => data?.type === 'mediumImpact',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: false,
      localized: true,
    },
    {
      name: 'secondaryContent',
      type: 'textarea',
      required: false,
      localized: true,
    },
    {
      name: 'buttons',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
  label: false,
}
