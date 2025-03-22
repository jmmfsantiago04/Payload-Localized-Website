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

    const getTitleContent = () => {
        if (!title) return null;

        if (locale === 'ko') {
            const words = title.split(' ');
            const firstTwoWords = words.slice(0, 2).join(' ');
            const remainingWords = words.slice(2).join(' ');

            return (
                <div className="inline">
                    <span className="text-[#F6B600]">{firstTwoWords}</span>
                    {' '}
                    {remainingWords}
                </div>
            );
        }

        const words = title.split(' ');
        const lastTwoWords = words.slice(-2).join(' ');
        const restOfWords = words.slice(0, -2).join(' ');

        return (
            <div className="flex flex-wrap gap-1">
                <span className="text-[#262626]">{restOfWords}</span>
                <span className="text-[#F6B600]">{lastTwoWords}</span>
            </div>
        );
    };

    return (
        <section className="relative w-full overflow-hidden bg-white">
            <div className="mx-auto w-full max-w-[1280px] px-6">
                <div className="flex flex-col space-y-8 pt-16">
                    {/* Title and Content Container */}
                    <div className="flex flex-col space-y-8">
                        {/* Title */}
                        <div className="max-w-[756px]">
                            <motion.h1
                                className={`text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.875rem] tracking-[-0.02em] font-semibold ${locale === 'ko'
                                    ? 'h-full flex items-center'
                                    : 'flex flex-row items-start gap-1 md:gap-2'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {getTitleContent()}
                            </motion.h1>
                        </div>

                        {/* Content and Button Container */}
                        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
                            {/* Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="md:w-auto"
                            >
                                {buttons && buttons.length > 0 && (
                                    <ul className="flex gap-4">
                                        {buttons.map((button, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={button.link || '#'}
                                                    className="group inline-flex h-12 w-[251px] items-center justify-between rounded-[10px] bg-[#1976D2] hover:bg-[#1565C0] pl-5 pr-1 text-white transition-all"
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
                                )}
                            </motion.div>

                            {/* Content */}
                            {content && (
                                <motion.div
                                    className="w-full md:w-[361px] md:ml-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <p className="text-base font-medium leading-6 text-[#475467]">
                                        {content}
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Media Container */}
                    {media && typeof media !== 'number' && media.url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative mt-8 rounded-2xl border border-[#EAECF0] overflow-hidden w-full aspect-[2.017]"
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
                </div>
            </div>
        </section>
    )
} 