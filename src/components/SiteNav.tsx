import { nav, site } from '@/data/content'

export function SiteNav() {
  return (
    <header className="border-b border-neutral-100">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <a
          href="#main"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-900"
        >
          {site.firstName} {site.lastName}
        </a>
        <ul className="flex flex-wrap items-center justify-between gap-x-5 gap-y-1 sm:justify-end sm:gap-x-6">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
