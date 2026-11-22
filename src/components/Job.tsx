import { cn } from 'cn'
import type { Job as JobType, JobPoint } from '@/data/content'

function Point({ point }: { point: JobPoint }) {
  if (typeof point === 'string') {
    return <>{point}</>
  }

  return (
    <>
      {point.map((segment, index) =>
        segment.href ? (
          <a
            key={index}
            href={segment.href}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 underline decoration-neutral-300 underline-offset-2 transition-colors hover:decoration-neutral-900"
          >
            {segment.text}
          </a>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  )
}

export function Job({ job }: { job: JobType }) {
  return (
    <li className="relative pl-8">
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-[7px] z-10 h-[15px] w-[15px] rounded-full border-2',
          job.current
            ? 'border-neutral-900 bg-neutral-900'
            : 'border-neutral-300 bg-white',
        )}
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-base font-semibold text-neutral-900">
          {job.role}
        </h3>
        <span
          className={cn(
            'font-mono text-xs font-semibold sm:shrink-0 sm:whitespace-nowrap',
            job.current ? 'text-neutral-900' : 'text-neutral-400',
          )}
        >
          {job.period}
        </span>
      </div>

      <p className="mt-1 text-sm text-neutral-500">
        {job.companyUrl ? (
          <a
            href={job.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            {job.company}
          </a>
        ) : (
          <span>{job.company}</span>
        )}
        {job.location ? (
          <>
            {' '}
            <span className="text-neutral-300" aria-hidden="true">
              —
            </span>{' '}
            {job.location}
          </>
        ) : null}
      </p>

      {job.summary ? (
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {job.summary}
        </p>
      ) : null}

      <ul className="mt-3 max-w-3xl space-y-1.5">
        {job.points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600"
          >
            <span
              aria-hidden="true"
              className="mt-1.5 shrink-0 font-mono text-xs text-neutral-300"
            >
              -
            </span>
            <span>
              <Point point={point} />
            </span>
          </li>
        ))}
      </ul>
    </li>
  )
}
