"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonText } from "@/components/ui/neon-text"
import {
  ExternalLink,
  Github,
  Brain,
  Eye,
  MessageSquare,
  LineChart,
  Zap,
  ArrowRight
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Project Nexus – LLM Agent System",
    description:
      "Multi-tool AI agent system built using LangChain and custom memory modules. Agents can read, validate, write, and improve code autonomously with RAG-based knowledge retrieval.",
    tags: ["Python", "LangChain", "RAG", "Vector DB", "LLMs"],
    icon: Brain,
    metrics: {
      tools: "5+",
      architecture: "Multi-Agent",
      memory: "Custom",
    },
    gradient: "from-chart-1/20 to-transparent",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Authentify – Fake Detection Platform",
    description:
      "Multi-modal AI system to detect fake news, deepfakes, and synthetic text using ensemble NLP + CV models. Designed to educate users about digital misinformation.",
    tags: ["Python", "PyTorch", "NLP", "Computer Vision", "Flask"],
    icon: Eye,
    metrics: {
      modality: "Text + CV",
      accuracy: "90%+",
      focus: "Misinformation",
    },
    gradient: "from-chart-2/20 to-transparent",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "TruthScan – Deepfake Detection",
    description:
      "CNN-based deepfake detection system trained on large video datasets. Includes optimized preprocessing pipeline for noise reduction and faster inference.",
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    icon: Eye,
    metrics: {
      accuracy: "88%",
      frames: "100k+",
      speedup: "25%",
    },
    gradient: "from-chart-4/20 to-transparent",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Customer Churn Prediction System",
    description:
      "End-to-end ML pipeline for predicting customer churn using feature engineering, model evaluation, and business-driven performance metrics.",
    tags: ["Scikit-learn", "ML", "EDA", "Feature Engineering"],
    icon: LineChart,
    metrics: {
      task: "Classification",
      pipeline: "End-to-End",
      output: "Business Insights",
    },
    gradient: "from-chart-3/20 to-transparent",
    link: "#",
    github: "#",
  },
]


export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 font-mono text-sm text-primary">
            <Zap className="h-3 w-3" />
            PROJECT_ARCHIVE
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <NeonText as="span">Featured Work</NeonText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Production-grade AI systems solving real-world problems at scale
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <GlassCard
                  className="group relative h-full overflow-hidden p-6"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                          <project.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <Github className="h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <motion.div
                      className="grid grid-cols-3 gap-3 rounded-lg border border-border bg-background/30 p-3"
                      initial={false}
                      animate={hoveredId === project.id ? { borderColor: "rgba(34, 211, 238, 0.3)" } : {}}
                    >
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-mono text-lg font-semibold text-primary">{value}</div>
                          <div className="text-xs capitalize text-muted-foreground">{key}</div>
                        </div>
                      ))}
                    </motion.div>

                    {/* View more indicator */}
                    <motion.div
                      className="mt-4 flex items-center justify-end gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100"
                      initial={false}
                      animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View all projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-6 py-3 font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary/50"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}















// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { GlassCard } from "@/components/ui/glass-card"
// import { NeonText } from "@/components/ui/neon-text"
// import {
//   ExternalLink,
//   Github,
//   Brain,
//   Eye,
//   LineChart,
//   Zap,
//   ArrowRight
// } from "lucide-react"

// const projects = [
//   {
//     id: 1,
//     title: "Project Nexus – LLM Agent System",
//     description:
//       "Multi-tool AI agent system built using LangChain and custom memory modules. Agents can read, validate, write, and improve code autonomously with RAG-based knowledge retrieval.",
//     tags: ["Python", "LangChain", "RAG", "Vector DB", "LLMs"],
//     icon: Brain,
//     metrics: {
//       tools: "5+",
//       architecture: "Multi-Agent",
//       memory: "Custom",
//     },
//     gradient: "from-chart-1/20 to-transparent",
//     link: "https://example.com/project-nexus",
//     github: "https://github.com/your-username/project-nexus",
//   },
//   {
//     id: 2,
//     title: "Authentify – Fake Detection Platform",
//     description:
//       "Multi-modal AI system to detect fake news, deepfakes, and synthetic text using ensemble NLP + CV models.",
//     tags: ["Python", "PyTorch", "NLP", "Computer Vision", "Flask"],
//     icon: Eye,
//     metrics: {
//       modality: "Text + CV",
//       accuracy: "90%+",
//       focus: "Misinformation",
//     },
//     gradient: "from-chart-2/20 to-transparent",
//     link: "https://example.com/authentify",
//     github: "https://github.com/your-username/authentify",
//   },
//   {
//     id: 3,
//     title: "TruthScan – Deepfake Detection",
//     description:
//       "CNN-based deepfake detection system trained on large video datasets with optimized preprocessing pipeline.",
//     tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
//     icon: Eye,
//     metrics: {
//       accuracy: "88%",
//       frames: "100k+",
//       speedup: "25%",
//     },
//     gradient: "from-chart-4/20 to-transparent",
//     link: "https://example.com/truthscan",
//     github: "https://github.com/your-username/truthscan",
//   },
//   {
//     id: 4,
//     title: "Customer Churn Prediction System",
//     description:
//       "End-to-end ML pipeline for predicting customer churn using feature engineering and model evaluation.",
//     tags: ["Scikit-learn", "ML", "EDA", "Feature Engineering"],
//     icon: LineChart,
//     metrics: {
//       task: "Classification",
//       pipeline: "End-to-End",
//       output: "Business Insights",
//     },
//     gradient: "from-chart-3/20 to-transparent",
//     link: "https://example.com/churn-system",
//     github: "https://github.com/your-username/churn-system",
//   },
// ]

