import Image from "next/image";
import {
  ProductShell,
  ProductHero,
  Capabilities,
  ProductLogo,
} from "@/components/products/product-parts";
import { productBySlug } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
const product = productBySlug("secyourflow");
export const metadata = pageMetadata({
  title: product.name,
  description:
    "SecYourFlow is a self-hosted workspace for assets, vulnerabilities, risk, suppliers, business impact analysis, and NIS2 governance.",
  path: "/products/secyourflow",
});
export default function SecYourFlowPage() {
  return (
    <ProductShell product={product}>
      <ProductHero
        product={product}
        title="Connect risk to the work."
        description="Manage assets, findings, risk decisions, supplier reviews, and NIS2 work in a workspace that runs on your own servers."
        image="/products/secyourflow-dashboard.webp"
        imageAlt="SecYourFlow dashboard showing cyber risk and exposure summaries in a demo organisation."
        caption="Actual SecYourFlow application. Demo organisation with test data."
        action="Visit SecYourFlow"
      />
      <Capabilities
        title="A workspace for security operations."
        description="Keep the asset, finding, decision, and follow-up connected, with owners and evidence beside the work."
        items={[
          {
            title: "Assets and vulnerabilities",
            body: "Record asset ownership and environment details. Link findings to affected assets, assign owners, and track severity, status, and due dates.",
          },
          {
            title: "CVE context and remediation",
            body: "Search public vulnerability records and CISA KEV entries. Coordinate fixes through remediation plans, deadlines, and verification evidence.",
          },
          {
            title: "Risk register and appetite",
            body: "Score risks by likelihood and impact. Record appetite, treatment decisions, owners, and action plans in one register.",
          },
          {
            title: "Suppliers and dependencies",
            body: "Review supplier risk and contract details. Link vendors to the systems, data, and business processes they can reach.",
          },
          {
            title: "Business impact analysis",
            body: "Record critical processes and recovery targets. Review financial, operational, reputational, regulatory, and safety impacts alongside asset and supplier dependencies.",
          },
          {
            title: "NIS2 and compliance",
            body: "Track governance measures, incident reporting, framework controls, policies, and evidence. Assign responsibility and review implementation status.",
          },
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          See the dependencies behind a risk.
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Business processes and suppliers sit alongside technical findings, so
          recovery and treatment decisions retain their context.
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Business impact analysis",
              image: "/products/secyourflow-bia.webp",
              alt: "SecYourFlow business impact analysis with critical processes and recovery objectives.",
            },
            {
              title: "Supplier risk",
              image: "/products/secyourflow-vendors.webp",
              alt: "SecYourFlow supplier workspace with vendor risk and dependency information.",
            },
          ].map((screen) => (
            <figure key={screen.title}>
              <Image
                src={screen.image}
                alt={screen.alt}
                width={1440}
                height={1000}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="h-auto w-full border border-border"
              />
              <figcaption className="mt-3 text-sm">
                <span className="font-medium">{screen.title}</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  Actual application, demo organisation with test data.
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[.7fr_1.3fr] lg:px-8">
          <ProductLogo product={product} />
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Run it on your infrastructure.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              SecYourFlow runs on your own Linux servers and checks licence keys
              offline. Request a demo through the product site to discuss your
              deployment.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
              Optional AI assistance sends redacted context to your configured
              model provider. Administrators control enablement, redaction, and
              human review.
            </p>
          </div>
        </div>
      </section>
    </ProductShell>
  );
}
