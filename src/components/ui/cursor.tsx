"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true) // Default true for SSR safety
  const [cursorText, setCursorText] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  // Spring physics for buttery-smooth follower
  const springConfig = { damping: 28, stiffness: 260, mass: 0.25 }
  const cursorX = useSpring(0, springConfig)
  const cursorY = useSpring(0, springConfig)

  useEffect(() => {
    // Check if device has touch screen or lacks fine pointer
    const checkTouch = () => {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches
      const isHoverNone = window.matchMedia("(hover: none)").matches
      const isSmallScreen = window.innerWidth <= 1024
      return isCoarse || isHoverNone || isSmallScreen
    }

    const isTouch = checkTouch()
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // 1. Explicit data-cursor tag
      const customCursorEl = target.closest<HTMLElement>("[data-cursor]")
      if (customCursorEl) {
        setCursorText(customCursorEl.getAttribute("data-cursor") || "")
        return
      }

      // 2. Primary CTA / Booking context
      const bookingCta = target.closest<HTMLElement>(
        'a[href*="book"], button[type="submit"], [data-cursor-cta]'
      )
      if (bookingCta) {
        setCursorText("BOOK")
        return
      }

      // 3. Treatment explore context
      const treatmentCard = target.closest<HTMLElement>(
        'a[href*="treatments"], [data-treatment-card]'
      )
      if (treatmentCard) {
        setCursorText("EXPLORE")
        return
      }

      // 4. Clinical or Gallery image context
      const galleryImg = target.closest<HTMLElement>(
        '[data-gallery-image], [data-cursor-image]'
      )
      if (galleryImg) {
        setCursorText("VIEW")
        return
      }

      setCursorText("")
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY, isVisible])

  if (isTouchDevice || !isVisible) return null

  const isExpanded = Boolean(cursorText)

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center border border-black/10 shadow-sm"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isExpanded ? 72 : 10,
        height: isExpanded ? 72 : 10,
        backgroundColor: isExpanded ? "rgba(17, 17, 17, 0.94)" : "rgba(17, 17, 17, 0.8)",
        backdropFilter: isExpanded ? "blur(4px)" : "none",
      }}
      transition={{
        width: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        height: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
        backgroundColor: { duration: 0.2 },
      }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.15 }}
          className="text-white text-[9px] font-bold tracking-[0.2em] uppercase select-none pointer-events-none"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  )
}
