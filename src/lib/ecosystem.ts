import {
  Camera,
  Compass,
  FileText,
  Globe,
  PenTool,
  Users,
  type LucideIcon,
} from "lucide-react";

export type EcosystemTool = {
  id: string;
  title: string;
  seoTitle: string;
  desc: string;
  audience: string;
  url: string;
  cta: string;
  icon: LucideIcon;
  logoImg?: string;
  accent: string;
  glow: string;
  keywords: string[];
  longTailKeywords: string[];
};

export const siteConfig = {
  name: "KaamKarDo",
  url: "https://www.kaamkardo.com",
  description:
    "KaamKarDo is an AI tools ecosystem for Indian professionals, founders, creators, and job seekers who want career, content, image, and SEO work done faster.",
  sameAs: [
    "https://resume.kaamkardo.com",
    "https://photoready.kaamkardo.com",
    "https://skillhub.kaamkardo.com",
    "https://social.kaamkardo.com",
    "https://seo.kaamkardo.com",
  ],
};

export const ecosystemTools: EcosystemTool[] = [
  {
    id: "directory",
    title: "The #1 AI platform for professionals",
    seoTitle: "KaamKarDo AI Tools Directory",
    desc: "Discover the KaamKarDo ecosystem: focused AI tools for resumes, profile photos, skill planning, LinkedIn content, and SEO writing.",
    audience: "Professionals choosing the right AI workflow",
    icon: Globe,
    url: siteConfig.url,
    cta: "Explore Directory",
    accent: "from-sky-400 to-blue-600",
    glow: "rgba(56,189,248,0.6)",
    keywords: ["AI tools for professionals", "career AI tools", "KaamKarDo ecosystem"],
    longTailKeywords: [
      "best AI tools for Indian professionals",
      "AI tools for job seekers and creators in India",
      "career content and SEO AI tools in one platform",
    ],
  },
  {
    id: "resume",
    title: "Free ATS Resume Score",
    seoTitle: "ATS Resume Checker and Resume Optimization",
    desc: "Upload your resume and get an instant ATS score, then learn exactly what to fix before applying to Indian and global jobs.",
    audience: "Job seekers who need more interview calls",
    icon: FileText,
    logoImg: "/resume-logo-256.webp",
    url: "https://resume.kaamkardo.com",
    cta: "Optimize Resume",
    accent: "from-emerald-400 to-teal-600",
    glow: "rgba(52,211,153,0.6)",
    keywords: ["ATS resume checker", "resume score", "resume writing service India"],
    longTailKeywords: [
      "free ATS resume checker for Indian job seekers",
      "check resume score before applying for jobs",
      "resume optimization tool for software and business roles",
    ],
  },
  {
    id: "photo",
    title: "India's AI Style Marketplace",
    seoTitle: "AI Headshots and Indian Style Photo Generator",
    desc: "Browse creator-made AI prompts, upload your photo, and generate Indian-context images for headshots, weddings, reels, and profiles.",
    audience: "Creators, founders, and professionals improving their visual brand",
    icon: Camera,
    logoImg: "/photoready-logo-256.webp",
    url: "https://photoready.kaamkardo.com",
    cta: "Generate Headshot",
    accent: "from-violet-400 to-purple-600",
    glow: "rgba(167,139,250,0.6)",
    keywords: ["AI headshots India", "AI photo generator India", "professional profile photos"],
    longTailKeywords: [
      "AI headshots for LinkedIn profile in India",
      "Indian style AI photo generator for professionals",
      "professional profile photo maker without studio shoot",
    ],
  },
  {
    id: "skill",
    title: "Learn the right skills",
    seoTitle: "Personalized Career Skill Roadmaps",
    desc: "Get practical skill roadmaps that connect your current profile to better roles, stronger portfolios, and faster career growth.",
    audience: "Students and professionals planning their next career move",
    icon: Compass,
    url: "https://skillhub.kaamkardo.com",
    cta: "View Roadmap",
    accent: "from-amber-400 to-orange-600",
    glow: "rgba(251,191,36,0.6)",
    keywords: ["career roadmap", "skill roadmap", "learn job skills India"],
    longTailKeywords: [
      "personalized career roadmap for Indian students",
      "skill roadmap to switch careers in India",
      "learn job ready skills with AI career guidance",
    ],
  },
  {
    id: "linkedin",
    title: "Grow your audience",
    seoTitle: "LinkedIn Content and Personal Brand Writer",
    desc: "Generate LinkedIn posts and creator workflows that help professionals build authority, consistency, and inbound opportunities.",
    audience: "Professionals building a personal brand",
    icon: Users,
    url: "https://social.kaamkardo.com",
    cta: "Create Post",
    accent: "from-rose-400 to-pink-600",
    glow: "rgba(251,113,133,0.6)",
    keywords: ["LinkedIn post generator", "personal branding", "LinkedIn content ideas"],
    longTailKeywords: [
      "LinkedIn post generator for Indian professionals",
      "personal branding content ideas for founders",
      "AI LinkedIn writer for consistent professional posting",
    ],
  },
  {
    id: "seo",
    title: "Rank higher on Google",
    seoTitle: "SEO Article Writer for Organic Traffic",
    desc: "Plan and write SEO-optimized articles that target buyer intent, answer search questions, and support long-term organic growth.",
    audience: "Founders, marketers, and content teams growing organic traffic",
    icon: PenTool,
    url: "https://seo.kaamkardo.com",
    cta: "Start Writing",
    accent: "from-cyan-400 to-indigo-600",
    glow: "rgba(34,211,238,0.6)",
    keywords: ["SEO article writer", "AI SEO writer", "organic traffic content"],
    longTailKeywords: [
      "AI SEO article writer for SaaS founders",
      "write SEO optimized blog posts for organic traffic",
      "long form SEO content generator for product growth",
    ],
  },
];
