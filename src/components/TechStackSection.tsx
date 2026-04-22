"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TypewriterHeading from "./TypewriterHeading";
import { 
  SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiChakraui, SiVite, 
  SiPython, SiNodedotjs, SiSupabase, SiClickhouse, SiPostgresql,
  SiGithub, SiVercel, SiCloudflare 
} from "react-icons/si";
import { MonitorPlay, Database, Wrench } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: <MonitorPlay className="w-6 h-6 text-champagne" />,
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
    icon: <Database className="w-6 h-6 text-champagne" />,
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
    icon: <Wrench className="w-6 h-6 text-champagne" />,
    skills: [
      { name: "GitHub", Icon: SiGithub },
      { name: "Vercel", Icon: SiVercel },
      { name: "Cloudflare", Icon: SiCloudflare },
      { name: "APIs REST", Icon: null }, // Fallback for no icon
    ]
  }
];

export default function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect logic
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
      gsap.from(".stack-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech-stack" ref={containerRef} className="py-32 px-6 md:px-16 w-full max-w-7xl mx-auto border-t border-ivory/5">
      
      <div className="mb-20 text-center">
        <h2 className="font-sans font-bold text-5xl md:text-6xl text-ivory tracking-tight mb-4">
          <TypewriterHeading text="Tech " />
          <span className="text-champagne italic font-drama">
            <TypewriterHeading text="Stack" delay={0.4} />
          </span>
        </h2>
        <p className="text-ivory/60 max-w-2xl mx-auto mt-6 text-lg">
          Ferramentas e tecnologias que utilizo diariamente para construir sistemas escaláveis, 
          analisar milhões de dados e entregar interfaces premium.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <div
            key={category.id}
            className="stack-card relative group rounded-[2.5rem] bg-obsidian border border-ivory/10 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2"
            onMouseMove={(e) => handleMouseMove(e, category.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Magnetic Spotlight Background */}
            <div 
              className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none mix-blend-screen"
              style={{
                opacity: isHovered === category.id ? 1 : 0,
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 168, 76, 0.1), transparent 40%)`
              }}
            />

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-slate border border-ivory/10 flex items-center justify-center shadow-inner">
                  {category.icon}
                </div>
                <h3 className="font-sans font-bold text-2xl text-ivory tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate/50 border border-ivory/5 text-ivory/80 font-mono text-sm group/skill hover:bg-champagne/10 hover:border-champagne/30 hover:text-champagne transition-all duration-300 cursor-default"
                  >
                    {skill.Icon && (
                      <skill.Icon className="w-4 h-4 opacity-70 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all" />
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
            <div className="absolute inset-0 rounded-[2.5rem] pointer-events-none border border-white/5 mix-blend-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
