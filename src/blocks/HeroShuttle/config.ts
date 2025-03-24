import type { Block } from 'payload'
import type { Field } from 'payload'
import type { Media } from '@/payload-types'

const mediaField: Field = {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
    required: false,
}

const contentFields: Field[] = [
    {
        name: 'title',
        type: 'text',
        required: true,
        localized: true,
    },
    {
        name: 'content',
        type: 'textarea',
        required: true,
        localized: true,
    },
    {
        name: 'secondaryContent',
        type: 'textarea',
        required: true,
        localized: true,
    },
    {
        name: 'form',
        type: 'relationship',
        relationTo: 'forms',
        required: false,
    },
    {
        name: 'featureCards',
        type: 'array',
        localized: true,
        fields: [
            {
                name: 'text',
                type: 'text',
                required: true,
                localized: true,
            },

            {
                name: 'media',
                type: 'upload',
                relationTo: 'media',
                required: true,
            }
        ]
    }
]

const HeroShuttleBlock: Block = {
    slug: 'hero-shuttle',
    interfaceName: 'HeroShuttleBlock',
    fields: contentFields,
}

export default HeroShuttleBlock 