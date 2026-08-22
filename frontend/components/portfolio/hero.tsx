import { Counter } from './counter'
import { SystemDiagram } from './system-diagram'
import Link from 'next/link'

const METRICS = [
  { value: 3, suffix: '+', label: 'YEARS OF EXPERIENCE' },
  { value: 20, suffix: '+', label: 'PRODUCTS SHIPPED' },
  { value: 100, suffix: '%', label: 'CLIENT SATISFACTION' },
  { value: 24, suffix: '/7', label: 'APPLICATION RELIABILITY' },
] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* background environment */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: 'oklch(0.62 0.18 258)' }}
      />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Left column */}
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground reveal">
            <span className="text-primary">SURAJ ALI</span>
            <span className="h-px w-8 bg-border-strong" />
            <span>SOFTWARE DEVELOPER</span>
          </div>

          <h1 className="text-balance text-[13vw] font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.2rem] reveal">
            I BUILD
            <br />
            <span className="text-primary">SOFTWARE</span>,
            <br />
            THAT SOLVES
            <br />
            <span className="relative inline-block">
              PROBLEMS
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-primary/50" />
            </span>
            .
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground reveal">
            Software Developer with 15+ months of experience turning complex business requirements into scalable, high-performance applications. I focus on writing clean code and building systems that drive real-world impact.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3 reveal">
            <Link
              href="/projects"
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              EXPLORE MY WORK
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                ↘
              </span>
            </Link>
            <a
              href="#contact"
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              LET&apos;S TALK
              <span className="transition-transform group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* micro labels */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground/70 reveal">
            {['BUSINESS FOCUSED', 'END-TO-END DEVELOPMENT', 'AWS DEPLOYED'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="h-1 w-1 bg-primary/60" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — system diagram */}
        <div className="relative reveal">
          <SystemDiagram />
        </div>
      </div>

      {/* Metrics rail */}
      <div className="relative border-y border-border">
        <div className="bg-grid-sm pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-border px-5 md:grid-cols-4 md:px-8">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 py-8 reveal ${i % 2 === 0 ? 'pr-4' : 'pl-4'} md:px-6 md:first:pl-0`}
            >
              <span className="text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter
                  value={m.value}
                  prefix={'prefix' in m ? m.prefix : ''}
                  suffix={m.suffix}
                />
              </span>
              <span className="font-mono text-[9px] leading-relaxed tracking-[0.16em] text-muted-foreground">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
