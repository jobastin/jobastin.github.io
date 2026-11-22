import { Terminal } from 'lucide-react'
import { site } from '@/data/content'

function TerminalCard() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full max-w-[260px] shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-4 font-mono text-[11px] leading-relaxed text-neutral-400 shadow-2xl shadow-neutral-300/50"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 truncate text-[10px] text-neutral-500">
          adhin@dev — zsh
        </span>
      </div>

      <div className="mt-4 space-y-1.5">
        <p>
          <span className="text-emerald-400">➜</span>{' '}
          <span className="text-sky-400">~</span> whoami
        </p>
        <p className="text-neutral-200">adhin babu</p>
        <p>
          <span className="text-emerald-400">➜</span>{' '}
          <span className="text-sky-400">~</span> role
        </p>
        <p className="text-neutral-200">full stack &amp; mobile</p>
        <p>
          <span className="text-emerald-400">➜</span>{' '}
          <span className="text-sky-400">~</span> stack
        </p>
        <p className="text-neutral-200">react · .net · flutter</p>
        <p>
          <span className="text-emerald-400">➜</span>{' '}
          <span className="text-sky-400">~</span> status
        </p>
        <p className="text-neutral-200">
          open to work
          <span className="terminal-cursor text-emerald-400">_</span>
        </p>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-neutral-500">
        <span>kitchener, on</span>
        <span className="text-emerald-400">● online</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 pb-10 pt-12 md:pt-16">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-start md:gap-10">
          <TerminalCard />

          <div className="w-full min-w-0 max-w-xl space-y-2 text-left md:flex-1">
            <h1 className="break-words text-2xl font-extrabold tracking-tight text-neutral-950 md:text-3xl lg:text-4xl">
              {site.firstName} {site.lastName}
            </h1>

            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 md:text-xs">
              <Terminal className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>// {site.role}</span>
            </p>

            <div className="mt-2 font-mono text-[10px] leading-relaxed sm:text-xs">
              <pre className="whitespace-pre-wrap break-words">
                <span className="text-purple-500">var</span>{' '}
                <span className="text-blue-500">coordinates</span>
                <span className="text-neutral-400">: [</span>
                {'\n  '}
                <span className="text-amber-500">"email"</span>
                <span className="text-neutral-400">: </span>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sky-500 underline underline-offset-2 transition-colors hover:text-sky-600"
                >
                  "{site.email}"
                </a>
                <span className="text-neutral-400">,</span>
                {'\n  '}
                <span className="text-amber-500">"github"</span>
                <span className="text-neutral-400">: </span>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-sky-500 underline underline-offset-2 transition-colors hover:text-sky-600"
                >
                  "{site.githubLabel}"
                </a>
                <span className="text-neutral-400">,</span>
                {'\n  '}
                {/* <span className="text-amber-500">"location"</span>
                <span className="text-neutral-400">: </span>
                <span className="break-words text-neutral-900">
                  "{site.location}"
                </span>
                <span className="text-neutral-400">,</span> */}
                {']'}
              </pre>
            </div>

            <p className="pt-3 text-sm leading-relaxed text-neutral-600">
              {site.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
