import { Cloud, Code2, Database, Layers, Server, Users } from 'lucide-react'
import { skillNote, skills } from '@/data/content'

const icons = {
  Languages: Code2,
  'Frameworks and UI': Layers,
  'Backend and APIs': Server,
  'Data and storage': Database,
  'Cloud, DevOps and tools': Cloud,
  'Leadership and collaboration': Users,
} as const

export function Skills() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((group) => {
          const Icon = icons[group.label as keyof typeof icons] ?? Code2

          return (
            <div
              key={group.label}
              className="rounded-xl border border-neutral-200 p-5 transition-colors hover:border-neutral-300"
            >
              <div className="mb-3 flex items-center gap-3">
                <Icon
                  className="h-4 w-4 shrink-0 text-neutral-500"
                  aria-hidden="true"
                />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-neutral-500">
        {skillNote}
      </p>
    </div>
  )
}
