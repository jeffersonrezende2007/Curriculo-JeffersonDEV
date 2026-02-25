// src/modules/Curriculo/Projetos/ProjetosPage.styles.ts

import tw from "tailwind-styled-components";

export const ProjetosContainer = tw.div`
  w-full
  min-h-screen
  py-16
  px-4
  sm:px-8
  md:px-12
  lg:px-16
  xl:px-24
  flex
  flex-col
  items-center
`;

export const Title = tw.h1`
  text-5xl
  sm:text-6xl
  lg:text-7xl
  font-black
  tracking-tight
  mb-12
  text-center
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  drop-shadow-lg
  relative
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-24
  after:h-1
  after:bg-gradient-to-r
  after:from-blue-400
  after:to-purple-400
  after:rounded-full
  after:mb-[-20px]
  pb-6
`;

// Grid expandido para os cards
export const ProjectsGrid = tw.div`
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
  lg:gap-8
  w-full
  max-w-[1600px]
  mx-auto
  px-2
  md:px-4
`;

// Wrapper para cada card com efeito de hover consistente
export const ProjectCardWrapper = tw.div`
  w-full
  h-full
  transition-all
  duration-300
  hover:scale-105
  hover:z-10
`;