import { ExternalLink } from 'lucide-react'

const WEB_PROJECTS = [
  { url: 'https://ergorest.si/', scope: 'Whole website' },
  { url: 'https://theinnerpower.store/', scope: 'Whole website' },
  { url: 'https://anilkarakkattuu.com/', scope: 'Whole website' },
  { url: 'https://fotodelavnica.si/', scope: 'Edited some pages' },
  { url: 'https://gpartner.si/', scope: 'Whole website' },
  { url: 'https://health-guardian.net/', scope: 'Whole website' },
  { url: 'http://original-kamagra.shop/', scope: 'Whole website' },
  { url: 'https://bhaconsultingsolutions.com/', scope: 'Whole website' },
  { url: 'https://activating-wealth.com/', scope: 'Whole website' },
  { url: 'https://www.asimolfetta.it/', scope: 'Whole website' },
  { url: 'https://studioagevolazioni.com/', scope: 'Edited some pages' },
  { url: 'https://health-reporter.com/', scope: 'Whole website' },
  { url: 'https://gesundheits-waechter.de/', scope: 'Whole website' },
  { url: 'https://sardegnadocce.it/', scope: 'Edited some pages' },
  { url: 'https://2bizconsulting.com/', scope: 'Few Changes' },
  { url: 'https://eredeti-kamagra.com/', scope: 'Whole website' },
  { url: 'https://eletkorellenorzes.com/', scope: 'Whole website' },
  { url: 'https://samopouzdan.com/', scope: 'Whole website' },
  { url: 'https://mega-otvorenje.com/', scope: 'Whole website' },
  { url: 'https://www.mcbridecorp06.com/', scope: 'Whole website' },
  { url: 'https://jointlyhealing.com/', scope: 'Few Changes' },
  { url: 'https://springgreen-lyrebird-240106.hostingersite.com/', scope: 'Whole website' },
]

export function WebProjects() {
  return (
    <article className="relative border-t border-border py-20 md:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-primary reveal">
          <span>04 — WEB & CONSULTING</span>
        </div>
        
        <h3 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl reveal">
          BHA & FREELANCE PROJECTS
        </h3>
        
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground reveal">
          A comprehensive registry of client websites built, scaled, and optimized. From full architecture and e-commerce setups to targeted technical audits and feature integrations.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/40 reveal">
          {/* Table Header / Window Chrome */}
          <div className="flex items-center justify-between border-b border-border bg-surface-2 px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-ember/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
              </div>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground hidden sm:block">
              SELECT * FROM projects WHERE type='web'
            </span>
            <span className="font-mono text-[10px] text-primary flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-node" />
              {WEB_PROJECTS.length} RESULTS
            </span>
          </div>

          {/* Table Content */}
          <div className="flex flex-col max-h-[600px] overflow-y-auto">
            {/* Column Headers (Desktop) */}
            <div className="hidden sm:grid sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_3fr_1.5fr] gap-4 px-6 py-3 border-b border-border bg-surface/50 font-mono text-[10px] tracking-widest text-muted-foreground sticky top-0 backdrop-blur-md z-10">
              <div>STATUS</div>
              <div>PROJECT DOMAIN</div>
              <div>SCOPE</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col divide-y divide-border">
              {WEB_PROJECTS.map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="cta"
                  className="group grid grid-cols-1 gap-2 px-6 py-4 transition-colors hover:bg-primary/5 sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_3fr_1.5fr] sm:gap-4 sm:items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 ring-2 ring-emerald-400/20" />
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground group-hover:text-emerald-400 transition-colors">
                      ONLINE
                    </span>
                  </div>

                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="font-mono text-xs text-foreground truncate group-hover:text-primary transition-colors">
                      {project.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    </span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>

                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground/80">
                    {project.scope.toUpperCase()}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </article>
  )
}
