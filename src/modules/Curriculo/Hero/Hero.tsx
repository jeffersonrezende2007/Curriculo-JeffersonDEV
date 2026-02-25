// src/modules/Curriculo/Hero/Hero.tsx

"use client";

import { FC, useEffect, useState, MouseEvent } from "react";
import { HeroProps } from "./Hero.types";
import {
  Container,
  ContentWrapper,
  Title,
  SubTitle,
  Description,
  Highlight,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  ScrollIndicator
} from "./Hero.styles";
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const Hero: FC<HeroProps> = ({ }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Funções tipadas para os eventos
  const handleProjetosClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollClick = () => {
    document.getElementById('sobre-mim')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container id="inicio">
      <ContentWrapper>
        {/* Badge de apresentação */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-blue-300 font-medium">
            Disponível para oportunidades
          </span>
        </div>

        {/* Título com gradiente */}
        <Title>
          Jefferson <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rezende</span>
        </Title>

        {/* Subtítulo com typing effect opcional */}
        <SubTitle>
          <Highlight>&lt;</Highlight>
          Desenvolvedor Full Stack Júnior
          <Highlight>/&gt;</Highlight>
          <br className="md:hidden" />
          <span className="mx-2 text-blue-400">•</span>
          Analista de Dados
          <span className="mx-2 text-blue-400">•</span>
          Criador do E-Fine Web
        </SubTitle>

        {/* Descrição com ícone */}
        <Description>
          Transformando dados, sistemas e ideias em soluções reais.
        </Description>

        {/* Grupo de botões CTA - Versão com duas opções */}
        <ButtonGroup>
          <PrimaryButton
            href="#projetos"
            onClick={handleProjetosClick}
          >
            Ver Projetos
          </PrimaryButton>

          <div className="flex gap-2">
            <SecondaryButton
              href="/Jefferson Rezende.pdf"
              download
              title="Download PDF"
            >
              <FiDownload className="mr-2" />
              PDF
            </SecondaryButton>

            <SecondaryButton
              href="/Jefferson Rezende.docx"
              download
              title="Download Word"
              className="px-6" // Um pouco menor
            >
              <FiDownload className="mr-2" />
              DOCX
            </SecondaryButton>
          </div>
        </ButtonGroup>

        {/* Links sociais */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/jeffersonrezende2007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-800/50 rounded-full hover:bg-neutral-700 transition-all duration-300 hover:scale-110 hover:text-blue-400"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jefferson-rezende-a944b7385/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-neutral-800/50 rounded-full hover:bg-neutral-700 transition-all duration-300 hover:scale-110 hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
        </div>

        {/* Scroll Indicator (opcional - removi porque você tirou do código) */}
      </ContentWrapper>
    </Container>
  );
};

export default Hero;