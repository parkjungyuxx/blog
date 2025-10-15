import TypingText from "@/components/TypingText";
import { TypingEffectLink } from "@/components/TypingEffectLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <div className="mb-20">
          <div className="inline-block mb-8">
            <span className="text-sm font-mono tracking-widest text-gray-600">
              FRONTEND DEVELOPER
            </span>
          </div>
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-black mb-8">
            MICKY
            <span className="inline-block animate-typing pr-1">.LOG</span>
          </h1>
          <div className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            <TypingText />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <TypingEffectLink
            href="/resume"
            className="text-2xl sm:text-3xl lg:text-[40px] font-medium"
          >
            Resume
          </TypingEffectLink>
          <TypingEffectLink
            href="/posts"
            className="text-2xl sm:text-3xl lg:text-[40px] font-medium"
          >
            Posts
          </TypingEffectLink>
          <TypingEffectLink
            href="/about"
            className="text-2xl sm:text-3xl lg:text-[40px] font-medium"
          >
            About
          </TypingEffectLink>
        </div>
      </div>
    </div>
  );
}
