import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd, breadcrumbs } from "@/lib/seo";
import { products, type Product } from "@/lib/products";

export function ProductLogo({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-border bg-white ${compact ? "h-24 w-48" : "h-40 w-full"}`}
    >
      <Image
        src={product.logo}
        alt={`${product.name} logo`}
        width={320}
        height={320}
        className={
          product.slug === "secyourflow"
            ? "h-full w-full object-cover"
            : "h-full w-auto object-contain"
        }
      />
    </div>
  );
}

export function ProductCards({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="group grid gap-5 border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:p-7"
        >
          <ProductLogo product={product} />
          <div>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <div className="mt-2 flex items-center justify-between gap-4">
              <Heading className="text-2xl font-semibold tracking-tight">
                {product.name}
              </Heading>
              <ArrowUpRight
                size={22}
                aria-hidden
                className="shrink-0 text-primary"
              />
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
              {product.description}
            </p>
            <span className="mt-5 inline-block text-sm font-medium text-primary">
              Explore {product.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProductShell({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="pt-28 sm:pt-32">
        <JsonLd
          data={breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` },
          ])}
        />
        {children}
        <nav
          aria-label="Product navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-t border-border px-4 py-10 lg:px-8"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft size={18} aria-hidden />
            All products
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {p.name}
                </Link>
              ))}
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}

export function ProductHero({
  product,
  title,
  description,
  image,
  imageAlt,
  caption,
  action,
}: {
  product: Product;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  caption: string;
  action: string;
}) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 md:grid-cols-[.9fr_1.1fr] md:py-16 lg:gap-16 lg:px-8">
      <div>
        <p className="text-sm font-medium text-primary">
          {product.name} / {product.category}
        </p>
        <h1 className="mt-5 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="rounded-none">
            <a href={product.href} target="_blank" rel="noopener noreferrer">
              {action}
              <ArrowUpRight size={18} aria-hidden />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-none">
            <a href="#capabilities">Explore capabilities</a>
          </Button>
        </div>
      </div>
      <figure className="min-w-0">
        <div className="overflow-hidden border border-border bg-muted/20">
          <Image
            src={image}
            alt={imageAlt}
            width={1360}
            height={960}
            priority
            sizes="(max-width: 767px) 100vw, 55vw"
            className="h-auto max-h-[440px] w-full object-contain"
          />
        </div>
        <figcaption className="mt-3 text-xs leading-5 text-muted-foreground">
          {caption}
        </figcaption>
      </figure>
    </section>
  );
}

export function Capabilities({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section
      id="capabilities"
      className="scroll-mt-32 border-y border-border bg-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          {description}
        </p>
        <div className="mt-10 grid gap-x-16 gap-y-8 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="border-t border-border pt-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
