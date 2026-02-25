// src/modules/Footer/Footer.styles.ts

import tw from "tailwind-styled-components";

export const FooterContainer = tw.footer`
  w-full
  mt-20
  py-8
  px-4
  flex
  flex-col
  items-center
  justify-center
  bg-gradient-to-b
  from-transparent
  via-neutral-900/50
  to-neutral-950
  border-t
  border-neutral-800/50
  text-neutral-400
  relative
  before:content-['']
  before:absolute
  before:top-0
  before:left-0
  before:w-full
  before:h-px
  before:bg-gradient-to-r
  before:from-transparent
  before:via-blue-500/30
  before:to-transparent
`;

export const ContentWrapper = tw.div`
  w-full
  max-w-7xl
  mx-auto
  flex
  flex-col
  md:flex-row
  items-center
  justify-between
  gap-6
  md:gap-8
`;

export const FooterText = tw.p`
  text-sm
  text-center
  md:text-left
  bg-gradient-to-r
  from-blue-400
  to-purple-400
  bg-clip-text
  text-transparent
  font-medium
`;

export const FooterLinks = tw.div`
  flex
  items-center
  gap-4
  md:gap-6
`;

export const FooterLink = tw.a`
  flex
  items-center
  gap-2
  px-4
  py-2
  rounded-full
  bg-neutral-800/30
  border
  border-neutral-700/50
  text-sm
  text-neutral-300
  transition-all
  duration-300
  hover:scale-110
  hover:border-blue-500/50
  hover:bg-blue-500/10
  hover:text-blue-400
  hover:shadow-lg
  hover:shadow-blue-500/20
  group
`;

export const FooterIcon = tw.span`
  text-base
  transition-transform
  duration-300
  group-hover:rotate-12
  group-hover:scale-110
`;

export const FooterDivider = tw.span`
  w-px
  h-4
  bg-neutral-700
  hidden
  md:block
`;