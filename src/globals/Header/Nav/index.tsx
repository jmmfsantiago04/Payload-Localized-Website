'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon, Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-end w-full">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-1"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6 p-4 mt-8">
            {navItems.map(({ link }, i) => (
              <div key={i} onClick={() => setIsMenuOpen(false)}>
                <CMSLink {...link} appearance="link" />
              </div>
            ))}
            <LocaleSwitcher />
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className='hidden lg:flex items-center gap-[140px]'>
        <div className='flex gap-[50px]'>
          {navItems.map(({ link }, i) => (
            <CMSLink key={i} {...link} appearance="link" />
          ))}
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  )
}
