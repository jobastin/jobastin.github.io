import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/data/content'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group min-w-0 rounded-xl border border-white/50 bg-white/50 p-5 shadow-lg shadow-neutral-200/50 backdrop-blur-md transition-all duration-300 hover:border-white/70 hover:bg-white/60 hover:shadow-xl md:p-6"
    >
      <div className="mb-3 flex min-w-0 items-start justify-between gap-3">
        <h3 className="min-w-0 break-words text-base font-semibold leading-snug text-neutral-900 group-hover:text-neutral-950">
          {project.title}
        </h3>
        <ExternalLink
          className="mt-0.5 h-4 w-4 shrink-0 text-neutral-300 transition-colors group-hover:text-neutral-500"
          aria-hidden="true"
        />
      </div>

      <p className="mb-3 break-words text-sm leading-relaxed text-neutral-500">
        {project.description}
      </p>

      <p className="mb-3 break-all font-mono text-[11px] text-neutral-400 group-hover:text-neutral-600">
        {project.href.replace(/^https?:\/\//, '')}
      </p>

      {project.period ? (
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
          {project.period}
        </p>
      ) : null}

      {project.tags.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="h-auto whitespace-normal break-words rounded border-neutral-100 bg-neutral-50 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-500"
            >
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
