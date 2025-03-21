import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ContentReviewBlock } from '@/blocks/ContentReview/Component'
import { CardLabeledBlock } from '@/blocks/CardLabeled/Component'
import { OurMissionComp } from './Content/Home/OurMissionComp'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { TypedLocale } from 'payload'

const blocks = {
  'content-review': ContentReviewBlock,
  'card-labeled': CardLabeledBlock,
  content: OurMissionComp,
  media: MediaBlock,
  form: FormBlock
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
  locale: TypedLocale
}> = (props) => {
  const { blocks: layoutBlocks, locale } = props

  const hasBlocks = layoutBlocks && Array.isArray(layoutBlocks) && layoutBlocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {layoutBlocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blocks) {
            const Block = blocks[blockType as keyof typeof blocks]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} locale={locale} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
