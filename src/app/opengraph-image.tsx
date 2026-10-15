import { ogCard, ogSize } from "@/lib/og-card";
import { siteConfig } from "@/lib/site-config";

// Prerender the PNG at build time so it ships as a static asset (output: export).
export const dynamic = "force-static";
export const size = ogSize;
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return ogCard({
    title: "Cybersecurity for",
    accent: "connected systems.",
    description:
      "Security services, products, and practical learning from Shyena Technologies in Nepal.",
    chips: ["Hardware & firmware", "IoT & connected devices", "OT / ICS"],
  });
}
