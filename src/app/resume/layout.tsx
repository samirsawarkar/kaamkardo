import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get More Interviews | Resume Rewrite by KaamKarDo",
  description: "We rewrite your resume to pass ATS and get recruiter attention. Delivered in 24 hours.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We isolate this layout so it does not render the global header/footer nav
    // The root layout's GlobalCTAs will naturally hide on this route due to our pathname check
    <div className="min-h-screen bg-background flex flex-col items-center selection:bg-foreground selection:text-background">
      <main className="w-full flex-1">
        {children}
      </main>
      
      <footer className="w-full py-8 border-t border-border mt-20 text-center text-sm text-foreground/40">
        © 2026 KaamKarDo. All rights reserved.
      </footer>
    </div>
  );
}
