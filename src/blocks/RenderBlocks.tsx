import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import ContentReviewBlock from '@/blocks/ContentReview/Component'
import { CardLabeledBlock } from '@/blocks/CardLabeled/Component'
import { Component as OurMissionComponent } from '@/blocks/OurMission/Component'
import { Component as HomeEndComponent } from '@/blocks/HomeEnd/Component'
import { Component as HeroHomeComponent } from '@/blocks/HeroHome/Component'
import { Component as MICEHeroComponent } from '@/blocks/MICEHero/Component'
import { Component as FAQComponent } from '@/blocks/FAQBlock/Component'
import { Component as ShuttleCardsComponent } from '@/blocks/ShuttleCards/Component'
import { Component as TravelPackagesComponent } from '@/blocks/TravelPackages/Component'
import HowItWorksBlock from '@/blocks/HowItWorks/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { Component as HeroSupportComponent } from '@/blocks/HeroSupport/Component'
import { Component as HeroShuttleComponent } from '@/blocks/HeroShuttle/Component'
import { TypedLocale } from 'payload'

const blocks = {
  'hero-shuttle': HeroShuttleComponent,
  'content-review': ContentReviewBlock,
  'card-labeled': CardLabeledBlock,
  'our-mission': OurMissionComponent,
  'home-end': HomeEndComponent,
  'hero-home': HeroHomeComponent,
  'mice-hero': MICEHeroComponent,
  'how-it-works': HowItWorksBlock,
  'faq': FAQComponent,
  'shuttle-cards': ShuttleCardsComponent,
  'travel-packages': TravelPackagesComponent,
  'hero-support': HeroSupportComponent,
  mediaBlock: MediaBlock,
  formBlock: FormBlock
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
          const previousBlock = index > 0 ? layoutBlocks[index - 1] : null

          if (blockType && blockType in blocks) {
            const Block = blocks[blockType as keyof typeof blocks]

            if (Block) {
              // Set removeTopPadding for FAQ block when it follows HeroSupport
              const shouldRemoveTopPadding =
                blockType === 'faq' &&
                previousBlock?.blockType === 'hero-support'

              return (
                <div className="my-16" key={index}>
                  <Block
                    {...block}
                    locale={locale}
                    removeTopPadding={shouldRemoveTopPadding}
                  />
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
