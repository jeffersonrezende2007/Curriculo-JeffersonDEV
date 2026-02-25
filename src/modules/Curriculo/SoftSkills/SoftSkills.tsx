// src/modules/Curriculo/SoftSkills/SoftSkills.tsx

import { FC } from "react";
import { 
  Container, 
  Title, 
  Grid, 
  SkillCard,
  SkillIcon,
  SkillName 
} from "./SoftSkills.styles";
import { SoftSkillsProps } from "./SoftSkills.types";
import { 
  FiMessageCircle, 
  FiTrendingUp, 
  FiZap, 
  FiFolder, 
  FiUsers, 
  FiFastForward,
  FiGitMerge,
  FiClock 
} from "react-icons/fi";

const SoftSkills: FC<SoftSkillsProps> = ({}) => {
  const skills = [
    { name: "Comunicação Clara", icon: <FiMessageCircle /> },
    { name: "Pensamento Analítico", icon: <FiTrendingUp /> },
    { name: "Resolução de Problemas", icon: <FiZap /> },
    { name: "Organização e Foco", icon: <FiFolder /> },
    { name: "Trabalho em Equipe", icon: <FiUsers /> },
    { name: "Aprendizado Rápido", icon: <FiFastForward /> },
    { name: "Adaptabilidade", icon: <FiGitMerge /> },
    { name: "Gerenciamento de Tempo", icon: <FiClock /> },
  ];

  return (
    <Container>
      <Title>Soft Skills</Title>

      <Grid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon>
              {skill.icon}
            </SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Container>
  );
};

export default SoftSkills;