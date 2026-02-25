// src/app/page.tsx (sua HomePage)

import ContatoPage from "@/modules/Curriculo/Contato/ContatoPage";
import SobreMim from "@/modules/Curriculo/SobreMim/SobreMim";
import ProjetosPage from "@/modules/Curriculo/Projetos/ProjetosPage/ProjetosPage";
import HardSkills from "@/modules/Curriculo/HardSkills/HardSkills";
import SoftSkills from "@/modules/Curriculo/SoftSkills/SoftSkills";
import Formacao from "@/modules/Curriculo/Formacao/Formacao";
import Hero from "@/modules/Curriculo/Hero/Hero";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* HERO */}
      <section id="inicio" className="w-full relative">
        <Spotlight
          size={600}
          opacity={0.2}
          color="rgba(59, 130, 246, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <Hero />
          </Reveal>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre-mim" className="min-h-screen py-32 px-6 relative w-full">

        {/* Spotlight atráaaaas do conteúdo */}
        <Spotlight
          size={500}
          opacity={0.15}
          color="rgba(168, 85, 247, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        {/* Seu conteúdo acima da luz */}
        <div className="relative z-10">
          <Reveal>
            <SobreMim />
          </Reveal>
        </div>

      </section>

      {/* FORMAÇÃO */}
      <section id="formacao" className="min-h-screen py-32 px-6 relative w-full">
        <Spotlight
          size={500}
          opacity={0.15}
          color="rgba(59, 130, 246, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <Formacao />
          </Reveal>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="min-h-screen py-32 px-6 relative w-full">
        <Spotlight
          size={550}
          opacity={0.18}
          color="rgba(236, 72, 153, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <ProjetosPage />
          </Reveal>
        </div>
      </section>

      {/* HARD SKILLS */}
      <section id="hardskills" className="min-h-screen py-32 px-6 relative w-full">

        <Spotlight
          size={500}
          opacity={0.15}
          color="rgba(59, 130, 246, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <HardSkills />
          </Reveal>
        </div>

      </section>

      {/* SOFT SKILLS */}
      <section id="softskills" className="min-h-screen py-32 px-6 relative w-full">

        <Spotlight
          size={500}
          opacity={0.15}
          color="rgba(168, 85, 247, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <SoftSkills />
          </Reveal>
        </div>

      </section>

      {/* CONTATO */}
      <section id="contato" className="min-h-screen py-32 px-6 relative w-full">

        <Spotlight
          size={450}
          opacity={0.2}
          color="rgba(34, 197, 94, 0.4)"
          className="absolute inset-0 z-0"
        >
          <div className="w-full h-full" />
        </Spotlight>

        <div className="relative z-10">
          <Reveal>
            <ContatoPage />
          </Reveal>
        </div>

      </section>

    </div>
  );
}