import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const contentFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: false,
    localized: true,
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
    name: 'cards',
    type: 'array',
    localized: true,
    fields: [
      {
        name: 'title',
        type: 'text',
        required: false,
        localized: true,
      },
      {
        name: 'content',
        type: 'textarea',
        required: false,
        localized: true,
      },
    ],
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
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: contentFields,
}
