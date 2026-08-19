export function SectionTransition() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <h2 className="text-balance text-[9vw] font-semibold leading-[0.95] tracking-tight md:text-7xl reveal">
          FROM WEB PAGES
          <br />
          <span className="text-muted-foreground">TO BUSINESS SYSTEMS.</span>
        </h2>
        <div className="mt-12 flex items-center gap-4 reveal">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
            INTERFACE
          </span>
          <span className="relative h-px flex-1 overflow-hidden bg-border">
            <span className="absolute inset-y-0 left-0 w-1/2 animate-[flow_4s_linear_infinite] bg-gradient-to-r from-transparent via-primary to-transparent" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary">
            SYSTEM
          </span>
        </div>
      </div>
    </section>
  )
}
