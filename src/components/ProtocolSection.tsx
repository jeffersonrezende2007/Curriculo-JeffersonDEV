"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypewriterHeading from "./TypewriterHeading";
import NetworkBackground from "./NetworkBackground";
import { ExternalLink } from "lucide-react";

export default function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.95,
          opacity: 0.4,
          y: -50,
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top center",
            end: "top top",
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const projects = [
    { 
      id: "01", 
      title: "E-Fine Web", 
      subtitle: "Plataforma SaaS de Conciliação de Marketplaces",
      desc: "Sistema web para conciliação e análise de vendas de Shopee, Mercado Livre, Amazon, Shein e TikTok Shop. Inclui dashboards, indicadores financeiros, automações e centralização de dados. Utilizado ativamente em produção.",
      stats: [
        { label: "Clientes Simultâneos", value: "20+" },
        { label: "Pedidos Processados", value: "20 Milhões" },
      ],
      tags: ["React", "TypeScript", "Chakra UI", "Python", "Supabase", "ClickHouse", "Crisp API"],
      url: "http://www.e-fine.com.br/"
    },
    { 
      id: "02", 
      title: "Sistema de DRE", 
      subtitle: "Demonstração de Resultado do Exercício",
      desc: "Aplicação web desenvolvida para cálculo, visualização interativa e gestão de Demonstrativos Financeiros (DRE), otimizando a tomada de decisão com dados claros.",
      stats: [],
      tags: ["Vite", "Chakra UI", "Python"],
      url: "https://dre-e-fine.vercel.app/login"
    },
    { 
      id: "03", 
      title: "Fluxo de Caixa", 
      subtitle: "Gestão Financeira Descomplicada",
      desc: "Ferramenta leve e intuitiva construída para gestão de fluxo de caixa, facilitando o controle de entradas e saídas de capital no dia a dia.",
      stats: [],
      tags: ["HTML", "CSS", "JavaScript"],
      url: "https://fluxo-de-caixa-3a3d2.web.app/login.html"
    },
  ];

  return (
    <section ref={containerRef} id="projects" className="w-full relative bg-obsidian py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-24">
        
        <div className="mb-24 text-center">
          <h2 className="font-sans font-bold text-5xl md:text-7xl text-ivory tracking-tight mb-4">
            <TypewriterHeading text="Projetos em " />
            <span className="text-champagne italic font-drama">
              <TypewriterHeading text="Destaque" delay={0.6} />
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24 relative">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card sticky top-24 w-full min-h-[60vh] rounded-[3rem] p-8 md:p-16 flex flex-col justify-center shadow-2xl overflow-hidden border border-ivory/10 backdrop-blur-md bg-slate/80"
            >
              {/* Network Background inside the Card */}
              <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <NetworkBackground />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent pointer-events-none" />

              {/* Inner content */}
              <div className="relative z-10 max-w-2xl">
                <div className="font-mono text-xl tracking-widest text-champagne mb-4 opacity-50">
                  {project.id}.
                </div>
                
                <h3 className="font-sans font-bold text-4xl md:text-6xl text-ivory tracking-tight mb-2">
                  {project.title}
                </h3>
                <h4 className="font-drama italic text-2xl text-champagne mb-8">
                  {project.subtitle}
                </h4>
                
                <p className="text-ivory/80 text-lg md:text-xl leading-relaxed mb-8">
                  {project.desc}
                </p>

                {project.stats.length > 0 && (
                  <div className="flex gap-8 mb-8 border-l-2 border-champagne/50 pl-6">
                    {project.stats.map(stat => (
                      <div key={stat.label}>
                        <div className="font-sans font-bold text-2xl text-ivory">{stat.value}</div>
                        <div className="font-mono text-xs uppercase tracking-widest text-ivory/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-ivory/10 text-ivory/70 font-mono text-xs uppercase bg-obsidian/60 backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-ivory text-obsidian px-8 py-4 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:bg-champagne transition-colors magnetic-button group"
                >
                  Acessar Sistema
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
