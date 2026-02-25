// src/modules/Curriculo/Projetos/ProjetosPage.tsx

import { FC } from "react";
import {
  ProjetosContainer,
  Title,
  ProjectsGrid,
  ProjectCardWrapper
} from "./ProjetosPage.styles";
import { ProjetosPageProps } from "./ProjetosPage.types";

import ProjectCard from "../ProjectCard/ProjectCard";

const ProjetosPage: FC<ProjetosPageProps> = ({}) => {
  return (
    <ProjetosContainer>
      <Title>Projetos</Title>

      <ProjectsGrid>
        <ProjectCardWrapper>
          <ProjectCard
            title="E-Fine Web"
            description="Sistema de conciliação e análise financeira de marketplaces com mais de 20 milhões de pedidos processados. Plataforma robusta que integra dados de múltiplos canais de venda."
            techs={["React", "TypeScript", "Python", "Supabase", "ClickHouse", "Docker"]}
            link="http://www.e-fine.com.br/"
          />
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard
            title="Sistema de DRE"
            description="Aplicação web para cálculo, leitura e visualização de demonstrações financeiras. Interface intuitiva com gráficos interativos e exportação de relatórios."
            techs={["Vite", "Chakra UI", "Python", "FastAPI", "PostgreSQL"]}
            link="https://dre-e-fine.vercel.app/login"
          />
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard
            title="Fluxo de Caixa"
            description="Ferramenta simples para gerenciamento de entradas e saídas financeiras. Controle diário de movimentações, categorização de despesas e saldo em tempo real."
            techs={["HTML5", "CSS3", "JavaScript", "Firebase"]}
            link="https://fluxo-de-caixa-3a3d2.web.app/login.html"
          />
        </ProjectCardWrapper>

        <ProjectCardWrapper>
          <ProjectCard
            title="Em Desenvolvimento"
            description="Novo projeto em construção. Em breve, mais inovações para facilitar a vida financeira de empresas e empreendedores."
            techs={["Next.js", "Tailwind", "Node.js", "MongoDB"]}
            link="#"
          />
        </ProjectCardWrapper>
      </ProjectsGrid>
    </ProjetosContainer>
  );
};

export default ProjetosPage;