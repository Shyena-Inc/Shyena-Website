import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { pageMetadata } from "@/lib/seo";
import { getJournalPosts } from "./content";

export const metadata: Metadata = pageMetadata({
  title: "Cybersecurity insights",
  description:
    "Notes and practical guidance on hardware, connected-device, and operational technology security from Shyena Technologies Pvt. Ltd.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getJournalPosts();
  return (
    <main className="relative">
      <SiteHeader />
      <PageHeader
        eyebrow="Insights"
        title={
          <>
            Notes from security <span className="text-primary">practice.</span>
          </>
        }
        description="Practical notes on hardware, connected devices, and operational technology security."
      />
      <section className="pb-28">
        <div className="mx-auto max-w-3xl space-y-5 px-4 lg:px-8">
          {posts.length ? (
            posts.map((post, index) => (
              <BlurFade key={post.slug} delay={Math.min(index * 0.08, 0.24)}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <Badge className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">
                      {post.category}
                    </Badge>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-balance group-hover:text-primary sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {post.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read article{" "}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </BlurFade>
            ))
          ) : (
            <div className="rounded-2xl border bg-card p-8 text-muted-foreground">
              <h2 className="text-lg font-semibold text-foreground">
                No articles yet
              </h2>
              <p className="mt-2 text-sm leading-6">
                New posts will appear here. For questions about a security
                engagement, contact{" "}
                <a
                  className="text-primary underline"
                  href="mailto:whois@shyenasec.com"
                >
                  whois@shyenasec.com
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function formatDate(value: string) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);
}
