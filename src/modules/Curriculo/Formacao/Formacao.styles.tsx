// src/modules/Curriculo/Formacao/Formacao.styles.ts

import tw from "tailwind-styled-components";

export const Container = tw.div`
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

export const Title = tw.h2`
  text-4xl
  sm:text-5xl
  font-bold
  mb-12
  text-center
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
`;

// Seção de Educação
export const EducationSection = tw.div`
  flex
  flex-col
  gap-16
  mt-8
  w-full
  max-w-[1400px]
  mx-auto
  px-2
  md:px-4
`;

// Container para cada linha (foto + texto)
export const EducationRow = tw.div<{ $reverse?: boolean }>`
  flex
  flex-col
  ${(p) => p.$reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}
  gap-8
  lg:gap-12
  xl:gap-16
  items-center
  w-full
`;

// Card da FOTO - separado, quadrado com cantos arredondados
export const PhotoCard = tw.div`
  w-full
  lg:w-5/12
  flex
  justify-center
  lg:justify-${(p) => p.$reverse ? 'start' : 'end'}
`;

export const Photo = tw.div`
  w-80
  h-80
  sm:w-96
  sm:h-96
  lg:w-[400px]
  lg:h-[400px]
  xl:w-[480px]
  xl:h-[480px]
  rounded-2xl
  overflow-hidden
  border-4
  border-blue-500/30
  shadow-2xl
  shadow-blue-500/20
  transition-transform
  duration-300
  hover:scale-105
  hover:border-blue-400
  bg-neutral-800
`;

// Card do TEXTO - separado
export const TextCard = tw.div`
  w-full
  lg:w-7/12
  bg-neutral-800/30
  backdrop-blur-sm
  border
  border-neutral-700/50
  rounded-2xl
  p-8
  lg:p-10
  xl:p-12
  hover:border-blue-500/50
  hover:shadow-xl
  hover:shadow-blue-500/10
  transition-all
  duration-300
`;

export const EducationInfo = tw.div`
  flex
  flex-col
  gap-4
  lg:gap-6
`;

export const EducationTitle = tw.h3`
  text-3xl
  lg:text-4xl
  xl:text-5xl
  font-bold
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
`;

export const EducationSubtitle = tw.h4`
  text-xl
  lg:text-2xl
  text-blue-300
  font-medium
`;

export const EducationMeta = tw.div`
  flex
  flex-wrap
  gap-4
  lg:gap-6
  text-sm
  lg:text-base
  text-neutral-400
`;

export const EducationMetaItem = tw.span`
  flex
  items-center
  gap-2
`;

export const EducationDescription = tw.p`
  text-base
  lg:text-lg
  text-neutral-300
  leading-relaxed
`;

export const EducationBadge = tw.div`
  inline-block
  bg-gradient-to-r
  from-blue-500/20
  to-purple-500/20
  text-blue-300
  px-4
  lg:px-6
  py-2
  lg:py-3
  rounded-full
  text-sm
  lg:text-base
  w-fit
`;

export const EducationAward = tw.div`
  flex
  items-center
  gap-2
  text-yellow-400
  text-base
  lg:text-lg
`;