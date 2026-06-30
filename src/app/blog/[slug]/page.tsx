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

  const blogPostingJsonLd = {
    "@type": "BlogPosting",
    "@id": `${getBlogPostUrl(post.slug)}#article`,
    headline: post.title,
    description: post.description,
    inLanguage: "en-IN",
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
    keywords: post.keywords.join(", "),
    articleSection: post.category,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      blogPostingJsonLd,
      {
        "@type": "BreadcrumbList",
        "@id": `${getBlogPostUrl(post.slug)}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: getBlogPostUrl(post.slug),
          },
        ],
      },
      ...(post.faqs
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
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
      <article className="mx-auto w-full max-w-4xl px-6 pb-20 pt-10 md:px-8 md:pb-24">
        <nav className="mb-12 flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#52616d] transition hover:text-[#0866ff]"
          >
            <ArrowLeft className="h-4 w-4" />
            Blog
          </Link>
          <Link href="/" className="flex items-center gap-3" aria-label="KaamKarDo home">
            <span className="relative h-8 w-8 overflow-hidden rounded-lg bg-[#101820]">
              <Image
                src="/kaamkardo-256.webp"
                alt="KaamKarDo Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="font-heading text-base font-bold text-[#101820]">
              {siteConfig.name}
            </span>
          </Link>
        </nav>

        <header>
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase text-[#7b8a97]">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#a8b3bd]" />
            <time dateTime={post.publishedAt}>
              {new Date(`${post.publishedAt}T00:00:00`).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="h-1 w-1 rounded-full bg-[#a8b3bd]" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-xl font-medium leading-8 text-[#52616d]">
            {post.intro}
          </p>
          {post.heroImage && (
            <figure className="mt-10 overflow-hidden rounded-lg border border-black/[0.06] bg-[#f7f8fa]">
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
              <figcaption className="border-t border-black/[0.06] px-4 py-3 text-sm leading-6 text-[#52616d]">
                {post.heroImage.caption}
              </figcaption>
            </figure>
          )}
        </header>

        <div className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-extrabold text-[#101820]">
                {section.heading}
              </h2>
              {(Array.isArray(section.body) ? section.body : [section.body]).map(
                (paragraph) => (
                  <p key={paragraph} className="mt-4 text-lg leading-8 text-[#52616d]">
                    {paragraph}
                  </p>
                )
              )}
              {section.image && (
                <figure className="mt-8 overflow-hidden rounded-lg border border-black/[0.06] bg-[#f7f8fa]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(min-width: 768px) 896px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-black/[0.06] px-4 py-3 text-sm leading-6 text-[#52616d]">
                    {section.image.caption}
                  </figcaption>
                </figure>
              )}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-black/[0.06] bg-[#f7f8fa] p-6">
          <p className="text-sm font-bold uppercase text-[#0866ff]">
            Related KaamKarDo tool
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#101820]">
            {post.targetSiteName}
          </h2>
          <p className="mt-3 text-base leading-7 text-[#52616d]">
            Continue from this guide into the specialist product built for this
            exact search intent.
          </p>
          <Link
            href={post.cta.href}
            className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-[#0866ff] px-5 text-sm font-bold text-white transition hover:bg-[#005be6]"
          >
            {post.cta.label}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {post.relatedLinks && (
          <section className="mt-12 border-t border-black/[0.07] pt-8">
            <h2 className="text-xl font-extrabold text-[#101820]">
              Related reading
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {post.relatedLinks.map((relatedLink) => (
                <Link
                  key={relatedLink.href}
                  href={relatedLink.href}
                  className="rounded-lg border border-black/[0.06] bg-[#f7f8fa] p-4 transition hover:border-[#0866ff]/30 hover:bg-white"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#101820]">
                    {relatedLink.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[#52616d]">
                    {relatedLink.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {post.faqs && (
          <section className="mt-12 border-t border-black/[0.07] pt-8">
            <h2 className="text-xl font-extrabold text-[#101820]">
              AI image marketplace FAQ
            </h2>
            <div className="mt-5 grid gap-4">
              {post.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-black/[0.06] bg-[#f7f8fa] p-5"
                >
                  <h3 className="text-base font-extrabold text-[#101820]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#52616d]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {post.references && (
          <section className="mt-12 border-t border-black/[0.07] pt-8">
            <h2 className="text-xl font-extrabold text-[#101820]">Sources</h2>
            <ul className="mt-4 grid gap-3">
              {post.references.map((reference) => (
                <li key={reference.href}>
                  <Link
                    href={reference.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-[#52616d] transition hover:text-[#0866ff]"
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
