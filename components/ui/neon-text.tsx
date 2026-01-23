"use client"

import React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeonTextProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "span" | "p"
  glow?: boolean
}

export function NeonText({ children, className, as: Component = "span", glow = true }: NeonTextProps) {
  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      className={cn(
        "text-primary",
        glow && "drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionComponent>
  )
}
