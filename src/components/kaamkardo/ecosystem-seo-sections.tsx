import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import { ecosystemTools } from "@/lib/ecosystem";
import { cn } from "@/lib/utils";

const seoPillars = [
  "One parent brand that search engines can understand as the source entity.",
  "Focused subdomains for resumes, photos, skill roadmaps, social content, and SEO writing.",
  "Clear internal links that describe each product with matching search intent.",
  "Structured data that connects the ecosystem instead of leaving every tool isolated.",
];

export default function EcosystemSeoSections() {
  const productTools = ecosystemTools.slice(1);

  return (
    <section id="tools" className="bg-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase text-[#0866ff]">
            Explore the KaamKarDo ecosystem
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
            One AI ecosystem for the work people search for every day.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-[#52616d]">
            Each product owns one high-intent problem, while KaamKarDo connects the full journey for users and crawlers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {productTools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.url}
              className="group rounded-lg bg-[#f2f5f8] p-6 ring-1 ring-black/[0.04] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(15,25,31,0.12)]"
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-sm",
                  tool.accent
                )}
              >
                {tool.logoImg ? (
                  <Image
                    src={tool.logoImg}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ) : (
                  <tool.icon className="h-5 w-5" />
                )}
              </div>
              <div className="mt-7 flex items-start justify-between gap-3">
                <h3 className="text-xl font-extrabold leading-tight tracking-normal text-[#111820]">
                  {tool.seoTitle}
                </h3>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#8a98a5] transition group-hover:text-[#0866ff]" />
              </div>
              <p className="mt-4 text-sm font-medium leading-6 text-[#52616d]">
                {tool.desc}
              </p>
              <p className="mt-6 text-xs font-extrabold uppercase text-[#7b8a97]">
                {tool.audience}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-[#eef2f6]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.88fr_1.12fr] md:py-24 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#0866ff]">
              SEO foundation
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
              Clean content architecture for long-term organic growth.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-[#52616d]">
              The homepage explains the entity, the products, and the search intent behind every subdomain. That gives people a smoother path and gives search engines a stronger map.
            </p>
          </div>

          <div className="grid gap-4">
            {seoPillars.map((pillar) => (
              <div key={pillar} className="flex gap-4 rounded-lg bg-white p-5 ring-1 ring-black/[0.04]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0866ff]" />
                <p className="text-base font-semibold leading-7 text-[#26323c]">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase text-[#0866ff]">
              Search intent
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
              Long-tail searches KaamKarDo is built to answer.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {productTools.map((tool) => (
              <article
                key={tool.id}
                className="rounded-lg border border-black/[0.06] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7f0ff] text-[#0866ff]">
                    <Search className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-extrabold tracking-normal text-[#111820]">
                    {tool.seoTitle}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {tool.longTailKeywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="text-sm font-medium leading-6 text-[#52616d]"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
