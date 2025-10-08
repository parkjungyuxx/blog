import TypingText from "@/components/TypingText";
import { TypingEffectLink } from "@/components/TypingEffectLink";

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
          <TypingEffectLink href="/resume" className="text-[40px] font-medium">
            Resume
          </TypingEffectLink>
          <TypingEffectLink href="/posts" className="text-[40px] font-medium">
            Post
          </TypingEffectLink>
          <TypingEffectLink href="/about" className="text-[40px] font-medium">
            About
          </TypingEffectLink>
        </div>
      </div>
    </div>
  );
}
