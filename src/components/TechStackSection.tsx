"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypewriterHeading from "./TypewriterHeading";
import NetworkBackground from "./NetworkBackground";
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiChakraui, SiVite, 
  SiPython, SiNodedotjs, SiSupabase, SiClickhouse, SiPostgresql,
  SiGithub, SiVercel, SiCloudflare 
} from "react-icons/si";
import { MonitorPlay, Database, Wrench } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techCategories = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: <MonitorPlay className="w-8 h-8 text-champagne" />,
    skills: [
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "HTML5", Icon: SiHtml5 },
      { name: "CSS3", Icon: SiCss3 },
      { name: "Chakra UI", Icon: SiChakraui },
      { name: "Vite", Icon: SiVite },
    ]
  },
  {
    id: "backend",
    title: "Backend & Dados",
    icon: <Database className="w-8 h-8 text-champagne" />,
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "SQL", Icon: SiPostgresql },
      { name: "Supabase", Icon: SiSupabase },
      { name: "ClickHouse", Icon: SiClickhouse },
    ]
  },
  {
    id: "tools",
    title: "Ferramentas & Cloud",
    icon: <Wrench className="w-8 h-8 text-champagne" />,
    skills: [
      { name: "GitHub", Icon: SiGithub },
      { name: "Vercel", Icon: SiVercel },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "APIs REST", Icon: null },
    ]
  }
];

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setIsHovered(id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sliderRef.current || !containerRef.current) return;
      
      const slider = sliderRef.current;
      const amountToScroll = slider.scrollWidth - window.innerWidth; 
      
      gsap.to(slider, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          start: "top top",
          end: () => `+=${amountToScroll}`, // Scroll duration based on width
          invalidateOnRefresh: true
        }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech-stack" ref={containerRef} className="w-full h-screen bg-obsidian overflow-hidden border-t border-ivory/5 flex items-center relative">
      
      {/* Background Canvas Effect BEHIND the Cards */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-screen z-0">
        <NetworkBackground />
      </div>

      <div className="absolute top-16 md:top-24 left-0 w-full flex flex-col items-center justify-center z-20 pointer-events-none px-6">
        <h2 className="font-sans font-bold text-5xl md:text-7xl text-ivory tracking-tight mb-4 text-center">
          <TypewriterHeading text="Tech " />
          <span className="text-champagne italic font-drama">
            <TypewriterHeading text="Stack" delay={0.4} />
          </span>
        </h2>
        <p className="text-ivory/60 max-w-xl text-lg mt-2 text-center">
          Ferramentas que utilizo diariamente para construir sistemas escaláveis e analisar dados. 
          <span className="block md:inline mt-2 md:mt-0"> Deslize para ver todas.</span>
        </p>
      </div>

      <div ref={sliderRef} className="flex gap-8 md:gap-16 pl-[100vw] pr-[50vw] h-[60vh] min-h-[450px] items-center absolute top-[65%] md:top-[60%] -translate-y-1/2 z-10 w-max">
        {techCategories.map((category) => (
          <div
            key={category.id}
            className="relative group rounded-[3rem] w-[85vw] sm:w-[450px] h-full bg-slate/50 border border-ivory/10 overflow-hidden shadow-2xl flex-shrink-0 backdrop-blur-xl"
            onMouseMove={(e) => handleMouseMove(e, category.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Gradient Overlay to dark */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian/40 via-obsidian/80 to-obsidian pointer-events-none" />

            {/* Magnetic Spotlight Background */}
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
              style={{
                opacity: isHovered === category.id ? 1 : 0,
                background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 168, 76, 0.15), transparent 40%)`
              }}
            />

            <div className="relative z-10 p-10 md:p-12 flex flex-col h-full">
              <div className="flex flex-col gap-6 mb-8 items-center md:items-start text-center md:text-left">
                <div className="w-20 h-20 rounded-[1.5rem] bg-obsidian border border-ivory/10 flex items-center justify-center shadow-2xl">
                  {category.icon}
                </div>
                <h3 className="font-sans font-bold text-4xl text-ivory tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-4 mt-auto justify-center md:justify-start">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-obsidian/80 border border-ivory/5 text-ivory/90 font-mono text-sm group/skill hover:bg-champagne/10 hover:border-champagne/30 hover:text-champagne transition-all duration-300 cursor-default shadow-lg"
                  >
                    {skill.Icon && (
                      <skill.Icon className="w-5 h-5 opacity-60 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all" />
                    )}
                    {!skill.Icon && (
                      <div className="w-2 h-2 rounded-full bg-champagne/50 group-hover/skill:bg-champagne" />
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Subtle glass reflection */}
            <div className="absolute inset-0 rounded-[3rem] pointer-events-none border border-white/5 mix-blend-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
