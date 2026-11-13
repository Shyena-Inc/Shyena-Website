# Products update

## Content evidence

- SecYourScan: user-supplied "SecYourScan: know what’s already out there" PDF; verified against https://secyourscan.shyenasec.com on 2026-11-13. Capabilities are paraphrased; no pricing, news, breach totals, response guarantees, or customer metrics are reproduced.
- SecYourFlow: https://secyourflow.shyenasec.com, including the self-hosted deployment, BIA, supplier, risk, NIS2, and AI-control descriptions. Screens from `/screenshots/app/dashboard.webp`, `nis2-bia.webp`, and `nis2-vendors.webp` show a demo organisation with test data.
- FlagForge: https://www.flagforgectf.com/ and `/problems`. Category coverage, hints, submissions, points, leaderboard, and GRC learning come from its public site. No user counts or testimonials are copied.
- SAFE: existing page content retained; routes and product terminology updated.

## Assets

The user supplied SecYourFlow, Shyena, and SecYourScan logos as JPGs. SecYourFlow (stacked and horizontal), SecYourScan, and the horizontal Shyena logo use generated transparent PNG variants. Navy lettering is used in light mode and pale lettering in dark mode, with blue/cyan accents retained. The horizontal Shyena logo replaces the separate company-name text in the header/footer. The original large decorative footer wordmark remains unchanged. FlagForge and SAFE use existing repository logos.

SecYourScan and FlagForge preview images are browser captures of their public interfaces, not reconstructed UI. SecYourScan's capture excludes live index totals. The blue-prism image is generated conceptual supporting photography and is explicitly labelled as such. It is not a product screenshot.

## Design decisions

Preserve the corporate brand: IBM Plex Sans/Mono, existing blue accent and theme tokens. Square panels, left-aligned headings, and static product imagery. DESIGN_VARIANCE 4, MOTION_INTENSITY 2, VISUAL_DENSITY 4. Product cards respond to hover/focus without adding scroll effects. Shared navigation retains its existing interactions.

## Routing

Next.js exports static pages to `out/`. Cloudflare Pages reads `public/_redirects`, copied into `out/_redirects`, to permanently redirect `/projects`, `/projects/`, and `/projects/*` to `/products` equivalents. There are no Next.js server redirects. The mapping includes SAFE. No production deployment is part of this change.

## Validation

- Production static build and repository-wide ESLint pass.
- Chromium: home, product listing, and all four detail pages checked at 375, 768, and 1440 CSS pixels in light and dark themes with reduced motion enabled. Images were explicitly decoded before inspection; no broken images, horizontal overflow, visible em-dashes, duplicate H1s, or page JavaScript errors.
- Keyboard: mobile menu opens with Enter and closes with Escape; product CTA takes focus; the capabilities action reaches its anchor.
- Cloudflare Wrangler Pages local preview parsed the redirect rules and returned HTTP 301 for `/projects`, `/projects/`, and the FlagForge, SecYourFlow, and SAFE old detail URLs.
- Transparent Shyena PNGs have real alpha. Browser checks confirmed that only the correct variant is displayed for each theme and its container background is transparent.
- Taste pre-flight: corporate theme and blue accent retained, square product panels, evidence-based copy reviewed, no fabricated metrics/testimonials, and sample workspace imagery labelled. Forms and unrelated landing-page animations were not changed. No production deployment was performed.
- Final logo pass: 12 combinations across the listing, SecYourFlow, and SecYourScan at 375/1440 pixels in both themes passed image-loading, branding-text removal, correct variant selection, and overflow checks. The large footer TextHoverEffect block was compared verbatim with its original and is unchanged.
- Publishing is blocked: both Git push and GitHub connector branch creation returned HTTP 403. Commits are retained locally on `codex/products-and-brand-update`.
