'use client';

import { cn } from 'src/utilities/cn'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'

type ContentItem = {
  text?: string | null
  id?: string | null
}

type Card = {
  title?: string | null
  content?: ContentItem[] | null
  id?: string | null
}

type Props = {
  id?: string
  title?: string | null
  content?: string | null
  secondaryContent?: string | null
  cards?: Card[] | null
  buttons?: Array<{
    label?: string
    link?: string
  }> | null
  media?: {
    url?: string
    alt?: string
  } | number | null
}

export const OurMissionComp: React.FC<Props> = (props) => {
  const { title, content, secondaryContent, cards, buttons, media } = props

  // Function to add line break after "and"
  const formatContent = (text: string) => {
    return text.split(' and ').map((part, index, array) => (
      <span key={index}>
        {part}
        {index < array.length - 1 && (
          <>
            {' and'}
            <br />
          </>
        )}
      </span>
    ))
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label and Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          {title && (
            <div className="inline-flex items-center justify-center w-[16.5rem] h-[2.5rem] gap-[0.5rem] rounded-[1.375rem] border border-[#F6B600] p-[0.5rem] mb-4 sm:mb-6 bg-[#F6B600]/10">
              <span className="text-sm font-medium text-[#F6B600]">
                {title}
              </span>
            </div>
          )}

          {content && (
            <div className="w-full sm:w-[37.5rem] md:w-[49.75rem] h-auto sm:h-[5rem] md:h-[6rem] mx-auto px-4 sm:px-0">
              <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] tracking-[0] font-semibold text-gray-900 text-center">
                {typeof content === 'string' ? formatContent(content) : content}
              </h2>
            </div>
          )}

          {secondaryContent && (
            <p className="text-[#262626] w-full sm:w-[37.5rem] md:w-[49.75rem] mx-auto text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem] tracking-[0] font-normal text-center mt-4 sm:mt-6">
              {secondaryContent}
            </p>
          )}
        </motion.div>

        {/* Cards Grid */}
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="w-full max-w-[23.4375rem] h-[18.75rem] sm:h-[20rem] md:h-[21.25rem] bg-[#1B365C] rounded-tl-xl rounded-tr-xl rounded-bl-xl sm:rounded-tl-2xl sm:rounded-tr-2xl sm:rounded-bl-2xl p-6 sm:p-7 md:p-8 text-white border border-[#1B365C] flex flex-col"
              >
                {card.title && (
                  <h3 className="text-[1rem] sm:text-[1.0625rem] md:text-[1.125rem] leading-[1.5rem] sm:leading-[1.625rem] md:leading-[1.75rem] tracking-[0] font-semibold mb-4 align-middle">
                    {card.title}
                  </h3>
                )}
                {card.content && card.content.length > 0 && (
                  <div className="space-y-4">
                    {card.content.map((contentItem, contentIndex) => (
                      <p
                        key={contentIndex}
                        className="text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-[1.25rem] sm:leading-[1.375rem] md:leading-[1.5rem] tracking-[0] font-medium text-white/80"
                      >
                        {contentItem.text}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {buttons.map((button, index) => (
              <CMSLink
                key={index}
                {...button}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium bg-[#F6B600] text-white hover:bg-[#F6B600]/90 transition-colors"
              >
                {button.label}
              </CMSLink>
            ))}
          </div>
        )}

        {media && typeof media !== 'number' && media.url && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mt-8">
            <Image
              src={media.url}
              alt={media.alt || ''}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
