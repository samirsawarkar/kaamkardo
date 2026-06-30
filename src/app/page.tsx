import Image from "next/image";
import Link from "next/link";
import OmniSyncHeader from "@/components/kaamkardo/header";
import EcosystemSeoSections from "@/components/kaamkardo/ecosystem-seo-sections";
import BlogSection from "@/components/kaamkardo/blog-section";
import { ecosystemTools, siteConfig } from "@/lib/ecosystem";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  Globe2,
  Handshake,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const trustItems = [
  {
    icon: Gauge,
    title: "Fast by design",
    desc: "Server-rendered landing content, optimized images, and minimal client JavaScript on the first screen.",
  },
  {
    icon: Globe2,
    title: "Built for discovery",
    desc: "Clear headings, crawlable internal links, sitemap support, and structured data for every AI tool.",
  },
  {
    icon: ShieldCheck,
    title: "One trusted ecosystem",
    desc: "A clean parent brand that routes users to focused products for resumes, photos, skills, content, and SEO.",
  },
];

const trustSignals = [
  {
    icon: FileSearch,
    title: "Search-led editorial system",
    desc: "Every guide is mapped to a real user problem, a target product, long-tail search intent, and internal links that help readers continue the task.",
  },
  {
    icon: Handshake,
    title: "Clear product ownership",
    desc: "KaamKarDo acts as the parent brand for focused tools, so users can understand which workflow is best for resumes, photos, skills, social content, or SEO.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy-first routing",
    desc: "The homepage explains the ecosystem without asking for personal files. Uploads and account actions stay inside the specialist tools built for that workflow.",
  },
];

const homepageFaqs = [
  {
    question: "What is KaamKarDo?",
    answer:
      "KaamKarDo is an AI tools ecosystem for Indian professionals, creators, founders, marketers, students, and job seekers. It connects focused tools for resumes, AI photos, skill planning, LinkedIn content, and SEO writing.",
  },
  {
    question: "Which KaamKarDo tool should I use first?",
    answer:
      "Start with the tool that matches your immediate goal: resume optimization for job applications, PhotoReady for profile or creator images, SkillHub for career planning, Social for LinkedIn content, and SEO for search-led articles.",
  },
  {
    question: "Is KaamKarDo built for SEO?",
    answer:
      "Yes. The site uses crawlable pages, internal links, sitemap and robots routes, metadata, JSON-LD structured data, and long-tail content that maps each topic to the right specialist product.",
  },
  {
    question: "Does KaamKarDo replace human judgment?",
    answer:
      "No. KaamKarDo helps speed up structured work, but users should review important career, brand, and publishing outputs before using them publicly.",
  },
];

