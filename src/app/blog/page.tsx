import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/ecosystem";

const VISIBLE_TAG_COUNT = 6;

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteConfig.url}/blog/#blog`,
        name: "KaamKarDo Blog",
        url: `${siteConfig.url}/blog`,
        description:
          "Search-led guides for resumes, AI photos, skill roadmaps, LinkedIn content, SEO writing, and the KaamKarDo AI tools ecosystem.",
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: `${siteConfig.url}/kaamkardo.png`,
          },
        },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: getAbsoluteBlogUrl(post.slug),
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/blog/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteConfig.url}/blog`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#0f191f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogHeader />

      <section className="mx-auto w-full max-w-[1500px] px-4 pb-20 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase text-[#0866ff]">
            KaamKarDo blog
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-6xl">
            Useful articles that support every product in the ecosystem.
          </h1>
          <p className="mt-6 text-lg font-medium leading-8 text-[#52616d]">
            Practical guides for job seekers, creators, founders, and marketers.
            Each article answers a real search question and points readers to the
            right KaamKarDo subdomain.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {blogPosts.map((post) => {
            const visibleKeywords = post.keywords.slice(0, VISIBLE_TAG_COUNT);
            const hiddenKeywordCount = Math.max(
              post.keywords.length - VISIBLE_TAG_COUNT,
              0
            );

            return (
              <article
                key={post.slug}
                className="self-start rounded-lg bg-[#f7f8fa] p-6 ring-1 ring-black/[0.06]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold uppercase text-[#0866ff]">
                    {post.category}
                  </span>
                  <span className="text-xs font-semibold text-[#7b8a97]">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-normal text-[#101820]">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 text-sm font-medium leading-6 text-[#52616d]">
                  {post.description}
                </p>
                {post.heroImage && (
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-black/[0.06]">
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
                  {visibleKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#52616d] ring-1 ring-black/[0.05]"
                    >
                      {keyword}
                    </span>
                  ))}
                  {hiddenKeywordCount > 0 && (
                    <span className="rounded-full bg-[#e7f0ff] px-3 py-1 text-xs font-extrabold text-[#0866ff] ring-1 ring-[#0866ff]/10">
                      ..more +{hiddenKeywordCount}
                    </span>
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/[0.07] pt-5">
                  <span className="text-xs font-semibold uppercase text-[#7b8a97]">
                    {post.targetSiteName}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#101820]"
                  >
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function getAbsoluteBlogUrl(slug: string) {
  return `${siteConfig.url}/blog/${slug}`;
}

function BlogHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/[0.07] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="KaamKarDo home">
          <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-[#101820]">
            <Image
              src="/kaamkardo-256.webp"
              alt="KaamKarDo Logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <span className="font-heading text-lg font-bold text-[#101820]">
            {siteConfig.name}
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#52616d] transition hover:text-[#0866ff]"
          >
            Ecosystem
          </Link>
          <Link
            href="https://resume.kaamkardo.com"
            className="hidden items-center gap-1 text-sm font-semibold text-[#52616d] transition hover:text-[#0866ff] sm:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
