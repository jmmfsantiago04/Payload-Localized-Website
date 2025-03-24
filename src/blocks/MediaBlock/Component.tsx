import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { Page } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  id?: string
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = 'default',
    staticImage,
    disableInnerContainer,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        {
          container: position === 'default' && enableGutter,
        },
        className,
      )}
    >
      {(position === 'fullscreen' || position === 'default') && (
        <div
          style={{
            width: position === 'fullscreen' ? '3px' : '156px',
            height: '148.5px',
          }}
          className="overflow-hidden"
        >
          <Media
            imgClassName={cn('rounded', imgClassName, {
              'w-[3px]': position === 'fullscreen',
              'w-[156px]': position === 'default',
              'h-[148.5px]': true
            })}
            resource={media}
            src={staticImage}
            fill={false}
          />
        </div>
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: position === 'fullscreen' && !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText content={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
