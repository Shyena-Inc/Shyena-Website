import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice — review draft",
  description:
    "Review draft for the Shyena Technologies Pvt. Ltd. website privacy notice.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Privacy"
        title="Privacy notice"
        description="Review draft for Shyena Technologies Pvt. Ltd."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-4 pb-28 text-muted-foreground lg:px-8">
        <aside
          className="rounded-2xl border border-primary/25 bg-primary/5 p-5 text-foreground"
          role="note"
        >
          <h2 className="font-semibold">
            Review draft — not approved for publication
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            The final notice depends on the services and analytics enabled at
            launch. Legal review and confirmation of the items below are
            required before publication.
          </p>
        </aside>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Information submitted through the contact form
          </h2>
          <p className="leading-7">
            The form asks for your name, email address, inquiry topic, and
            message. When configured, messages are sent through Formspree to
            Shyena Technologies. Do not include passwords, access tokens, or
            other secrets.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Analytics and cookies
          </h2>
          <p className="leading-7">
            Google Analytics is optional and is only included when a measurement
            ID is configured for the website. Confirm whether analytics will be
            enabled, which consent controls apply, what events and retention
            settings are used, and how visitors can change their preferences.
            This draft does not establish that analytics or non-essential
            cookies are active.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Hosting and technical logs
          </h2>
          <p className="leading-7">
            The final notice should identify the website host, CDN, and any
            contact-form or analytics providers used at launch. Confirm provider
            terms, data location, retention periods, and applicable agreements
            before publication.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Requests and contact
          </h2>
          <p className="leading-7">
            Before publication, Shyena Technologies must set out applicable
            access, correction, and deletion request procedures and how long
            inquiry data is retained. Privacy questions can be directed to
            whois@shyenasec.com; confirm this route with Legal.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Items for final review
          </h2>
          <ul className="list-disc space-y-2 pl-6 leading-7">
            <li>
              Confirm the operating entity, audience, and jurisdictions covered.
            </li>
            <li>
              Map the hosting, analytics, and contact-form services enabled at
              launch.
            </li>
            <li>
              Set retention, rights-request, consent, and international-transfer
              wording.
            </li>
            <li>
              Approve the effective date and public contact for privacy
              requests.
            </li>
          </ul>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
