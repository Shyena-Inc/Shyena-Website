import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CpuIcon,
  FactoryIcon,
  FileCheck2Icon,
  NetworkIcon,
  ShieldCheckIcon,
  SirenIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaVortex } from "@/components/company/cta-vortex";
import { GlobalGlobe } from "@/components/company/global-globe";
import { BentoGrid } from "@/components/velora/bento-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { BackgroundBeams } from "@/components/velora/background-beams";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { Marquee } from "@/components/velora/marquee";
import { BackgroundBoxes } from "@/components/velora/background-boxes";
import { FlipWords } from "@/components/velora/flip-words";
import { PointerHighlight } from "@/components/velora/pointer-highlight";
import { JsonLd, pageMetadata, publisher } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity assessments for connected systems",
  absoluteTitle:
    "Shyena Technologies Pvt. Ltd. | Cybersecurity assessments for connected systems",
  description:
    "Hardware, firmware, connected device, and OT / ICS security assessments from Shyena Technologies Pvt. Ltd., based in Lalitpur, Nepal and serving organizations in Nepal and international markets.",
  path: "/",
});

const services = [
  {
    id: "service-hardware-vapt",
    name: "Hardware VAPT",
    description:
      "Review hardware, firmware, and exposed interfaces within an agreed assessment scope.",
    href: "/contact?topic=Hardware%20VAPT",
    cta: "Discuss hardware testing",
    icon: <CpuIcon />,
  },
  {
    id: "service-ot-ics",
    name: "OT / ICS assessment",
    description:
      "Assess industrial control environments, including PLC, DCS, and SCADA components.",
    href: "/contact?topic=OT%20%2F%20ICS%20assessment",
    cta: "Discuss OT / ICS security",
    icon: <FactoryIcon />,
  },
  {
    id: "service-iot-security",
    name: "IoT security testing",
    description:
      "Review device interfaces, firmware, companion applications, and connected services as applicable.",
    href: "/contact?topic=IoT%20security%20testing",
    cta: "Discuss IoT security",
    icon: <NetworkIcon />,
  },
  {
    id: "service-scada-testing",
    name: "SCADA network testing",
    description:
      "Test protocol exposure, network segmentation, and access controls in a controlled engagement.",
    href: "/contact?topic=SCADA%20network%20testing",
    cta: "Discuss SCADA testing",
    icon: <SirenIcon />,
  },
  {
    id: "service-red-team",
    name: "Red team operations",
    description:
      "Exercise agreed attack paths across connected IT and OT environments with operating constraints in scope.",
    href: "/contact?topic=Red%20team%20operations",
    cta: "Discuss a red team exercise",
    icon: <ShieldCheckIcon />,
  },
  {
    id: "service-risk-advisory",
    name: "Compliance & risk advisory",
    description:
      "Identify security gaps and give teams a practical, prioritized path for risk treatment.",
    href: "/contact?topic=Compliance%20and%20risk%20advisory",
    cta: "Discuss risk advisory",
    icon: <FileCheck2Icon />,
  },
];

const focusAreas = [
  "Hardware & firmware",
  "Connected devices",
  "OT / ICS",
  "SCADA networks",
  "Red team operations",
  "Risk advisory",
];

