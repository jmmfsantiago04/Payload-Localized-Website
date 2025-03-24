'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { TypedLocale } from 'payload'
import type { Media } from '@/payload-types'

type Props = {
    id?: string
    title: string
    featureCards?: Array<{
        text: string
        content: string
        media: Media
    }> | null
    locale?: TypedLocale
}

export const Component: React.FC<Props> = (props) => {
    const { title, featureCards } = props

    return (
        <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[748.97px] w-full">
            <div className="absolute inset-0 bg-[#F5F9FF]" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'url("/images/topography.svg")',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '500px'
                }}
            />
            <div className="container mx-auto max-w-[1343.99px] relative px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[344px] pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[59px] ml-[20px] sm:ml-[60px] md:ml-[100px] lg:ml-[140px] mb-[50px] sm:mb-[70px] md:mb-[85px] lg:mb-[100px]">
                    {/* Main Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-[36px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px] tracking-[0px] text-[#262626] mb-[15px] sm:mb-[20px]"
                    >
                        {title}
                    </motion.h2>

                    {/* Contact Information Cards */}
                    <div className="space-y-[20px] sm:space-y-[25px]">
                        {featureCards?.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="flex items-start gap-[8px] sm:gap-[10px]"
                            >
                                {card.media?.url && (
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 mt-[12px] sm:mt-[15px]">
                                        <Image
                                            src={card.media.url}
                                            alt={card.media.alt || 'Contact icon'}
                                            width={16}
                                            height={16}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-[14px] sm:text-[16px] font-medium text-[#262626] mb-[4px] sm:mb-1">
                                        {card.text}
                                    </h3>
                                    <p className="text-[12px] sm:text-[14px] font-normal leading-[16px] sm:leading-[20px] tracking-[0px] text-[#262626]">
                                        {card.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Component 