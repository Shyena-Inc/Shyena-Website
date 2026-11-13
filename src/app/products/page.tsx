import { ProductCards } from "@/components/products/product-parts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { pageMetadata, JsonLd, breadcrumbs } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Products",
  description:
    "Explore SecYourScan, SecYourFlow, FlagForge, and SAFE: Shyena products for exposure monitoring, cyber risk operations, security learning, and endpoint AI protection.",
  path: "/products",
});
export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 sm:pt-32">
        <JsonLd
          data={breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ])}
        />
        <section className="mx-auto max-w-7xl px-4 pt-10 pb-12 md:pt-16 lg:px-8">
          <p className="text-sm font-medium text-primary">Products by Shyena</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Tools for security work
            <br className="hidden sm:block" /> and hands-on learning.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            Check exposure, manage cyber risk, practice security skills, and
            protect AI interactions. Explore each product to see how it works.
          </p>
        </section>
        <section
          aria-label="Shyena products"
          className="mx-auto max-w-7xl px-4 pb-20 lg:px-8"
        >
          <ProductCards />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
