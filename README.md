# Shyena Technologies website

Corporate website for Shyena Technologies Pvt. Ltd., built on the Velora UI Next.js template. The website uses Velora's header, footer, page headers, bento cards, spotlight cards, browser mockup, motion primitives, and theme system, adapted for Shyena's services and projects.

## Local setup

1. Install Node.js and pnpm.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the Google Analytics ID when ready. Add a Formspree form ID to enable contact submissions; until then, the page gives visitors the company email address.
4. Run `pnpm install` and `pnpm dev`.

The site is configured for static export. The contact form therefore posts directly to Formspree and does not depend on a Next.js server route. See `docs/blogging.md` for the Pages CMS workflow.

## Site routes

- `/` company landing page
- `/about` company profile and registration information
- `/projects` projects overview
- `/projects/flagforge` FlagForge information and public site link
- `/projects/secyourflow` private product overview and demo inquiry
- `/contact` inquiry form and direct contact details
- `/blog` and `/blog/[slug]` editorial content
- `/privacy` and `/terms` review drafts, excluded from indexing until approved

## Commands

- `pnpm dev` starts the local site.
- `pnpm lint` checks source files.
- `pnpm build` validates and exports the static site into `out/`.

## Agent skills

- `taste-SKILL.md` (project home) is mandatory reading before every agent task. `AGENTS.md` and `CLAUDE.md` both enforce this: declare the one-line Design Read, do the work, then run the skill's Final Pre-Flight Check.

## Configuration

The public site URL defaults to `https://shyenasec.com`. Google Analytics is only loaded when a valid `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. Do not commit `.env.local` or other secret files.

The privacy and terms pages are explicitly marked as review drafts. Obtain Legal approval and replace the draft content before removing `noindex` or publishing those pages as final policies.

## License

The Velora UI source remains under the MIT license in `LICENSE`. This website's Shyena-specific copy, logos, and project assets belong to their respective owners.
