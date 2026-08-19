import Link from 'next/link'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <About />
      
      {/* Projects Teaser CTA */}
      <section className="relative pb-32 pt-12">
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-center px-5 text-center md:px-8 reveal">
          <h3 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">
            Ready to see the work?
          </h3>
          <Link
            href="/projects"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-xs tracking-[0.15em] text-primary-foreground transition-all hover:bg-primary/90 shadow-[0_0_40px_-10px_oklch(0.62_0.18_258_/_0.8)]"
          >
            VIEW FULL PORTFOLIO
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </section>
    </main>
  )
}
