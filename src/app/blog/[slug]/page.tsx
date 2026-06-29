import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, getBlogPost, getBlogPostUrl } from "@/lib/blog";
import { siteConfig } from "@/lib/ecosystem";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  const ogImages = post.heroImage
    ? [
        {
          url: post.heroImage.src,
          width: 1672,
          height: 941,
          alt: post.heroImage.alt,
        },
      ]
    : undefined;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
      tags: post.keywords,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.heroImage ? [post.heroImage.src] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: getBlogPostUrl(post.slug),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/kaamkardo.png`,
      },
    },
    about: post.keywords,
    isPartOf: {
      "@type": "Blog",
      name: "KaamKarDo Blog",
      url: `${siteConfig.url}/blog`,
    },
    mentions: {
      "@type": "WebSite",
      name: post.targetSiteName,
      url: post.targetSiteUrl,
    },
    image: [
      post.heroImage?.src,
      ...post.sections.map((section) => section.image?.src),
    ]
      .filter(Boolean)
      .map((src) => `${siteConfig.url}${src}`),
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto w-full max-w-4xl px-6 pb-20 pt-10 md:px-8 md:pb-24">
        <nav className="mb-12 flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground/65 transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>
          <Link href="/" className="flex items-center gap-3" aria-label="KaamKarDo home">
            <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-foreground">
              <Image
                src="/kaamkardo-256.webp"
                alt="KaamKarDo Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="font-heading text-base font-bold text-foreground">
              {siteConfig.name}
            </span>
          </Link>
        </nav>

        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-foreground/45">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <time dateTime={post.publishedAt}>
              {new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight text-foreground md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-foreground/62">
            {post.intro}
          </p>
          {post.heroImage && (
            <figure className="mt-10 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.heroImage.src}
                  alt={post.heroImage.alt}
                  fill
                  sizes="(min-width: 768px) 896px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="border-t border-foreground/10 px-4 py-3 text-sm leading-6 text-foreground/55">
                {post.heroImage.caption}
              </figcaption>
            </figure>
          )}
        </header>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold text-foreground">
                {section.heading}
              </h2>
              {(Array.isArray(section.body) ? section.body : [section.body]).map(
                (paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-8 text-foreground/65">
                    {paragraph}
                  </p>
                )
              )}
              {section.image && (
                <figure className="mt-8 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/[0.035]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(min-width: 768px) 896px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-foreground/10 px-4 py-3 text-sm leading-6 text-foreground/55">
                    {section.image.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-foreground/10 bg-foreground/[0.04] p-6">
          <p className="text-sm font-bold uppercase text-foreground/45">
            Related KaamKarDo tool
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-foreground">
            {post.targetSiteName}
          </h2>
          <p className="mt-3 text-base leading-7 text-foreground/60">
            Continue from this guide into the specialist product built for this
            exact search intent.
          </p>
          <Link
            href={post.cta.href}
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-bold text-background transition hover:opacity-90"
          >
            {post.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {post.references && (
          <section className="mt-12 border-t border-foreground/10 pt-8">
            <h2 className="text-xl font-extrabold text-foreground">Sources</h2>
            <ul className="mt-4 grid gap-3">
              {post.references.map((reference) => (
                <li key={reference.href}>
                  <Link
                    href={reference.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-foreground/65 transition hover:text-foreground"
                  >
                    {reference.label}
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
