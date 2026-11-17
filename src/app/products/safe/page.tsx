import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowUpRightIcon,
  ClipboardCheckIcon,
  EyeOffIcon,
  FileLockIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LockIcon,
  MonitorIcon,
  ScanSearchIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { AnimatedTabs } from "@/components/velora/animated-tabs";
import { BlurFade } from "@/components/velora/blur-fade";
import { pageMetadata, JsonLd, breadcrumbs } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "SAFE",
  description:
    "SAFE is an endpoint AI security agent designed to inspect AI requests and help prevent sensitive information from leaving a device.",
  path: "/products/safe",
});

const safeWebsite = "https://safe-website-flax.vercel.app/";

const steps = [
  {
    title: "Capture",
    body: "The agent takes the connection at the network layer. Only AI services are opened.",
  },
  {
    title: "Inspect",
    body: "Fifteen request formats are parsed and 23 categories are checked, including screenshots and documents.",
  },
  {
    title: "Decide",
    body: "Findings are scored by category and origin into allow, warn, or block.",
  },
  {
    title: "Stop",
    body: "The request ends on the live connection, and the user is told why and whom to ask.",
  },
];

const platform = [
  {
    Icon: MonitorIcon,
    title: "Endpoint agent",
    body: "Runs on the endpoint and is designed to inspect supported AI traffic from browsers, desktop apps, and terminals.",
  },
  {
    Icon: ScanSearchIcon,
    title: "Detection engine",
    body: "Rules where the format is fixed, models where it is not. Vendor keys are checked with real checksums; personal data uses Presidio and spaCy.",
  },
  {
    Icon: SlidersHorizontalIcon,
    title: "Policy and risk",
    body: "One action per detector. Policy is published from the console, Ed25519-signed, and verified on every device.",
  },
  {
    Icon: LayoutDashboardIcon,
    title: "Management console",
    body: "Activity flow, AI agent inventory, findings, and endpoints, with roles and an audit log. The console is designed to receive metadata without prompt text.",
  },
  {
    Icon: LockIcon,
    title: "Evidence vault",
    body: "Prompts kept for incident response are sealed on the device, encrypted to the incident response key before they are stored.",
  },
  {
    Icon: ClipboardCheckIcon,
    title: "Governance mapping",
    body: "Controls mapped to ISO/IEC 42001, NIST AI RMF, ISO 27001, GDPR, OWASP, and ATLAS, with event counts as evidence.",
  },
];

const privacy = [
  {
    Icon: EyeOffIcon,
    title: "Focused on AI traffic",
    body: "The agent is designed to inspect AI traffic rather than unrelated application traffic.",
  },
  {
    Icon: ScanSearchIcon,
    title: "Metadata in event logs",
    body: "Events record metadata such as the decision, data categories, and source application.",
  },
  {
    Icon: FileLockIcon,
    title: "Evidence sealed on device",
    body: "Encrypted before it is stored anywhere, and every view of it is logged.",
  },
  {
    Icon: KeyRoundIcon,
    title: "Signed, verified policy",
    body: "Devices retain the last verified policy when an updated policy cannot be verified.",
  },
];

const compareRows = [
  {
    aspect: "Sees desktop apps, IDEs, and terminals",
    extension: "No",
    gateway: "If routed through it",
    agent: "For supported traffic",
  },
  {
    aspect: "Works off the company network",
    extension: "Yes",
    gateway: "Depends on routing",
    agent: "Depends on deployment",
  },
  {
    aspect: "Reads tool results an AI agent sends back",
    extension: "No",
    gateway: "Varies",
    agent: "For supported traffic",
  },
  {
    aspect: "Knows which program sent the request",
    extension: "Browser only",
    gateway: "No",
    agent: "For supported traffic",
  },
  {
    aspect: "Decides before the prompt leaves the device",
    extension: "Yes",
    gateway: "Depends on placement",
    agent: "For supported traffic",
  },
];

const consoleTabs = [
  {
    value: "activity",
    title: "Activity",
    content: (
      <div>
        <Image
          src="/safe/safe-activity.png"
          alt="Illustrative SAFE console Activity view with sample data, showing a flow diagram from endpoints through applications and AI services to outcomes."
          width={1918}
          height={1198}
          className="block h-auto w-full border-b border-border"
        />
        <p className="px-4 py-3 text-xs text-muted-foreground">
          Activity: inspected requests from endpoint to verdict, built from
          metadata. The console is designed to receive metadata without prompt text.
        </p>
      </div>
    ),
  },
  {
    value: "agents",
    title: "AI agents",
    content: (
      <div>
        <Image
          src="/safe/safe-ai-agents.png"
          alt="Illustrative SAFE console AI agents view with sample data, showing agent risk across the fleet in a hexagon map."
          width={1918}
          height={1198}
          className="block h-auto w-full border-b border-border"
        />
        <p className="px-4 py-3 text-xs text-muted-foreground">
          AI agents: observed programs using AI services, with their risk,
          detections, and endpoints.
        </p>
      </div>
    ),
  },
  {
    value: "visibility",
    title: "Visibility",
    content: (
      <div>
        <Image
          src="/safe/safe-visibility.png"
          alt="Illustrative SAFE console Visibility view with sample data, showing decisions over time and top detectors."
          width={1918}
          height={1198}
          className="block h-auto w-full border-b border-border"
        />
        <p className="px-4 py-3 text-xs text-muted-foreground">
          Visibility: requests inspected, findings, and the decisions behind
          each block.
        </p>
      </div>
    ),
  },
];

