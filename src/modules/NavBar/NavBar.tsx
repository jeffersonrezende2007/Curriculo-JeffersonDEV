// src/modules/NavBar/NavBar.tsx
"use client";

import React, { FC } from "react";
import { NavBarContainer, NavItemStyle } from "./NavBar.styles";

const NavItem = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <NavItemStyle href={href} onClick={onClick}>
    {children}
  </NavItemStyle>
);

const NavBar: FC = () => {

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
  };

  return (
    <NavBarContainer>
      <NavItem href="/#inicio" onClick={(e) => handleClick(e, "#inicio")}>
        Início
      </NavItem>

      <NavItem href="/#sobre-mim" onClick={(e) => handleClick(e, "#sobre-mim")}>
        Sobre Mim
      </NavItem>

      <NavItem href="/#formacao" onClick={(e) => handleClick(e, "#formacao")}>
        Formação
      </NavItem>

      <NavItem href="/#projetos" onClick={(e) => handleClick(e, "#projetos")}>
        Projetos
      </NavItem>

      <NavItem href="/#hardskills" onClick={(e) => handleClick(e, "#hardskills")}>
        Hard Skills
      </NavItem>

      <NavItem href="/#softskills" onClick={(e) => handleClick(e, "#softskills")}>
        Soft Skills
      </NavItem>

      <NavItem href="/#contato" onClick={(e) => handleClick(e, "#contato")}>
        Contato
      </NavItem>

    </NavBarContainer>
  );
};

export default NavBar;