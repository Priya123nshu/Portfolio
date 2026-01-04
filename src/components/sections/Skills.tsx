import {
  Code2,
  Database,
  Globe,
  Layers,
  Terminal,
  Palette,
  Server,
  GitBranch,
  Brain,
  Cpu,
  Network,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
}

export const Skills = () => {
  const skills: Skill[] = [
    // Languages
    { name: "TypeScript", icon: Code2, category: "Languages" },
    { name: "JavaScript", icon: Code2, category: "Languages" },
    { name: "Java", icon: Code2, category: "Languages" },
    { name: "Python", icon: Terminal, category: "Languages" },
    { name: "SQL", icon: Database, category: "Languages" },

    // Frontend
    { name: "React", icon: Layers, category: "Frontend" },
    { name: "Next.js", icon: Globe, category: "Frontend" },
    { name: "Tailwind CSS", icon: Palette, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "REST APIs", icon: Network, category: "Backend" },
    { name: "PostgreSQL", icon: Database, category: "Backend" },
    { name: "MongoDB", icon: Database, category: "Backend" },
    { name: "GraphQL", icon: Globe, category: "Backend" },

    // AI / ML
    { name: "Machine Learning", icon: Brain, category: "AI / ML" },
    { name: "Deep Learning", icon: Cpu, category: "AI / ML" },
    { name: "NLP", icon: Brain, category: "AI / ML" },
    { name: "Computer Vision", icon: Cpu, category: "AI / ML" },
    { name: "LLMs", icon: Brain, category: "AI / ML" },
    { name: "RAG", icon: Network, category: "AI / ML" },
    { name: "LangChain", icon: Network, category: "AI / ML" },

    // Tools
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "GitHub", icon: GitBranch, category: "Tools" },
    { name: "Docker", icon: Server, category: "Tools" },
    { name: "AWS", icon: Globe, category: "Tools" },
    { name: "Postman", icon: Globe, category: "Tools" },
    { name: "VS Code", icon: Code2, category: "Tools" },

    // Foundations
    {
      name: "Data Structures & Algorithms",
      icon: Code2,
      category: "Foundations",
    },
    { name: "System Design", icon: Network, category: "Foundations" },
    { name: "Computer Networks", icon: Network, category: "Foundations" },
    { name: "Databases", icon: Database, category: "Foundations" },
  ];

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="section-padding relative bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-primary text-sm tracking-wider">
            {"// Skills & Technologies"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to design scalable systems and intelligent
            applications.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-mono text-muted-foreground">
                {`{${category}}`}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-badge flex items-center gap-2 cursor-default"
                      style={{
                        animationDelay: `${(catIndex * 6 + index) * 0.05}s`,
                      }}
                    >
                      <skill.icon className="h-4 w-4" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
