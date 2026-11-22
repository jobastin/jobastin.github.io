import { Job } from '@/components/Job'
import { jobs } from '@/data/content'

export function Experience() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[7px] top-2 w-px bg-neutral-200"
      />
      <ol className="m-0 list-none space-y-10 p-0">
        {jobs.map((job) => (
          <Job key={`${job.company}-${job.role}`} job={job} />
        ))}
      </ol>
    </div>
  )
}
