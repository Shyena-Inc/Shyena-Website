import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy notice - review draft",
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
      <article className="mx-auto max-w-3xl space-y-10 px-4 pb-28 text-muted-foreground lg:px-8">
        <aside className="border-l-2 border-primary bg-muted/30 p-5 text-foreground" role="note">
          <h2 className="font-semibold">Review draft - not approved for publication</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            This notice requires legal review and confirmation of the services,
            retention periods, and consent settings used at launch.
          </p>
        </aside>
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
          <p className="leading-7">The website stores your theme preference in your browser. Hosting and network providers may process technical information, such as IP addresses and request logs, to deliver and operate the site. The providers and their retention settings must be confirmed before this notice is final.</p>
          <p className="leading-7">The site can load Google Analytics when a measurement ID is configured. Its use, data collection, retention settings, and any consent controls must be confirmed before analytics is enabled for visitors where consent is required.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Service providers and international transfers</h2>
          <p className="leading-7">Providers used to operate the website or handle inquiries may process information on our behalf. Their locations and any safeguards for transfers across borders depend on the services configured at launch and must be reviewed before publication.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Retention and your choices</h2>
          <p className="leading-7">Retention periods for inquiries and technical records have not yet been confirmed. Depending on applicable law, you may have rights to request access, correction, deletion, or other action concerning your personal information. Email us with your request; we may need information to verify your identity.</p>
          <p className="leading-7">Product websites may collect different information and may have their own privacy notices. Review those notices when you use those products.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
