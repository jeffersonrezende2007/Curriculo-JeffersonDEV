// src/modules/Curriculo/CurriculoPage/CurriculoPage.tsx
import { FC } from "react";
import { CurriculoPageContainer, Title, SubTitle } from "./CurriculoPage.styles";
import { CurriculoPageProps } from "./CurriculoPage.types";

const CurriculoPage: FC<CurriculoPageProps> = ({}) => {
  return (
    <CurriculoPageContainer>
      <Title>Meu Currículo</Title>
      <SubTitle>Bem-vindo! Aqui você encontra minha trajetória, projetos e habilidades.</SubTitle>
    </CurriculoPageContainer>
  );
};

export default CurriculoPage;