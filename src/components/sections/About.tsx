import { Code2, Brain, Rocket, Coffee } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      label: "System Thinking",
      description: "Designing scalable backend and full-stack systems",
    },
    {
      icon: Brain,
      label: "AI & ML",
      description: "Building intelligent systems with ML, LLMs, and RAG",
    },
    {
      icon: Rocket,
      label: "Problem Solving",
      description: "Turning complex problems into practical solutions",
    },
    {
      icon: Coffee,
      label: "Consistency",
      description: "Focused on continuous learning and improvement",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-primary text-sm tracking-wider">
                {"// About Me"}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Building <span className="text-gradient">scalable systems</span>
                ,
                <br />
                with intelligence and intent
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a full-stack developer and AI/ML engineer with a strong
                interest in building scalable backend systems and intelligent
                applications. My work spans from designing RESTful APIs and
                microservices to developing machine learning and agentic AI
                systems.
              </p>

              <p>
                I have hands-on experience with technologies like Java, Python,
                Node.js, React, and modern ML frameworks, and I enjoy working at
                the intersection of software engineering and artificial
                intelligence—where systems don’t just run, but reason and adapt.
              </p>

              <p>
                I’m particularly interested in areas like RAG pipelines,
                LLM-based agents, system design, and performance optimization. I
                value clean architecture, clarity in design, and building things
                that work reliably in real-world scenarios.
              </p>
            </div>

            {/* Stats (Honest & Strong) */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gradient">250+</div>
                <div className="text-sm text-muted-foreground">
                  DSA Problems Solved
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">
                  ML / DL Projects & Experiments
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">4+</div>
                <div className="text-sm text-muted-foreground">
                  Production-grade Projects
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="card-gradient p-6 rounded-xl border border-border/50 hover-lift"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
