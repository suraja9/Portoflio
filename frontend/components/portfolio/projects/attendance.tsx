import { Pipeline } from '../primitives'

export function Attendance() {
  return (
    <article className="relative border-t border-border py-20 md:py-28">
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-14">
          {/* Dashboard mockup */}
          <div className="order-2 reveal lg:order-1">
            <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2.5">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  hr / payroll
                </span>
                <span className="font-mono text-[9px] tracking-widest text-primary">
                  MARCH 2026
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-border border-b border-border md:grid-cols-4">
                {[
                  { k: 'PRESENT', v: '24', tone: 'text-emerald-400' },
                  { k: 'LEAVE', v: '02', tone: 'text-ember' },
                  { k: 'OVERTIME', v: '11h', tone: 'text-primary' },
                  { k: 'NET PAY', v: '₹42.8K', tone: 'text-foreground' },
                ].map((m) => (
                  <div key={m.k} className="px-4 py-4">
                    <div className={`text-xl font-semibold tracking-tight ${m.tone}`}>
                      {m.v}
                    </div>
                    <div className="font-mono text-[8px] tracking-widest text-muted-foreground">
                      {m.k}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="border-b border-border p-4 md:border-b-0 md:border-r">
                  <div className="mb-3 font-mono text-[9px] tracking-widest text-muted-foreground">
                    LOCATION VERIFICATION
                  </div>
                  <div className="relative flex h-28 items-center justify-center rounded-lg border border-border bg-background">
                    <div className="bg-grid-sm absolute inset-0 rounded-lg opacity-50" />
                    <div className="relative flex flex-col items-center">
                      <span className="h-10 w-10 rounded-full border-2 border-dashed border-primary/50" />
                      <span className="-mt-[26px] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/20" />
                      <span className="mt-4 font-mono text-[8px] tracking-widest text-primary">
                        INSIDE GEOFENCE
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3 font-mono text-[9px] tracking-widest text-muted-foreground">
                    SALARY BREAKDOWN
                  </div>
                  {[
                    ['Base', '₹38,000'],
                    ['Overtime', '+₹4,400'],
                    ['Deductions', '−₹1,200'],
                    ['Net Payable', '₹42,800'],
                  ].map(([a, b], i) => (
                    <div
                      key={a}
                      className={`flex items-center justify-between py-1.5 text-[11px] ${
                        i === 3
                          ? 'mt-1 border-t border-border pt-2 font-medium text-foreground'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span>{a}</span>
                      <span className="font-mono">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 font-mono text-[11px] tracking-[0.2em] text-primary reveal">
              03 — BUSINESS SYSTEM
            </div>
            <h3 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl reveal">
              ATTENDANCE &amp; SALARY MANAGEMENT
            </h3>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground reveal">
              A complete HR and payroll system that automatically tracks employee attendance using location verification and instantly calculates salaries and payslips.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 reveal">
              <span className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 font-mono text-[10px] tracking-widest text-primary">
                LOCATION-BASED ATTENDANCE
              </span>
              <span className="rounded-md border border-border-strong bg-surface px-3 py-1.5 font-mono text-[10px] tracking-widest text-foreground">
                AUTOMATED PAYROLL
              </span>
            </div>
            <div className="mt-8 reveal">
              <Pipeline
                steps={['LOCATION', 'ATTENDANCE', 'CALCULATION', 'PAYROLL', 'PAYSLIP']}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
