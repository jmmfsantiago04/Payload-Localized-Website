import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'
import Image from 'next/image'

import type { Page, Media } from '@/payload-types'

import { CMSLink } from '../../components/Link'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { title, content, secondaryContent, cards, buttons, media } = props

  return (
    <div className="container my-16">
      {title && (
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
      )}

      {content && (
        <div className="prose max-w-none mb-8">
          {content}
        </div>
      )}

      {secondaryContent && (
        <div className="prose max-w-none mb-8 text-gray-600">
          {secondaryContent}
        </div>
      )}

      {cards && cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              {card.title && (
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              )}
              {card.content && (
                <p className="text-gray-600">{card.content}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {buttons && buttons.length > 0 && (
        <div className="flex flex-wrap gap-4 mb-8">
          {buttons.map((button, index) => (
            <CMSLink
              key={index}
              {...button}
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              {button.label}
            </CMSLink>
          ))}
        </div>
      )}

      {media && typeof media !== 'number' && media.url && (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={media.url}
            alt={media.alt || ''}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  )
}
