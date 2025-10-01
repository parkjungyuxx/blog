"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="
          rounded-[var(--radius)] border px-3 py-1 text-sm
          bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
        "
      >
        ...
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light");
      }}
      className="
        rounded-[var(--radius)] border px-3 py-1 text-sm
        bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
        hover:bg-[var(--color-accent)] transition-colors
      "
    >
      {theme === "light" ? <MdOutlineLightMode /> : theme === "dark" ? <CiDark /> : <FaLaptop />}
    </button>
  );
}