import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice",
  description:
    "How Shyena Technologies Pvt. Ltd. handles information collected through its website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Privacy"
        title="Privacy notice"
        description="How we handle information collected through this website."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-4 pb-28 text-muted-foreground lg:px-8">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
          <p className="leading-7">Shyena Technologies Pvt. Ltd. operates this company website. We are based at Tikathali - 5, Lalitpur, Nepal. For privacy questions, email <a className="text-primary underline underline-offset-4" href="mailto:whois@shyenasec.com">whois@shyenasec.com</a>.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Information you provide</h2>
          <p className="leading-7">When you contact us, you may provide your name, email address, inquiry topic, and message. We use this information to respond to your inquiry and follow up on the matter you raise. Please do not include passwords, access tokens, or other secrets.</p>
          <p className="leading-7">When the contact form is configured, submissions are sent through Formspree. If it is unavailable, you can contact us by email.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Technical data, cookies, and analytics</h2>
          <p className="leading-7">The website stores your theme preference in your browser. Hosting and network providers may process technical information, such as IP addresses and request logs, to deliver and operate the site.</p>
          <p className="leading-7">If enabled, Google Analytics collects information about use of the website, such as pages visited and device or browser information. Google may use cookies or similar technologies. You can control cookies through your browser settings.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Service providers and international transfers</h2>
          <p className="leading-7">Service providers may process information to host and operate the website, receive inquiries, and, if enabled, measure website use. They may process information outside Nepal. Contact us for details of the providers and any safeguards applicable to international transfers.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Retention and your choices</h2>
          <p className="leading-7">Contact us for information about how long inquiry and technical records are retained. Depending on applicable law, you may request access, correction, deletion, or other action concerning your personal information. Email us with your request; we may need information to verify your identity.</p>
          <p className="leading-7">You may also have the right to complain to a relevant authority under applicable law. Product websites may collect different information and may have their own privacy notices.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Changes to this notice</h2>
          <p className="leading-7">We may update this notice as our website or practices change. The current version will be available on this page.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
