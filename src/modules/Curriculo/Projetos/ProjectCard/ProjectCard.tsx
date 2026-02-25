// src/modules/Curriculo/Projetos/ProjectCard.tsx

import { FC } from "react";
import { 
  Card, 
  CardTitle, 
  CardDesc, 
  TechList, 
  TechItem, 
  ExternalLink 
} from "./ProjectCard.styles";
import { ProjectCardProps } from "./ProjectCard.types";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

const ProjectCard: FC<ProjectCardProps> = ({ title, description, techs, link }) => {
  const isExternalLink = link && link !== "#" && !link.includes("github");
  const isGithub = link && link.includes("github");
  
  // Se não tiver link ou for "#", mostra botão desabilitado
  if (!link || link === "#") {
    return (
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{description}</CardDesc>

        <TechList>
          {techs.map((t) => (
            <TechItem key={t}>{t}</TechItem>
          ))}
        </TechList>

        <ExternalLink 
          as="div" 
          className="opacity-50 cursor-not-allowed bg-neutral-700 hover:shadow-none hover:scale-100 hover:from-neutral-700 hover:to-neutral-700"
        >
          Em breve
        </ExternalLink>
      </Card>
    );
  }

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDesc>{description}</CardDesc>

      <TechList>
        {techs.map((t) => (
          <TechItem key={t}>{t}</TechItem>
        ))}
      </TechList>

      <ExternalLink href={link} target="_blank" rel="noopener noreferrer">
        {isGithub ? (
          <>
            <FiGithub size={18} />
            Ver no GitHub
            <FiArrowRight size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
          </>
        ) : (
          <>
            <FiExternalLink size={18} />
            Acessar Projeto
            <FiArrowRight size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </ExternalLink>
    </Card>
  );
};

export default ProjectCard;