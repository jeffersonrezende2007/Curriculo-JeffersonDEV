// src/modules/Curriculo/CurriculoPage/CurriculoPage.styles.ts
import tw from "tailwind-styled-components";

export const CurriculoPageContainer = tw.div`
  w-full 
  min-h-screen 
  flex 
  flex-col 
  items-center 
  justify-center 
  bg-neutral-950 
  text-white 
  px-6
`;

export const Title = tw.h1`
  text-4xl 
  font-bold 
  mb-4 
  text-blue-400
`;

export const SubTitle = tw.h2`
  text-lg 
  text-neutral-300 
  max-w-2xl 
  text-center
`;