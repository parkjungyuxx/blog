import Link from "next/link";
import TypingText from "@/components/TypingText";

export default function Home() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="grid grid-cols-2">
        <div className="pl-8 flex flex-col gap-20">
          <div>
            <h1 className="text-[144px] font-bold text-black">(FE)</h1>
            <h1 className="text-[144px] font-bold text-black">micky.log</h1>
          </div>
          <TypingText />
        </div>

        <div className="flex flex-col gap-4 items-start">
          <Link
            href="/resume"
            className="text-[40px] text-black font-medium transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/posts"
            className="text-[40px] text-black font-medium transition-colors"
          >
            Post
          </Link>
          <Link
            href="/about"
            className="text-[40px] text-black font-medium transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
