import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/modules/NavBar/NavBar";
import Footer from "@/modules/Footer/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { SpotlightProvider } from "@/components/SpotlightProvider";

import BackgroundGrid from "@/components/BackgroundGrid";
import Spotlight from "@/components/Spotlight";

export const metadata: Metadata = {
  title: "Jefferson Rezende | Portfólio",
  description: "Portfólio profissional do desenvolvedor Jefferson Rezende",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="text-white antialiased overflow-x-hidden">

        {/* PROVIDER QUE CAPTURA O MOUSE */}
        <SpotlightProvider>

          {/* OUTROS PROVIDERS */}
          <ThemeProvider>

            {/* CAMADA DO FUNDO */}
            <BackgroundGrid />

            {/* SPOTLIGHT GLOBAL */}
            <div className="fixed inset-0 -z-5">
              <Spotlight
                size={600}
                opacity={0.25}
                color="rgba(59,130,246,0.5)"
                className="w-full h-full absolute inset-0"
              >
                <div className="w-full h-full" />
              </Spotlight>
            </div>

            <NavBar />

            <main className="pt-24 min-h-screen relative z-10">
              {children}
            </main>

            <Footer />

          </ThemeProvider>
        
        </SpotlightProvider>

      </body>
    </html>
  );
}