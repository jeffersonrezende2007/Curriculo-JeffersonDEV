// src/modules/Curriculo/Hero/Hero.styles.tsx

import tw from "tailwind-styled-components";

export const Container = tw.section`
  relative
  min-h-screen
  w-full
  flex
  items-center
  justify-center
  px-4
  sm:px-6
  lg:px-8
  overflow-visible
`;

export const ContentWrapper = tw.div`
  max-w-4xl
  mx-auto
  text-center
  z-10
  animate-fadeIn
`;

export const Title = tw.h1`
  text-4xl
  sm:text-5xl
  md:text-6xl
  lg:text-7xl
  font-black
  text-white
  mb-4
  leading-tight
  tracking-tight
`;

export const SubTitle = tw.p`
  text-lg
  sm:text-xl
  md:text-2xl
  text-neutral-300
  max-w-3xl
  mx-auto
  mb-6
  leading-relaxed
  font-light
`;

export const Highlight = tw.span`
  text-blue-400
  font-semibold
`;

export const Description = tw.p`
  text-base
  sm:text-lg
  md:text-xl
  text-neutral-400
  max-w-2xl
  mx-auto
  mb-8
  flex
  items-center
  justify-center
  gap-2
  bg-neutral-800/30
  backdrop-blur-sm
  px-6
  py-3
  rounded-full
  border
  border-neutral-700/50
`;

export const ButtonGroup = tw.div`
  flex
  flex-col
  sm:flex-row
  gap-4
  justify-center
  items-center
  mt-8
`;

export const PrimaryButton = tw.a`
  px-8
  py-4
  bg-gradient-to-r
  from-blue-600
  to-purple-600
  text-white
  font-semibold
  rounded-full
  transition-all
  duration-300
  hover:scale-105
  hover:shadow-lg
  hover:shadow-blue-600/25
  cursor-pointer
  flex
  items-center
  justify-center
  min-w-[200px]
`;

export const SecondaryButton = tw.a`
  px-8
  py-4
  bg-transparent
  border-2
  border-neutral-700
  text-white
  font-semibold
  rounded-full
  transition-all
  duration-300
  hover:border-blue-400
  hover:text-blue-400
  hover:scale-105
  cursor-pointer
  flex
  items-center
  justify-center
  min-w-[200px]
`;

export const ScrollIndicator = tw.button`
  absolute
  bottom-8
  left-1/2
  transform
  -translate-x-1/2
  flex
  flex-col
  items-center
  gap-2
  text-neutral-400
  hover:text-white
  transition-colors
  duration-300
  cursor-pointer
  animate-float
`;