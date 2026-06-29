import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blog";

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="relative z-10 w-full border-t border-foreground/10 bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-foreground/50">
              Ecosystem blog
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-foreground md:text-5xl">
              Search-led articles for every KaamKarDo subdomain.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/60 md:text-lg">
              Publish helpful guides on the umbrella site, then route readers to
              the right specialist product: resumes, photos, skills, social, or
              SEO content.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex h-10 w-fit items-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-background"
          >
            View blog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-foreground/10 bg-foreground/[0.035] p-5 transition hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.06]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase text-foreground/45">
                  {post.category}
                </span>
                <ArrowUpRight className="h-4 w-4 text-foreground/35 transition group-hover:text-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold leading-tight text-foreground">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-foreground/58">
                {post.description}
              </p>
              <p className="mt-6 text-xs font-semibold uppercase text-foreground/40">
                Links to {post.targetSiteName}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
