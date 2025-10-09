import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AnimatedArrowTextProps {
  text: string;
  href: string;
  arrowImage?: string;
}

export function AnimatedArrowText({
  text,
  href,
  arrowImage = "/images/arrow.svg",
}: AnimatedArrowTextProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 cursor-pointer"
      target="blank"
    >
      <span className="text-[32px] font-bold cursor-pointer">{text}</span>
      <Image
        src={arrowImage}
        alt="arrow"
        width={20}
        height={20}
        className="animate-bounce-horizontal group-hover:translate-x-1 transition-transform"
      />
    </Link>
  );
}
