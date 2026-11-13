/** Product copy: supplied SecYourScan PDF and the products' public sites.
 * See docs/products.md for evidence, asset provenance, and verification notes.
 */
export const products = [
  {
    slug: "secyourscan",
    name: "SecYourScan",
    category: "Breach & exposure monitoring",
    description:
      "Check email and domain exposure. Monitor leaks, internet-facing systems, brand abuse, and supplier risk.",
    logo: "/products/secyourscan-logo.jpg",
    href: "https://secyourscan.shyenasec.com",
  },
  {
    slug: "secyourflow",
    name: "SecYourFlow",
    category: "Self-hosted cyber risk workspace",
    description:
      "Connect assets, vulnerabilities, risk decisions, supplier reviews, and NIS2 work on your own infrastructure.",
    logo: "/products/secyourflow-logo.jpg",
    href: "https://secyourflow.shyenasec.com",
  },
  {
    slug: "flagforge",
    name: "FlagForge",
    category: "Hands-on cybersecurity learning",
    description:
      "Solve security challenges, submit flags, and follow your progress on the leaderboard.",
    logo: "/brand/flagforge-logo.png",
    href: "https://www.flagforgectf.com/",
  },
  {
    slug: "safe",
    name: "SAFE",
    category: "Endpoint AI detection and response",
    description:
      "Check prompts to AI services on the device and stop risky ones before they leave.",
    logo: "/safe/safe-logo.png",
    href: "https://safe-website-flax.vercel.app/",
  },
] as const;
export type Product = (typeof products)[number];
export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)!;
