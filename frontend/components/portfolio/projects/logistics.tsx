import { Pipeline } from '../primitives'

function LogisticsMockup() {
  const shipments = [
    { id: 'OCL-48213', route: 'GHY → DIB', status: 'IN TRANSIT', tone: 'blue' },
    { id: 'OCL-48219', route: 'GHY → SIL', status: 'PICKED UP', tone: 'gray' },
    { id: 'OCL-48224', route: 'GHY → JOR', status: 'DELIVERED', tone: 'green' },
    { id: 'OCL-48231', route: 'GHY → TEZ', status: 'ASSIGNED', tone: 'amber' },
  ]
  const toneMap: Record<string, string> = {
    blue: 'text-primary border-primary/40 bg-primary/10',
    gray: 'text-muted-foreground border-border-strong bg-surface',
    green: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
    amber: 'text-ember border-ember/40 bg-ember/10',
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/40">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ember/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
          console.ocl / dispatch
        </span>
        <span className="font-mono text-[10px] text-primary">● LIVE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
        {/* Map */}
        <div className="relative min-h-[280px] border-b border-border bg-background p-4 md:border-b-0 md:border-r">
          <div className="bg-grid-sm absolute inset-0 opacity-50" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            <path
              d="M 10 76 Q 30 40 52 58 T 80 28"
              fill="none"
              stroke="oklch(0.62 0.18 258)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
              className="animate-flow"
            />
          </svg>
          {[
            { l: '10%', t: '76%', label: 'GHY HUB' },
            { l: '52%', t: '58%', label: 'BRANCH' },
            { l: '80%', t: '28%', label: 'DROP' },
          ].map((p) => (
            <div
              key={p.label}
              className="absolute flex flex-col items-center"
              style={{ left: p.l, top: p.t }}
            >
              <span className="h-2.5 w-2.5 animate-pulse-node rounded-full bg-primary ring-4 ring-primary/15" />
              <span className="mt-1 font-mono text-[8px] tracking-widest text-muted-foreground">
                {p.label}
              </span>
            </div>
          ))}
          <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-widest text-muted-foreground">
            DELIVERY MAP
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
            {[
              { k: 'ACTIVE', v: '128' },
              { k: 'COURIERS', v: '42' },
            ].map((m) => (
              <div key={m.k} className="px-4 py-3">
                <div className="text-2xl font-semibold tracking-tight">{m.v}</div>
                <div className="font-mono text-[9px] tracking-widest text-muted-foreground">
                  {m.k}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 divide-y divide-border">
            {shipments.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between px-4 py-2.5"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] text-foreground">
                    {s.id}
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-muted-foreground">
                    {s.route}
                  </span>
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[8px] tracking-widest ${toneMap[s.tone]}`}
                >
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const META = [
  { k: 'ROLE', v: 'Full Stack Developer' },
  { k: 'STACK', v: 'MERN · Next.js · Node.js · Express · MongoDB · AWS' },
  { k: 'SYSTEM', v: 'Multi-tenant architecture' },
  { k: 'AUTH', v: 'JWT + Role-based access control' },
]

const DETAILS = [
  {
    t: 'MULTI-TENANCY',
    d: 'Different user types and business workflows across a single platform.',
  },
  {
    t: 'AUTHENTICATION',
    d: 'JWT authentication and role-based access control.',
  },
  {
    t: 'API ENGINEERING',
    d: 'Secure REST APIs with validation, rate limiting and CORS handling.',
  },
  {
    t: 'CLOUD',
    d: 'Production deployment and infrastructure managed on AWS.',
  },
]

export function Logistics() {
  return (
    <article className="relative border-t border-border py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-primary reveal">
          01 — PRODUCTION SYSTEM
        </div>
        <h3 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl reveal">
          COURIER &amp; LOGISTICS PLATFORM
        </h3>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground reveal">
          Multi-tenant logistics infrastructure for customers, corporate
          clients, branches and field couriers. Architected and led the
          development end to end.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div className="reveal">
            <LogisticsMockup />
          </div>
          <div className="flex flex-col justify-center gap-6 reveal">
            {META.map((m) => (
              <div key={m.k} className="border-l-2 border-primary/40 pl-4">
                <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-1 text-sm text-foreground">{m.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* System architecture flow */}
        <div className="mt-14 rounded-xl border border-border bg-surface/50 p-6 reveal md:p-8">
          <div className="mb-5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            SYSTEM ARCHITECTURE
          </div>
          <Pipeline steps={['CUSTOMER', 'CORPORATE', 'BRANCH', 'COURIER', 'ADMIN']} />
        </div>

        {/* Detail strip */}
        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d) => (
            <div key={d.t} className="bg-surface/60 p-6 reveal">
              <div className="mb-3 h-6 w-6 rounded border border-primary/40 bg-primary/10" />
              <div className="font-mono text-xs tracking-[0.15em] text-foreground">
                {d.t}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
