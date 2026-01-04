import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const Projects = () => {
  const projects: Project[] = [
    // ================= FEATURED PROJECTS =================
    {
      title: "Project Nexus — Agentic AI System",
      description:
        "An advanced agentic AI system where autonomous agents read, validate, write, and improve code. Built using a RAG-based architecture with short-term and long-term memory, metadata-aware retrieval, and multi-tool reasoning.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      tags: ["Python", "LangChain", "RAG", "LLMs", "Vector DBs"],
      github: "https://github.com/Priya123nshu",
      featured: true,
    },
    {
      title: "Due Diligence Agent",
      description:
        "AI-powered due diligence agent automating company financial and compliance analysis using LangChain, Azure OpenAI, and Tavily search across multiple structured and unstructured data sources.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
      tags: ["LangChain", "Azure OpenAI", "Agentic AI", "LLMs"],
      github: "https://github.com/Priya123nshu/due_diligence_agent",
      featured: true,
    },
    {
      title: "Investment Memo Generator",
      description:
        "LLM-based investment memo generator leveraging LangChain and LangGraph to synthesize insights from multiple data sources into structured, decision-ready financial reports.",
      image:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
      tags: ["LangChain", "LangGraph", "Python", "LLMs"],
      github: "https://github.com/Priya123nshu/investment_memo_gen",
      featured: true,
    },

    // ================= OTHER NOTEWORTHY PROJECTS =================
    {
      title: "Nexus Code Editor",
      description:
        "A TypeScript-based code editor prototype focused on integrating intelligent assistance and modern developer workflows.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=500&fit=crop",
      tags: ["TypeScript", "Developer Tools"],
      github: "https://github.com/Priya123nshu/nexus-code-editor",
      featured: false,
    },
    {
      title: "Buy–Sell Agent",
      description:
        "Autonomous agent prototype for reasoning-driven buy/sell decision workflows using LLM-based planning and execution.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      tags: ["Python", "Agentic AI", "LLMs"],
      github: "https://github.com/Priya123nshu/buy-sell-agent",
      featured: false,
    },
    {
      title: "Scalable URL Shortener",
      description:
        "A high-performance URL shortener microservice handling over 1M+ requests per month with sub-200ms latency, including analytics for click tracking, geolocation, and device metadata.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      tags: ["Node.js", "Express", "MongoDB", "System Design"],
      github: "https://github.com/Priya123nshu",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-primary text-sm tracking-wider">
            {"// Featured Work"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of real-world projects focused on scalable systems,
            agentic AI, and applied machine learning.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "lg:text-right" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-5 space-y-4 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="font-mono text-primary text-sm">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>
                <div className="card-gradient p-6 rounded-xl border border-border/50">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-center text-muted-foreground">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="card-gradient p-6 rounded-xl border border-border/50 hover-lift"
                >
                  <Folder className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-lg font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
