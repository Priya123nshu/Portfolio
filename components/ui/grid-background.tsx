"use client"

import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  className?: string
}

export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 overflow-hidden", className)}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)",
        }}
      />
      
      {/* Bottom fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, var(--background) 0%, transparent 30%)",
        }}
      />
    </div>
  )
}
