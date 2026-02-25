// src/modules/Curriculo/HardSkills/HardSkills.tsx

"use client";

import { FC, useRef, useEffect } from "react";
import { HardSkillsProps } from "./HardSkills.types";
import { Container, Title, SkillsWrapper, SkillsTrack, SkillCard, SkillName } from "./HardSkills.styles";
import { FaPython, FaJs, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiSupabase, SiClickhouse, SiTypescript, SiNextdotjs, SiTailwindcss, SiChakraui } from "react-icons/si";


const HardSkills: FC<HardSkillsProps> = ({ }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

    const skills = [
    { name: "TypeScript", icon: <SiTypescript size={48} color="#3178c6" /> },
    { name: "JavaScript", icon: <FaJs size={48} color="#f7df1e" /> },
    { name: "React", icon: <FaReact size={48} color="#61dafb" /> },
    { name: "Next.js", icon: <SiNextdotjs size={48} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={48} color="#38bdf8" /> },
    { name: "Chakra UI", icon: <SiChakraui size={48} color="#3bc1c9" /> },
    { name: "Python", icon: <FaPython size={48} color="#3776ab" /> },
    { name: "Supabase", icon: <SiSupabase size={48} color="#3ecf8e" /> },
    { name: "ClickHouse", icon: <SiClickhouse size={48} color="#f2b300" /> },
    { name: "Git", icon: <FaGitAlt size={48} color="#f14e32" /> },
    { name: "SQL", icon: <FaDatabase size={48} color="#d1d5db" /> },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;

    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;

    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    if (!trackRef.current) return;

    isDragging.current = false;
    trackRef.current.style.cursor = 'grab';
    trackRef.current.style.removeProperty('user-select');
  };

  const handleMouseLeave = () => {
    if (!trackRef.current) return;

    isDragging.current = false;
    trackRef.current.style.cursor = 'grab';
    trackRef.current.style.removeProperty('user-select');
  };

  useEffect(() => {
    const track = trackRef.current;

    if (track) {
      track.addEventListener('mousemove', handleMouseMove);
      track.addEventListener('mouseup', handleMouseUp);
      track.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (track) {
        track.removeEventListener('mousemove', handleMouseMove);
        track.removeEventListener('mouseup', handleMouseUp);
        track.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Container>
      <Title>Hard Skills</Title>

      <SkillsWrapper>
        <SkillsTrack
          ref={trackRef}
          onMouseDown={handleMouseDown}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsTrack>
      </SkillsWrapper>
    </Container>
  );
};

export default HardSkills;