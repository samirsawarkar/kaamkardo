import { ecosystemTools, siteConfig } from "@/lib/ecosystem";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  heroImage?: BlogImage;
  targetSiteId: string;
  targetSiteName: string;
  targetSiteUrl: string;
  keywords: string[];
  intro: string;
  sections: {
    heading: string;
    body: string | string[];
    image?: BlogImage;
  }[];
  cta: {
    label: string;
    href: string;
  };
  relatedLinks?: {
    label: string;
    href: string;
    description: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  references?: {
    label: string;
    href: string;
  }[];
};

export type BlogImage = {
  src: string;
  alt: string;
  caption: string;
};

function getTool(id: string) {
  const tool = ecosystemTools.find((item) => item.id === id);

  if (!tool) {
    throw new Error(`Unknown ecosystem tool: ${id}`);
  }

  return tool;
}

const resumeTool = getTool("resume");
const photoTool = getTool("photo");
const skillTool = getTool("skill");
const linkedinTool = getTool("linkedin");
const seoTool = getTool("seo");

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-image-marketplace-prompt-marketplaces",
    title: "AI Image Marketplace: Why Prompt Marketplaces Win",
    description:
      "Why AI image marketplaces, prompt marketplaces, and curated style galleries grow as image generation gets cheaper.",
    publishedAt: "2026-06-29",
    readTime: "8 min read",
    category: "AI Image Marketplaces",
    heroImage: {
      src: "/blog/ai-image-marketplace/ai-image-marketplace-hero.png",
      alt: "A premium AI image marketplace interface with curated visual style cards flowing through a generative AI network.",
      caption:
        "As generation gets cheaper, the valuable layer shifts to discovery, curation, and recognizable finished outcomes.",
    },
    targetSiteId: photoTool.id,
    targetSiteName: photoTool.seoTitle,
    targetSiteUrl: photoTool.url,
    keywords: [
      "AI image marketplace",
      "AI prompt marketplace",
      "AI image generation",
      "PhotoReady India",
      "AI headshots India",
      "prompt marketplace SEO",
      "AI style marketplace",
    ],
    intro:
      "An AI image marketplace does not compete with image generation. It solves the harder problem around it: helping people recognize the style, prompt, moodboard, or finished visual outcome they want before they can ask for it.",
    sections: [
      {
        heading: "Why the AI image marketplace is growing",
        body: [
          "If the obvious prediction were right, the AI prompt marketplace should be shrinking as models get better at understanding plain instructions. Instead, public market research continues to project strong growth for prompt marketplaces and AI image generation platforms. Grand View Research estimates the AI prompt marketplace at $1.406 billion in 2024, with a projected $10.992 billion market by 2033. SkyQuest projects the AI image generator market growing from $3.16 billion in 2025 to $30.02 billion by 2033.",
          "This should not make sense at first glance. Many of the models these prompts are written for are accessible to the same buyer. Nothing stops someone from typing their own request into Midjourney or another image model instead of buying a tested prompt or browsing a finished style. And yet marketplaces keep growing because buyers are not only paying for words. They are paying for proof that someone else has already solved the specification problem.",
          "The AI headshot niche tells the same story at a narrower scale. Industry estimates vary, but recent public analyses place the 2025 AI portrait and headshot market in the hundreds of millions of dollars, with continued growth projected. If generation quality were the only variable, this sub-market should have flattened as soon as AI headshots became good enough. It has not, because the value is not just generation. The value is helping a user choose the right look.",
        ],
      },
      {
        heading: "The bottleneck was never generation. It is specification.",
        body: [
          "Here is the actual mechanism: most people do not know what they want until they see it. That is a known psychological problem wearing an AI costume.",
          "Sheena Iyengar and Mark Lepper's famous 2000 choice study found that a booth with more jam flavors attracted more browsers, while the smaller selection converted better. Later research challenged a simple universal interpretation of choice overload, including a 2010 meta-analysis that found the average effect closer to zero and highly dependent on context. So the lesson is not that fewer options always win.",
          "The deeper point is more useful for AI products: choice and specification are not the same skill. Ask someone to describe the exact headshot they want: the lighting, the smile, the background, the cultural signals, the approachable-but-credible feeling. Most people freeze because they have never had to turn that mental image into precise language. They know it when they see it. They cannot describe it before they see it.",
          "A model that generates exactly what you type is only useful to the extent you can type the right thing. Generation solved the question, can a machine paint this? It did not solve the question, do I know what I want?",
        ],
        image: {
          src: "/blog/ai-image-marketplace/recognition-vs-specification.png",
          alt: "A user moves from a blank AI prompt box to a curated gallery of finished image styles, showing recognition over specification.",
          caption:
            "The product problem is not only output quality. It is helping users move from vague intent to a concrete visual choice.",
        },
      },
      {
        heading: "The product evidence is already public",
        body: [
          "You can watch this play out inside AI image tools themselves. The products with the strongest generation engines still invest heavily in feeds, galleries, style references, moodboards, and examples. That is not a side feature. It is the interface layer where users learn what they want.",
          "AI headshot tools follow the same pattern. Users rarely begin with a perfect written prompt. They start by looking at finished examples and pointing: that lighting, that outfit, that mood, that level of polish. The generation step happens after the human has already made a visual decision.",
          "PhotoReady, an India-focused AI style marketplace, builds around this insight instead of treating it as an afterthought. Creators publish finished styles for LinkedIn headshots, wedding portraits, dating-app photos, festival portraits, temple portraits, and reel thumbnails. Users browse finished outcomes, pick one, upload their photo, and generate their version of a look they already understand.",
          "That is not a generation tool with a gallery attached. The gallery is the product. Generation is the fulfillment step after recognition has already happened.",
        ],
        image: {
          src: "/blog/ai-image-marketplace/photoready-india-marketplace.png",
          alt: "Indian professionals browse AI photo styles for headshots, weddings, creator photos, and cultural portraits on desktop and mobile screens.",
          caption:
            "Culturally specific visual vocabulary gives marketplaces an edge that generic prompt boxes struggle to match.",
        },
      },
      {
        heading: "Where the value actually accumulates",
        body: [
          "This is the same pattern the rest of the AI stack is showing, just visible faster in images because the feedback loop is instant. The model commoditizes. The product layer around the model does not.",
          "Prompt marketplaces are not only selling text strings. They are selling tested outcomes, previews, social proof, and reduced uncertainty. Pinterest understood this long before generative AI existed: people go there to recognize, not to describe.",
          "The naive read on AI image generation is that better models mean less need for places to browse and compare. The stronger read is the inverse: better, cheaper, more abundant generation creates an ocean of options that most users cannot specify their way through alone. That makes the marketplace more valuable, not less.",
        ],
        image: {
          src: "/blog/ai-image-marketplace/curated-marketplace-growth.png",
          alt: "A stream of raw AI-generated images is organized into a curated marketplace gallery where one image is selected and highlighted.",
          caption:
            "Abundance increases the value of curation: users need a place to point before they prompt.",
        },
      },
      {
        heading: "The prediction",
        body: [
          "The winners in AI image generation over the next three years will not only be the labs with the sharpest models. Image quality is converging fast enough that it becomes harder to defend as the only differentiator.",
          "The winners will be the teams that own the layer where people recognize what they want before they generate it: the gallery, the feed, the marketplace, the moodboard, the style library. That layer does not have to be global to win. It can be built around a specific market's visual vocabulary: Indian wedding portraits, festival looks, LinkedIn headshots styled for local professional norms, or creator thumbnails shaped by regional aesthetics.",
          "Prompting was never the only skill that mattered. Recognizing is. And recognizing is a problem a marketplace can solve better than a blank prompt box.",
        ],
      },
    ],
    cta: {
      label: "Explore PhotoReady styles",
      href: photoTool.url,
    },
    relatedLinks: [
      {
        label: "AI headshots India",
        href: "/blog/ai-headshots-for-linkedin-india",
        description:
          "See how AI headshots become a practical marketplace category for Indian professionals and creators.",
      },
      {
        label: "SEO articles for product growth",
        href: "/blog/seo-articles-that-support-product-growth",
        description:
          "Build supporting articles that pass authority from the KaamKarDo umbrella into each focused product.",
      },
      {
        label: "LinkedIn content ideas for professionals",
        href: "/blog/linkedin-content-ideas-for-professionals",
        description:
          "Connect visual branding with the content formats professionals use after their profile looks credible.",
      },
    ],
    faqs: [
      {
        question: "What is an AI image marketplace?",
        answer:
          "An AI image marketplace is a platform where users browse finished image styles, prompts, templates, or creator-made visual workflows before generating or buying images.",
      },
      {
        question: "Will AI replace stock photo marketplaces?",
        answer:
          "AI will reduce demand for generic stock photos, but it increases demand for curated galleries, style libraries, and marketplaces that help people choose what to generate.",
      },
      {
        question: "What is an AI prompt marketplace?",
        answer:
          "An AI prompt marketplace sells tested prompts or visual recipes that produce specific outcomes in AI tools, reducing the need for users to write prompts from scratch.",
      },
      {
        question: "Why does PhotoReady use a style marketplace model?",
        answer:
          "PhotoReady lets Indian users pick from finished looks such as LinkedIn headshots, wedding portraits, and creator photos, then generate their own version without writing prompts.",
      },
      {
        question: "How do AI image marketplaces help SEO and branding?",
        answer:
          "They create searchable style pages, image-led content, internal links, and brand vocabulary that can rank for long-tail searches around AI photos, prompts, and professional visuals.",
      },
    ],
    references: [
      {
        label: "Grand View Research: AI prompt marketplace market report",
        href: "https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-prompt-marketplace-market-report",
      },
      {
        label: "SkyQuest: AI image generator market forecast",
        href: "https://www.skyquestt.com/report/ai-image-generator-market",
      },
      {
        label: "Proshoot: AI headshot statistics",
        href: "https://www.proshoot.co/blog/ai-headshot-statistics",
      },
      {
        label: "Iyengar and Lepper: When Choice is Demotivating",
        href: "https://pubmed.ncbi.nlm.nih.gov/11138768/",
      },
      {
        label: "Scheibehenne, Greifeneder, and Todd: Choice overload meta-analysis",
        href: "https://academic.oup.com/jcr/article/37/3/409/1827647",
      },
    ],
  },
  {
    slug: "ats-resume-score-before-applying",
    title: "Why you should check your ATS resume score before every job application",
    description:
      "A practical guide for job seekers on using an ATS resume checker to find weak bullets, missing keywords, and formatting issues before applying.",
    publishedAt: "2026-06-29",
    readTime: "5 min read",
    category: "Resume SEO",
    targetSiteId: resumeTool.id,
    targetSiteName: resumeTool.seoTitle,
    targetSiteUrl: resumeTool.url,
    keywords: ["ATS resume score", "resume checker", "resume optimization"],
    intro:
      "Most resumes are rejected before a recruiter reads them. An ATS resume score gives you a fast way to spot the gaps that quietly block interview calls.",
    sections: [
      {
        heading: "ATS systems look for fit before style",
        body:
          "Applicant tracking systems compare your resume against the role, skills, and language in the job description. A clean design helps, but the real signal is whether your resume uses the right keywords, achievements, dates, and role-specific context.",
      },
      {
        heading: "A score turns vague feedback into a checklist",
        body:
          "Instead of guessing why a resume is not working, a score highlights missing skills, weak action verbs, formatting problems, and sections that need more evidence. That makes each application easier to improve.",
      },
      {
        heading: "The best time to check is before you apply",
        body:
          "Checking after weeks of silence is too late. Run the resume before important applications, tune it for the role, and keep a stronger base version for future openings.",
      },
    ],
    cta: {
      label: "Check your resume score",
      href: resumeTool.url,
    },
  },
  {
    slug: "ai-headshots-for-linkedin-india",
    title: "How AI headshots help Indian professionals look credible online",
    description:
      "Learn how founders, job seekers, and creators can use AI headshots and Indian style photo prompts for stronger LinkedIn and profile branding.",
    publishedAt: "2026-06-29",
    readTime: "4 min read",
    category: "AI Photos",
    targetSiteId: photoTool.id,
    targetSiteName: photoTool.seoTitle,
    targetSiteUrl: photoTool.url,
    keywords: ["AI headshots India", "LinkedIn profile photo", "AI photo generator"],
    intro:
      "Your profile photo is often the first trust signal a recruiter, client, or follower sees. AI headshots make it easier to create a polished image without booking a studio shoot.",
    sections: [
      {
        heading: "A good headshot reduces friction",
        body:
          "People make fast judgments online. A clear, professional image helps your profile feel complete, current, and trustworthy before someone reads your bio or experience.",
      },
      {
        heading: "Indian context matters",
        body:
          "Generic photo styles can feel disconnected from local expectations. Indian-context prompts help with outfits, backgrounds, wedding looks, creator shots, and professional styles that feel more familiar.",
      },
      {
        heading: "Use one visual system across platforms",
        body:
          "Use a consistent photo style on LinkedIn, resumes, portfolios, and creator profiles. Consistency makes your personal brand easier to remember and recognize.",
      },
    ],
    cta: {
      label: "Generate AI photos",
      href: photoTool.url,
    },
  },
  {
    slug: "career-skill-roadmap-before-switching-jobs",
    title: "How to build a career skill roadmap before switching jobs",
    description:
      "A practical guide for students and professionals on choosing job-ready skills, sequencing learning, and using a career roadmap before a role switch.",
    publishedAt: "2026-06-29",
    readTime: "5 min read",
    category: "Skill Planning",
    targetSiteId: skillTool.id,
    targetSiteName: skillTool.seoTitle,
    targetSiteUrl: skillTool.url,
    keywords: ["career skill roadmap", "job ready skills India", "career switch roadmap"],
    intro:
      "A career switch gets easier when you can see the steps. A skill roadmap turns a broad goal into a sequence of skills, projects, and proof that employers can understand.",
    sections: [
      {
        heading: "Start with the role, not the course",
        body:
          "Courses are useful only when they map to a target role. Begin with the job titles you want, then identify repeated skills from descriptions, portfolios, and hiring expectations.",
      },
      {
        heading: "Sequence skills by hiring signal",
        body:
          "Learn the skills that create visible proof first. Projects, case studies, GitHub work, dashboards, or writing samples can show progress faster than a long list of unfinished certifications.",
      },
      {
        heading: "Review the roadmap every few weeks",
        body:
          "Markets shift and your strengths become clearer with practice. A good roadmap should be updated as you complete projects, apply to roles, and learn which skills create the strongest response.",
      },
    ],
    cta: {
      label: "Build your skill roadmap",
      href: skillTool.url,
    },
  },
  {
    slug: "linkedin-content-ideas-for-professionals",
    title: "LinkedIn content ideas for professionals who want consistent visibility",
    description:
      "Learn how professionals, founders, and job seekers can plan LinkedIn posts that build trust, show expertise, and create inbound opportunities.",
    publishedAt: "2026-06-29",
    readTime: "4 min read",
    category: "Personal Brand",
    targetSiteId: linkedinTool.id,
    targetSiteName: linkedinTool.seoTitle,
    targetSiteUrl: linkedinTool.url,
    keywords: ["LinkedIn content ideas", "LinkedIn post generator", "personal branding"],
    intro:
      "Consistent LinkedIn visibility does not come from posting random updates. It comes from repeating useful content themes that match your work, audience, and goals.",
    sections: [
      {
        heading: "Choose three repeatable content pillars",
        body:
          "Strong professional accounts usually rotate between lessons learned, proof of work, industry opinions, customer questions, career stories, and useful frameworks. Pillars make posting easier to sustain.",
      },
      {
        heading: "Turn daily work into post ideas",
        body:
          "Client calls, interviews, project decisions, mistakes, templates, and small wins can all become useful posts when you explain the takeaway clearly.",
      },
      {
        heading: "Write for trust before reach",
        body:
          "A post that makes the right people trust your judgment is more valuable than a generic viral post. Clear examples, specific lessons, and honest context usually outperform vague motivation.",
      },
    ],
    cta: {
      label: "Create LinkedIn posts",
      href: linkedinTool.url,
    },
  },
  {
    slug: "seo-articles-that-support-product-growth",
    title: "How SEO articles can support every product in a micro-SaaS ecosystem",
    description:
      "A simple content strategy for using blog posts to rank a parent brand while sending qualified readers to focused subdomain products.",
    publishedAt: "2026-06-29",
    readTime: "6 min read",
    category: "SEO Growth",
    targetSiteId: seoTool.id,
    targetSiteName: seoTool.seoTitle,
    targetSiteUrl: seoTool.url,
    keywords: ["SEO article writer", "micro SaaS SEO", "organic traffic content"],
    intro:
      "A parent site can do more than list products. With the right blog structure, it can answer broad search questions and guide readers to the exact subdomain that solves their problem.",
    sections: [
      {
        heading: "Start with ecosystem-level topics",
        body:
          "The umbrella domain should own broad topics like AI tools for professionals, career automation, profile improvement, and organic growth. These posts create context for the whole brand.",
      },
      {
        heading: "Send intent to the best product",
        body:
          "Each article should point to the most relevant subdomain. Resume topics link to the resume tool, visual branding topics link to PhotoReady, and content topics link to the SEO writer.",
      },
      {
        heading: "Use internal links like a map",
        body:
          "Search engines understand relationships through links, anchors, and repeated topical language. A clean blog hub gives every product more context without turning the homepage into clutter.",
      },
    ],
    cta: {
      label: "Write SEO articles",
      href: seoTool.url,
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostUrl(slug: string) {
  return `${siteConfig.url}/blog/${slug}`;
}
