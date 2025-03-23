import type { Block, Field } from 'payload/dist/fields/config/types'

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
        name: 'mediaGallery',
        type: 'array',
        fields: [
            {
                name: 'media',
                type: 'upload',
                relationTo: 'media',
                required: true,
            }
        ]
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
                name: 'price',
                type: 'number',
                required: true,
                min: 0,
                label: 'Price',
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
            },
            {
                name: 'mostPopular',
                type: 'checkbox',
                label: 'Most Popular',
                defaultValue: false,
            },
            {
                name: 'button',
                type: 'group',
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
    }
]

const TravelPackagesBlock: Block = {
    slug: 'travel-packages',
    interfaceName: 'TravelPackagesBlock',
    fields: contentFields,
}

export default TravelPackagesBlock 