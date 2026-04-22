"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import TypewriterHeading from "./TypewriterHeading";

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal
      gsap.fromTo(".phil-word",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out",
          scrollTrigger: {
            trigger: ".phil-trigger",
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative w-full py-32 px-6 md:px-16 overflow-hidden bg-obsidian">
      {/* Texture Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-bg w-full h-[120%] absolute -top-[10%] bg-gradient-to-b from-obsidian via-[#0C0C11] to-obsidian opacity-80" />
      </div>

      <div className="phil-trigger relative z-10 max-w-7xl mx-auto w-full">
        
        <div className="mb-16">
          <h2 className="font-sans font-bold text-4xl text-ivory tracking-tight mb-4">
            <TypewriterHeading text="Resumo " />
            <span className="text-champagne italic font-drama">
              <TypewriterHeading text="Profissional" delay={0.4} />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Coluna Esquerda: Texto de Resumo */}
          <div className="lg:col-span-6 space-y-6 text-ivory/80 font-sans text-lg leading-relaxed phil-word">
            <p>
              Profissional com experiência prática no desenvolvimento de sistemas web, dashboards
              financeiros e processamento de dados para operações de e-commerce.
            </p>
            <p>
              Atuei de forma decisiva no desenvolvimento do <strong>E-Fine Web</strong>, sistema SaaS de conciliação 
              utilizado em produção por diversas empresas, com grande foco em escalabilidade, organização 
              massiva de dados e automações.
            </p>
            <p>
              Possuo base sólida em lógica de programação, análise financeira e contabilidade, 
              unindo o entendimento do negócio ao domínio de tecnologias modernas como 
              <span className="text-champagne font-mono text-sm mx-1">React, TypeScript, Python, Supabase e ClickHouse</span>.
            </p>
            <p>
              Utilizo inteligência artificial de forma estratégica como ferramenta de apoio para 
              acelerar o aprendizado, garantir boas práticas e validar soluções — sempre garantindo 
              entendimento profundo e domínio sobre o código produzido.
            </p>
          </div>

          {/* Coluna Direita: Timeline de Experiência e Formação */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Experiência */}
            <div className="phil-word">
              <h3 className="font-mono text-sm tracking-widest text-champagne uppercase mb-8 flex items-center gap-4">
                Experiência <span className="h-[1px] flex-1 bg-champagne/20"></span>
              </h3>
              
              <div className="relative pl-8 border-l border-ivory/10 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-obsidian border-2 border-champagne" />
                  <h4 className="font-sans font-bold text-2xl text-ivory">Ecom Fine</h4>
                  <div className="font-mono text-sm text-ivory/50 mt-1 mb-4">Analista de Dados e Sistemas | 10/2024 – 02/2026</div>
                  <ul className="space-y-3 text-ivory/70 text-base font-sans list-disc pl-4 marker:text-champagne/50">
                    <li>Desenvolvimento do sistema SaaS principal de conciliação de e-commerce da empresa.</li>
                    <li>Extração, organização e análise de relatórios financeiros e construção de dashboards.</li>
                    <li>Implementação de módulos de repasse, vendas, margem e devoluções.</li>
                    <li>Automação de processos operacionais utilizando Python.</li>
                    <li>Criação de APIs e integrações com Crisp e marketplaces.</li>
                    <li>Estruturação de ambiente de dados com Supabase e ClickHouse, com deploy via Cloudflare Pages.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formação */}
            <div className="phil-word">
              <h3 className="font-mono text-sm tracking-widest text-champagne uppercase mb-8 flex items-center gap-4">
                Formação Acadêmica <span className="h-[1px] flex-1 bg-champagne/20"></span>
              </h3>
              
              <div className="relative pl-8 border-l border-ivory/10 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-obsidian border-2 border-champagne/50" />
                  <h4 className="font-sans font-bold text-xl text-ivory">Ciência da Computação</h4>
                  <div className="text-ivory/70">UNIP – Universidade Paulista</div>
                  <div className="font-mono text-sm text-ivory/50 mt-1">2026 – Previsão de conclusão: 2030 (Bacharelado)</div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-obsidian border-2 border-champagne/50" />
                  <h4 className="font-sans font-bold text-xl text-ivory">Técnico em Contabilidade</h4>
                  <div className="text-ivory/70">FIEB Tech – Fundação Inst. de Educação de Barueri</div>
                  <div className="font-mono text-sm text-ivory/50 mt-1">2023 – 2025 (Concluído)</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
