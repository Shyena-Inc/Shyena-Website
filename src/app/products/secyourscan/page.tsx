import Image from "next/image";
import {
  ProductShell,
  ProductHero,
  Capabilities,
  ProductLogo,
} from "@/components/products/product-parts";
import { productBySlug } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
const product = productBySlug("secyourscan");
export const metadata = pageMetadata({
  title: product.name,
  description:
    "SecYourScan checks email and domain exposure and monitors leaks, attack surface, brand abuse, threat actors, and supplier risk.",
  path: "/products/secyourscan",
});
export default function SecYourScanPage() {
  return (
    <ProductShell product={product}>
      <ProductHero
        product={product}
        title="Monitor exposure. Prioritise response."
        description="Check email and domain exposure. Match breach, dark-web, and internet-facing findings to the assets your organisation owns."
        image="/products/secyourscan-preview.png"
        imageAlt="SecYourScan public website with email and company-domain breach checks."
        caption="SecYourScan public breach-check site. Index data changes over time."
        action="Visit SecYourScan"
      />
      <Capabilities
        title="From exposure to response."
        description="Monitor your domains, staff emails, brand, and suppliers. Review findings in context and connect them to follow-up work."
        items={[
          {
            title: "Leaks and the dark web",
            body: "Match breach dumps, pastes, Telegram, GitHub, and onion-site findings against your watchlist. Passwords and keys are masked in the workspace.",
          },
          {
            title: "Internet-facing systems",
            body: "Review discovered subdomains, open ports, TLS, DNS email protections, and expiring certificates. Prioritise CVEs using exploitation context.",
          },
          {
            title: "Brand and phishing",
            body: "Find registered lookalike domains and phishing pages using your name, with mail-server and certificate context.",
          },
          {
            title: "Ransomware and threat actors",
            body: "Track mentions on ransomware leak sites and review relevant threat actors with MITRE ATT&CK context.",
          },
          {
            title: "Supplier exposure",
            body: "Review outside-in vendor ratings from public data and alerts when suppliers appear on ransomware leak sites.",
          },
          {
            title: "Incident response",
            body: "Give findings an incident owner and SLA. Investigate indicators and share threat intelligence through STIX/TAXII.",
          },
        ]}
      />
      <section className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-14 md:grid-cols-[.7fr_1.3fr] md:py-20 lg:px-8">
        <ProductLogo product={product} />
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Start with an email or domain.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            The public check needs no account. Review exposure for an email
            address or company domain, or browse the breach directory on
            SecYourScan.
          </p>
          <a
            href="https://secyourscan.shyenasec.com/breaches"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block font-medium text-primary underline underline-offset-4"
          >
            Browse the breach directory
          </a>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground">
            Organisation monitoring is for assets you own or are authorised to
            monitor. Findings are matched to your watchlist; SecYourScan is not
            a people-search service.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-14 lg:px-8">
        <figure className="grid items-center gap-8 border border-border p-5 md:grid-cols-2 sm:p-8">
          <Image
            src="/products/exposure-concept.png"
            width={1536}
            height={1024}
            alt="Conceptual studio photograph of blue light passing through an optical prism."
            className="h-auto w-full"
          />
          <figcaption>
            <h2 className="text-2xl font-semibold tracking-tight">
              Keep findings tied to your assets.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              A domain, email, or keyword on your watchlist gives each finding
              context for review.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Conceptual illustration, not a product screen.
            </p>
          </figcaption>
        </figure>
      </section>
    </ProductShell>
  );
}
