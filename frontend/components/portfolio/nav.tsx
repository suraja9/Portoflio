'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const LINKS = [
  { n: '01', label: 'HOME', href: '/' },
  { n: '02', label: 'ABOUT', href: '/#about' },
  { n: '03', label: 'PROJECTS', href: '/projects' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-border bg-background/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 md:px-8 ${
            scrolled ? 'h-14' : 'h-20'
          }`}
        >
          {/* Left */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">
                SURAJ ALI
              </span>
              <span className="mt-0.5 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                FULL STACK DEVELOPER
              </span>
            </span>
          </Link>

          {/* Center */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-cursor="focus"
                className="group flex items-center gap-1.5 font-mono text-[11px] tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary/70">{l.n}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
            <Link
              href="/#contact"
              data-cursor="cta"
              className="hidden items-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 py-2 font-mono text-[11px] tracking-widest transition-colors hover:border-primary hover:text-primary md:inline-flex"
            >
              LET&apos;S TALK <span aria-hidden>↗</span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-border-strong lg:hidden"
            >
              <span
                className={`h-px w-4 bg-foreground transition-transform ${
                  open ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-4 bg-foreground transition-transform ${
                  open ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="bg-grid absolute inset-0 opacity-40" />
        <nav className="relative mt-24 flex flex-col gap-1 px-6">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-border py-5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-mono text-xs text-primary">{l.n}</span>
              <span className="text-3xl font-semibold tracking-tight">
                {l.label}
              </span>
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 font-mono text-xs tracking-widest text-primary-foreground"
          >
            LET&apos;S TALK ↗
          </Link>
          <span className="mt-6 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </nav>
      </div>
    </>
  )
}
