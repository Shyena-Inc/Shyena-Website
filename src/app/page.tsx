import type { Metadata } from "next";
import { ProductLogo } from "@/components/products/product-parts";
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
import { BlurFade } from "@/components/velora/blur-fade";
import { SpotlightCard } from "@/components/velora/spotlight-card";
import { BackgroundBeams } from "@/components/velora/background-beams";
import { Marquee } from "@/components/velora/marquee";
import { BackgroundBoxes } from "@/components/velora/background-boxes";
import { PointerHighlight } from "@/components/velora/pointer-highlight";
import { JsonLd, pageMetadata, publisher } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity products and security engineering",
  absoluteTitle:
    "Shyena Technologies Pvt. Ltd. | Cybersecurity Products and Security Engineering",
  description:
    "Cybersecurity products, research, and security engineering from Shyena Technologies, including exposure monitoring, risk management, AI security, and assessments.",
  path: "/",
});

const services = [
  {
    id: "service-hardware-vapt",
    name: "Hardware VAPT",
    article: { href: "/blog/hardware-vapt-review", label: "What a hardware VAPT can cover" },
    href: "/contact?topic=Hardware%20VAPT",
    icon: <CpuIcon />,
  },
  {
    id: "service-ot-ics",
    name: "OT / ICS assessment",
    article: { href: "/blog/ot-security-assessment-scope", label: "How to scope an OT assessment" },
    href: "/contact?topic=OT%20%2F%20ICS%20assessment",
    icon: <FactoryIcon />,
  },
  {
    id: "service-iot-security",
    name: "IoT security testing",
    article: { href: "/blog/iot-device-security-review", label: "What an IoT device review covers" },
    href: "/contact?topic=IoT%20security%20testing",
    icon: <NetworkIcon />,
  },
  {
    id: "service-scada-testing",
    name: "SCADA network testing",
    href: "/contact?topic=SCADA%20network%20testing",
    icon: <SirenIcon />,
  },
  {
    id: "service-red-team",
    name: "Red team operations",
    href: "/contact?topic=Red%20team%20operations",
    icon: <ShieldCheckIcon />,
  },
  {
    id: "service-risk-advisory",
    name: "Compliance & risk advisory",
    href: "/contact?topic=Compliance%20and%20risk%20advisory",
    icon: <FileCheck2Icon />,
  },
];

const solutionTitles: Record<(typeof products)[number]["slug"], string> = {
  secyourscan: "Find external exposure",
  secyourflow: "Manage cyber risk",
  safe: "Protect AI interactions",
  flagforge: "Build security skills",
};

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
      <JsonLd data={publisher} />
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-border/70 pt-24 pb-10 sm:pt-28 md:pb-14 lg:pt-28">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 md:grid-cols-[.96fr_1.04fr] md:gap-8 lg:gap-14 lg:px-8 lg:pb-14">
          <div className="relative z-10 py-2">
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-balance sm:text-5xl lg:text-[3rem] xl:text-[3.8rem]">
              Cybersecurity products. {" "}
              <PointerHighlight
                rectangleClassName="border-primary/70 bg-primary/5"
                pointerClassName="text-primary"
              >
                Security engineering.
              </PointerHighlight>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From exposure monitoring and cyber risk to AI security and hands-on
              learning, we build products and assess the systems organisations
              depend on. Our specialties include hardware and OT / ICS security.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-none px-6">
                <Link href="/products">
                  Explore products <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 rounded-none px-6"
                variant="outline"
              >
                <Link href="#services">
                  Explore services <ArrowRightIcon className="size-4" />
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
        className="relative isolate scroll-mt-24 overflow-hidden border-b border-border/60 py-20 md:py-28"
      >
        <BackgroundBoxes
          rows={20}
          cols={32}
          cellSize={44}
          fade={1500}
          className="opacity-[0.08] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary">Products and services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Security work, from exposure to action.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Explore products for exposure monitoring, risk management, AI security,
              and practical learning. Our team also assesses hardware, connected
              devices, and operational environments.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {products.map((solution) => (
              <SpotlightCard
                key={solution.slug}
                className="h-full transition-colors hover:border-primary focus-within:border-primary [&>div:last-child]:h-full"
              >
                <Link
                  href={`/products/${solution.slug}`}
                  className="group flex h-full flex-col p-5 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className="[&>div]:h-40 [&>div]:border-0 [&>div]:bg-muted/30 sm:[&>div]:h-44 [&_img[src*=secyourscan-light]]:scale-[.65] [&_img[src*=secyourflow-stacked-light]]:scale-[.85]"
                  >
                    <ProductLogo product={solution} stacked />
                  </div>
                  <div className="mt-6 flex flex-1 flex-col">
                    <p className="text-xs font-semibold tracking-wide text-primary">{solution.category}</p>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{solutionTitles[solution.slug]}</h3>
                      <ArrowUpRightIcon aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{solution.description}</p>
                    <span className="mt-auto pt-7 text-sm font-semibold text-primary">Explore {solution.name}</span>
                  </div>
                </Link>
              </SpotlightCard>
            ))}
          </div>
          <div className="mt-16 border-t border-border pt-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight">Security assessments and advisory</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Discuss the systems, scope, and operating constraints with our team.
              </p>
            </div>
            <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="scroll-mt-32 border-b border-border">
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between gap-4 py-4 text-sm font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="flex items-center gap-3"><span aria-hidden="true" className="[&_svg]:size-4 [&_svg]:text-primary">{service.icon}</span>{service.name}</span>
                    <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </Link>
                  {service.article && (
                    <Link href={service.article.href} className="mb-4 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
                      {service.article.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
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
                Hardware, firmware, connected devices, and OT environments can
                be assessed within an agreed scope.
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
