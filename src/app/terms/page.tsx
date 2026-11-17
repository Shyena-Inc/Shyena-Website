import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website terms",
  description:
    "Terms for using the Shyena Technologies Pvt. Ltd. website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Terms"
        title="Website terms"
        description="Terms for using the Shyena Technologies website."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-4 pb-28 text-muted-foreground lg:px-8">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">About these terms</h2>
          <p className="leading-7">These terms concern the company website of Shyena Technologies Pvt. Ltd., based at Tikathali - 5, Lalitpur, Nepal. The website provides information about our company, services, and products. Contact us at <a className="text-primary underline underline-offset-4" href="mailto:whois@shyenasec.com">whois@shyenasec.com</a> with questions.</p>
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
          <h2 className="text-xl font-semibold text-foreground">Availability and liability</h2>
          <p className="leading-7">We may update or interrupt the website. Information is provided for general purposes, and you should confirm that it is suitable for your circumstances. Nothing in these terms limits rights or remedies that cannot be excluded under applicable law.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Changes and contact</h2>
          <p className="leading-7">We may update these terms as the website or our services change. The current version will be available on this page. Questions can be sent to <a className="text-primary underline underline-offset-4" href="mailto:whois@shyenasec.com">whois@shyenasec.com</a>.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