// export function Projects() {
//   const [hoveredId, setHoveredId] = useState<number | null>(null)

//   return (
//     <section id="projects" className="relative px-6 py-24">
//       <div className="mx-auto max-w-6xl">

//         {/* Header */}
//         <motion.div className="mb-16 text-center">
//           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 font-mono text-sm text-primary">
//             <Zap className="h-3 w-3" />
//             PROJECT_ARCHIVE
//           </div>
//           <h2 className="mb-4 text-4xl font-bold md:text-5xl">
//             <NeonText as="span">Featured Work</NeonText>
//           </h2>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid gap-6 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredId(project.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* 🔥 Entire card clickable */}
//               <a
//                 href={project.link || project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block h-full"
//               >
//                 <GlassCard
//                   className="group relative h-full overflow-hidden p-6 cursor-pointer"
//                   whileHover={{ y: -5 }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100`} />

//                   <div className="relative z-10">
//                     <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
//                       {project.title}
//                     </h3>

//                     <p className="mb-4 text-muted-foreground">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map(tag => (
//                         <span key={tag} className="text-xs font-mono px-2 py-1 rounded border">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="mt-4 flex justify-end items-center gap-1 text-primary">
//                       <span>Explore</span>
//                       <ArrowRight className="h-4 w-4" />
//                     </div>
//                   </div>
//                 </GlassCard>
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }








// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { GlassCard } from "@/components/ui/glass-card"
// import { NeonText } from "@/components/ui/neon-text"
// import {
//   ExternalLink,
//   Github,
//   Brain,
//   Eye,
//   LineChart,
//   Zap,
//   ArrowRight
// } from "lucide-react"

// const projects = [
//   {
//     id: 1,
//     title: "Project Nexus – LLM Agent System",
//     description:
//       "Multi-tool AI agent system built using LangChain and custom memory modules. Agents can read, validate, write, and improve code autonomously with RAG-based knowledge retrieval.",
//     tags: ["Python", "LangChain", "RAG", "Vector DB", "LLMs"],
//     icon: Brain,
//     metrics: {
//       tools: "5+",
//       architecture: "Multi-Agent",
//       memory: "Custom",
//     },
//     gradient: "from-chart-1/20 to-transparent",
//     link: "https://nexusai-ide.vercel.app/",
//     github: "https://github.com/your-username/project-nexus",
//   },
//   {
//     id: 2,
//     title: "Authentify – Fake Detection Platform",
//     description:
// //       "Multi-modal AI system to detect fake news, deepfakes, and synthetic text using ensemble NLP + CV models. Designed to educate users about digital misinformation.",
// //     tags: ["Python", "PyTorch", "NLP", "Computer Vision", "Flask"],
// //     icon: Eye,
// //     metrics: {
// //       modality: "Text + CV",
// //       accuracy: "90%+",
// //       focus: "Misinformation",
// //     },
// //     gradient: "from-chart-2/20 to-transparent",
// //     link: "https://example.com/authentify",
// //     github: "https://github.com/your-username/authentify",
// //   },
// //   {
// //     id: 3,
// //     title: "TruthScan – Deepfake Detection",
// //     description:
// //       "CNN-based deepfake detection system trained on large video datasets. Includes optimized preprocessing pipeline for noise reduction and faster inference.",
// //     tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
// //     icon: Eye,
// //     metrics: {
// //       accuracy: "88%",
// //       frames: "100k+",
// //       speedup: "25%",
// //     },
// //     gradient: "from-chart-4/20 to-transparent",
// //     link: "https://example.com/truthscan",
// //     github: "https://github.com/your-username/truthscan",
// //   },
// //   {
// //     id: 4,
// //     title: "Nexus Code Editor – AI Developer IDE",
// //     description:
// //       "AI-powered code editor with multi-agent assistance for code generation, refactoring, debugging, and context-aware suggestions using LLMs and RAG.",
// //     tags: ["Next.js", "TypeScript", "LLMs", "LangChain", "RAG"],
// //     icon: Brain,
// //     metrics: {
// //       agents: "3+",
// //       features: "AI Assist",
// //       focus: "Developer Tools",
// //     },
// //     gradient: "from-chart-3/20 to-transparent",
// //     link: "https://nexus-code-editor.vercel.app/",
// //     github: "https://github.com/your-username/nexus-editor",
// //   }

