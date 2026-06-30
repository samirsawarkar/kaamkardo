import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get More Interviews | Resume Rewrite by KaamKarDo",
  description: "We rewrite your resume to pass ATS and get recruiter attention. Delivered in 24 hours.",
  alternates: {
    canonical: "https://resume.kaamkardo.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We isolate this layout so it does not render the global header/footer nav
    // The root layout's GlobalCTAs will naturally hide on this route due to our pathname check
    <div className="min-h-screen bg-white flex flex-col items-center selection:bg-[#0866ff] selection:text-white">
      <main className="w-full flex-1">
        {children}
      </main>
      
      <footer className="w-full py-8 border-t border-black/[0.07] mt-20 text-center text-sm text-[#6a7884]">
        © 2026 KaamKarDo. All rights reserved.
      </footer>
    </div>
  );
}
