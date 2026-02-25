// src/modules/Footer/Footer.tsx

import { FC } from "react";
import { 
  FooterContainer, 
  ContentWrapper,
  FooterText, 
  FooterLinks, 
  FooterLink,
  FooterIcon,
  FooterDivider
} from "./Footer.styles";
import { FooterProps } from "./Footer.types";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer: FC<FooterProps> = ({}) => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <FooterText>
          © {new Date().getFullYear()} Jefferson Rezende • Todos os direitos reservados
        </FooterText>

        <FooterLinks>
          <FooterLink 
            href="https://github.com/jeffersonrezende2007" 
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FooterIcon>
              <FiGithub size={18} />
            </FooterIcon>
            <span className="hidden sm:inline">GitHub</span>
          </FooterLink>

          <FooterLink 
            href="https://www.linkedin.com/in/jefferson-rezende-a944b7385/" 
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FooterIcon>
              <FiLinkedin size={18} />
            </FooterIcon>
            <span className="hidden sm:inline">LinkedIn</span>
          </FooterLink>

          <FooterLink 
            href="mailto:jeffersonrezende2007@gmail.com"
            title="Email"
          >
            <FooterIcon>
              <FiMail size={18} />
            </FooterIcon>
            <span className="hidden sm:inline">Contato</span>
          </FooterLink>
        </FooterLinks>
      </ContentWrapper>

      {/* Linha decorativa inferior */}
      <div className="mt-6 text-xs text-neutral-600 flex items-center gap-1">

      </div>
    </FooterContainer>
  );
};

export default Footer;