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

const HomeEndBlock: Block = {
    slug: 'home-end',
    interfaceName: 'HomeEndBlock',
    fields: contentFields,
}

export default HomeEndBlock 