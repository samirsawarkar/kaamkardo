import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ecosystemTools, siteConfig } from "@/lib/ecosystem";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "KaamKarDo - AI Tools for Careers, Content, Photos, and SEO",
    template: "%s | KaamKarDo",
  },
  description:
    "KaamKarDo is an AI tools ecosystem for Indian professionals, creators, founders, and job seekers: resumes, AI photos, skill roadmaps, LinkedIn content, and SEO writing.",
  keywords: [
    "AI tools India",
    "AI tools for professionals",
    "resume writing service india",
    "ATS resume",
    "AI headshots India",
    "LinkedIn profile makeover",
    "SEO article writer",
    "career roadmap",
    ...ecosystemTools.flatMap((tool) => tool.keywords),
    ...ecosystemTools.flatMap((tool) => tool.longTailKeywords),
  ],
  authors: [{ name: "KaamKarDo" }],
  creator: "KaamKarDo",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/kaamkardo.png",
    shortcut: "/kaamkardo.png",
    apple: "/kaamkardo.png",
  },
  openGraph: {
    title: "KaamKarDo - AI Tools for Careers, Content, Photos, and SEO",
    description:
      "Explore KaamKarDo's focused AI ecosystem for resumes, professional photos, skill roadmaps, LinkedIn content, and SEO writing.",
    url: "/",
    siteName: "KaamKarDo",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/kaamkardo.png",
        width: 800,
        height: 600,
        alt: "KaamKarDo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaamKarDo - AI Tools for Professionals",
    description:
      "Resume, photo, skill, LinkedIn, and SEO AI tools under one KaamKarDo ecosystem.",
    images: ["/kaamkardo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
