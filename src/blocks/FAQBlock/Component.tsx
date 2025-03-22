'use client';

import { cn } from 'src/utilities/cn'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { TypedLocale } from 'payload'

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
    locale: TypedLocale
}

export const Component: React.FC<Props> = (props) => {
    const { title, content, secondaryContent, cards, buttons, media, locale } = props
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative flex justify-center w-full px-3 xs:px-4 sm:px-6 lg:px-8 bg-[#F5F9FF]">
            <div className="relative w-full max-w-7xl py-12 xs:py-16 sm:py-20 lg:py-24">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`text-center ${locale === 'ko' ? 'mb-[2rem] xs:mb-[2.5rem]' : 'mb-8 xs:mb-12 sm:mb-16'}`}
                >
                    {title && (
                        <div className="inline-flex items-center justify-center w-full max-w-[16.5rem] min-h-[2.5rem] gap-[0.5rem] rounded-[1.375rem] border border-[#F6B600] p-[0.5rem] mb-3 xs:mb-4 sm:mb-6 bg-[#FFF8F0]">
                            <span className="text-xs xs:text-sm font-medium text-[#F6B600] px-2">
                                {title}
                            </span>
                        </div>
                    )}

                    {content && (
                        <div className={`mx-auto px-3 xs:px-4 sm:px-0 ${locale === 'en'
                            ? 'w-full sm:w-[90%] lg:w-[60.875rem] h-auto sm:h-auto lg:h-auto'
                            : 'w-full sm:w-[90%] md:w-[49.75rem] h-auto'
                            }`}>
                            <h2 className={`font-semibold text-center text-gray-900 ${locale === 'en'
                                ? 'text-[1.5rem] xs:text-[1.75rem] sm:text-[2rem] lg:text-[3.25rem] leading-[1.2] sm:leading-[1.3] lg:leading-[1.1]'
                                : 'text-[1.25rem] xs:text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] sm:leading-[1.25] md:leading-[1.2]'
                                } tracking-[0] break-words`}>
                                {content}
                            </h2>
                        </div>
                    )}

                    {secondaryContent && (
                        <p className="text-[#262626] w-full sm:w-[37.5rem] md:w-[49.75rem] mx-auto text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem] tracking-[0] font-normal text-center mt-4 sm:mt-6">
                            {secondaryContent}
                        </p>
                    )}
                </motion.div>

                {/* FAQ Cards */}
                <div className="flex flex-col space-y-[1rem] sm:space-y-[1.25rem] max-w-[47.375rem] mx-auto px-3 xs:px-4 sm:px-6 lg:px-0">
                    {cards?.map((card, index) => (
                        <motion.div
                            key={card.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full min-h-[4rem] xs:min-h-[5rem] py-[1rem] xs:py-[1.5rem] px-[0.75rem] xs:px-[1rem] bg-white rounded-[1rem] xs:rounded-[1.375rem] text-left hover:bg-gray-50 transition-colors border border-[#E5E7EB] gap-[0.75rem] xs:gap-[1.25rem]"
                            >
                                <span className="text-[0.875rem] xs:text-[1rem] font-medium leading-[1.4] xs:leading-[1.5] tracking-[0%] text-[#262626]">
                                    {card.title}
                                </span>
                                <span className="flex-shrink-0">
                                    <motion.div
                                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem] xs:w-[2rem] xs:h-[2rem] rounded-full bg-[#1976D2]"
                                    >
                                        <motion.svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            animate={{ rotate: openIndex === index ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path
                                                d="M5 2V8M2 5H8"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </motion.svg>
                                    </motion.div>
                                </span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? 'auto' : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden bg-white rounded-b-[1rem] xs:rounded-b-[1.25rem]"
                            >
                                <div className="p-4 xs:p-6 pt-0">
                                    {card.content?.map((contentItem, contentIndex) => (
                                        <p
                                            key={contentIndex}
                                            className="text-[0.8125rem] xs:text-[0.875rem] sm:text-[1rem] text-[#262626]/80 leading-[1.6]"
                                        >
                                            {contentItem.text}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Buttons */}
                {buttons && buttons.length > 0 && (
                    <div className="flex flex-wrap gap-4 justify-center mt-12">
                        {buttons.map((button, index) => (
                            <CMSLink
                                key={index}
                                {...button}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium bg-[#1976D2] text-white hover:bg-[#1565C0] transition-colors"
                            >
                                {button.label}
                            </CMSLink>
                        ))}
                    </div>
                )}

                {/* Media */}
                {media && typeof media !== 'number' && media.url && (
                    <div className="relative w-full max-w-[800px] mx-auto aspect-video rounded-xl overflow-hidden mt-12">
                        <Image
                            src={media.url}
                            alt={media.alt || ''}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}
            </div>
        </section>
    )
} 