// // ]

// // export function Projects() {
// //   const [hoveredId, setHoveredId] = useState<number | null>(null)

// //   return (
// //     <section id="projects" className="relative px-6 py-24">
// //       <div className="mx-auto max-w-6xl">
// //         {/* Section header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-16 text-center"
// //         >
// //           <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 font-mono text-sm text-primary">
// //             <Zap className="h-3 w-3" />
// //             PROJECT_ARCHIVE
// //           </div>
// //           <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
// //             <NeonText as="span">Featured Work</NeonText>
// //           </h2>
// //           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
// //             Production-grade AI systems solving real-world problems at scale
// //           </p>
// //         </motion.div>

// //         {/* Projects grid */}
// //         <div className="grid gap-6 md:grid-cols-2">
// //           <AnimatePresence>
// //             {projects.map((project, index) => (
// //               <motion.div
// //                 key={project.id}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 onMouseEnter={() => setHoveredId(project.id)}
// //                 onMouseLeave={() => setHoveredId(null)}
// //               >
// //                 {/* 🔥 Entire card clickable */}
// //                 <a
// //                   href={project.link || project.github}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="block h-full"
// //                 >
// //                   <GlassCard
// //                     className="group relative h-full overflow-hidden p-6 cursor-pointer"
// //                     whileHover={{ y: -5 }}
// //                     transition={{ type: "spring", stiffness: 300, damping: 20 }}
// //                   >
// //                     {/* Background gradient */}
// //                     <div
// //                       className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
// //                     />

// //                     <div className="relative z-10">
// //                       {/* Header */}
// //                       <div className="mb-4 flex items-start justify-between">
// //                         <div className="flex items-center gap-3">
// //                           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
// //                             <project.icon className="h-6 w-6" />
// //                           </div>
// //                           <div>
// //                             <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
// //                               {project.title}
// //                             </h3>
// //                           </div>
// //                         </div>

// //                         {/* Links (still work) */}
// //                         <div className="flex gap-2">
// //                           <motion.a
// //                             href={project.github}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             whileHover={{ scale: 1.1 }}
// //                             whileTap={{ scale: 0.95 }}
// //                             className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
// //                             onClick={(e) => e.stopPropagation()}
// //                           >
// //                             <Github className="h-4 w-4" />
// //                           </motion.a>
// //                           <motion.a
// //                             href={project.link}
// //                             target="_blank"
// //                             rel="noopener noreferrer"
// //                             whileHover={{ scale: 1.1 }}
// //                             whileTap={{ scale: 0.95 }}
// //                             className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <ExternalLink className="h-4 w-4" />
//                           </motion.a>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <p className="mb-4 leading-relaxed text-muted-foreground">
//                         {project.description}
//                       </p>

//                       {/* Tags */}
//                       <div className="mb-4 flex flex-wrap gap-2">
//                         {project.tags.map((tag) => (
//                           <span
//                             key={tag}
//                             className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-xs text-muted-foreground"
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Metrics */}
//                       <motion.div
//                         className="grid grid-cols-3 gap-3 rounded-lg border border-border bg-background/30 p-3"
//                         initial={false}
//                         animate={hoveredId === project.id ? { borderColor: "rgba(34, 211, 238, 0.3)" } : {}}
//                       >
//                         {Object.entries(project.metrics).map(([key, value]) => (
//                           <div key={key} className="text-center">
//                             <div className="font-mono text-lg font-semibold text-primary">{value}</div>
//                             <div className="text-xs capitalize text-muted-foreground">{key}</div>
//                           </div>
//                         ))}
//                       </motion.div>

//                       {/* View more indicator */}
//                       <motion.div
//                         className="mt-4 flex items-center justify-end gap-1 text-sm text-primary opacity-0 transition-opacity group-hover:opacity-100"
//                         initial={false}
//                         animate={hoveredId === project.id ? { x: 5 } : { x: 0 }}
//                       >
//                         <span>Explore</span>
//                         <ArrowRight className="h-4 w-4" />
//                       </motion.div>
//                     </div>
//                   </GlassCard>
//                 </a>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* View all projects link */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-12 text-center"
//         >
//           <motion.a
//             href="#"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/30 px-6 py-3 font-medium text-foreground transition-all hover:border-primary/50 hover:bg-secondary/50"
//           >
//             View All Projects
//             <ArrowRight className="h-4 w-4" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
