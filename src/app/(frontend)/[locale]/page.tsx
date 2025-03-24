import { Metadata } from 'next'
// import PageTemplate from './[slug]/page'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { generateMeta } from '@/utilities/generateMeta'
import { TypedLocale } from 'payload'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import type { Page as PageType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import PageClient from './[slug]/page.client'
import { getPayloadClient } from '@/utilities/getPayloadClient'

type Args = {
  params: Promise<{
    slug?: string
    locale: TypedLocale
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug = 'home', locale = 'en' } = await paramsPromise
  const url = '/' + slug

  let page: PageType | null

  page = await queryPage({
    locale,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { layout } = page

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      <RenderBlocks blocks={layout} locale={locale} />
    </article>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { locale = 'en', slug = 'home' } = await params
  const page = await queryPage({
    locale,
  })

  return generateMeta({ doc: page })
}

const queryPage = cache(async ({ locale }: { locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    locale,
    overrideAccess: draft,
    where: {
      and: [
        {
          slug: {
            equals: 'home'
          }
        },
        {
          _status: {
            equals: 'published'
          }
        }
      ]
    },
  })

  return result.docs?.[0] || null
})
