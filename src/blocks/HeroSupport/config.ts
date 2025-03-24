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
                name: 'content',
                type: 'textarea',
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

const HeroSupportBlock: Block = {
    slug: 'hero-support',
    interfaceName: 'HeroSupportBlock',
    fields: contentFields,
}

export default HeroSupportBlock 