"use client";

import Link from "next/link";
import SearchButton from "./SearchButton";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header
      className="
        sticky top-0 z-30 border-b backdrop-blur
        bg-[var(--color-card)] text-[var(--color-card-foreground)]
      "
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Jungyu&apos;s Blog
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
