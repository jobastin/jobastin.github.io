import type { ReactNode } from 'react'
import { cn } from 'cn'

type SectionProps = {
  id: string
  label: string
  children: ReactNode
  size?: '3xl' | '4xl'
  tone?: 'default' | 'muted'
}

export function Section({
  id,
  label,
  children,
  size = '4xl',
  tone = 'default',
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        'px-6 py-16 md:py-24',
        tone === 'muted' && 'bg-neutral-50',
      )}
    >
      <div
        className={cn(
          'mx-auto',
          size === '4xl' ? 'max-w-4xl' : 'max-w-3xl',
        )}
      >
        <h2
          id={`${id}-heading`}
          className="mb-8 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 md:mb-12"
        >
          — {label}
        </h2>
        {children}
      </div>
    </section>
  )
}
