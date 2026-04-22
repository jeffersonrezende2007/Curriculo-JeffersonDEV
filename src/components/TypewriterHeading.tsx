"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make sure to register ScrollTrigger if not already done globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterHeading({ text, className = "", delay = 0 }: TypewriterHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".tw-char");

    gsap.fromTo(chars, 
      { 
        opacity: 0,
        display: "none"
      },
      {
        opacity: 1,
        display: "inline-block",
        duration: 0.01,
        stagger: 0.05, // Speed of typing
        ease: "none",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Starts typing when 85% down the viewport
        }
      }
    );
  }, [text, delay]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span 
          key={index} 
          className="tw-char opacity-0 hidden"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
      <span className="inline-block w-[0.4em] h-[1em] bg-champagne ml-1 animate-pulse align-middle" style={{ animationDuration: '0.8s' }} />
    </div>
  );
}
