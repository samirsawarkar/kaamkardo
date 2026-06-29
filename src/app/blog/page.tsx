import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides from KaamKarDo on ATS resumes, AI photos, skill roadmaps, LinkedIn content, SEO writing, and growing a focused AI tools ecosystem.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "KaamKarDo Blog",
    description:
      "Search-led guides for the KaamKarDo AI tools ecosystem.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <BlogHeader />

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-28 md:px-8 md:pb-24 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-foreground/50">
            KaamKarDo blog
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-foreground md:text-6xl">
            Useful articles that support every product in the ecosystem.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/62">
            Practical guides for job seekers, creators, founders, and marketers.
            Each article answers a real search question and points readers to the
            right KaamKarDo subdomain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border border-foreground/10 bg-foreground/[0.035] p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase text-foreground/45">
                  {post.category}
                </span>
                <span className="text-xs font-semibold text-foreground/40">
                  {post.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-2xl font-extrabold leading-tight text-foreground">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm leading-6 text-foreground/60">
                {post.description}
              </p>
              {post.heroImage && (
                <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-foreground/10">
                  <Image
                    src={post.heroImage.src}
                    alt={post.heroImage.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-foreground/[0.06] px-3 py-1 text-xs font-semibold text-foreground/55"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-foreground/10 pt-5">
                <span className="text-xs font-semibold uppercase text-foreground/40">
                  {post.targetSiteName}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground"
                >
                  Read
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-foreground/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="KaamKarDo home">
          <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-foreground">
            <Image
              src="/kaamkardo-256.webp"
              alt="KaamKarDo Logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="font-heading text-lg font-bold text-foreground">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-foreground/62 transition hover:text-foreground"
          >
            Ecosystem
          </Link>
          <Link
            href="https://resume.kaamkardo.com"
            className="hidden items-center gap-1 text-sm font-semibold text-foreground/62 transition hover:text-foreground sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
