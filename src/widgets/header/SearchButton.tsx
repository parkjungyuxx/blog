import { CiSearch } from "react-icons/ci";

export default function SearchButton() {
  return (
    <button
      className="
        rounded-[var(--radius)] border px-3 py-1 text-sm
        bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]
        hover:bg-[var(--color-accent)] transition-colors
      "
    >
      <CiSearch />
    </button>
  );
}
