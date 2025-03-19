'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Media as MediaType } from '@/payload-types';
import { CMSLink } from '@/components/Link';
import { Media } from '@/components/Media';
import { useLocale } from 'next-intl';

interface HeroProps {
  type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
  title?: string;
  content?: string;
  secondaryContent?: string;
  buttons?: Array<{
    label: string;
    link: string;
  }>;
  media?: MediaType;
}

export const MediumImpactHero: React.FC<HeroProps> = ({
  title,
  content,
  secondaryContent,
  buttons,
  media,
}) => {
  const locale = useLocale();

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
        <span>{restOfWords}</span>
        <span className="text-[#F6B600]">{lastTwoWords}</span>
      </div>
    );
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="relative z-10 flex h-full pt-[40px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className={`flex flex-col ${locale === 'ko' ? 'space-y-[4.375rem]' : 'space-y-[4.  rem]'}`}>
            <div className={`w-full ${locale === 'ko' ? 'h-[7rem]' : ''} max-w-[47.25rem]`}>
              <motion.h1
                className={`text-gray-900 text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] tracking-[0] font-semibold ${locale === 'ko'
                  ? 'h-full flex items-center'
                  : 'flex flex-row items-center gap-1 md:gap-2'
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {getTitleContent()}
              </motion.h1>
            </div>

            <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:w-auto"
              >
                {Array.isArray(buttons) && buttons.length > 0 && (
                  <ul className="flex gap-4">
                    {buttons.map((button, i) => (
                      <li key={i}>
                        <CMSLink
                          type="custom"
                          url={button.link}
                          label={button.label}
                          className="group inline-flex h-[3rem] w-[15.6875rem] items-center justify-between rounded-lg bg-[#1976D2] hover:bg-[#1565C0] pl-5 pr-1 text-white transition-all"
                        >
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
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {content && (
                <motion.div
                  className={`w-full ${locale === 'ko'
                    ? 'md:w-[35rem]'
                    : 'md:w-[22.5625rem]'
                    } md:h-[3.3125rem] md:ml-auto`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className={`flex h-full items-center ${locale === 'ko'
                    ? 'text-lg'
                    : 'text-sm sm:text-base'
                    } font-medium leading-5 sm:leading-6 tracking-[0] text-gray-600`}>
                    {content}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {media && typeof media === 'object' && (
        <div className="absolute inset-0 z-0">
          <Media
            className="h-full w-full object-cover"
            imgClassName="h-full w-full object-cover"
            priority
            resource={media}
          />
        </div>
      )}
    </section>
  );
};