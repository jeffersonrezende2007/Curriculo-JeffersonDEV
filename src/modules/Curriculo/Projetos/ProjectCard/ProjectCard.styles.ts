// src/modules/Curriculo/Projetos/ProjectCard.styles.ts

import tw from "tailwind-styled-components";

export const Card = tw.div`
  bg-neutral-800/30
  backdrop-blur-sm
  border
  border-neutral-700/50
  rounded-2xl
  p-6
  flex
  flex-col
  gap-4
  h-full
  min-h-[360px]
  transition-all
  duration-300
  hover:border-blue-500/50
  hover:shadow-xl
  hover:shadow-blue-500/10
  hover:-translate-y-2
  hover:scale-[1.02]
`;

export const CardTitle = tw.h2`
  text-xl 
  lg:text-2xl
  font-bold
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  tracking-tight
  mb-1
`;

export const CardDesc = tw.p`
  text-neutral-300
  text-sm
  lg:text-base
  leading-relaxed
  flex-1
  line-clamp-4
  lg:line-clamp-5
`;

export const TechList = tw.div`
  flex 
  flex-wrap 
  gap-2 
  mt-2
  min-h-[60px]
`;

export const TechItem = tw.span`
  bg-gradient-to-r
  from-blue-500/10
  to-purple-500/10
  border
  border-blue-500/20
  text-blue-300
  px-3
  py-1.5
  rounded-full
  text-xs
  lg:text-sm
  font-medium
  hover:border-blue-400
  hover:bg-blue-500/20
  hover:scale-105
  transition-all
  duration-300
  cursor-default
`;

export const ExternalLink = tw.a`
  mt-4
  py-3
  px-4
  bg-gradient-to-r
  from-blue-600
  to-purple-600
  text-white
  text-sm
  lg:text-base
  font-medium
  rounded-full
  transition-all
  duration-300
  hover:shadow-lg
  hover:shadow-blue-600/25
  hover:scale-105
  hover:from-blue-500
  hover:to-purple-500
  flex
  items-center
  justify-center
  gap-2
  w-full
  text-center
  cursor-pointer
  border
  border-transparent
  hover:border-blue-400/50
  tracking-wide
`;