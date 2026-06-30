import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "KaamKarDo's editorial policy for search-led guides, AI workflow recommendations, internal linking, and content updates.",
  alternates: {
    canonical: "/editorial-policy",
  },
};

const standards = [
  {
    title: "Search intent first",
    desc: "Articles are planned around real user questions and mapped to the KaamKarDo tool that best matches the task.",
  },
  {
    title: "Practical explanations",
    desc: "Guides focus on steps, examples, tradeoffs, and next actions instead of generic AI hype.",
  },
  {
    title: "Clear routing",
    desc: "Internal links are used to help readers continue the workflow, not to hide where a product link goes.",
  },
  {
    title: "Human review",
    desc: "Important career, publishing, profile, and SEO outputs should be reviewed by users before being used publicly.",
  },
];

export default function EditorialPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/editorial-policy/#webpage`,
    url: `${siteConfig.url}/editorial-policy`,
    name: "KaamKarDo Editorial Policy",
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
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
          Editorial policy
        </p>
        <h1 className="mt-4 text-balance text-5xl font-black leading-tight tracking-normal text-[#101820] md:text-6xl">
          How KaamKarDo creates useful search-led content.
        </h1>
        <p className="mt-6 text-xl font-medium leading-8 text-[#52616d]">
          KaamKarDo content exists to help readers understand a task, compare
          workflow options, and move to the right specialist product with clear
          expectations.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {standards.map((standard) => (
            <section key={standard.title} className="rounded-lg bg-[#f7f8fa] p-6 ring-1 ring-black/[0.06]">
              <h2 className="text-xl font-extrabold tracking-normal text-[#101820]">
                {standard.title}
              </h2>
              <p className="mt-3 text-base font-medium leading-7 text-[#52616d]">
                {standard.desc}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
