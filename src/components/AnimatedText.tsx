import Image from "next/image";

interface AnimatedTextProps {
  children: string;
  gifSrc?: string;
  gifAlt?: string;
}

export default function AnimatedText({ children, gifSrc, gifAlt }: AnimatedTextProps) {
  return (
    <span className="text-black relative group">
      <span className="gradient-link font-bold relative no-underline text-black overflow-hidden cursor-pointer">
        <span className="relative inline-block">
          {children}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
            style={{
              animation: "gradient 4s ease-in-out infinite",
            }}
          >
            {children}
          </span>
        </span>
      </span>

      {gifSrc && (
        <div className="fixed bottom-8 right-8 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50">
          <div className="bg-black p-4 shadow-2xl rounded-3xl">
            <div className="w-[440px] h-[240px] relative rounded-2xl overflow-hidden flex justify-center items-center">
              <Image
                src={gifSrc}
                alt={gifAlt || children}
                width={340}
                height={240}
                className="rounded-2xl object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </span>
  );
}