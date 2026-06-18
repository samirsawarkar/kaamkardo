import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "KaamKarDo — Get Hired Faster. Look Professional. Start Earning.",
  description:
    "We fix your resume, LinkedIn profile, and business setup — done for you in 24–48 hours. ATS-optimized resumes, studio headshots, and full business launch. No learning curve.",
  keywords: [
    "resume writing service india",
    "ATS resume",
    "LinkedIn profile makeover",
    "business setup india",
    "professional resume",
    "get hired faster",
  ],
  authors: [{ name: "KaamKarDo" }],
  creator: "KaamKarDo",
  icons: {
    icon: "/kaamkardo.png",
    shortcut: "/kaamkardo.png",
    apple: "/kaamkardo.png",
  },
  openGraph: {
    title: "KaamKarDo — Get Hired Faster. Look Professional.",
    description:
      "Done-for-you resume, profile, and business setup. Delivered in 24–48 hours.",
    url: "https://kaamkardo.com",
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
    title: "KaamKarDo — Get Hired Faster",
    description:
      "We fix your resume, LinkedIn, and business setup — in 24–48 hours.",
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
