"use client";
import { useEffect, useRef, useState } from "react";

export default function FloatingNav() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full px-6 md:px-8 py-4 flex items-center justify-between w-[90%] max-w-5xl
      ${scrolled ? "bg-obsidian/80 backdrop-blur-xl border border-white/10 shadow-2xl" : "bg-transparent border-transparent"}`}
    >
      <div className="text-lg md:text-xl font-bold tracking-tighter text-ivory">JEFFERSON REZENDE</div>
      <div className="hidden md:flex gap-8 text-sm font-mono text-ivory/70">
        <a href="#features" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">/FEATURES</a>
        <a href="#protocol" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">/PROTOCOL</a>
        <a href="#contact" className="hover:text-champagne transition-colors transform hover:-translate-y-[1px]">/CONTACT</a>
      </div>
      <a href="/Jefferson Rezende.pdf" download className="text-xs md:text-sm font-medium bg-champagne text-obsidian px-4 md:px-5 py-2 rounded-full hover:scale-105 transition-transform magnetic-button">
        DOWNLOAD CV
      </a>
    </nav>
  );
}
