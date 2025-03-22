'use client';

import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Image from 'next/image'
import type { TypedLocale } from 'payload'
import type { Media } from '@/payload-types'

type Props = {
    id?: string
    title: string
    imageCards?: Array<{
        media?: Media | null
    }> | null
    featureCards?: Array<{
        text: string
        media: Media
    }> | null
    locale?: TypedLocale
}

export const Component: React.FC<Props> = (props) => {
    const { title, imageCards, featureCards } = props

    // Function to repeat array items until desired length
    const repeatToLength = <T,>(arr: T[], length: number): T[] => {
        const repeated = [...arr]
        while (repeated.length < length) {
            repeated.push(...arr.slice(0, length - repeated.length))
        }
        return repeated
    }

    // Ensure we have at least 4 image cards and 2 feature cards
    const repeatedImageCards = imageCards ? repeatToLength(imageCards, 4) : []
    const repeatedFeatureCards = featureCards ? repeatToLength(featureCards, 2) : []

    return (
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-white overflow-hidden w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-[#1B365D]"
                >
                    {title}
                </motion.h2>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-4 sm:gap-6 lg:gap-8 w-fit"
                    >
                        {/* First Set of Columns */}
                        <div className="flex gap-4 sm:gap-6 lg:gap-8 min-w-max">
                            {/* First Column - First Two Image Cards */}
                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                                {repeatedImageCards.slice(0, 2).map((card, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                                        className={index === 0
                                            ? "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg group"
                                            : "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-lg group"
                                        }
                                    >
                                        {card.media?.url && (
                                            <Image
                                                src={card.media.url}
                                                alt={card.media.alt || 'Travel destination'}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Second Column - First Feature Card */}
                            <div className="flex flex-col justify-center">
                                {repeatedFeatureCards.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="relative w-[260px] sm:w-[280px] md:w-[307px] h-[360px] sm:h-[380px] md:h-[408px] rounded-2xl shadow-lg bg-[#1976D2] text-white"
                                    >
                                        {repeatedFeatureCards[0].media?.url && (
                                            <div className="absolute bottom-[90px] sm:bottom-[100px] md:bottom-[108px] left-[17px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]">
                                                <Image
                                                    src={repeatedFeatureCards[0].media.url}
                                                    alt={repeatedFeatureCards[0].media.alt || 'Feature icon'}
                                                    fill
                                                    className="object-contain brightness-0 invert"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute bottom-[17px] left-[17px] w-[230px] sm:w-[250px] md:w-[267px] h-[60px] sm:h-[66px] md:h-[72px]">
                                            <p className="text-[14px] sm:text-[15px] md:text-base font-medium leading-[20px] sm:leading-[22px] md:leading-6 tracking-[0%] text-left">
                                                {repeatedFeatureCards[0].text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Third Column - Last Two Image Cards */}
                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                                {repeatedImageCards.slice(2, 4).map((card, index) => (
                                    <motion.div
                                        key={index + 2}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                                        className={index === 0
                                            ? "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-lg group"
                                            : "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-lg group"
                                        }
                                    >
                                        {card.media?.url && (
                                            <Image
                                                src={card.media.url}
                                                alt={card.media.alt || 'Travel destination'}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Fourth Column - Second Feature Card */}
                            <div className="flex flex-col justify-center">
                                {repeatedFeatureCards.length > 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="relative w-[260px] sm:w-[280px] md:w-[307px] h-[360px] sm:h-[380px] md:h-[408px] rounded-2xl shadow-lg bg-[#FFC107] text-white"
                                    >
                                        {repeatedFeatureCards[1].media?.url && (
                                            <div className="absolute bottom-[90px] sm:bottom-[100px] md:bottom-[108px] left-[17px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]">
                                                <Image
                                                    src={repeatedFeatureCards[1].media.url}
                                                    alt={repeatedFeatureCards[1].media.alt || 'Feature icon'}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute bottom-[17px] left-[17px] w-[230px] sm:w-[250px] md:w-[267px] h-[60px] sm:h-[66px] md:h-[72px]">
                                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0%] text-left">
                                                {repeatedFeatureCards[1].text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Duplicate Set - Same structure with responsive classes */}
                        <div className="flex gap-4 sm:gap-6 lg:gap-8 min-w-max">
                            {/* First Column - First Two Image Cards */}
                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                                {repeatedImageCards.slice(0, 2).map((card, index) => (
                                    <motion.div
                                        key={`dup-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                                        className={index === 0
                                            ? "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-lg group"
                                            : "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden shadow-lg group"
                                        }
                                    >
                                        {card.media?.url && (
                                            <Image
                                                src={card.media.url}
                                                alt={card.media.alt || 'Travel destination'}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Second Column - First Feature Card */}
                            <div className="flex flex-col justify-center">
                                {repeatedFeatureCards.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="relative w-[260px] sm:w-[280px] md:w-[307px] h-[360px] sm:h-[380px] md:h-[408px] rounded-2xl shadow-lg bg-[#1976D2] text-white"
                                    >
                                        {repeatedFeatureCards[0].media?.url && (
                                            <div className="absolute bottom-[90px] sm:bottom-[100px] md:bottom-[108px] left-[17px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]">
                                                <Image
                                                    src={repeatedFeatureCards[0].media.url}
                                                    alt={repeatedFeatureCards[0].media.alt || 'Feature icon'}
                                                    fill
                                                    className="object-contain brightness-0 invert"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute bottom-[17px] left-[17px] w-[230px] sm:w-[250px] md:w-[267px] h-[60px] sm:h-[66px] md:h-[72px]">
                                            <p className="text-[14px] sm:text-[15px] md:text-base font-medium leading-[20px] sm:leading-[22px] md:leading-6 tracking-[0%] text-left">
                                                {repeatedFeatureCards[0].text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Third Column - Last Two Image Cards */}
                            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                                {repeatedImageCards.slice(2, 4).map((card, index) => (
                                    <motion.div
                                        key={`dup-${index + 2}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                                        className={index === 0
                                            ? "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-lg group"
                                            : "relative w-[260px] sm:w-[280px] md:w-[307px] h-[240px] sm:h-[260px] md:h-[283px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl overflow-hidden shadow-lg group"
                                        }
                                    >
                                        {card.media?.url && (
                                            <Image
                                                src={card.media.url}
                                                alt={card.media.alt || 'Travel destination'}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Fourth Column - Second Feature Card */}
                            <div className="flex flex-col justify-center">
                                {repeatedFeatureCards.length > 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="relative w-[260px] sm:w-[280px] md:w-[307px] h-[360px] sm:h-[380px] md:h-[408px] rounded-2xl shadow-lg bg-[#FFC107] text-white"
                                    >
                                        {repeatedFeatureCards[1].media?.url && (
                                            <div className="absolute bottom-[90px] sm:bottom-[100px] md:bottom-[108px] left-[17px] w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]">
                                                <Image
                                                    src={repeatedFeatureCards[1].media.url}
                                                    alt={repeatedFeatureCards[1].media.alt || 'Feature icon'}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                        <div className="absolute bottom-[17px] left-[17px] w-[230px] sm:w-[250px] md:w-[267px] h-[60px] sm:h-[66px] md:h-[72px]">
                                            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] tracking-[0%] text-left">
                                                {repeatedFeatureCards[1].text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 