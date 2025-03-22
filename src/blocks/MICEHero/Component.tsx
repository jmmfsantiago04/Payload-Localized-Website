'use client';

import { cn } from 'src/utilities/cn'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { TypedLocale } from 'payload'
import Link from 'next/link'

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

    return (
        <section className="relative flex justify-center w-full px-4 sm:px-6 lg:px-8 bg-white">
            <style jsx>{`
                .gradient-text {
                    background: linear-gradient(179.24deg, rgba(163, 213, 255, 0.2) -17.36%, #1976D2 52.97%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <div className="relative w-full max-w-7xl py-4 sm:py-6 lg:py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Title */}
                    {locale === 'en' ? (
                        // English Title Layout
                        <div className="relative mx-auto w-full lg:w-[50.1875rem] h-auto lg:h-[10.5rem] mt-0 mb-[60px] sm:mb-[100px] lg:mb-[140px]">
                            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-[#262626] leading-[1.2] sm:leading-[1.3] md:leading-[1.3] lg:leading-[3.5rem] tracking-[0] text-center lg:absolute lg:left-0 lg:right-0 lg:px-0">
                                {title}
                            </h1>
                        </div>
                    ) : (
                        // Korean Title Layout
                        <div className="relative mx-auto mt-0 mb-[60px] sm:mb-[100px] lg:mb-[140px]">
                            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-[#262626] leading-[1.4] sm:leading-[1.4] md:leading-[1.4] lg:leading-[4.5rem] tracking-[0] text-center max-w-[17.5rem] sm:max-w-[37.5rem] lg:max-w-[57.5rem] mx-auto px-4">
                                {title}
                            </h1>
                        </div>
                    )}

                    {/* Statistics Cards */}
                    {cards && cards.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-16 lg:gap-[120px] max-w-[348px] sm:max-w-[720px] lg:max-w-[1112px] mx-auto">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={card.id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6"
                                >
                                    <span className="gradient-text text-[3rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-none">
                                        {card.title?.startsWith('+') ? card.title : `+${card.title}`}
                                    </span>
                                    {card.content && card.content.map((contentItem, i) => (
                                        <p key={contentItem.id || i} className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[22px] sm:leading-[25px] lg:leading-[28px] tracking-[0%] text-center align-middle text-[#475467] max-w-full sm:max-w-[280px] lg:max-w-[348px] px-4 sm:px-2 lg:px-0">
                                            {contentItem.text}
                                        </p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Content and Button Container */}
                    {(content || buttons) && (
                        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between mt-8 sm:mt-10 lg:mt-12">
                            {/* Button */}
                            {buttons && buttons.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="w-full md:w-auto"
                                >
                                    <ul className="flex flex-col sm:flex-row gap-4 max-w-[251px] mx-auto md:mx-0">
                                        {buttons.map((button, i) => (
                                            <li key={i} className="w-full">
                                                <Link
                                                    href={button.link || '#'}
                                                    className="group inline-flex h-12 w-full items-center justify-between rounded-[10px] bg-[#1976D2] hover:bg-[#1565C0] pl-5 pr-1 text-white transition-all"
                                                >
                                                    <span className="text-base font-medium leading-6">
                                                        {button.label}
                                                    </span>
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-white">
                                                        <svg
                                                            className="h-5 w-5 transform text-[#1976D2] transition-transform duration-200 group-hover:translate-x-1"
                                                            width="20"
                                                            height="20"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M5.83331 14.1667L14.1666 5.83334M14.1666 5.83334H6.66665M14.1666 5.83334V13.3333"
                                                                stroke="currentColor"
                                                                strokeWidth="1.67"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Content */}
                            {content && (
                                <motion.div
                                    className="w-full md:w-[361px] md:ml-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <p className="text-base font-medium leading-6 text-[#475467] text-center md:text-left">
                                        {content}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    )}

                    {/* Media Container */}
                    {media && typeof media !== 'number' && media.url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative mt-12 sm:mt-16 lg:mt-20 rounded-2xl border border-[#EAECF0] overflow-hidden w-full aspect-[2.017]"
                        >
                            <Image
                                src={media.url}
                                alt={media.alt || ''}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
} 