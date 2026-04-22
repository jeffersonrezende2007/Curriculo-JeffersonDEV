"use client";
import { useEffect } from "react";
import gsap from "gsap";
import NetworkBackground from "./NetworkBackground";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  useEffect(() => {
    // GSAP Text Reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex flex-col justify-center px-6 md:px-16 py-32 overflow-hidden bg-obsidian">
      
      {/* Interactive Background */}
      <NetworkBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/10 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Status / Tag */}
        <div className="hero-text text-champagne font-mono text-xs md:text-sm mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse shadow-[0_0_8px_#C9A84C]" />
          Barueri - SP | Híbrido
        </div>

        {/* Nome */}
        <h1 className="flex flex-col gap-0 md:gap-2 mb-6">
          <span className="hero-text font-sans font-bold text-5xl md:text-7xl lg:text-[6rem] tracking-tight text-ivory leading-[1.1]">
            Jefferson
          </span>
          <span className="hero-text font-drama italic text-5xl md:text-7xl lg:text-[6rem] text-champagne leading-[1.1]">
            Rezende.
          </span>
        </h1>

        {/* Título de Cargo */}
        <h2 className="hero-text font-sans text-xl md:text-3xl text-ivory/90 font-medium mb-4">
          Desenvolvedor Full Stack Júnior | Analista de Dados
        </h2>

        {/* Subtítulo / Palavras-chave */}
        <p className="hero-text text-champagne/80 font-mono text-sm md:text-base tracking-widest uppercase mb-8">
          Conciliação de E-commerce • Dashboards • Sistemas Web
        </p>

        {/* Botões e Ações */}
        <div className="hero-text mt-8 flex flex-wrap gap-4 items-center">
          <a href="#projects" className="inline-flex items-center gap-2 border border-champagne/40 bg-champagne/10 text-champagne px-8 py-4 rounded-[2rem] font-mono text-sm tracking-widest hover:bg-champagne hover:text-obsidian transition-all duration-300 magnetic-button shadow-[0_0_20px_rgba(201,168,76,0.1)]">
            VER PROJETOS
          </a>
          
          <div className="flex items-center gap-4 ml-2">
            <a href="https://github.com/jeffersonrezende2007" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-ivory/20 text-ivory hover:text-obsidian hover:bg-ivory hover:border-ivory transition-all magnetic-button backdrop-blur-sm">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/jefferson-rezende-a944b7385/" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-ivory/20 text-ivory hover:text-obsidian hover:bg-ivory hover:border-ivory transition-all magnetic-button backdrop-blur-sm">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:jeffersonrezende2007@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full border border-ivory/20 text-ivory hover:text-obsidian hover:bg-ivory hover:border-ivory transition-all magnetic-button backdrop-blur-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
