import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-2 min-h-screen max-w-7xl mx-auto px-16">
        <div className="flex flex-col justify-center">
          <div className="pl-20">
            <h1 className="text-[72px] font-bold text-black mb-6">micky.log</h1>
            <p className="text-black text-[32px]">
              I am a developer who always thinks, communicates, and solves
              problems.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <Link
            href="/"
            className="text-[48px] text-black font-medium transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/posts"
            className="text-[48px] text-black  font-medium transition-colors"
          >
            Post
          </Link>
          <Link
            href="/about"
            className="text-[48px] text-black font-medium transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
