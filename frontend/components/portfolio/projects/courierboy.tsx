import { Pipeline } from '../primitives'

function Phone({
  title,
  accent,
  children,
  className = '',
}: {
  title: string
  accent?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative w-full max-w-[210px] rounded-[2rem] border border-border-strong bg-surface-2 p-2 shadow-2xl shadow-black/50 ${className}`}
    >
      <div className="absolute left-1/2 top-2.5 z-10 h-1 w-14 -translate-x-1/2 rounded-full bg-border-strong" />
      <div className="overflow-hidden rounded-[1.6rem] border border-border bg-background">
        <div className="flex items-center justify-between px-4 pb-2 pt-5">
          <span className="font-mono text-[8px] tracking-widest text-muted-foreground">
            9:41
          </span>
          <span
            className={`font-mono text-[8px] tracking-widest ${accent ? 'text-primary' : 'text-muted-foreground'}`}
          >
            COURIERBOY
          </span>
        </div>
        <div className="px-3 pb-5">
          <div className="mb-3 font-mono text-[9px] tracking-[0.15em] text-primary">
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

function Row({ a, b, tone = 'gray' }: { a: string; b: string; tone?: string }) {
  const tones: Record<string, string> = {
    gray: 'text-muted-foreground',
    blue: 'text-primary',
    green: 'text-emerald-400',
  }
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg border border-border bg-surface/60 px-2.5 py-2">
      <span className="text-[10px] text-foreground">{a}</span>
      <span className={`font-mono text-[8px] tracking-widest ${tones[tone]}`}>
        {b}
      </span>
    </div>
  )
}

export function CourierBoy() {
  return (
    <article className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.5fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-ember reveal">
              02 — MOBILE APPLICATION
            </div>
            <h3 className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl reveal">
              COURIERBOY
            </h3>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground reveal">
              A mobile app built for delivery partners to easily manage their daily tasks,
              including tracking pickups, completing deliveries, and processing payments on the go.
            </p>
            <div className="mt-6 font-mono text-[11px] tracking-widest text-muted-foreground reveal">
              React Native · Node.js · Express · MongoDB
            </div>
            <div className="mt-8 reveal">
              <Pipeline
                steps={['ASSIGN', 'PICKUP', 'DELIVER', 'COLLECT', 'SETTLE']}
              />
            </div>
          </div>

          {/* Devices */}
          <div className="relative flex items-end justify-center gap-4 reveal md:gap-6">
            <Phone title="DASHBOARD" className="hidden translate-y-6 sm:block">
              <Row a="Today's tasks" b="12" tone="blue" />
              <Row a="Completed" b="8" tone="green" />
              <Row a="Earnings" b="₹1,240" />
              <div className="mt-3 rounded-lg border border-primary/30 bg-primary/10 p-2 text-center font-mono text-[8px] tracking-widest text-primary">
                ON DUTY
              </div>
            </Phone>

            <Phone title="ASSIGNMENT" accent className="z-10">
              <Row a="OCL-48231" b="ASSIGNED" tone="blue" />
              <Row a="Pickup: GHY Hub" b="2.4 km" />
              <Row a="Drop: Tezpur" b="COD" tone="green" />
              <button className="mt-3 w-full rounded-lg bg-primary py-2 font-mono text-[9px] tracking-widest text-primary-foreground">
                ACCEPT PICKUP
              </button>
            </Phone>

            <Phone title="SETTLEMENT" className="hidden translate-y-6 md:block">
              <Row a="COD collected" b="₹4,820" tone="green" />
              <Row a="Deliveries" b="8" />
              <Row a="Pending" b="₹0" />
              <div className="mt-3 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2 text-center font-mono text-[8px] tracking-widest text-emerald-400">
                SETTLED
              </div>
            </Phone>
          </div>
        </div>
      </div>
    </article>
  )
}
