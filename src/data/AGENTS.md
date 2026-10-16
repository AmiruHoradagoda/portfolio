# Portfolio content structure

Keep data modules focused on one subject. Do not turn `profile.ts` back into a
combined data store or put TypeScript type definitions in content files.

```text
src/data/
  index.ts              Public content exports for pages/components
  profile.ts            Personal identity, biography, contact and social links
  education.ts          Education entries
  experience.ts         Professional experience and contributions
  certifications.ts     Certifications and activities
  skills.ts             Skill tab content (exported as skillTabs)
  projects/
    index.ts            Explicit project registration and display order
    <project-name>.ts   One complete project per file
src/types/project.ts    Project and case-study type definitions
```

## Adding a project

1. Read `src/types/project.ts` and a relevant existing project file. For a concise
   case study, use `projects/pharmacy.ts` as a reference. Preserve other projects.
2. Create `src/data/projects/<project-name>.ts` using a lowercase, hyphenated
   filename. Export one named constant typed as `Project`. Use a unique, stable
   slug: it determines `/projects/<slug>/` and is independent of the filename.
3. Import and register that constant exactly once in `projects/index.ts`. Array
   order controls project listing order and the homepage's first three projects.
   Do not auto-discover or alphabetically sort projects.
4. Reuse actual assets under `public/projects/<asset-folder>/`. In data, use
   `projects/<asset-folder>/...` without `public/` or a leading slash. Match exact
   filename casing for Linux/GitHub Pages. Preserve existing asset folders; they
   do not have to match the route slug.
5. Verify implementation claims against the provided source code and user
   instructions. Do not invent integrations, metrics, screenshots, employment
   attribution, payment processing, production deployment, or security guarantees.
6. Build and run the checks in the root `AGENTS.md`. The data registration tests
   catch omitted project modules and duplicate slugs. Also inspect generated
   image URLs and ensure the new route and existing pages still build.

## Case-study conventions

Use the existing `Overview`, `Main Functional Requirements`, and
`Architecture & Design` tabs through `EngineeringCaseStudy.astro`.

- `background`: short introduction explaining the problem and solution.
- `overviewSections`: explicit overview headings, optional text, and diagrams.
  C1/C2 views belong here. Do not call ordinary flow diagrams C4 diagrams.
  Use an empty `diagrams` array for text-only sections; do not invent a C2 asset.
- `functionalRequirements`: readable requirements with stable, unique IDs.
- `dataModelDescription` / `dataModelDiagrams`: the actual ER/document model.
- `systemDesigns`: concise architecture topics explaining implementation and
  purpose. Prefer `content` for paragraphs rather than repeating requirements.
- `oopDesignPatterns`: only patterns/idioms grounded in code. Briefly explain
  `where`, `howImplemented`, and `why`; avoid padding the list with generic usage.
- `architectureHeadings`: optional plain subsection labels, without A/B/C prefixes.

Prefer these explicit collections over legacy `designPatterns` and `diagrams`.
Keep legacy support for existing projects. Do not add separate evidence or
limitations sections by default; use them only when requested or appropriate to
the supplied content. Do not generate diagrams or change shared renderers just
to fill optional sections.

## Starting template

Replace editorial placeholders with verified project content before registering.
Add image objects only when those files exist; the project visual supports an
empty `media` list. This example intentionally contains no fabricated asset path.

```ts
import type { Project } from "../../types/project";

export const newProject: Project = {
  slug: "new-project",
  title: "Project name",
  year: "Year",
  type: "Project type",
  status: "Status supplied by the user",
  role: "Accurate contribution or team role",
  summary: "One-sentence problem and result.",
  description: "A concise description of the implemented application.",
  stack: [],
  stackGroups: [],
  features: [],
  challenges: [],
  links: [],
  media: [],
  details: {
    background: "The problem, intended users, and implemented solution.",
    overviewSections: [],
    functionalRequirements: [
      {
        id: "NP-FR-01",
        area: "Capability",
        requirement: "A specific, verified user-facing capability.",
        priority: "Implemented",
      },
    ],
    dataModelDiagrams: [],
    systemDesigns: [
      {
        title: "Main architecture",
        content: "How the components interact and why this structure is useful.",
      },
    ],
    oopDesignPatterns: [],
  },
};
```

Runtime imports in data index files use explicit `.ts` extensions so both Astro
and the Node data tests can load them. Project modules import shared types using
`import type`; never import the registry or data barrel from a project module.
If a displayed technology lacks an icon, add a verified mapping to
`src/utils/techLogos.ts` instead of embedding an icon URL in the project data.
