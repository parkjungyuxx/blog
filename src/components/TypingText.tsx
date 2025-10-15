"use client";

import { useState, useEffect } from "react";

export default function TypingText() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "I am a developer who always thinks, communicates, and solves problems.";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  const renderText = () => {
    const parts = [];
    const text = displayedText;
    let lastIndex = 0;

    const thinksIndex = text.indexOf("thinks");
    if (thinksIndex !== -1 && thinksIndex + 6 <= text.length) {
      parts.push(text.slice(lastIndex, thinksIndex));
      parts.push(
        <span key="thinks" className="underline inline-block">
          thinks
        </span>
      );
      lastIndex = thinksIndex + 6;
    }

    const communicatesIndex = text.indexOf("communicates", lastIndex);
    if (communicatesIndex !== -1 && communicatesIndex + 12 <= text.length) {
      parts.push(text.slice(lastIndex, communicatesIndex));
      parts.push(
        <span key="communicates" className="underline inline-block">
          communicates
        </span>
      );
      lastIndex = communicatesIndex + 12;
    }

    const solvesIndex = text.indexOf("solves problems", lastIndex);
    if (solvesIndex !== -1 && solvesIndex + 15 <= text.length) {
      parts.push(text.slice(lastIndex, solvesIndex));
      parts.push(
        <span key="solves" className="underline inline-block">
          solves problems
        </span>
      );
      lastIndex = solvesIndex + 15;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  return (
    <p className="text-black text-lg sm:text-xl lg:text-[28px] leading-snug min-h-[84px] sm:min-h-[96px] lg:min-h-[112px]">
      {renderText()}
    </p>
  );
}