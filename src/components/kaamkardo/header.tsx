import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Newspaper, Search, UserRound } from "lucide-react";

const navItems = [
  { href: "#tools", label: "AI tools" },
  { href: "#why", label: "Why KaamKarDo" },
  { href: "/blog", label: "Blog" },
];

export default function OmniSyncHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.07] bg-white/92 backdrop-blur-2xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="KaamKarDo home">
          <span className="relative flex h-8 w-8 overflow-hidden rounded-md">
            <Image
              src="/kaamkardo-256.webp"
              alt=""
              fill
              sizes="32px"
              priority
              className="object-cover"
            />
          </span>
          <span className="text-[17px] font-extrabold tracking-[-0.01em] text-[#111820]">
            KaamKarDo
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#15202b] transition hover:text-[#0866ff]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#tools"
            aria-label="Search KaamKarDo tools"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-[#15202b] transition hover:bg-[#f1f4f7] sm:flex"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/blog"
            aria-label="Read KaamKarDo blog"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-[#15202b] transition hover:bg-[#f1f4f7] sm:flex"
          >
            <Newspaper className="h-5 w-5" />
          </Link>
          <Link
            href="#tools"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0866ff] px-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(8,102,255,0.22)] transition hover:bg-[#005be6]"
          >
            <BriefcaseBusiness className="h-4 w-4" />
            <span className="hidden sm:inline">Get started</span>
            <UserRound className="h-4 w-4 sm:hidden" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