const faqs = [
  {
    question: "What kinds of systems can you assess?",
    answer:
      "Shyena works across hardware and firmware, connected devices, industrial control and SCADA environments, and agreed red team scopes. The right scope depends on the systems and operating constraints involved.",
  },
  {
    question: "How do you approach testing in operational environments?",
    answer:
      "Testing scope and constraints are discussed before an engagement. Operational requirements and the systems in scope should be clear before any assessment begins.",
  },
  {
    question: "Can we request a SecYourFlow demonstration?",
    answer:
      "Yes. SecYourFlow is available privately. Email whois@shyenasec.com to request a demonstration.",
  },
  {
    question: "Where is Shyena Technologies based?",
    answer:
      "Shyena Technologies Pvt. Ltd. is based at Tikathali - 5, Lalitpur, Nepal.",
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <JsonLd
        data={[
          { ...publisher, "@type": "Organization", name: siteConfig.name },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-border/70 pt-24 pb-10 sm:pt-28 md:pb-14 lg:pt-28">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 md:grid-cols-[.96fr_1.04fr] md:gap-8 lg:gap-14 lg:px-8 lg:pb-14">
          <div className="relative z-10 py-2">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Cybersecurity services
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3rem] xl:text-[3.8rem]">
              Security assessments for{" "}
              <PointerHighlight
                rectangleClassName="border-primary/70 bg-primary/5"
                pointerClassName="text-primary"
              >
                connected systems.
              </PointerHighlight>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Independent testing for hardware, firmware, connected devices,
              and OT / ICS environments. Based in Lalitpur, Nepal; serving
              organizations in Nepal and international markets.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Start with: {" "}
              <FlipWords
                words={["the asset", "the operating context", "the scope"]}
                duration={1500}
                className="font-semibold text-foreground"
              />
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-none px-6">
                <Link href="/contact">
                  Discuss an assessment <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild className="h-12 rounded-none px-6" variant="outline">
                <Link href="#services">
                  View service lines <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center md:pl-2">
            <GlobalGlobe />
          </div>
        </div>

        <div className="relative border-y border-border/70 bg-muted/25">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:grid-cols-[180px_1fr] sm:items-center lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Services & systems
            </p>
            <Marquee
              aria-label="Shyena service lines and assessment areas"
              className="[--duration:46s] [--gap:3.5rem]"
              pauseOnHover
            >
              {focusAreas.map((area) => (
                <span
                  className="whitespace-nowrap text-sm font-semibold text-foreground/75"
                  key={area}
                >
                  {area}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative isolate scroll-mt-24 overflow-hidden border-y border-border/60 bg-muted/20 py-20 md:py-28"
      >
        <BackgroundBoxes
          rows={20}
          cols={32}
          cellSize={44}
          fade={1500}
          className="opacity-[0.12] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <BlurFade>
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Services</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Security work for software, devices, and operations.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Assessment and advisory work shaped around the systems in scope
                and the way they are used.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.12}>
            <BentoGrid className="mt-10 auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <SpotlightCard key={service.id} className="h-full rounded-none p-5 sm:p-6">
                  <Link
                    id={service.id}
                    href={service.href}
                    className="group flex h-full min-h-48 scroll-mt-32 flex-col rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid size-11 place-items-center rounded-none border border-primary/20 bg-primary/8 text-primary [&_svg]:size-5">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="mt-7 text-lg font-semibold tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary">
                      {service.cta}
                      <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                    </span>
                  </Link>
                </SpotlightCard>
              ))}
            </BentoGrid>
          </BlurFade>
        </div>
      </section>

      <section className="border-b border-border/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1.1fr_.9fr] md:items-center lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Assessment approach
            </p>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Define the scope before testing begins.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Systems, permitted techniques, operational limits, and stop
              conditions are discussed before work starts. Each engagement is
              shaped around the environment being assessed.
            </p>
          </div>
          <div className="border-l-2 border-primary/60 py-2 pl-5 sm:pl-7">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Shyena engagement principle
            </p>
            <p className="mt-3 text-xl font-medium leading-8 text-foreground text-balance sm:text-2xl">
              Clear scope. Agreed constraints. Findings teams can act on.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              This describes the intended assessment process; it is not a
              customer testimonial or performance claim.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">Projects</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Tools for practice and security work.
              </h2>
            </div>
            <Button asChild variant="ghost" className="rounded-none">
              <Link href="/projects">
                View all projects <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <SpotlightCard className="h-full rounded-none p-6 sm:p-8">
              <Link
                href="/projects/flagforge"
                className="group block rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="flex min-h-44 items-center justify-center rounded-none border border-border bg-muted/50 p-8">
                  <Image
                    src="/brand/flagforge-logo.png"
                    alt="FlagForge logo"
                    width={160}
                    height={160}
                    className="size-24 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">FlagForge</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                      Capture-the-flag cybersecurity challenges across web
                      security, cryptography, reverse engineering, and
                      forensics.
                    </p>
                  </div>
                  <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </SpotlightCard>
            <SpotlightCard className="h-full rounded-none p-6 sm:p-8">
              <Link
                href="/projects/secyourflow"
                className="group block rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="flex min-h-44 items-center justify-center rounded-none border border-border bg-muted/50 p-8">
                  <Image
                    src="/brand/secyourflow-logo.png"
                    alt="SecYourFlow logo"
                    width={160}
                    height={160}
                    className="size-24 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">SecYourFlow</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                      A private security workflow project. Contact Shyena to
                      request a demonstration.
                    </p>
                  </div>
                  <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </SpotlightCard>
            <SpotlightCard className="h-full rounded-none p-6 sm:p-8 md:col-span-2 lg:col-span-1">
              <Link
                href="/projects/safe"
                className="group block rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div className="flex min-h-44 items-center justify-center rounded-none border border-border bg-muted/50 p-8">
                  <Image
                    src="/safe/safe-logo.png"
                    alt="SAFE logo"
                    width={160}
                    height={160}
                    className="size-24 object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">SAFE</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                      Endpoint AI detection and response. Prompts to AI services
                      are checked on the device, and risky ones stop before
                      they leave.
                    </p>
                  </div>
                  <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-[1fr_1fr] lg:px-8">
          <BlurFade direction="right">
            <div>
              <p className="text-sm font-medium text-primary">Company</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                A Nepal-based cybersecurity and technology company.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                Shyena Technologies works across security services, products,
                and practical learning. Our work includes hardware, connected
                devices, and operational technology.
              </p>
              <Button asChild variant="outline" className="mt-7 rounded-none">
                <Link href="/about">
                  Company information <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.1}>
            <div className="grid items-stretch gap-4 sm:grid-cols-2">
              <div className="rounded-none border bg-card p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Location
                </p>
                <p className="mt-2 font-medium">Lalitpur, Nepal</p>
              </div>
              <div className="rounded-none border bg-card p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Email
                </p>
                <p className="mt-2 break-words font-medium">
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-zinc-950 py-20 text-white md:py-28">
        <BackgroundBeams count={7} className="opacity-80" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,transparent,rgba(0,0,0,0.55))]"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <BlurFade>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
                Do you know what is exposed in your systems?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Hardware, firmware, connected devices, and OT environments
                can be assessed within an agreed scope.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-12 rounded-none bg-white px-6 text-zinc-950 hover:bg-white/90"
              >
                <Link href="/#services">
                  View service lines <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-medium text-primary">Questions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A few useful answers.
            </h2>
            <p className="mt-4 text-muted-foreground">
              For a specific environment or scope, contact our team.
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-none">
              <Link href="/contact">
                Contact Shyena <ArrowUpRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaVortex />

      <SiteFooter />
    </main>
  );
}
