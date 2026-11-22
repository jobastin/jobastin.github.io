import { ArrowUpRight } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { projects, site } from '@/data/content'

export function Projects() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-10 flex justify-center md:mt-12">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white/50 px-6 py-3 font-mono text-xs uppercase tracking-wide text-neutral-700 backdrop-blur-md transition-colors hover:border-white/90 hover:bg-white/70 md:w-auto"
        >
          <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          View more on GitHub
        </a>
      </div>
    </div>
  )
}
