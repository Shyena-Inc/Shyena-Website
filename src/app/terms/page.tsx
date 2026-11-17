import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website terms - review draft",
  description:
    "Review draft of website terms for Shyena Technologies Pvt. Ltd.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Terms"
        title="Website terms"
        description="Review draft for Shyena Technologies Pvt. Ltd."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-4 pb-28 text-muted-foreground lg:px-8">
        <aside className="border-l-2 border-primary bg-muted/30 p-5 text-foreground" role="note">
          <h2 className="font-semibold">Review draft - not approved for publication</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">These proposed website terms require legal review before publication. Product and service agreements may apply separately.</p>
        </aside>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">About these terms</h2>
          <p className="leading-7">These draft terms concern the company website of Shyena Technologies Pvt. Ltd., based at Tikathali - 5, Lalitpur, Nepal. The website provides information about our company, services, and products. Contact us at <a className="text-primary underline underline-offset-4" href="mailto:whois@shyenasec.com">whois@shyenasec.com</a> with questions.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Using the website</h2>
          <p className="leading-7">Use this website lawfully and do not interfere with its operation, attempt unauthorised access, or misuse the contact form. Information on the site is general and does not create a service agreement.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Security testing</h2>
          <p className="leading-7">This website does not grant permission to test, scan, or access any system. Security testing requires authorisation from the system owner and must remain within the agreed scope. Access to a product or training environment is subject to its own rules and terms.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Content and third-party sites</h2>
          <p className="leading-7">Website content, branding, and third-party materials may be protected by intellectual property rights and applicable licences. Links to product and third-party websites are provided for convenience; those sites may have separate terms and privacy notices.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Product and service agreements</h2>
          <p className="leading-7">Descriptions on this website are informational. Product licences, access conditions, service scope, fees, and other obligations should be set out in the applicable product terms or written agreement.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Before publication</h2>
          <p className="leading-7">Legal review must confirm the effective date, governing law, dispute process, liability provisions, and any mandatory consumer protections before these terms are final.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
