/**
 * Single source of truth for external URLs. Override at build time with
 * NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_GITHUB_URL when the real domain and
 * repo are wired up.
 */
export const siteConfig = {
  name: "Shyena Technologies Pvt. Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://shyenasec.com").replace(
    /\/$/,
    "",
  ),
  email: "whois@shyenasec.com",
  address: "Tikathali - 5, Lalitpur, Nepal",
  registration: "403398/83/84",
  pan: "624728049",
  tagline: "Cybersecurity for connected systems",
  description:
    "Shyena Technologies Pvt. Ltd. provides cybersecurity services, security products and practical cybersecurity learning from Lalitpur, Nepal.",
} as const;
