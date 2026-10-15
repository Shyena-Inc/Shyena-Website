import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { Typewriter } from "@/components/velora/typewriter";
import { Vortex } from "@/components/velora/vortex";
import { siteConfig } from "@/lib/site-config";

export function CtaVortex() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden border border-border bg-card px-5 py-16 text-foreground sm:px-10 sm:py-20">
        <Vortex particles={560} speed={0.55} range={0.8} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial from-card/95 from-10% via-card/75 via-45% to-card/35"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-card/65 sm:hidden"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Security assessment inquiries
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Start with the system you need to secure.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Share a little about the hardware, firmware, connected devices, or
            OT / ICS environment. We can discuss scope and operating constraints
            before an assessment begins.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            Work centred on{" "}
            <AnimatedGradientText>
              <Typewriter
                words={["the device", "the firmware", "the operating environment"]}
                typeSpeed={62}
                deleteSpeed={36}
                holdTime={1300}
              />
            </AnimatedGradientText>
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-none px-6">
              <Link href="/contact">
                Discuss an assessment <ArrowRightIcon aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-none border-border bg-background/70 px-6"
            >
              <a href={`mailto:${siteConfig.email}`}>Email Shyena</a>
            </Button>
          </div>

          <ul className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground sm:flex-row">
            {["Scope agreed before testing", "Operating constraints discussed", "Based in Lalitpur, Nepal"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon aria-hidden className="size-4 text-primary" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