export default function SafePage() {
  return (
    <main className="relative">
      <SiteHeader />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "SAFE", path: "/products/safe" },
        ])}
      />
      <PageHeader
        eyebrow="Product · AI detection and response"
        title={
          <>
            Supported AI requests are checked before{" "}
            <span className="text-primary">they leave the device.</span>
          </>
        }
        description="SAFE is designed to inspect AI requests on the device and help security teams apply policies to sensitive data."
      />

      <section className="border-y border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div>
              <BrowserMockup
                className="bg-card/90 shadow-xl"
                url="SAFE management console"
              >
                <Image
                  src="/safe/safe-activity.png"
                  alt="Illustrative SAFE console Activity view with sample data, showing requests flowing from endpoints through applications and AI services to allow, warn, or block decisions."
                  width={1918}
                  height={1198}
                  priority
                  className="block h-auto w-full"
                />
              </BrowserMockup>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Illustrative console view with sample data.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 pt-16 lg:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-8">
          <div>
            <Badge variant="secondary" className="rounded-full">
              Open source
            </Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              What SAFE does
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              The endpoint agent is designed to inspect supported AI traffic from
              browsers, desktop applications, and terminals, then apply an
              allow, warn, or block policy.
            </p>
            <p className="mt-3 leading-7 text-muted-foreground">
              Detection decisions are designed to run on the device. The management
              server distributes policy and collects event metadata.
            </p>
            <Button asChild className="mt-7 rounded-full">
              <a
                href={`mailto:whois@shyenasec.com?subject=SAFE%20inquiry`}
              >
                Ask about SAFE <ArrowUpRightIcon className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="mt-2 rounded-full">
              <Link href="/products">
                <ArrowLeftIcon className="size-4" /> All products
              </Link>
            </Button>
          </div>
          <BlurFade delay={0.1}>
            <dl className="rounded-2xl border bg-card p-6 sm:p-8">
              <div className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-muted-foreground">Availability</dt>
                <dd>Open source</dd>
              </div>
              <div className="flex justify-between gap-4 border-t py-3 text-sm">
                <dt className="text-muted-foreground">Product</dt>
                <dd className="text-right">Endpoint AI detection and response</dd>
              </div>
              <div className="flex justify-between gap-4 border-t py-3 text-sm">
                <dt className="text-muted-foreground">Agent platform</dt>
                <dd>Windows 11</dd>
              </div>
              <div className="flex justify-between gap-4 border-t py-3 text-sm">
                <dt className="text-muted-foreground">Website</dt>
                <dd>
                  <a
                    className="text-primary hover:underline"
                    href={safeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SAFE website
                  </a>
                </dd>
              </div>
            </dl>
          </BlurFade>
        </div>
      </section>

      <section className="border-t border-border bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Evaluating SAFE
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
            SAFE has been evaluated using synthetic prompts. Detection results
            can vary by data type and environment; teams should assess coverage,
            false positives, and bypass resistance against their own use cases.
          </p>
          <a href={safeWebsite} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-medium text-primary underline underline-offset-4">
            Visit the SAFE website
          </a>
        </div>
      </section>

      <section className="pb-24 pt-16 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Where the control sits in the request path.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <BlurFade key={step.title} delay={index * 0.08}>
                <div className="h-full border-t-2 border-primary/40 pt-4">
                  <p className="text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">
            The agent is designed to inspect AI traffic while leaving unrelated
            application traffic outside its inspection scope.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            What the platform includes.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {platform.map((item, index) => (
              <BlurFade key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border bg-card p-6">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <item.Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/20 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            The console, without the content.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            The flow from endpoint to application to AI service to verdict,
            plus agent risk and findings, is built from metadata only.
          </p>
          <BlurFade className="mt-10">
            <AnimatedTabs
              tabs={consoleTabs}
              peek={2}
              listClassName="self-center"
            />
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 pt-16 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Why inspect on the endpoint.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Each place you can watch AI use sees a different slice of it. These
            are the typical properties of each approach, not claims about any
            one product.
          </p>
          <BlurFade className="mt-10 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[40rem] text-sm">
              <caption className="sr-only">
                Illustrative comparison. Coverage varies by configuration, supported
                traffic, and deployment.
              </caption>
              <thead>
                <tr className="border-b bg-muted/50 text-left">
                  <th scope="col" className="px-4 py-3 font-medium">
                    Placement
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Browser extension
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    Network gateway
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium">
                    SAFE endpoint agent
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.aspect} className="border-b last:border-0">
                    <th
                      scope="row"
                      className="px-4 py-3 text-left font-normal text-muted-foreground"
                    >
                      {row.aspect}
                    </th>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.extension}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {row.gateway}
                    </td>
                    <td className="bg-primary/5 px-4 py-3 font-medium">
                      {row.agent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </BlurFade>
        </div>
      </section>

      <section className="pb-24 lg:pb-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid items-stretch gap-4 md:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
                Private by design.
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {privacy.map((item) => (
                  <div key={item.title}>
                    <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                      <item.Icon aria-hidden className="size-4.5" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border bg-muted/20 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Start with one device.
              </h2>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                SAFE is agent-based and open to evaluation. Ask about a
                walkthrough, deployment, or governance mapping for your
                environment.
              </p>
              <div className="mt-7">
                <Button asChild className="rounded-full">
                  <a
                    href={safeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit the SAFE website{" "}
                    <ArrowUpRightIcon className="size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
