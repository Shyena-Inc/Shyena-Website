import Link from "next/link";
import { ArrowUpRightIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ResizableNavbar } from "@/components/velora/resizable-navbar";
import { siteConfig } from "@/lib/site-config";

const links = [
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Hardware VAPT", href: "/#service-hardware-vapt" },
      { label: "OT / ICS assessment", href: "/#service-ot-ics" },
      { label: "IoT security", href: "/#service-iot-security" },
      { label: "SCADA network testing", href: "/#service-scada-testing" },
      { label: "Red team operations", href: "/#service-red-team" },
      { label: "Risk advisory", href: "/#service-risk-advisory" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Company", href: "/about" },
  { label: "Insights", href: "/blog" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="flex min-w-0 items-center font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <span className="flex flex-col text-sm leading-tight">
        Shyena Technologies
        <span className="mt-0.5 text-xs font-normal text-muted-foreground">
          Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border/70 bg-muted/70 text-muted-foreground backdrop-blur">
        <div className="mx-auto flex min-h-8 max-w-7xl items-center justify-between gap-3 px-4 py-1 text-[10px] font-medium tracking-wide sm:text-xs lg:px-8">
          <p className="min-w-0 truncate">
            Based in Lalitpur, Nepal <span aria-hidden className="px-1.5">/</span>
            Serving Nepal and international markets
          </p>
          <a
            className="hidden shrink-0 items-center gap-2 transition-colors hover:text-foreground sm:inline-flex"
            href={`mailto:${siteConfig.email}`}
          >
            <MailIcon aria-hidden="true" className="size-3.5" />
            {siteConfig.email}
          </a>
        </div>
      </div>
      <ResizableNavbar
        items={links}
        logo={<Logo />}
        threshold={28}
        maxWidth={1280}
        compactWidth={960}
        label="Main navigation"
        className="px-0"
        cta={
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="h-9 rounded-none px-3 sm:px-4">
              <Link href="/contact">
                Discuss an assessment <ArrowUpRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        }
      />
    </div>
  );
}
