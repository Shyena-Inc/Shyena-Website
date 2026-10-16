import type { Metadata } from "next";
import { MailIcon, MapPinIcon } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/company/contact-form";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Shyena",
  description:
    "Contact Shyena Technologies Pvt. Ltd. about cybersecurity services, FlagForge, or a SecYourFlow demonstration. Inquiries welcome from Nepal and international organizations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Talk through a security{" "}
            <span className="text-primary">question.</span>
          </>
        }
        description="Tell us about the systems, product, or question you have in mind."
      />
      <section className="pb-28">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <div className="space-y-5 rounded-2xl border bg-muted/20 p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Contact details</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MailIcon className="size-5" />
                </span>
                <span>
                  <span className="block font-medium">Email</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {siteConfig.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPinIcon className="size-5" />
                </span>
                <span>
                  <span className="block font-medium">Office</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                    {siteConfig.address}
                  </span>
                </span>
              </div>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.1}>
            <ContactForm />
          </BlurFade>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
