import { ProjectsSection } from '@/components/portfolio/projects'

export const metadata = {
  title: 'Projects | Suraj Ali',
  description: 'A showcase of production systems, digital products, and client websites I have architected and developed.',
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen pt-12">
      <ProjectsSection />
    </main>
  )
}
