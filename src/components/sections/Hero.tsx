import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ASMRBackground from "@/components/ui/asmr-background";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ASMRBackground />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, hsl(222 47% 6%) 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* Terminal-style greeting */}
          <div
            className="inline-block opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="font-mono text-primary text-sm md:text-base tracking-wider">
              {">"} Hello, World! I'm
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-gradient">Priyanshu Kumar</span>
          </h1>

          {/* Role */}
          <h2
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Full-Stack Developer · AI/ML Engineer
          </h2>

          {/* Tagline */}
          <p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Building scalable backend systems and AI-driven applications, with a
            focus on intelligent, production-ready architectures.
          </p>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="hover-lift rounded-full"
              asChild
            >
              <a
                href="https://github.com/Priya123nshu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover-lift rounded-full"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/priyanshu-kumar-980b50179/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hover-lift rounded-full"
              asChild
            >
              <a href="mailto:priyanshu.altruist@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <Button
              size="lg"
              className="glow-primary px-8"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in cursor-pointer"
          style={{ animationDelay: "1.5s" }}
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
