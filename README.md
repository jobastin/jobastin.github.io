# Adhin Babu — portfolio

A single-page portfolio for Adhin Babu, full stack and mobile developer in
Kitchener, Ontario. Built with React, TypeScript, Vite, Tailwind CSS and
shadcn/ui, and deployed to GitHub Pages.

Live site: <https://jobastin.github.io/>

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/vite`)
- shadcn/ui (`Badge`)
- System sans for body text, system mono for labels and metadata

## Local development

```bash
npm install
npm run dev
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts) as typed data:
header details, navigation, jobs, projects, education, certifications,
publication and skills. Update that file rather than the components.

Layout components are in `src/components`:

- `SiteNav` — compact anchor navigation at the top of the page
- `Hero` — terminal card, name, contact code block and introduction
- `Section` — shared mono section label and width
- `Experience` — timeline wrapper
- `Job` — one entry in the experience timeline
- `ProjectCard` — project card with tags
- `Projects` — project grid and GitHub link
- `Education` — qualifications, certifications and publication
- `Skills` — grouped skill cards
- `Footer` — contact links and copyright

## Deployment

The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds on every push to `main` and publishes `dist` with the official GitHub
Pages actions.

1. Create a GitHub repository named `jobastin.github.io` and push this project
   to `main`.
2. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main`, or run the workflow manually from the **Actions** tab.

Because this is a user site (`jobastin.github.io`), the site is served from the
domain root and `base` is `'/'` in [`vite.config.ts`](vite.config.ts).

If you deploy to a project repository instead (for example
`github.com/jobastin/portfolio`), change `base` to `'/portfolio/'` so assets
resolve correctly.

## Design notes

- Single centered column with mono section labels, a terminal-style hero and
  a neutral monochrome palette inspired by the reference layout.
- Experience uses a vertical timeline; projects sit on a soft neutral panel.
- Keyboard focus is always visible, and motion is disabled when
  `prefers-reduced-motion` is set.
- Anchor links (`#experience`, `#skills`, and so on) keep the site compatible
  with static hosting; there is no client-side router.
