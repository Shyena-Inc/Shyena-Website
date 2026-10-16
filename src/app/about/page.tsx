import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CpuIcon,
  FactoryIcon,
  GraduationCapIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { WavyBackground } from "@/components/velora/wavy-background";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { pageMetadata, JsonLd, publisher } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "About Shyena Technologies",
  description:
    "Company information for Shyena Technologies Pvt. Ltd., a cybersecurity and technology company based in Lalitpur, Nepal, serving organizations in Nepal and international markets.",
  path: "/about",
});

const focusAreas = [
  {
    icon: <CpuIcon className="size-5" />,
    title: "Connected hardware",
    body: "Hardware, firmware, and device security assessments.",
  },
  {
    icon: <FactoryIcon className="size-5" />,
    title: "Operational technology",
    body: "Security assessments for OT, ICS, and SCADA environments.",
  },
  {
    icon: <ShieldCheckIcon className="size-5" />,
    title: "Security products",
    body: "Projects that support security workflows and hands-on practice.",
  },
  {
    icon: <GraduationCapIcon className="size-5" />,
    title: "Practical learning",
    body: "Cybersecurity learning through the public FlagForge platform.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <JsonLd
        data={{ ...publisher, "@type": "Organization", name: siteConfig.name }}
      />
      <SiteHeader />
      <PageHeader
        eyebrow="About Shyena"
        title={
          <>
            Security services and products,{" "}
            <span className="text-primary">built in Nepal.</span>
          </>
        }
        description="We assess software, connected devices, and operational environments, alongside products for security work and practical learning."
      />

      <section className="relative isolate overflow-hidden border-y border-border bg-zinc-950 py-12 text-white sm:py-16">
        <WavyBackground
          waves={4}
          speed="slow"
          blur={22}
          opacity={0.22}
          className="opacity-90"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/65">
            Based in Lalitpur, Nepal
          </p>
          <p className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            Security work starts with understanding the system and its operating context.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-[1.1fr_.9fr] lg:gap-20 lg:px-8">
          <BlurFade direction="right">
            <div className="max-w-2xl space-y-5 text-muted-foreground">
              <p className="text-sm font-medium text-primary">Our work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Assessment, products, and practical learning.
              </h2>
              <p className="leading-7">
                Our services cover hardware, connected devices, industrial
                control environments, red team exercises, and security risk
                advisory. We also work on products for hands-on learning and
                security workflows.
              </p>
              <p className="leading-7">
                FlagForge and SecYourFlow reflect those interests: one offers
                cybersecurity challenges for practice, while the other is a
                private project for organizing security work.
              </p>
              <Button asChild className="mt-2 rounded-full">
                <Link href="/contact">
                  Talk with Shyena <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
          <div className="grid items-stretch gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <BlurFade key={area.title} delay={index * 0.06} className="h-full">
                <SpotlightCard
                  className={`h-full rounded-none p-5 ${
                    area.title === "Operational technology"
                      ? "border-primary/20 bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  <span
                    className={`mb-4 grid size-10 place-items-center rounded-none border ${
                      area.title === "Operational technology"
                        ? "border-white/25 bg-white/10"
                        : "border-primary/20 bg-primary/10 text-primary"
                    }`}
                  >
                    {area.icon}
                  </span>
                  <h3 className="font-semibold">{area.title}</h3>
                  <p
                    className={`mt-2 min-h-12 text-sm leading-6 ${
                      area.title === "Operational technology"
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {area.body}
                  </p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Company information
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-none border bg-border sm:grid-cols-2">
            {[
              ["Legal name", siteConfig.name],
              ["Company registration no.", siteConfig.registration],
              ["PAN no.", siteConfig.pan],
              ["Address", siteConfig.address],
              ["Email", siteConfig.email],
            ].map(([term, value], i, arr) => (
              <div
                key={term}
                className={`bg-card p-5 ${i === arr.length - 1 ? "sm:col-span-2" : ""}`}
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {term}
                </dt>
                <dd className="mt-2 break-words text-sm font-medium">
                  {term === "Email" ? (
                    <a
                      className="text-primary hover:underline"
                      href={`mailto:${value}`}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
