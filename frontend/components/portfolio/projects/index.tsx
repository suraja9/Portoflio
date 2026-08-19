import { Logistics } from './logistics'
import { CourierBoy } from './courierboy'
import { Attendance } from './attendance'
import { WebProjects } from './web-projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative pt-24 pb-12">
      {/* Section Header */}
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 mb-12">
        <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground reveal">
          <span>02</span>
          <span className="h-px w-8 bg-border-strong" />
          <span className="text-primary">PROJECTS</span>
        </div>
        <h2 className="text-balance text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem] reveal max-w-4xl">
          SELECTED <span className="text-primary">WORK</span>
        </h2>
        <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground reveal text-pretty">
          A showcase of production systems, digital products, and client websites I have architected and developed.
        </p>
      </div>

      {/* Main Complex Projects */}
      <Logistics />
      <CourierBoy />
      <Attendance />

      {/* Web & Consulting Projects */}
      <WebProjects />
    </section>
  )
}
