import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Search } from "lucide-react";
import { ecosystemTools } from "@/lib/ecosystem";
import { cn } from "@/lib/utils";

const seoPillars = [
  "One parent brand that search engines can understand as the source entity.",
  "Focused subdomains for resumes, photos, skill roadmaps, social content, and SEO writing.",
  "Clear internal links that describe each product with matching search intent.",
  "Structured data that connects the ecosystem instead of leaving every tool isolated.",
];

export default function EcosystemSeoSections() {
  return (
    <section className="relative z-10 w-full border-t border-foreground/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
        <div>
          <p className="text-sm font-bold uppercase text-foreground/50">
            KaamKarDo umbrella
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight text-foreground md:text-5xl">
            One AI ecosystem for the work people search for every day.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/60 md:text-lg">
            KaamKarDo connects specialist AI tools under a single parent brand.
            Each subdomain owns one high-intent problem, while this domain helps
            users and crawlers understand how the whole ecosystem fits together.
          </p>
          <div className="mt-8 grid gap-3">
            {seoPillars.map((pillar) => (
              <div key={pillar} className="flex gap-3 text-sm leading-6 text-foreground/70">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {ecosystemTools.slice(1).map((tool) => (
            <Link
              key={tool.id}
              href={tool.url}
              className="group rounded-lg border border-foreground/10 bg-foreground/[0.035] p-5 transition hover:-translate-y-1 hover:border-foreground/20 hover:bg-foreground/[0.06]"
            >
              <div
                className={cn(
                  "mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-lg",
                  tool.accent
                )}
              >
                <tool.icon className="h-5 w-5" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold leading-snug text-foreground">
                  {tool.seoTitle}
                </h3>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground/35 transition group-hover:text-foreground" />
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/58">{tool.desc}</p>
              <p className="mt-4 text-xs font-semibold uppercase text-foreground/40">
                {tool.audience}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-8 md:pb-20">
        <div className="border-t border-foreground/10 pt-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-foreground/50">
              Search intent
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-foreground md:text-4xl">
              Long-tail searches KaamKarDo is built to answer.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecosystemTools.slice(1).map((tool) => (
              <div
                key={tool.id}
                className="rounded-lg border border-foreground/10 bg-foreground/[0.03] p-5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                      tool.accent
                    )}
                  >
                    <Search className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-extrabold text-foreground">
                    {tool.seoTitle}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {tool.longTailKeywords.map((keyword) => (
                    <li
                      key={keyword}
                      className="text-sm leading-6 text-foreground/62"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
