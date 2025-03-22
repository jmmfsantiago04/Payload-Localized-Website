import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const getPayloadClient = cache(async () => {
    return await getPayload({ config: configPromise })
}) 