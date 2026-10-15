import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Website terms — review draft",
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
      <article className="mx-auto max-w-3xl space-y-8 px-4 pb-28 text-muted-foreground lg:px-8">
        <aside
          className="rounded-2xl border border-primary/25 bg-primary/5 p-5 text-foreground"
          role="note"
        >
          <h2 className="font-semibold">
            Review draft — not approved for publication
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            These draft notes cover this website only. Legal review is required
            before publication. Separate terms may apply to services, FlagForge,
            and SecYourFlow.
          </p>
        </aside>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Using this website
          </h2>
          <p className="leading-7">
            This website provides general information about Shyena Technologies
            Pvt. Ltd. and its projects. The company should confirm permitted-use
            rules, applicable law, and any age or location limits for the final
            terms.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Security testing and project access
          </h2>
          <p className="leading-7">
            Information on this website does not grant permission to test, scan,
            or access any system. Only perform security testing when the system
            owner has given clear authorization and the activity remains within
            its agreed scope. Legal review must define suitable terms for
            FlagForge participation and any service or product access.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            External websites
          </h2>
          <p className="leading-7">
            This website links to external project websites, including
            FlagForge. Those sites may have separate terms and privacy
            practices. Review linked site information before using those
            services.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Items for final review
          </h2>
          <ul className="list-disc space-y-2 pl-6 leading-7">
            <li>
              Decide whether these terms cover only the company website or also
              service and product terms.
            </li>
            <li>
              Review intellectual property, acceptable use, disclaimers, and
              liability wording.
            </li>
            <li>
              Set governing law, dispute process, suspension rules, effective
              date, and company contact.
            </li>
            <li>
              Confirm terms for the external FlagForge platform with its
              operator.
            </li>
          </ul>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
