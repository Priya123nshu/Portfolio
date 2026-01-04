import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanshu.altruist@gmail.com",
      href: "mailto:priyanshu.altruist@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Priya123nshu",
      href: "https://github.com/Priya123nshu/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/priyanshu-kumar-980b50179",
      href: "https://www.linkedin.com/in/priyanshu-kumar-980b50179/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur, Uttar Pradesh, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-primary text-sm tracking-wider">
            {"// Get In Touch"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let’s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating, hiring, or discussing ideas around
            software engineering and AI? I’m always open to meaningful
            conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-mono text-muted-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-card border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-mono text-muted-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-card border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-mono text-muted-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me what you’d like to discuss..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="bg-card border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full glow-primary">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              You can also reach out directly through the platforms below. I
              usually respond within 24–48 hours.
            </p>

            <div className="space-y-4 mt-8">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="card-gradient p-4 rounded-xl border border-border/50 hover-lift"
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {link.label}
                        </div>
                        <div className="font-medium">{link.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="mt-8 p-4 rounded-xl border border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 h-3 w-3 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-sm">
                  Open to internships, full-time roles, and collaborations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
