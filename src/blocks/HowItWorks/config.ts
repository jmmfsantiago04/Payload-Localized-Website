import type { Block, Field } from 'payload/types'

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
                type: 'array',
                required: false,
                localized: true,
                fields: [
                    {
                        name: 'text',
                        type: 'textarea',
                        required: false,
                        localized: true,
                    }
                ]
            }
        ]
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
            }
        ]
    },
    {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
        required: false,
    }
]

export const HowItWorksBlock: Block = {
    slug: 'how-it-works',
    interfaceName: 'HowItWorksBlock',
    fields: contentFields,
    labels: {
        singular: 'How It Works Block',
        plural: 'How It Works Blocks',
    },
}

export default HowItWorksBlock 