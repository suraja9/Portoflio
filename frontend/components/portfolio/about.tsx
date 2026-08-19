'use client'

import Link from 'next/link'
import { useState } from 'react'

const EVOLUTION_STAGES = [
  {
    id: '01',
    title: 'WEBSITES',
    techs: ['WordPress', 'WooCommerce', 'Custom PHP'],
  },
  {
    id: '02',
    title: 'APPLICATIONS',
    techs: ['React', 'Next.js', 'Node.js'],
  },
  {
    id: '03',
    title: 'SYSTEMS',
    techs: ['APIs', 'Authentication', 'Databases', 'Business Logic'],
  },
  {
    id: '04',
    title: 'PRODUCTION',
    techs: ['AWS', 'Payments', 'Automation', 'Integrations'],
  },
]

function EvolutionDiagram() {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null)

  return (
    <div className="relative mt-12 w-full reveal">
      {/* Horizontal connector line (desktop) */}
      <div className="absolute left-6 right-6 top-6 hidden h-px bg-border md:block">
        <div className="h-full bg-primary/40 w-full animate-flow origin-left" style={{ transformOrigin: 'left', animationDuration: '4s' }} />
      </div>

      {/* Vertical connector line (mobile) */}
      <div className="absolute bottom-6 left-6 top-6 w-px bg-border md:hidden">
        <div className="h-full bg-primary/40 w-full animate-flow origin-top" style={{ transformOrigin: 'top', animationDuration: '4s' }} />
      </div>

      <div className="relative flex flex-col gap-8 md:flex-row md:justify-between md:gap-4">
        {EVOLUTION_STAGES.map((stage, idx) => {
          const isHovered = hoveredStage === stage.id
          return (
            <div
              key={stage.id}
              data-cursor="focus"
              className="relative flex flex-row items-start gap-6 md:flex-col md:gap-4 flex-1 cursor-default group"
              onMouseEnter={() => setHoveredStage(stage.id)}
              onMouseLeave={() => setHoveredStage(null)}
            >
              {/* Node dot */}
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 md:h-12 md:w-12 ${
                  isHovered
                    ? 'border-primary bg-primary/20 text-primary shadow-[0_0_16px_-4px_oklch(0.62_0.18_258_/_0.5)]'
                    : 'border-border bg-surface text-muted-foreground'
                }`}
              >
                <span className="font-mono text-xs">{stage.id}</span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 pt-1 md:pt-0">
                <span
                  className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                    isHovered ? 'text-foreground' : 'text-foreground/80'
                  }`}
                >
                  {stage.title}
                </span>
                <div className="flex flex-col gap-1">
                  {stage.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`text-sm transition-colors duration-300 ${
                        isHovered ? 'text-primary/90' : 'text-muted-foreground'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function MindsetDiagram() {
  const nodes = [
    { label: 'USER', isPrimary: true },
    { label: 'INTERFACE', isPrimary: true },
    { label: 'API', isPrimary: true, sideNode: 'AUTH', sideDir: 'left' },
    { label: 'BUSINESS LOGIC', isPrimary: true, sideNode: 'NOTIFICATIONS', sideDir: 'right' },
    { label: 'DATABASE', isPrimary: true, sideNode: 'PAYMENTS', sideDir: 'left' },
    { label: 'INFRASTRUCTURE', isPrimary: true, sideNode: 'AUTOMATION', sideDir: 'right' },
  ]

  return (
    <div className="relative mx-auto mt-12 flex max-w-sm flex-col items-center py-8 reveal">
      {/* Central continuous line */}
      <div className="absolute bottom-10 top-10 w-px bg-border-strong" />

      {nodes.map((node, i) => (
        <div key={node.label} className="relative flex w-full flex-col items-center gap-6">
          <div className="relative flex items-center justify-center w-full">
            <div className="z-10 flex items-center justify-center rounded-md border border-primary/40 bg-surface/80 px-4 py-2 font-mono text-xs tracking-wider text-foreground backdrop-blur-sm shadow-[0_0_12px_-4px_oklch(0.62_0.18_258_/_0.3)] hover:border-primary hover:bg-primary/10 transition-colors cursor-default" data-cursor="focus">
              {node.label}
            </div>

            {node.sideNode && (
              <div
                className={`absolute z-0 flex items-center gap-1 md:gap-2 ${
                  node.sideDir === 'left' ? 'right-1/2 pr-14 md:pr-20' : 'left-1/2 pl-14 md:pl-20'
                }`}
              >
                {/* Connecting line to side node */}
                <div className="h-px w-4 md:w-8 bg-border-strong" />
                <div className="rounded border border-border bg-surface px-1.5 md:px-2 py-0.5 md:py-1 font-mono text-[8px] md:text-[9px] tracking-widest text-muted-foreground hover:border-border-strong hover:text-foreground transition-colors cursor-default" data-cursor="focus">
                  {node.sideNode}
                </div>
              </div>
            )}
          </div>

          {/* Render arrow pointing to next element, except for the last one */}
          {i < nodes.length - 1 && (
            <div className="z-10 font-mono text-xs text-muted-foreground/50">↓</div>
          )}
        </div>
      ))}
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative border-t border-border overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground reveal">
          <span>01</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-primary">ABOUT</span>
        </div>

        <h2 className="text-balance text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] reveal max-w-4xl mb-24">
          I LIKE BUILDING THINGS THAT HAVE TO <span className="text-primary">ACTUALLY WORK</span>.
        </h2>

        {/* Two-Column Intro */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 mb-32">
          {/* Left Anchor */}
          <div className="flex flex-col gap-8 reveal border-l border-border pl-6 relative">
            <div className="absolute top-0 -left-[3px] h-1.5 w-1.5 rounded-full bg-primary animate-pulse-node" />
            
            <div className="flex flex-col gap-1">
              <span className="font-mono text-sm tracking-widest text-foreground">SURAJ ALI</span>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">FULL STACK DEVELOPER</span>
            </div>

            <div className="flex flex-col">
              <span className="text-6xl md:text-8xl font-semibold tracking-tighter">3+</span>
              <span className="font-mono text-xs tracking-[0.15em] text-primary mt-2">YEARS OF PROFESSIONAL EXPERIENCE</span>
            </div>

            <div className="mt-4 font-mono text-[9px] tracking-[0.2em] text-muted-foreground/70 flex gap-3 items-center">
              <span>BUILD</span>
              <span className="h-px w-4 bg-border" />
              <span>SHIP</span>
              <span className="h-px w-4 bg-border" />
              <span>IMPROVE</span>
            </div>
          </div>

          {/* Right Editorial */}
          <div className="flex flex-col justify-center gap-6 text-base md:text-lg leading-relaxed text-muted-foreground reveal max-w-2xl text-pretty">
            <p>
              I started by building websites and working directly with clients, then moved deeper into full-stack development and production software.
            </p>
            <p>
              Today, my work sits across frontend interfaces, backend systems, databases, APIs, authentication, third-party integrations and cloud infrastructure.
            </p>
            <p>
              I&apos;ve worked on systems where the software isn&apos;t just something people look at — it is part of how a business operates.
            </p>
          </div>
        </div>

        {/* Visual Story */}
        <div className="mb-32">
          <EvolutionDiagram />
        </div>

        {/* Profile Blocks */}
        <div className="mb-32 reveal">
          <h3 className="mb-10 font-mono text-sm tracking-widest text-foreground">What I bring to a project</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {/* Block 1 */}
            <div className="flex flex-col gap-4 border-t border-border pt-6 group cursor-default" data-cursor="focus">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-primary transition-colors">01 — FULL STACK THINKING</span>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                I work across the frontend, backend, database and integrations instead of treating each layer as a separate problem.
              </p>
            </div>
            {/* Block 2 */}
            <div className="flex flex-col gap-4 border-t border-border pt-6 group cursor-default" data-cursor="focus">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-primary transition-colors">02 — PRODUCTION EXPERIENCE</span>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                I&apos;ve worked on software used in real business operations, including logistics, attendance, salary management, billing and e-commerce.
              </p>
            </div>
            {/* Block 3 */}
            <div className="flex flex-col gap-4 border-t border-border pt-6 group cursor-default" data-cursor="focus">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-primary transition-colors">03 — CLIENT + PRODUCT EXPERIENCE</span>
              <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                I&apos;ve worked both on client-facing websites and larger application systems, giving me experience with requirements, development, deployment and post-launch work.
              </p>
            </div>
          </div>
        </div>

        {/* Real Experience Callout */}
        <div className="mb-32 reveal">
          <div className="relative rounded-xl border border-border bg-surface/30 p-8 md:p-12 overflow-hidden flex flex-col items-start gap-4">
            <div className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute right-0 top-0 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
            
            <h4 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground flex flex-col gap-2">
              <span>3+ YEARS</span>
              <span className="text-lg md:text-2xl font-normal text-muted-foreground">BUILDING SOFTWARE & DIGITAL PLATFORMS</span>
            </h4>
            
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 w-full">
              <div className="flex flex-col gap-1 border-l-2 border-primary pl-4">
                <span className="font-medium text-foreground text-sm md:text-base">OCL Services</span>
                <span className="font-mono text-[10px] tracking-widest text-primary">FULL STACK DEVELOPER</span>
                <span className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground">MAY 2025 — JULY 2026</span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-border-strong pl-4">
                <span className="font-medium text-foreground text-sm md:text-base">BHA Consulting</span>
                <span className="font-mono text-[10px] tracking-widest text-foreground">WEB DEVELOPER (PART-TIME)</span>
                <span className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground">2023 — 2024</span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-border-strong pl-4">
                <span className="font-medium text-foreground text-sm md:text-base">Freelance (Fiverr)</span>
                <span className="font-mono text-[10px] tracking-widest text-foreground">20+ CLIENT PROJECTS</span>
                <span className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground">2023 — 2024</span>
              </div>

              <div className="flex flex-col gap-1 border-l-2 border-border-strong pl-4">
                <span className="font-medium text-foreground text-sm md:text-base">IOCL & NIELIT</span>
                <span className="font-mono text-[10px] tracking-widest text-foreground">DEVELOPER INTERN</span>
                <span className="mt-1 font-mono text-[10px] tracking-widest text-muted-foreground">2023 — 2024</span>
              </div>
            </div>

            <Link
              href="/projects"
              data-cursor="cta"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-xs font-mono tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              SEE FULL EXPERIENCE
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-primary">
                ↘
              </span>
            </Link>
          </div>
        </div>

        {/* Engineering Mindset */}
        <div className="mb-32 flex flex-col items-center text-center reveal">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-border-strong" />
            <span>HOW I THINK</span>
            <span className="h-px w-8 bg-border-strong" />
          </div>

          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-8 max-w-3xl">
            SOFTWARE IS <span className="text-primary">MORE THAN</span> THE INTERFACE.
          </h3>

          <p className="max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground text-pretty mb-12">
            A polished interface is only one part of a product. I care about the systems underneath it — how data moves, how users are authenticated, how APIs communicate, how workflows are automated and how the application behaves in production.
          </p>

          <MindsetDiagram />
        </div>

        {/* Technology Snapshot */}
        <div className="relative border-t border-border pt-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground">
            {['REACT', 'NEXT.JS', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MYSQL', 'AWS', 'REACT NATIVE'].map((tech) => (
              <span key={tech} className="hover:text-primary transition-colors cursor-default" data-cursor="focus">
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#skills"
            data-cursor="cta"
            className="group flex shrink-0 items-center gap-2 text-xs font-mono tracking-widest text-primary transition-colors hover:text-foreground"
          >
            VIEW FULL STACK
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
