"use client"

import React from "react"

import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
}

export function GlassCard({ children, className, glowOnHover = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl border border-glass-border bg-glass backdrop-blur-xl",
        "transition-all duration-300",
        glowOnHover && "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
