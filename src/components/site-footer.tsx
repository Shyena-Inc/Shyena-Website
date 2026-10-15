import Link from "next/link";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/velora/text-hover-effect";
import { siteConfig } from "@/lib/site-config";

const groups = [
  {
    title: "Services",
    links: [
      { text: "Hardware VAPT", href: "/#service-hardware-vapt" },
      { text: "OT / ICS assessment", href: "/#service-ot-ics" },
      { text: "IoT security", href: "/#service-iot-security" },
      { text: "SCADA testing", href: "/#service-scada-testing" },
      { text: "Red team operations", href: "/#service-red-team" },
      { text: "Risk advisory", href: "/#service-risk-advisory" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About Shyena", href: "/about" },
      { text: "Contact", href: "/contact" },
      { text: "Insights", href: "/blog" },
    ],
  },
  {
    title: "Projects",
    links: [
      { text: "FlagForge", href: "/projects/flagforge" },
      { text: "SecYourFlow", href: "/projects/secyourflow" },
      { text: "All projects", href: "/projects" },
    ],
  },
] as const;

const headingId = (title: string) =>
  `footer-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30 text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-4 py-12 md:grid-cols-5 md:py-16 lg:grid-cols-5 lg:px-8">
        <div className="col-span-2 md:col-span-2">
          <Link
            href="/"
            className="flex w-fit items-center font-semibold tracking-tight"
          >
            <span className="text-sm">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Security assessments for hardware, connected devices, and
            operational technology. Based in Lalitpur, Nepal.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex w-fit items-center gap-2 transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4" /> {siteConfig.email}
            </a>
            <span className="inline-flex max-w-sm items-start gap-2 text-muted-foreground">
              <MapPinIcon className="mt-0.5 size-4 shrink-0" />
              {siteConfig.address}
            </span>
          </div>
          <Button
            asChild
            className="mt-5 rounded-none"
            size="sm"
            variant="outline"
          >
            <Link href="/contact">
              Discuss an engagement <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        {groups.map((group) => (
          <nav
            key={group.title}
            aria-labelledby={headingId(group.title)}
            className="min-w-0"
          >
            <h2
              id={headingId(group.title)}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {group.links.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-8 lg:px-8">
        <TextHoverEffect
          text="shyena"
          drawDuration={2.2}
          className="mx-auto max-w-7xl font-black tracking-[-0.06em]"
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-muted-foreground lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
