// src/modules/Curriculo/SoftSkills/SoftSkills.styles.ts

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

export const Title = tw.h1`
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
  after:mt-4
  pb-6
`;

export const Grid = tw.div`
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  gap-6
  lg:gap-8
  w-full
  max-w-7xl
  mx-auto
  px-4
`;

export const SkillCard = tw.div`
  bg-neutral-800/30
  backdrop-blur-sm
  border
  border-neutral-700/50
  rounded-2xl
  p-8
  text-center
  text-neutral-200
  text-lg
  lg:text-xl
  font-medium
  transition-all
  duration-300
  hover:scale-105
  hover:-translate-y-2
  hover:border-blue-500/50
  hover:shadow-xl
  hover:shadow-blue-500/20
  hover:bg-neutral-800/40
  animate-fadeIn
  flex
  flex-col
  items-center
  gap-3
  cursor-default
  group
`;

export const SkillIcon = tw.div`
  text-3xl
  text-blue-400
  mb-2
  opacity-80
  group-hover:opacity-100
  group-hover:scale-110
  group-hover:text-blue-300
  transition-all
  duration-300
`;

export const SkillName = tw.span`
  relative
  inline-block
  after:content-['']
  after:absolute
  after:bottom-0
  after:left-1/2
  after:-translate-x-1/2
  after:w-0
  after:h-0.5
  after:bg-gradient-to-r
  after:from-blue-400
  after:to-purple-400
  after:transition-all
  after:duration-300
  group-hover:after:w-full
  pb-1
`;