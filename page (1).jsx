'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md py-3 border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display text-cream-100 text-xl tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ILIM
          </span>
          <span className="text-gold-500 text-xs tracking-widest uppercase font-body font-light">
            International School
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ['Programs', '/programs/early-preschool'],
            ['Admissions', '/admissions'],
            ['Tuition', '/tuition'],
            ['Our Founder', '/founder'],
            ['FAQ', '/faq'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="nav-link text-cream-200/80 hover:text-cream-100 text-sm font-body font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/waitlist" className="btn-gold text-sm">
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-cream-100 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-cream-100 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-px bg-cream-100 transition-all ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px bg-cream-100 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {[
            ['Programs', '/programs/early-preschool'],
            ['Admissions', '/admissions'],
            ['Tuition', '/tuition'],
            ['Our Founder', '/founder'],
            ['FAQ', '/faq'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-cream-200 text-base font-body"
            >
              {label}
            </Link>
          ))}
          <Link href="/waitlist" className="btn-gold mt-2 text-center">
            Join the Waitlist
          </Link>
        </div>
      )}
    </nav>
  )
}
