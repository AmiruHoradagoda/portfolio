# Portfolio repository guide

This is an Astro static portfolio. Preserve its existing visual design, routes,
accessibility, and responsive behavior unless the task requests changes.

## Where changes belong

- `src/data/`: portfolio content. Read [src/data/AGENTS.md](src/data/AGENTS.md)
  before adding or editing content, especially a project.
- `src/types/project.ts`: shared project and engineering case-study types.
- `src/components/`: reusable presentation and interactions.
- `src/pages/`: routes and page composition.
- `src/utils/`: asset paths, technology icons, and case-study normalization.
- `public/projects/`: project images and diagrams.

Use `src/data/index.ts` for content imports in pages/components and import types
directly from `src/types/project.ts`. Keep content out of presentation components.

## Validation

Run the production build with `npm run build` (`npm.cmd run build` if PowerShell
blocks `npm.ps1`). Then run `node --experimental-strip-types --test tests/*.test.mjs`.
Page tests read `dist/`, so build first. Report existing unrelated failures rather
than weakening tests or changing unrelated content to make the suite green.

Do not commit, stage, push, or deploy changes unless the user requests it.
