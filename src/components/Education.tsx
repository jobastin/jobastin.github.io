import { Award, BookOpen, ExternalLink } from 'lucide-react'
import { certifications, education, publication } from '@/data/content'

export function Education() {
  return (
    <div className="space-y-12">
      <ol className="space-y-4">
        {education.map((entry) => (
          <li
            key={entry.qualification}
            className="rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-300"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-base font-semibold text-neutral-900">
                {entry.qualification}
              </h3>
              <span className="font-mono text-xs font-semibold text-neutral-400 sm:shrink-0 sm:whitespace-nowrap">
                {entry.period}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
              {entry.result}
              {entry.details ? ` — ${entry.details}` : ''}
            </p>
          </li>
        ))}
      </ol>

      <div>
        <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
          Certifications
        </h3>
        <ul className="flex flex-wrap gap-1.5">
          {certifications.map((certification) => (
            <li
              key={certification.name}
              className="flex items-baseline gap-2 rounded-md border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
            >
              {certification.name}
              <span className="font-mono text-[10px] text-neutral-400">
                {certification.year}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />
          Publication
        </h3>
        <div className="rounded-xl border border-neutral-200 p-5">
          <p className="text-sm leading-relaxed text-neutral-600">
            “{publication.title},”{' '}
            <em className="text-neutral-500">{publication.venue}</em>,{' '}
            {publication.year}.
          </p>
          <a
            href={publication.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Read the paper
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </div>
  )
}
