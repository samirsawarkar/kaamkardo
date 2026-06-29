import OmniSyncHeader from "@/components/kaamkardo/header";
import BgCanvasClient from "@/components/kaamkardo/bg-canvas-client";
import EcosystemSlider from "@/components/kaamkardo/ecosystem-slider";
import EcosystemSeoSections from "@/components/kaamkardo/ecosystem-seo-sections";
import BlogSection from "@/components/kaamkardo/blog-section";
import { ecosystemTools, siteConfig } from "@/lib/ecosystem";
import * as motion from "framer-motion/client";

export default function Home() {
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
          itemListElement: ecosystemTools.slice(1).map((tool, index) => ({
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
        about: ecosystemTools.flatMap((tool) => [
          tool.seoTitle,
          ...tool.keywords,
          ...tool.longTailKeywords,
        ]),
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
    ],
  };

  return (
    <div className="min-h-screen flex flex-col text-foreground selection:bg-foreground selection:text-background relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background: floating AI/Math formula canvas */}
      <BgCanvasClient />
      <OmniSyncHeader />

      <main
        id="main-content"
        className="min-h-screen flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 pt-24 pb-44 relative z-10"
      >
        {/* Social proof bar — moved to top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mb-6 text-sm text-foreground/50 font-medium"
        >
          {[
            ["50+", "AI Tools"],
            ["1M+", "Users Daily"],
            ["#1", "Platform"],
            ["99.9%", "Uptime"],
          ].map(([stat, label], i) => (
            <motion.div 
              key={label} 
              className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-foreground/5 border border-white/5 backdrop-blur-md shadow-sm"
              whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            >
              <span className="text-foreground/90 font-bold text-base md:text-lg">{stat}</span>
              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <EcosystemSlider />
      </main>
      <EcosystemSeoSections />
      <BlogSection />
    </div>
  );
}
