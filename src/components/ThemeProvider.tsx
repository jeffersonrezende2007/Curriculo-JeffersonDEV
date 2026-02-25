// src/providers/ThemeProvider.tsx (ou crie se não existir)
"use client";

import { ReactNode } from "react";
import { SpotlightProvider } from "./SpotlightProvider";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <SpotlightProvider>
      {children}
    </SpotlightProvider>
  );
};