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
        name: 'imageCards',
        type: 'array',
        localized: true,
        fields: [
            mediaField,
        ]
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

const ShuttleCardsBlock: Block = {
    slug: 'shuttle-cards',
    interfaceName: 'ShuttleCardsBlock',
    fields: contentFields,
}

export default ShuttleCardsBlock 