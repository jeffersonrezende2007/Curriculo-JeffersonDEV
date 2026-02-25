// src/modules/Curriculo/Formacao/Formacao.tsx

"use client";

import { FC } from "react";
import { FormacaoProps } from "./Formacao.types";
import {
  Container,
  Title,
  EducationSection,
  EducationRow,
  PhotoCard,
  Photo,
  TextCard,
  EducationInfo,
  EducationTitle,
  EducationSubtitle,
  EducationMeta,
  EducationMetaItem,
  EducationDescription,
  EducationBadge,
  EducationAward
} from "./Formacao.styles";
import { FiCalendar, FiMapPin, FiAward, FiBook } from "react-icons/fi";

const Formacao: FC<FormacaoProps> = ({ }) => {
  return (
    <Container>
      <Title>Formação Acadêmica</Title>

      <EducationSection>
        {/* Card 1 - UNIP (foto à direita, texto à esquerda) */}
        <EducationRow $reverse>
          {/* Card da Foto */}
          <PhotoCard>
            <Photo>
              <img
                src="/Faculdade.png"
                alt="Fachada da UNIP"
                className="w-full h-full object-cover"
              />
            </Photo>
          </PhotoCard>

          {/* Card do Texto */}
          <TextCard>
            <EducationInfo>
              <EducationTitle>Ciência da Computação</EducationTitle>
              <EducationSubtitle>UNIP – Universidade Paulista</EducationSubtitle>

              <EducationMeta>
                <EducationMetaItem>
                  <FiCalendar size={18} /> 2026 - 2029
                </EducationMetaItem>
                <EducationMetaItem>
                  <FiMapPin size={18} /> SP
                </EducationMetaItem>
              </EducationMeta>

              <EducationDescription>
                Cursando o 1º semestre com foco em desenvolvimento de software, estruturas de dados e inteligência artificial.
                Participante ativo de projetos, com ênfase em desenvolvimento web e análise de dados.
              </EducationDescription>

              <EducationBadge>
                Previsão de conclusão: Dez/2029
              </EducationBadge>
            </EducationInfo>
          </TextCard>
        </EducationRow>

        {/* Card 2 - Formação Técnica (foto à esquerda, texto à direita) */}
        <EducationRow>
          {/* Card da Foto */}
          <PhotoCard>
            <Photo>
              <img
                src="/Ensino.png"
                alt="Formação Técnica em Contabilidade"
                className="w-full h-full object-cover"
              />
            </Photo>
          </PhotoCard>

          {/* Card do Texto */}
          <TextCard>
            <EducationInfo>
              <EducationTitle>Técnico em Contabilidade</EducationTitle>
              <EducationSubtitle>FIEB – Fundação Instituto de Educação de Barueri</EducationSubtitle>

              <EducationMeta>
                <EducationMetaItem>
                  <FiCalendar size={18} /> 2023 - 2025
                </EducationMetaItem>
                <EducationMetaItem>
                  <FiMapPin size={18} /> SP
                </EducationMetaItem>
              </EducationMeta>

              <EducationDescription>
                Formação técnica completa que proporcionou base sólida em contabilidade, finanças e análise de dados,
                fundamental para desenvolver sistemas financeiros robustos e entender as necessidades do negócio.
              </EducationDescription>

              <EducationAward>
                <FiAward size={20} />
                <span>Concluído</span>
              </EducationAward>
            </EducationInfo>
          </TextCard>
        </EducationRow>

        {/* Card 3 - Cursos Complementares (opcional) */}
        <EducationRow $reverse>
          {/* Card da Foto */}
          <PhotoCard>
            <Photo>
              <img
                src="/Aprendizado.png"
                alt="Cursos de Especialização"
                className="w-full h-full object-cover"
              />
            </Photo>
          </PhotoCard>

          {/* Card do Texto */}
          <TextCard>
            <EducationInfo>
              <EducationTitle>Desenvolvimento Contínuo</EducationTitle>
              <EducationSubtitle>Estudos em andamento e aprimoramento constante</EducationSubtitle>

              <EducationMeta>
                <EducationMetaItem>
                  <FiCalendar size={18} /> 2021 - Presente
                </EducationMetaItem>
              </EducationMeta>

              <EducationDescription>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <FiBook className="text-blue-400" size={20} />
                    <span>Aprofundamento em Next.js, React e desenvolvimento Full Stack</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiBook className="text-blue-400" size={20} />
                    <span>Estudo contínuo de análise de dados com Python e Power BI</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiBook className="text-blue-400" size={20} />
                    <span>Prática em bancos de dados SQL e NoSQL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiBook className="text-blue-400" size={20} />
                    <span>Melhorias constantes em arquitetura de software</span>
                  </div>
                </div>
              </EducationDescription>
            </EducationInfo>
          </TextCard>
        </EducationRow>
      </EducationSection>
    </Container>
  );
};

export default Formacao;