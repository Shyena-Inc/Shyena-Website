import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { pageMetadata, JsonLd, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "SecYourFlow",
  description:
    "SecYourFlow is a private security workflow project by Shyena Technologies. Contact the team to request a demonstration.",
  path: "/projects/secyourflow",
});

const capabilities = [
  "Asset inventory",
  "Vulnerability management",
  "Threat context",
  "Risk scoring",
  "Compliance mapping",
];

export default function SecYourFlowPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "SecYourFlow", path: "/projects/secyourflow" },
        ])}
      />
      <PageHeader
        eyebrow="Project · Security workflow"
        title={
          <>
            A connected view of{" "}
            <span className="text-primary">security work.</span>
          </>
        }
        description="SecYourFlow is a private security workflow project designed to bring security assets, findings, and follow-up into a clearer view."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-8">
          <div>
            <BrowserMockup
              className="relative bg-card/90 shadow-xl"
              url="secyourflow.vercel.app"
            >
              <Image
                src="/brand/secyourflow-dashboard-preview.png"
                alt="Illustrative SecYourFlow sample workspace showing example assets and security findings."
                width={705}
                height={827}
                className="block h-auto w-full"
              />
              <p className="border-t px-4 py-3 text-xs text-muted-foreground">
                Illustrative sample workspace data.
              </p>
            </BrowserMockup>
            <p className="mt-3 text-xs text-muted-foreground">
              This project is available privately by demonstration.
            </p>
          </div>
          <div>
            <Badge variant="secondary" className="rounded-full">
              Available privately
            </Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Project overview
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              SecYourFlow brings together a working view of assets and security
              findings, with contextual information to help teams organize their
              follow-up.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
              {capabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border bg-card px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 rounded-full">
              <a href="mailto:whois@shyenasec.com?subject=SecYourFlow%20demo%20request">
                Request a demonstration <ArrowUpRightIcon className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="mt-2 rounded-full">
              <Link href="/projects">
                <ArrowLeftIcon className="size-4" /> All projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
