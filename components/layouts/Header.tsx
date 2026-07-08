'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronRight, Leaf, Menu, X } from 'lucide-react'
import Logo from '../ui/logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery & Media', href: '/gallery' },
    { name: 'Events', href: '/event' },
    { name: 'Volunteer', href: '/volunteer' },
    { name: 'Contact us', href: '/contact' },
  ]

  const getLinkClasses = (href: string) =>
    `transition-colors ${
      pathname === href ? 'text-[#299E58] font-semibold' : 'text-gray-700 hover:text-[#299E58]'
    }`

  return (
    <header className="top-0 z-40 w-full bg-white shadow-sm subheading fixed">
      <div className="container flex h-18 py-1 items-center justify-between w-full mx-auto px-2">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12 text-lg font-medium">
          {navItems.map(({ name, href }) => (
            <Link key={href} href={href} className={getLinkClasses(href)}>
              {name}
            </Link>
          ))}
        </nav>

        {/* Support Button + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Button className="bg-[#299E58] hidden md:flex hover:bg-emerald-700 text-white">
            <Link className="text-white" href="/donate">
              DONATE
            </Link>
            &nbsp;&nbsp;
            <ChevronRight />
          </Button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-emerald-600 focus:outline-none lg:hidden"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            {navItems.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClasses(href)}
              >
                {name}
              </Link>
            ))}
             <Button className="bg-[#299E58] hover:bg-emerald-700 text-white">
            <Link className="text-white" href="/donate">
              DONATE
            </Link>
            &nbsp;&nbsp;
            <ChevronRight />
          </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
