import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { ecosystemTools, siteConfig } from "@/lib/ecosystem";

const footerGroups = [
  {
    title: "KaamKarDo tools",
    links: ecosystemTools.slice(1).map((tool) => ({
      label: tool.seoTitle,
      href: tool.url,
    })),
  },
  {
    title: "Search topics",
    links: [
      { label: "ATS resume checker", href: "https://resume.kaamkardo.com" },
      { label: "AI headshots India", href: "https://photoready.kaamkardo.com" },
      { label: "Career skill roadmap", href: "https://skillhub.kaamkardo.com" },
      { label: "LinkedIn post generator", href: "https://social.kaamkardo.com" },
      { label: "SEO article writer", href: "https://seo.kaamkardo.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Blog", href: "/blog" },
      { label: "All AI tools", href: "#tools" },
      { label: "Why KaamKarDo", href: "#why" },
    ],
  },
];

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="bg-[#f7f8fa]">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase text-[#0866ff]">
                The latest from KaamKarDo
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
                Helpful guides that route readers to the right AI workflow.
              </h2>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#52616d]">
                Publish practical, search-led articles on the umbrella site, then send readers to the specialist product that solves their job.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#111820] shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.08] transition hover:bg-[#eef2f6]"
            >
              View blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-lg bg-white p-6 ring-1 ring-black/[0.06] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,25,31,0.12)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold uppercase text-[#0866ff]">
                    {post.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#8a98a5] transition group-hover:text-[#0866ff]" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-normal text-[#101820]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#52616d]">
                  {post.description}
                </p>
                <p className="mt-7 text-xs font-extrabold uppercase text-[#7b8a97]">
                  Links to {post.targetSiteName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.07] bg-white">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_1.95fr] md:py-20 lg:px-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="KaamKarDo home">
              <Image
                src="/kaamkardo-256.webp"
                alt=""
                width={38}
                height={38}
                className="rounded-lg"
              />
              <span className="text-2xl font-extrabold tracking-normal text-[#101820]">
                KaamKarDo
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-[#52616d]">
              Fast AI tools for career, content, image, and SEO work. Built as one clean ecosystem for Indian professionals and creators.
            </p>
            <p className="mt-8 text-sm font-semibold text-[#6a7884]">
              India (English)
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-extrabold text-[#101820]">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm font-semibold leading-6 text-[#60707e] transition hover:text-[#0866ff]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-3 border-t border-black/[0.07] px-4 py-6 text-xs font-semibold text-[#6a7884] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.description}</p>
        </div>
      </footer>
    </>
  );
}
