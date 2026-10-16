import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRightIcon, ChevronLeftIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { PostMeta } from "@/components/template/post-meta";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Markdown } from "../markdown";
import { getJournalPost, getJournalPosts } from "../content";
import { pageMetadata, JsonLd, breadcrumbs } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  const posts = await getJournalPosts();
  return posts.map(({ slug }) => ({ slug }));
}

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getJournalPost(slug);
  if (!post)
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  const base = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: post.date },
  };
}

export default async function JournalArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getJournalPost(slug);
  if (!post) notFound();

  const article = {
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <main className="relative">
      <SiteHeader />
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 md:pt-40 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeftIcon className="size-4" /> All articles
        </Link>
        <header className="mt-9 border-b border-border/60 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-7 text-muted-foreground">
            {post.description}
          </p>
          <PostMeta
            date={formatDate(post.date)}
            category={post.category}
            readingTime={`${post.readingTimeMinutes} min read`}
          />
        </header>
        <div className="prose-blog mt-9 space-y-5 text-base leading-8 text-muted-foreground">
          <Markdown source={post.body} />
        </div>
        <footer className="mt-14 border-t border-border/60 pt-7">
          <p className="text-sm text-muted-foreground">
            Questions about this topic? Email{" "}
            <a
              className="text-primary underline underline-offset-2"
              href="mailto:whois@shyenasec.com"
            >
              whois@shyenasec.com
            </a>
            .
          </p>
          <Button asChild className="mt-5 rounded-full" variant="outline">
            <Link href="/contact">
              Discuss a security question{" "}
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </footer>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(article).replace(/</g, "\\u003c"),
        }}
      />
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
