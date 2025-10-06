import Image from "next/image";
interface AnimatedTextProps {
  children: string;
  gifSrc?: string;
  gifAlt?: string;
  width?: number;
  height?: number;
  isVertical?: boolean;
}

export default function AnimatedText({
  children,
  gifSrc,
  gifAlt,
  width,
  height,
  isVertical = false,
}: AnimatedTextProps) {
  const containerWidth = isVertical ? 240 : 440;
  const containerHeight = isVertical ? 440 : 240;

  const defaultImageWidth = isVertical ? 200 : 340;
  const defaultImageHeight = isVertical ? 360 : 240;

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
            <div
              className="relative rounded-2xl overflow-hidden flex justify-center items-center"
              style={{
                width: `${containerWidth}px`,
                height: `${containerHeight}px`,
              }}
            >
              <Image
                src={gifSrc}
                alt={gifAlt || children}
                width={width || defaultImageWidth}
                height={height || defaultImageHeight}
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
