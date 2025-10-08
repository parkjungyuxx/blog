"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface TypingEffectLinkProps {
  href: string;
  children: string;
  className?: string;
  speedMs?: number;
}

export function TypingEffectLink({
  href,
  children,
  className = "",
  speedMs = 80,
}: TypingEffectLinkProps) {
  const [displayedLength, setDisplayedLength] = useState(children.length);
  const [isHovered, setIsHovered] = useState(false);

  const isTypingRef = useRef(false);
  const hoveredOnceRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTypingOnce = () => {
    if (hoveredOnceRef.current || isTypingRef.current) return;
    hoveredOnceRef.current = true;
    isTypingRef.current = true;

    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayedLength(0);

    let current = 0;
    intervalRef.current = setInterval(() => {
      current++;
      setDisplayedLength(current);

      if (current >= children.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        isTypingRef.current = false;
      }
    }, speedMs);
  };

  const stopAndFill = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    isTypingRef.current = false;
    setDisplayedLength(children.length);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Link
      href={href}
      className={`inline-block relative select-none ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        startTypingOnce();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        stopAndFill();
        hoveredOnceRef.current = false;
      }}
    >
      <span className="invisible">{children}</span>

      <span className="absolute inset-0 whitespace-nowrap">
        {children.slice(0, displayedLength)}
        {isHovered && (
          <span
            className={[
              displayedLength < children.length ? "animate-pulse" : "invisible",
              "pointer-events-none align-baseline",
            ].join(" ")}
          >
            |
          </span>
        )}
      </span>
    </Link>
  );
}
