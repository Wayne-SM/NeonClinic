"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(true) // default true to prevent hydration mismatch
  const [hoverText, setHoverText] = useState("")

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches)

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Look for data-cursor attributes up the tree
      const cursorTarget = target.closest('[data-cursor]')
      if (cursorTarget) {
        setHoverText(cursorTarget.getAttribute('data-cursor') || "")
      } else {
        setHoverText("")
      }
    }

    if (!isMobile) {
      window.addEventListener("mousemove", updatePosition)
      window.addEventListener("mouseover", updateHoverState)
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateHoverState)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center rounded-full bg-white text-black font-medium tracking-widest text-[10px] overflow-hidden"
      animate={{
        x: position.x - (hoverText ? 40 : 8),
        y: position.y - (hoverText ? 40 : 8),
        width: hoverText ? 80 : 16,
        height: hoverText ? 80 : 16,
        opacity: 1
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      {hoverText && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-black pointer-events-none uppercase"
        >
          {hoverText}
        </motion.span>
      )}
    </motion.div>
  )
}
