import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { MacbookScroll } from "@/components/velora/macbook-scroll";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FlagForge CTF",
  description:
    "FlagForge is a cybersecurity capture-the-flag platform for practicing web security, cryptography, reverse engineering, and forensics.",
  path: "/projects/flagforge",
});

export default function FlagForgePage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Project · Cybersecurity learning"
        title={
          <>
            Practice security through{" "}
            <span className="text-primary">hands-on challenges.</span>
          </>
        }
        description="FlagForge is a capture-the-flag platform for exploring cybersecurity concepts through practical challenges."
      />
      <section className="relative isolate overflow-hidden border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-3 sm:px-6">
          <div className="h-[30rem] @container-size sm:h-[36rem]">
            <MacbookScroll
              title="FlagForge · cybersecurity challenges for hands-on practice"
              badge={
                <Image
                  src="/brand/flagforge-logo.png"
                  alt="FlagForge logo"
                  width={44}
                  height={44}
                  className="size-8 object-contain"
                />
              }
            >
              <div
                role="img"
                aria-label="Illustrative FlagForge challenge overview showing four challenge areas."
                className="flex size-full flex-col bg-white p-[5cqw] text-slate-950"
              >
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-[2cqw]">
                  <div className="flex items-center gap-[2cqw]">
                    <Image
                      src="/brand/flagforge-logo.png"
                      alt=""
                      width={44}
                      height={44}
                      className="size-[7cqw] object-contain"
                    />
                    <div>
                      <p className="text-[2.5cqw] font-semibold">FlagForge</p>
                      <p className="text-[1.7cqw] text-slate-500">Capture the flag</p>
                    </div>
                  </div>
                  <span className="text-[1.7cqw] font-medium uppercase tracking-[0.12em] text-slate-500">
                    Challenge areas
                  </span>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-[2cqw] py-[3cqw]">
                  {["Web security", "Cryptography", "Reverse engineering", "Digital forensics"].map((item, index) => (
                    <div key={item} className="flex items-end border border-slate-200 p-[2.5cqw]">
                      <div>
                        <span className="text-[1.7cqw] font-medium text-slate-500">0{index + 1}</span>
                        <p className="mt-[1cqw] text-[3cqw] font-semibold">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[1.6cqw] text-slate-500">
                  Illustrative overview · visit flagforgectf.com for current platform information
                </p>
              </div>
            </MacbookScroll>
          </div>
        </div>
      </section>
      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_.8fr] lg:gap-16 lg:px-8">
          <div className="space-y-5 text-muted-foreground">
            <Badge variant="secondary" className="rounded-full">
              Public platform
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Challenge areas
            </h2>
            <p className="leading-7">
              FlagForge brings together challenges in web security,
              cryptography, reverse engineering, and forensics. Visit the public
              platform to see the current challenges and available information.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Web security",
                "Cryptography",
                "Reverse engineering",
                "Digital forensics",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border bg-card px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-2 rounded-full">
              <a
                href="https://www.flagforgectf.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit FlagForge <ArrowUpRightIcon className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="ml-2 rounded-full">
              <Link href="/projects">
                <ArrowLeftIcon className="size-4" /> All projects
              </Link>
            </Button>
          </div>
          <SpotlightCard className="rounded-2xl p-6 sm:p-8">
            <div className="flex min-h-56 items-center justify-center rounded-xl border bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8">
              <Image
                src="/brand/flagforge-logo.png"
                alt="FlagForge logo"
                width={180}
                height={180}
                className="size-32 object-contain"
              />
            </div>
            <h2 className="mt-5 font-semibold">Project details</h2>
            <dl className="mt-3 divide-y divide-border text-sm">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Availability</dt>
                <dd>Public</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Platform</dt>
                <dd>Capture the flag</dd>
              </div>
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted-foreground">Website</dt>
                <dd>
                  <a
                    className="text-primary hover:underline"
                    href="https://www.flagforgectf.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    flagforgectf.com
                  </a>
                </dd>
              </div>
            </dl>
          </SpotlightCard>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
