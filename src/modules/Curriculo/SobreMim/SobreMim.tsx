// src/modules/Curriculo/SobreMim/SobreMim.tsx

import { FC } from "react";
import {
  Container,
  Title,
  Content,
  Paragraph,
  HighlightBox,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel,
  QuoteBox,
  SkillsPreview,
  SkillTag,
} from "./SobreMim.styles";
import { SobreMimProps } from "./SobreMim.types";
import {
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiTarget,
  FiCpu,
  FiBarChart2
} from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";


const SobreMim: FC<SobreMimProps> = ({ }) => {
  return (
    <Container>
      <Title>Sobre Mim</Title>

      <Content>
        {/* Introdução personalizada */}
        <Paragraph className="text-xl text-center leading-relaxed">
          Olá! Meu nome é <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-2xl">Jefferson Rezende</span>.
        </Paragraph>

        <Paragraph className="text-lg text-center max-w-4xl mx-auto">
          Sou <span className="text-blue-400 font-semibold">Desenvolvedor Full Stack</span> e
          <span className="text-blue-400 font-semibold"> Analista de Dados</span> com uma trajetória profissional
          que une tecnologia e negócios. Minha experiência em contabilidade me deu uma visão única sobre
          como a tecnologia pode resolver problemas reais do mundo corporativo.
        </Paragraph>

        {/* O que me move */}
        <HighlightBox>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <FiHeart className="text-3xl text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">O que me move</h3>
                <p className="text-neutral-300">
                  Acredito no poder da tecnologia para transformar negócios e facilitar a vida das pessoas.
                  Cada linha de código que escrevo tem um propósito: resolver problemas de forma eficiente e elegante.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiTarget className="text-3xl text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Meu foco</h3>
                <p className="text-neutral-300">
                  Desenvolvimento de sistemas financeiros robustos, análise de dados para tomada de decisão
                  e criação de experiências web que realmente funcionam para o usuário final.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiCpu className="text-3xl text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Minha abordagem</h3>
                <p className="text-neutral-300">
                  Código limpo, escalável e bem documentado. Busco sempre as melhores práticas do mercado
                  e estou em constante evolução, aprendendo novas tecnologias e metodologias.
                </p>
              </div>
            </div>
          </div>
        </HighlightBox>

        {/* Conquista principal em destaque */}
        <HighlightBox className="mt-8">
          <div className="flex items-start gap-6">
            <FiBriefcase className="text-5xl text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Criador do E-Fine Web
              </h3>
              <p className="text-lg lg:text-xl">
                Fui responsável pela criação e arquitetura inicial do sistema que hoje está em produção
                com mais de <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-2xl">20 milhões de pedidos processados</span> e
                dezenas de clientes ativos utilizando diariamente.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SkillTag><SiNextdotjs className="mr-2" /> Next.js / React</SkillTag>

                <SkillTag><SiNodedotjs className="mr-2" /> Node.js</SkillTag>

                <SkillTag><FaDatabase className="mr-2" /> SQL</SkillTag>

                <SkillTag><SiPython className="mr-2" /> Python</SkillTag>

                <SkillTag><FiBarChart2 className="mr-2" /> Power BI</SkillTag>

                <SkillTag><SiJavascript className="mr-2" /> JavaScript</SkillTag>

                <SkillTag><SiTypescript className="mr-2" /> TypeScript</SkillTag>

                <SkillTag><SiTailwindcss className="mr-2" /> TailwindCSS</SkillTag>

                <SkillTag><FiBriefcase className="mr-2" /> Gestão</SkillTag>

                <SkillTag><FiUsers className="mr-2" /> Team Work</SkillTag>

                <SkillTag><FiCpu className="mr-2" /> Arquitetura</SkillTag>
              </div>
            </div>
          </div>
        </HighlightBox>

        {/* Preview das Skills */}
        <h3 className="text-3xl font-bold mt-16 mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Principais Habilidades
        </h3>

        <SkillsPreview>
          <SkillTag>
            <SiNextdotjs className="mr-2" />
            Next.js
          </SkillTag>

          <SkillTag>
            <SiReact className="mr-2" />
            React
          </SkillTag>

          <SkillTag>
            <SiNodedotjs className="mr-2" />
            Node.js
          </SkillTag>

          <SkillTag>
            <FaDatabase className="mr-2" />
            SQL
          </SkillTag>

          <SkillTag>
            <SiPython className="mr-2" />
            Python
          </SkillTag>

          <SkillTag>
            <FiBarChart2 className="mr-2" />
            Power BI
          </SkillTag>

          <SkillTag>
            <SiJavascript className="mr-2" />
            JavaScript
          </SkillTag>

          <SkillTag>
            <SiTypescript className="mr-2" />
            TypeScript
          </SkillTag>

          <SkillTag>
            <SiTailwindcss className="mr-2" />
            Tailwind CSS
          </SkillTag>

          <SkillTag>
            <FiBriefcase className="mr-2" />
            Gestão
          </SkillTag>

          <SkillTag>
            <FiUsers className="mr-2" />
            Team Work
          </SkillTag>

          <SkillTag>
            <FiCpu className="mr-2" />
            Arquitetura
          </SkillTag>
        </SkillsPreview>

        {/* Estatísticas/Conquistas em Números */}
        <StatsSection>
          <StatCard>
            <StatNumber>20M+</StatNumber>
            <StatLabel>Pedidos processados</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>1.4+</StatNumber>
            <StatLabel>Anos de experiência</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>3+</StatNumber>
            <StatLabel>Projetos entregues</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Dedicação</StatLabel>
          </StatCard>
        </StatsSection>

        {/* Citação/Objetivo */}
        <QuoteBox>
          <p className="text-xl lg:text-2xl italic leading-relaxed">
            "Meu objetivo é construir produtos que realmente façam a diferença na vida das pessoas,
            unindo tecnologia de ponta com soluções práticas para problemas do mundo real."
          </p>
          <div className="mt-6 text-xl lg:text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            — Jefferson Rezende
          </div>
        </QuoteBox>
      </Content>
    </Container>
  );
};

export default SobreMim;