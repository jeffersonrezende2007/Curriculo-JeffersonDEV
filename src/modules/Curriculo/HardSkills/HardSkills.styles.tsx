// src/modules/Curriculo/HardSkills/HardSkills.styles.tsx

import tw from "tailwind-styled-components";

export const Container = tw.div`
  w-full
  min-h-screen
  flex
  flex-col
  items-center
  justify-center
  py-24
  text-center
`;

export const Title = tw.h2`
  text-5xl
  md:text-6xl
  font-bold
  mb-20
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  relative
`;

/* Agora o wrapper ocupa 100vw e ignora limites do container */
export const SkillsWrapper = tw.div`
  w-screen
  relative
  left-1/2
  -translate-x-1/2
  overflow-hidden
  px-20        /* <<< CONTROLE DO ESPAÇO LATERAL AQUI */
  py-10
`;

/* Agora os itens começam EXATAMENTE na esquerda da tela */
export const SkillsTrack = tw.div`
  flex
  gap-8
  overflow-x-auto
  scroll-smooth
  pr-10           /* diminui espaço sobrando na direita */
  pb-2
  scrollbar-hide
  [&::-webkit-scrollbar]:hidden
  [-ms-overflow-style:none]
  [scrollbar-width:none]
`;

export const SkillCard = tw.div`
  w-[220px]
  h-[220px]
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  flex flex-col
  items-center
  justify-center
  gap-4
  transition-all duration-300
  hover:bg-white/10
  hover:border-white/20
  hover:scale-105
  flex-shrink-0
`;

export const SkillName = tw.p`
  text-neutral-200
  font-semibold
  text-lg md:text-xl
  opacity-80
  group-hover:opacity-100
  transition-opacity
  duration-300
  font-[var(--font-geist-sans)]
`;