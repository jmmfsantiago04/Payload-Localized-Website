'use client';

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Media } from '@/payload-types'
import type { TypedLocale } from 'payload'

type Props = {
    id?: string
    title?: string
    content?: string
    secondaryContent?: string
    mediaGallery?: Array<{
        media: Media
    }> | null
    cards?: Array<{
        title?: string
        content?: Array<{
            text?: string
        }> | null
        media?: Media | null
        mostPopular?: boolean
        price: number
        button?: {
            label: string
            link: string
        }
    }> | null
    buttons?: Array<{
        label: string
        link: string
    }> | null
    locale?: TypedLocale
}

export const Component: React.FC<Props> = (props) => {
    const { title, content, secondaryContent, cards = [], buttons = [] } = props
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

    const headerRef = useRef(null)
    const cardRef = useRef(null)
    const mediaRef = useRef(null)
    const buttonsRef = useRef(null)

    const isHeaderInView = useInView(headerRef, { once: true })
    const isCardInView = useInView(cardRef, { once: true })
    const isMediaInView = useInView(mediaRef, { once: true })
    const isButtonsInView = useInView(buttonsRef, { once: true })

    // Function to handle card navigation
    const handleCardNavigation = (direction: 'prev' | 'next') => {
        if (!cards || cards.length === 0) return

        if (direction === 'next') {
            setCurrentCardIndex((prev) => (prev + 1) % cards.length)
        } else {
            setCurrentCardIndex((prev) => (prev - 1 + cards.length) % cards.length)
        }
    }

    // Function to handle media navigation
    const handleMediaNavigation = (direction: 'prev' | 'next') => {
        if (!props.mediaGallery || props.mediaGallery.length === 0) return

        if (direction === 'next') {
            setCurrentMediaIndex((prev) => (prev + 1) % props.mediaGallery!.length)
        } else {
            setCurrentMediaIndex((prev) => (prev - 1 + props.mediaGallery!.length) % props.mediaGallery!.length)
        }
    }

    // Function to add line break after "and"
    const formatContent = (text: string) => {
        return text.split(' and ').map((part, index, array) => (
            <span key={index}>
                {part}
                {index < array.length - 1 && (
                    <>
                        {' and'}
                        <br />
                    </>
                )}
            </span>
        ))
    }

    return (
        <section className="relative">
            <div className="absolute inset-x-0 top-0 w-full h-[566px] bg-[#1976D2]" />
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16 pt-[50px]"
                >
                    {/* Premium Package Banner */}
                    {title && (
                        <div className="inline-flex items-center justify-center w-[16.5rem] h-[2.5rem] gap-[0.5rem] rounded-[1.375rem] border border-[#F6B600] border-[1px] p-[0.5rem] mb-[15px] bg-[#FFF8F0]">
                            <span className="text-sm font-medium text-[#F6B600]">
                                {title}
                            </span>
                        </div>
                    )}

                    {content && (
                        <div className={`w-full sm:w-[37.5rem] md:w-[49.75rem] mx-auto px-4 sm:px-0 ${props.locale === 'ko' ? 'mb-[15px]' : ''}`}>
                            <h2 className="text-[40px] leading-[48px] tracking-[0px] font-semibold text-white text-center">
                                {typeof content === 'string' ? formatContent(content) : content}
                            </h2>
                        </div>
                    )}

                    {secondaryContent && (
                        <p className="text-white/90 w-full sm:w-[37.5rem] md:w-[49.75rem] mx-auto text-[20px] leading-[28px] tracking-[0%] font-medium text-center align-middle">
                            {secondaryContent}
                        </p>
                    )}
                </motion.div>

                {/* Card and Gallery Container */}
                <div className="flex flex-col lg:flex-row justify-center gap-[10px] items-center lg:items-start max-w-[1174px] mx-auto">
                    {/* Card */}
                    {cards && cards.length > 0 && cards[currentCardIndex] && (
                        <motion.div
                            key={currentCardIndex}
                            ref={cardRef}
                            initial={{ opacity: 0, x: 50 }}
                            animate={isCardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="relative bg-white overflow-hidden w-[372px] h-[484.89px] border border-gray-200 rounded-[20px] pt-[16px] pr-[24px] pb-[24px] pl-[24px] mb-4 lg:mb-0"
                        >
                            {/* Most Popular Banner */}
                            {cards[currentCardIndex].mostPopular && (
                                <div className="absolute top-0 left-0 right-0 bg-[#FFC107] text-center py-3 text-white font-medium">
                                    {props.locale === 'ko' ? '인기 상품' : 'Most popular'}
                                </div>
                            )}

                            {/* Card Content */}
                            <div className={`${cards[currentCardIndex].mostPopular ? 'pt-[36px]' : ''}`}>
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                                    {cards[currentCardIndex].title}
                                </h3>

                                {/* Starting Price */}
                                <div className="flex items-center gap-2 mb-[50px]">
                                    <span className="text-[16px] leading-[24px] tracking-[0%] font-medium text-gray-600">Starting at</span>
                                    <div className="inline-flex w-[122px] h-[40px] items-center justify-center rounded-[22px] bg-[#1B365D] p-[8px] gap-[8px]">
                                        <span className="text-xl font-bold text-white">${cards[currentCardIndex].price}</span>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-[50px] mb-[55px]">
                                    {cards[currentCardIndex]?.content?.map((item, i, array) => (
                                        <div key={i} className="relative">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1B365D] flex items-center justify-center mr-3">
                                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-600 text-[16px] leading-[24px] tracking-[0%] font-normal">
                                                    {item.text}
                                                </p>
                                            </div>
                                            {i < (array.length - 1) && (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        width: '323.99999457549103px',
                                                        height: '1px',
                                                        backgroundColor: '#F5F5F5',
                                                        transform: 'rotate(-0.17deg)',
                                                        left: '0',
                                                        top: '50px'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Book Now Button */}
                                {cards[currentCardIndex].button && (
                                    <Link
                                        href={cards[currentCardIndex].button.link}
                                        className="group inline-flex w-[324px] h-[48px] items-center justify-between rounded-[22px] bg-[#1976D2] hover:bg-[#1565C0] pt-[8px] pr-[4px] pb-[8px] pl-[20px] text-white transition-all"
                                    >
                                        <span className="text-[16px] leading-[24px] tracking-[0%] font-medium">
                                            {cards[currentCardIndex].button.label}
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
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Media Gallery */}
                    {props.mediaGallery &&
                        props.mediaGallery.length > 0 &&
                        props.mediaGallery[currentMediaIndex] &&
                        props.mediaGallery[currentMediaIndex].media?.url && (
                            <motion.div
                                ref={mediaRef}
                                initial={{ opacity: 0, x: -50 }}
                                animate={isMediaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="relative w-full lg:w-[792px] h-[485px] rounded-[20px] overflow-hidden"
                            >
                                <Image
                                    key={currentMediaIndex}
                                    src={props.mediaGallery[currentMediaIndex].media.url}
                                    alt={props.mediaGallery[currentMediaIndex].media.alt || "Gallery image"}
                                    fill
                                    className="object-cover"
                                />
                                {/* Navigation Buttons */}
                                <div className="absolute bottom-6 right-6 flex gap-[10px]">
                                    <button
                                        onClick={() => handleMediaNavigation('prev')}
                                        className="w-[40px] h-[40px] rounded-[8px] p-[12px] bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667"
                                                stroke="#1976D2"
                                                strokeWidth="1.67"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => handleMediaNavigation('next')}
                                        className="w-[40px] h-[40px] rounded-[8px] p-[12px] bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
                                                stroke="#1976D2"
                                                strokeWidth="1.67"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                </div>

                {/* Buttons Section */}
                {buttons && buttons.length > 0 && (
                    <motion.div
                        ref={buttonsRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isButtonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[1174px] mx-auto"
                        style={{ marginTop: '20px' }}
                    >
                        <div className="absolute right-0">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCardNavigation('next')}
                                    className="w-[203px] h-[40px] flex items-center justify-between rounded-[20px] border border-[#1976D2] pt-[8px] pr-[20px] pb-[8px] pl-[20px] bg-white text-[#1976D2] hover:bg-white/90 transition-colors duration-300"
                                >
                                    <span className="text-[16px] leading-[24px] tracking-[0%] font-medium">{button.label}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Navigation Arrows */}
                {cards && cards.length > 1 && (
                    <div className="flex justify-center mt-[30px] gap-2 mb-8">
                        <button
                            onClick={() => handleCardNavigation('prev')}
                            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => handleCardNavigation('next')}
                            className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}