export default function Home() {
  const heroTool = ecosystemTools[0];
  const productTools = ecosystemTools.slice(1);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/kaamkardo.png`,
        description: siteConfig.description,
        sameAs: siteConfig.sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "KaamKarDo AI tools ecosystem",
          itemListElement: productTools.map((tool, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: tool.seoTitle,
            description: tool.desc,
            url: tool.url,
            category: tool.keywords[0],
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/blog?query={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
        about: ecosystemTools.flatMap((tool) => [
          tool.seoTitle,
          ...tool.keywords,
          ...tool.longTailKeywords,
        ]),
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: "KaamKarDo AI tools ecosystem",
        description: siteConfig.description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/kaamkardo.png`,
        },
        breadcrumb: {
          "@id": `${siteConfig.url}/#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${siteConfig.url}/#site-navigation`,
        name: ["AI tools", "Why KaamKarDo", "Blog"],
        url: [`${siteConfig.url}/#tools`, `${siteConfig.url}/#why`, `${siteConfig.url}/blog`],
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#tools`,
        name: "KaamKarDo AI tools",
        itemListElement: ecosystemTools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.seoTitle,
          url: tool.url,
          description: tool.desc,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: homepageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-[#0f191f] selection:bg-[#0866ff] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <OmniSyncHeader />

      <main id="main-content">
        <section className="relative overflow-hidden border-b border-black/[0.07] bg-[#f7f8fa] pt-16">
          <div className="mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-[1500px] items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:py-16 lg:px-8">
            <div className="relative z-10 max-w-2xl pt-8 md:pt-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-[#46515c] shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]">
                <CheckCircle2 className="h-4 w-4 text-[#0866ff]" />
                India-first AI tools for real work
              </div>
              <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-normal text-[#0f191f] sm:text-6xl lg:text-[82px]">
                {heroTool.title}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg font-medium leading-8 text-[#52616d] sm:text-xl">
                KaamKarDo helps professionals, creators, founders, and job seekers move faster with focused AI tools for resumes, photos, skills, LinkedIn content, and SEO writing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#tools"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0866ff] px-7 text-base font-bold text-white shadow-[0_14px_30px_rgba(8,102,255,0.24)] transition hover:bg-[#005be6]"
                >
                  Explore AI tools
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-[#111820] shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.08] transition hover:bg-[#eef2f6]"
                >
                  Read SEO guides
                </Link>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-b-[28px] bg-white shadow-[0_32px_90px_rgba(15,25,31,0.12)] ring-1 ring-black/[0.06] md:min-h-[680px]">
              <div className="absolute inset-x-0 top-0 z-10 flex h-14 items-center justify-between border-b border-black/[0.06] bg-white/92 px-5 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <Image
                    src="/kaamkardo-256.webp"
                    alt=""
                    width={26}
                    height={26}
                    priority
                    className="rounded-md"
                  />
                  <span className="text-sm font-extrabold">KaamKarDo</span>
                </div>
                <div className="hidden gap-7 text-sm font-semibold text-[#1a242d] sm:flex">
                  <span>Resume</span>
                  <span>Photos</span>
                  <span>SEO</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f2f5f8_62%,#e8edf2_100%)]" />
              <div className="absolute -right-28 top-20 h-[420px] w-[420px] rounded-full bg-[#dfe8f8]" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-5 pt-24 sm:grid-cols-2 lg:grid-cols-3">
                {productTools.map((tool, index) => (
                  <Link
                    key={tool.id}
                    href={tool.url}
                    className={cn(
                      "group relative min-h-[168px] overflow-hidden rounded-lg bg-white p-5 shadow-[0_18px_44px_rgba(15,25,31,0.10)] ring-1 ring-black/[0.06] transition hover:-translate-y-1",
                      index === 0 && "sm:col-span-2 lg:col-span-1"
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className={cn(
                          "flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br text-white",
                          tool.accent
                        )}
                      >
                        {tool.logoImg ? (
                          <Image
                            src={tool.logoImg}
                            alt=""
                            width={44}
                            height={44}
                            className="h-11 w-11 rounded-lg object-cover"
                          />
                        ) : (
                          <tool.icon className="h-5 w-5" />
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#8a98a5] transition group-hover:text-[#0866ff]" />
                    </div>
                    <h2 className="mt-5 text-xl font-extrabold leading-tight tracking-normal text-[#111820]">
                      {tool.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm font-medium leading-6 text-[#5e6b76]">
                      {tool.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="bg-white">
          <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <h2 className="text-center text-4xl font-black tracking-normal text-[#101820] md:text-5xl">
              Why use KaamKarDo?
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {trustItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg bg-[#f2f5f8] p-8 ring-1 ring-black/[0.04]"
                >
                  <item.icon className="h-9 w-9 text-[#0866ff]" />
                  <h3 className="mt-8 text-2xl font-extrabold tracking-normal text-[#101820]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base font-medium leading-7 text-[#52616d]">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/[0.07] bg-[#f7f8fa]">
          <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:py-24 lg:px-8">
            <div>
              <p className="text-sm font-extrabold uppercase text-[#0866ff]">
                Trust and editorial standards
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
                Built to be useful before it asks for anything.
              </h2>
              <p className="mt-5 text-lg font-medium leading-8 text-[#52616d]">
                KaamKarDo earns trust by making the ecosystem easy to inspect:
                clear product pages, clear search intent, and practical guides
                that explain what each AI workflow is for.
              </p>
            </div>

            <div className="grid gap-5">
              {trustSignals.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg bg-white p-6 ring-1 ring-black/[0.06]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#e7f0ff] text-[#0866ff]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold tracking-normal text-[#101820]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-base font-medium leading-7 text-[#52616d]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase text-[#0866ff]">
                KaamKarDo FAQ
              </p>
              <h2 className="mt-4 text-balance text-4xl font-black leading-tight tracking-normal text-[#101820] md:text-5xl">
                Answers before you choose a tool.
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4">
              {homepageFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-lg bg-[#f7f8fa] p-6 ring-1 ring-black/[0.06]"
                >
                  <h3 className="text-lg font-extrabold tracking-normal text-[#101820]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-base font-medium leading-7 text-[#52616d]">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <EcosystemSeoSections />
      <BlogSection />
    </div>
  );
}
