import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";


import { GridBackground } from "@/components/ui/grid-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-cyan-500/30">
      <GridBackground />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
