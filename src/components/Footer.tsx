import { site } from '@/data/content'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mb-10 border-t border-neutral-100 px-6 py-8 text-center">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em]">
        <a
          href={`mailto:${site.email}`}
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          Email
        </a>
        <span className="text-neutral-300" aria-hidden="true">
          /
        </span>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-500 transition-colors hover:text-neutral-900"
        >
          GitHub
        </a>
      </div>
      <p className="font-mono text-[11px] text-neutral-400">
        Designed and developed by {site.firstName} {site.lastName} ©{' '}
        {currentYear} — Built with React, Vite and Tailwind CSS.
      </p>
    </footer>
  )
}
