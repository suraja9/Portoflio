import type { ReactNode } from 'react'

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground reveal">
      <span className="text-primary">{index}</span>
      <span className="h-px w-10 bg-border-strong" />
      <span>{children}</span>
    </div>
  )
}

/** Small horizontal pipeline of labels connected by arrows. */
export function Pipeline({
  steps,
  className = '',
}: {
  steps: string[]
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-2 gap-y-3 ${className}`}>
      {steps.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-border-strong bg-surface px-3 py-1.5 font-mono text-[10px] tracking-widest text-foreground">
            {s}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className="text-primary/70">
              →
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary/70" />
      {children}
    </span>
  )
}
