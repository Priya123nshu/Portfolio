"use client";

import { motion, Variants } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonText } from "@/components/ui/neon-text";
import {
  Brain,
  Database,
  Code2,
  Cpu,
  Network,
  BarChart3,
  Layers,
  Workflow,
} from "lucide-react";

const skills = [
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    proficiency: 95,
  },
  {
    category: "Deep Learning",
    icon: Layers,
    items: ["CNNs", "Transformers", "GANs", "RNNs/LSTMs"],
    proficiency: 90,
  },
  {
    category: "NLP",
    icon: Network,
    items: ["BERT", "GPT", "spaCy", "Hugging Face"],
    proficiency: 88,
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: ["Apache Spark", "Airflow", "Kafka", "dbt"],
    proficiency: 85,
  },
  {
    category: "MLOps",
    icon: Workflow,
    items: ["MLflow", "Kubeflow", "Docker", "Kubernetes"],
    proficiency: 82,
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "TypeScript", "Rust", "SQL"],
    proficiency: 92,
  },
  {
    category: "Cloud & Infra",
    icon: Cpu,
    items: ["AWS", "GCP", "Azure ML", "Terraform"],
    proficiency: 80,
  },
  {
    category: "Analytics",
    icon: BarChart3,
    items: ["Pandas", "NumPy", "Matplotlib", "Plotly"],
    proficiency: 94,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 font-mono text-sm text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            SKILL_MATRIX
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            <NeonText as="span">Technical Arsenal</NeonText>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A comprehensive toolkit for building intelligent systems from concept to production
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlassCard className="group h-full p-5">

                {/* Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/30 px-2 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Progress */}
                <div className="mt-auto">
                  <div className="mb-1 flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: "AI Projects", value: "10+", suffix: "Built from scratch" },
            { label: "ML Models", value: "5+", suffix: "Deployed & evaluated" },
            { label: "End-to-End Systems", value: "3", suffix: "Production-ready" },
          ].map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center" glowOnHover={false}>
              <div className="mb-1 font-mono text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.suffix}</div>
            </GlassCard>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


