// src/providers/SpotlightProvider.tsx
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface SpotlightContextType {
  mousePosition: { x: number; y: number };
}

const SpotlightContext = createContext<SpotlightContextType>({
  mousePosition: { x: 0, y: 0 },
});

export const useSpotlight = () => useContext(SpotlightContext);

interface SpotlightProviderProps {
  children: ReactNode;
}

export const SpotlightProvider = ({ children }: SpotlightProviderProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ⭐️ Log para testar se está rastreando o mouse
  useEffect(() => {
    console.log("mousePosition:", mousePosition);
  }, [mousePosition]);

  return (
    <SpotlightContext.Provider value={{ mousePosition }}>
      {children}
    </SpotlightContext.Provider>
  );
};