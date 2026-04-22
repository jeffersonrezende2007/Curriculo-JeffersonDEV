import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProtocolSection from "@/components/ProtocolSection";
import ContactFooter from "@/components/ContactFooter";
import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <main className="w-full bg-obsidian min-h-screen text-ivory selection:bg-champagne selection:text-obsidian overflow-x-hidden">
      <FloatingNav />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <TechStackSection />
      <ProtocolSection />
      <ContactFooter />
    </main>
  );
}