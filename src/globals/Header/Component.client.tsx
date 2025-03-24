'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { usePathname } from '@/i18n/routing'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="container mx-auto relative z-20 flex justify-between items-center py-4 px-2 sm:px-4 md:px-6 lg:px-8 lg:py-8"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <Link href="/home">
        <Logo className='xl:ml-[75px] w-[80px] md:w-[95px] lg:w-[107px] h-auto' />
      </Link>
      <HeaderNav header={header} />
    </header>
  )
}