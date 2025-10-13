import Link from "next/link";
import { FILTER_CATEGORIES } from "@/lib/posts";

interface FilterSectionProps {
  selectedFilter?: string;
}

export function FilterSection({ selectedFilter }: FilterSectionProps) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-black text-sm md:text-base">/ FILTER</span>
        <Link
          href="/posts"
          className="filter-link font-mono text-black underline hover:no-underline text-xs md:text-sm"
        >
          CLEAR FILTER
        </Link>
      </div>

      <div className="hidden md:flex md:flex-col gap-2">
        {FILTER_CATEGORIES.map((filter) => {
          const isSelected = selectedFilter === filter;

          return (
            <Link
              key={filter}
              href={`/posts?filter=${filter}`}
              className="filter-link font-mono hover:text-gray-700 transition-colors"
              style={{
                color: isSelected ? "#E67E22" : "#000000",
              }}
            >
              {filter}
            </Link>
          );
        })}
      </div>

      <div className="md:hidden flex gap-2 overflow-x-auto pb-2">
        {FILTER_CATEGORIES.map((filter) => {
          const isSelected = selectedFilter === filter;

          return (
            <Link
              key={filter}
              href={`/posts?filter=${filter}`}
              className="filter-link font-mono hover:text-gray-700 transition-colors whitespace-nowrap px-3 py-1 border border-black text-sm flex-shrink-0"
              style={{
                backgroundColor: isSelected ? "#E67E22" : "transparent",
                color: isSelected ? "#FFFFFF" : "#000000",
              }}
            >
              {filter}
            </Link>
          );
        })}
      </div>
    </div>
  );
}