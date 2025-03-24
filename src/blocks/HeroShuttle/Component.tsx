'use client';

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import type { TypedLocale } from 'payload'
import type { Media, Form } from '@/payload-types'
import { FormBlock } from '@/blocks/Form/Component'

type Props = {
    id?: string
    title: string
    content: string
    secondaryContent: string
    form?: Form | number
    featureCards?: Array<{
        text: string
        media: Media
    }> | null
    locale?: TypedLocale
}

export const Component: React.FC<Props> = (props) => {
    const { title, content, secondaryContent, featureCards, form, locale } = props

    const titleRef = useRef(null)
    const isTitleInView = useInView(titleRef, { once: true })

    // Convert form ID to form object structure if needed
    const formData = typeof form === 'number' ? { id: form } : form

    return (
        <section className="relative w-full min-h-screen bg-white py-8">
            <div className="container ml-4 md:ml-[265px]">
                {/* Main Card */}
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className={`pl-[16px] pt-[16px] rounded-[20px] border border-[#E5E5E5] bg-[#F0F7FE] overflow-hidden ${locale === 'en'
                        ? 'w-full md:w-[461px] h-[368px]'
                        : 'w-full md:max-w-[461px] h-[305px]'
                        }`}
                >
                    {/* Yellow Banner */}
                    <div className={`${locale === 'en'
                        ? 'w-full md:w-[265px]'
                        : 'w-fit'
                        } px-[35px] py-[10px] rounded-full border border-[#F6B600] bg-[#F6B600]/10`}>
                        <div className="flex justify-center items-center">
                            <span className="text-[16px] text-center font-medium text-[#F6B600]">
                                {title}
                            </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full md:max-w-[428px]">
                        <h2 className="text-[32px] md:text-[50px] font-bold mt-[32px] mb-[50px]">
                            {content}
                        </h2>
                    </div>
                    <div className={`${locale === 'en'
                        ? 'w-full md:w-[408px] h-[94px]'
                        : 'w-full md:max-w-[408px]'
                        }`}>
                        <p className={`font-medium text-[15px] leading-[24px] ${locale === 'en' ? 'text-left' : 'text-center'}`}>
                            {locale === 'en'
                                ? secondaryContent.split('!').map((text, index, array) => (
                                    <React.Fragment key={index}>
                                        {text}
                                        {index < array.length - 1 && (
                                            <>{`!`}<br /></>
                                        )}
                                    </React.Fragment>
                                ))
                                : secondaryContent
                            }
                        </p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="mt-6 space-y-5">
                    {featureCards?.map((card, index) => {
                        const cardRef = useRef<HTMLDivElement | null>(null);
                        const isCardInView = useInView(cardRef, { once: true });

                        return (
                            <motion.div
                                key={index}
                                ref={cardRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                className="flex items-center w-full md:w-[460px] h-[80px] gap-5 rounded-[22px] border px-4 py-6 bg-white border-[#E5E5E5] hover:border-[#0066FF] transition-colors cursor-pointer"
                            >
                                {card.media?.url && (
                                    <div className="w-[32px] h-[32px] flex-shrink-0">
                                        <Image
                                            src={card.media.url}
                                            alt={card.media.alt || 'Feature icon'}
                                            width={32}
                                            height={32}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                )}
                                <span className="text-[16px] font-medium text-[#262626]">
                                    {locale === 'en'
                                        ? card.text.split('!').map((text, index, array) => (
                                            <React.Fragment key={index}>
                                                {text}
                                                {index < array.length - 1 && (
                                                    <>{`!`}<br /></>
                                                )}
                                            </React.Fragment>
                                        ))
                                        : card.text
                                    }
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Form Section */}
                {formData && (
                    <div className="mt-8">
                        <FormBlock
                            form={formData as any}
                            enableIntro={false}
                            blockType="formBlock"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Component 