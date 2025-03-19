import { getPayload } from 'payload'
import configPromise from '@payload-config'

// This is your client-side Payload instance
export const getPayloadClient = async () => {
    const payload = await getPayload({
        config: configPromise,
    })
    return payload
}

// This is a helper function to get the base URL for API calls
export const getPayloadURL = () => {
    return process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
} 