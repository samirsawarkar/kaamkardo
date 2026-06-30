import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "About KaamKarDo",
  description:
    "Learn how KaamKarDo organizes focused AI tools for Indian professionals, creators, founders, marketers, students, and job seekers.",
  alternates: {
    canonical: "/about",
  },
};

const points = [
  "We organize AI tools around specific user jobs instead of vague all-in-one promises.",
  "We publish search-led guides that explain the problem, the workflow, and the right specialist product.",
  "We keep the parent site crawlable, fast, and easy to inspect before sending users to a tool.",
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteConfig.url}/about/#about`,
    url: `${siteConfig.url}/about`,
    name: "About KaamKarDo",
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/kaamkardo.png`,
    },
  };

  return (
    <main className="min-h-screen bg-white text-[#0f191f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#52616d] transition hover:text-[#0866ff]"
        >
          <ArrowLeft className="h-4 w-4" />
          Home
        </Link>
        <p className="mt-12 text-sm font-extrabold uppercase text-[#0866ff]">
          About KaamKarDo
        </p>
        <h1 className="mt-4 text-balance text-5xl font-black leading-tight tracking-normal text-[#101820] md:text-6xl">
          A focused AI ecosystem for work that needs to get done.
        </h1>
        <p className="mt-6 text-xl font-medium leading-8 text-[#52616d]">
          KaamKarDo helps Indian professionals, creators, founders, marketers,
          students, and job seekers find the right AI workflow faster. The
          parent site explains the ecosystem; each specialist product handles a
          focused job like resume optimization, profile photos, skill planning,
          LinkedIn content, or SEO writing.
        </p>
        <div className="mt-10 grid gap-4">
          {points.map((point) => (
            <div key={point} className="flex gap-4 rounded-lg bg-[#f7f8fa] p-5 ring-1 ring-black/[0.06]">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0866ff]" />
              <p className="text-base font-semibold leading-7 text-[#26323c]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
