'use client';

import { cn } from 'src/utilities/cn'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'

type Props = {
    id?: string
    title?: string
    content?: string
    secondaryContent?: string
    media?: {
        url?: string
        alt?: string
        filename?: string
    }
    cards?: Array<{
        title?: string
        content?: Array<{
            text?: string
        }>
        id?: string | null
    }>
    buttons?: Array<{
        label?: string
        link?: string
    }>
    locale?: string
}

const HowItWorksBlock: React.FC<Props> = (props) => {
    const { id, title, content, secondaryContent, cards = [], buttons = [], media, locale } = props

    const labelRef = useRef(null)
    const mediaRef = useRef(null)
    const buttonRef = useRef(null)

    const isLabelInView = useInView(labelRef, { once: true })
    const isMediaInView = useInView(mediaRef, { once: true })
    const isButtonInView = useInView(buttonRef, { once: true })

    // Function to format the main content with highlighted words
    const formatContent = (text: string = '') => {
        if (locale === 'ko') {
            // For Korean, create two-line layout with highlighted first word
            const words = text.split(' ');
            const firstLine = words.slice(0, 2); // "편안하게 여행하고,"
            const secondLine = words.slice(2);    // "자신 있게 탐험하세요"

            return (
                <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                        <span className="text-[#F6B600]">{firstLine[0]}</span>
                        <span>{firstLine[1]}</span>
                    </div>
                    <div>
                        {secondLine.join(' ')}
                    </div>
                </div>
            );
        }
        // For English, highlight specific words
        const words = text.split(' ');
        return words.map((word, index) => {
            if (word === 'Ease,' || word === 'Confidence') {
                return <span key={index} className="text-[#F6B600]">{word} </span>;
            }
            return <span key={index}>{word} </span>;
        });
    };

    return (
        <section className="relative pt-[3.4375rem] px-4 sm:px-6 lg:px-8 bg-white">
            <div className="mx-auto w-full max-w-7xl">
                {/* Label and Content */}
                <motion.div
                    ref={labelRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLabelInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center justify-center w-[16.5rem] h-[2.5rem] gap-[0.5rem] rounded-[1.375rem] border border-[#F6B600] p-[0.5rem] mb-4 sm:mb-6 bg-[#F6B600]/10">
                        <span className="text-sm font-medium text-[#F6B600]">
                            {title}
                        </span>
                    </div>
                    <div className="w-full sm:w-[37.5rem] md:w-[49.75rem] h-auto sm:h-[5rem] md:h-[6rem] mx-auto px-4 sm:px-0">
                        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] leading-[2rem] sm:leading-[2.5rem] md:leading-[3rem] tracking-[0] font-semibold text-gray-900 text-center">
                            {formatContent(content || '')}
                        </h2>
                    </div>
                    {secondaryContent && (
                        <p className={`text-[#262626] mx-auto ${locale === 'ko'
                            ? 'w-full sm:w-[37.5rem] md:w-[43.75rem] h-[4rem] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] leading-[1.5rem] sm:leading-[1.625rem] md:leading-[1.875rem]'
                            : 'w-full sm:w-[37.5rem] md:w-[49.75rem] text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[1.5rem] sm:leading-[1.75rem] md:leading-[2rem]'
                            } tracking-[0] font-normal text-center mt-4 sm:mt-6`}>
                            {secondaryContent}
                        </p>
                    )}
                </motion.div>

                {/* Image and Cards Container */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 mx-auto min-h-[670px]">
                    {/* Image Container */}
                    {media?.url && (
                        <motion.div
                            ref={mediaRef}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isMediaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex-shrink-0 w-full max-w-[512px] h-[280px] md:h-[340px] mt-4 lg:mt-0"
                        >
                            <Image
                                src={media.url}
                                alt={media.alt || "How it works illustration"}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    )}

                    {/* Cards Stack */}
                    {cards && cards.length > 0 && (
                        <div className="flex flex-col w-full lg:max-w-[35rem]">
                            <div className="flex flex-col gap-4 sm:gap-6 w-full">
                                {cards.map((card, index) => {
                                    const cardRef = useRef<HTMLDivElement | null>(null);
                                    const isCardInView = useInView(cardRef, { once: true });

                                    return (
                                        <motion.div
                                            key={card.id || index}
                                            ref={cardRef}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                            className={`w-full min-h-[8.75rem] sm:min-h-[10rem] md:h-[11.5rem] ${index === 2 ? 'bg-white' : 'bg-[#1976D226]'} rounded-tl-xl rounded-tr-xl rounded-bl-xl sm:rounded-tl-2xl sm:rounded-tr-2xl sm:rounded-bl-2xl p-4 sm:p-6 md:p-8 border border-[#E5E7EB]`}
                                        >
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-3 sm:gap-4 pb-4">
                                                    <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${index === 2 ? 'bg-[#FAFAFA]/50' : 'bg-white'} rounded-full flex items-center justify-center`}>
                                                        <span className="text-[#1976D2] text-sm sm:text-base md:text-xl font-semibold">
                                                            {index + 1}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-[#1976D2] text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] leading-[1.5rem] sm:leading-[1.625rem] md:leading-[1.75rem] tracking-[0] font-semibold align-middle">
                                                        {card.title}
                                                    </h3>
                                                </div>
                                                <div className="pl-2">
                                                    {card.content?.map((item, contentIndex) => (
                                                        <p key={contentIndex} className="text-[#1976D2] text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] leading-[1.25rem] sm:leading-[1.375rem] md:leading-[1.5rem] tracking-[0] font-medium align-left">
                                                            {item.text}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Action Button */}
                            {buttons && buttons.length > 0 && (
                                <motion.div
                                    ref={buttonRef}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isButtonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="w-full mt-6 flex justify-center lg:justify-start"
                                >
                                    <CMSLink
                                        type="custom"
                                        url={buttons[0].link || '#'}
                                        className="group inline-flex w-full max-w-[560px] h-[48px] items-center justify-between rounded-[8px] bg-[#1976D2] py-[8px] pl-[20px] pr-[4px] text-white transition-all hover:bg-[#1565C0]"
                                    >
                                        <span className="text-sm sm:text-base font-medium leading-6 tracking-[0]">
                                            {locale === 'en' ? (
                                                <>
                                                    {buttons[0].label?.split(' ').map((word, index) => (
                                                        <React.Fragment key={index}>
                                                            {index < 3 ? (
                                                                <span className="text-[#F6B600]">{word}</span>
                                                            ) : (
                                                                word
                                                            )}
                                                            {index < (buttons[0].label?.split(' ').length || 0) - 1 ? ' ' : ''}
                                                        </React.Fragment>
                                                    ))}
                                                </>
                                            ) : (
                                                buttons[0].label
                                            )}
                                        </span>
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
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
                                    </CMSLink>
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HowItWorksBlock 