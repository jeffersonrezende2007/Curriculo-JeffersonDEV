"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, MonitorPlay, Settings2 } from "lucide-react";
import TypewriterHeading from "./TypewriterHeading";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-sans font-bold text-4xl text-ivory tracking-tight mb-4 leading-tight">
          <TypewriterHeading text="Competências &" />
          <br/>
          <span className="text-champagne italic font-drama">
            <TypewriterHeading text="Tecnologias" delay={0.7} />
          </span>
        </h2>
        <p className="text-ivory/60 max-w-xl mt-4">Habilidades práticas consolidadas em operações reais, unindo desenvolvimento de interfaces, inteligência de dados e automação de processos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: E-Fine Context */}
        <div className="feature-card bg-obsidian border border-slate/50 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Settings2 className="text-champagne w-8 h-8 mb-6" />
          <h3 className="font-sans font-bold text-2xl text-ivory mb-2">Engenharia E-commerce</h3>
          <p className="text-ivory/60 text-sm mb-8 h-10">Desenvolvimento SaaS, integrações B2B e automação massiva de dados.</p>
          <ShufflerWidget />
        </div>

        {/* Card 2: Backend & Data */}
        <div className="feature-card bg-obsidian border border-slate/50 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Database className="text-champagne w-8 h-8 mb-6" />
          <h3 className="font-sans font-bold text-2xl text-ivory mb-2">Backend & Analytics</h3>
          <p className="text-ivory/60 text-sm mb-8 h-10">Python, SQL, Supabase, ClickHouse e modelagem de dashboards.</p>
          <TypewriterWidget />
        </div>

        {/* Card 3: Frontend */}
        <div className="feature-card bg-obsidian border border-slate/50 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <MonitorPlay className="text-champagne w-8 h-8 mb-6" />
          <h3 className="font-sans font-bold text-2xl text-ivory mb-2">Frontend & Interfaces</h3>
          <p className="text-ivory/60 text-sm mb-8 h-10">React, TypeScript, Next.js, HTML/CSS, Tailwind e Chakra UI.</p>
          <SchedulerWidget />
        </div>
      </div>
    </section>
  );
}

function ShufflerWidget() {
  const [items, setItems] = useState([
    { id: 1, text: "20M+ Pedidos Processados" },
    { id: 2, text: "+20 Clientes Ativos" },
    { id: 3, text: "Integração Shopee/Mercado Livre" }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop();
        if (last) newItems.unshift(last);
        return newItems;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 w-full perspective-1000">
      {items.map((item, i) => (
        <div
          key={item.id}
          className="absolute w-full bg-slate border border-ivory/10 rounded-2xl p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            top: i * 16,
            transform: `scale(${1 - i * 0.05}) translateZ(${-i * 20}px)`,
            opacity: 1 - i * 0.2,
            zIndex: 10 - i
          }}
        >
          <div className="font-mono text-[10px] text-champagne mb-1">E-FINE_WEB_{item.id}</div>
          <div className="font-sans text-sm font-medium text-ivory">{item.text}</div>
        </div>
      ))}
    </div>
  );
}

function TypewriterWidget() {
  const fullText = "SELECT revenue, status\nFROM orders_clickhouse\nWHERE platform = 'Shopee'\n> Execution time: 12ms\n> Aggregating results...\n> Success: True";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    setText("");
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length + 10) i = 0; // loop with a slight pause
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-32 bg-[#0A0A0F] border border-ivory/10 rounded-2xl p-4 font-mono text-xs text-ivory/70 relative overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-ivory/10">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[10px] tracking-widest uppercase text-ivory/50">Python / SQL Runtime</span>
      </div>
      <div className="whitespace-pre-wrap break-words leading-relaxed flex-1 overflow-hidden">
        {text}<span className="inline-block w-2 h-3 bg-champagne ml-1 animate-pulse" />
      </div>
    </div>
  );
}

function SchedulerWidget() {
  return (
    <div className="w-full h-32 bg-[#0A0A0F] border border-ivory/10 rounded-2xl p-4 relative overflow-hidden flex flex-col gap-2">
      <div className="w-full h-4 bg-slate rounded-sm flex items-center px-2">
        <span className="text-[8px] font-mono text-ivory/40">index.tsx</span>
      </div>
      <div className="w-3/4 h-2 bg-champagne/20 rounded-sm" />
      <div className="w-1/2 h-2 bg-ivory/10 rounded-sm" />
      <div className="w-full h-2 bg-ivory/10 rounded-sm" />
      <div className="w-5/6 h-2 bg-ivory/10 rounded-sm" />
      
      {/* Animated Cursor */}
      <svg
        className="absolute w-5 h-5 text-champagne z-10"
        fill="none" stroke="currentColor" strokeWidth="2"
        viewBox="0 0 24 24"
        style={{
          animation: "moveCursor 4s infinite ease-in-out"
        }}
      >
        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor" />
      </svg>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes moveCursor {
          0% { transform: translate(10px, 10px); }
          25% { transform: translate(100px, 20px) scale(0.95); }
          50% { transform: translate(100px, 20px); }
          75% { transform: translate(50px, 40px) scale(0.95); }
          100% { transform: translate(10px, 10px); }
        }
      `}} />
    </div>
  );
}
