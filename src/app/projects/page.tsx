import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Explore FlagForge, a public cybersecurity challenge platform, and Shyena projects SAFE and SecYourFlow, for security workflows and endpoint AI protection.",
  path: "/projects",
});

const projects = [
  {
    title: "FlagForge",
    status: "Public",
    description:
      "A capture-the-flag platform with challenges across web security, cryptography, reverse engineering, and forensics.",
    logo: "/brand/flagforge-logo.png",
    alt: "FlagForge logo",
    href: "/projects/flagforge",
  },
  {
    title: "SAFE",
    status: "Open source",
    description:
      "Endpoint AI detection and response. Prompts to AI services are checked on the device, and risky ones are stopped before they leave.",
    logo: "/safe/safe-logo.png",
    alt: "SAFE logo",
    href: "/projects/safe",
  },
  {
    title: "SecYourFlow",
    status: "Available privately",
    description:
      "A private security workflow project. Contact Shyena to ask about a demonstration.",
    logo: "/brand/secyourflow-logo.png",
    alt: "SecYourFlow logo",
    href: "/projects/secyourflow",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Tools for practice and{" "}
            <span className="text-primary">security work.</span>
          </>
        }
        description="Projects by Shyena Technologies Pvt. Ltd., built around practical cybersecurity learning and security workflows."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={index * 0.1}>
              <SpotlightCard className="h-full rounded-2xl p-6 sm:p-8">
                <Link
                  href={project.href}
                  className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <div className="flex min-h-56 items-center justify-center rounded-xl border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8">
                    <Image
                      src={project.logo}
                      alt={project.alt}
                      width={180}
                      height={180}
                      className="size-28 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="rounded-full">
                        {project.status}
                      </Badge>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight">
                        {project.title}
                      </h2>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
