// src/modules/NavBar/NavBar.styles.ts
import tw from "tailwind-styled-components";

export const NavBarContainer = tw.nav`
  fixed
  top-4
  left-1/2
  -translate-x-1/2
  flex
  items-center
  gap-6
  bg-white/10
  backdrop-blur-xl
  px-8
  py-3
  rounded-full
  shadow-lg
  border
  border-white/20
  z-50
`;

export const NavItemStyle = tw.a`
  text-white
  font-medium
  hover:text-blue-400
  transition
  cursor-pointer
`;