import Link from "next/link";
import { HomeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { RetroGrid } from "@/components/velora/retro-grid";
import { BlurFade } from "@/components/velora/blur-fade";

export default function NotFound() {
  return (
    <main className="relative">
      <SiteHeader />
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
        <RetroGrid />
        <div className="relative mx-auto max-w-2xl px-4 py-32 text-center">
          <BlurFade>
            <p className="font-mono text-8xl font-semibold tracking-tight lg:text-9xl">
              404
            </p>
            <h1 className="mt-6 text-2xl font-semibold tracking-tight lg:text-3xl">
              We couldn’t find that page
            </h1>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              The address may be incorrect, or the page may have moved. You can
              return to the home page or contact our team for help.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="rounded-full" asChild>
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Back home
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/contact">Contact Shyena</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
