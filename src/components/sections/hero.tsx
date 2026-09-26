"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  
  const contentY = useTransform(scrollY, [0, 1000], [0, -100])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 20, damping: 40, mass: 1 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)
  
  // Subtle parallax for the main visual
  const imgX = useTransform(smoothMouseX, [-1, 1], [-25, 25])
  const imgY = useTransform(smoothMouseY, [-1, 1], [-25, 25])
  
  // Distinct parallax for floating labels
  const label1X = useTransform(smoothMouseX, [-1, 1], [15, -15])
  const label1Y = useTransform(smoothMouseY, [-1, 1], [15, -15])

  const label2X = useTransform(smoothMouseX, [-1, 1], [-10, 10])
  const label2Y = useTransform(smoothMouseY, [-1, 1], [-10, 10])

  const label3X = useTransform(smoothMouseX, [-1, 1], [25, -25])
  const label3Y = useTransform(smoothMouseY, [-1, 1], [25, -25])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { 
    setIsMounted(true) 
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      mouseX.set((e.clientX / innerWidth) * 2 - 1)
      mouseY.set((e.clientY / innerHeight) * 2 - 1)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const getStyle = (xVal: any, yVal: any, isClient: boolean) => {
    return isClient ? { x: xVal, y: yVal } : { x: 0, y: 0 }
  }

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-[#FAF9F6]">
      
      {/* Background Artwork - Massive, Integrated, Right-Aligned */}
      <div className="absolute right-0 top-0 w-full h-full lg:w-[65%] z-0 pointer-events-none flex items-center justify-end overflow-visible opacity-50 lg:opacity-100">
        <div className="relative w-[150%] h-[120%] lg:w-[150%] lg:h-[130%] lg:-mr-[15%] origin-right flex items-center justify-center">
          
          <motion.div 
            className="absolute inset-0 w-full h-full mix-blend-darken"
            style={{
              ...getStyle(imgX, imgY, isMounted),
              WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%)",
              maskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 75%)",
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image 
              src="/images/abstract/mega-visual.jpg" 
              alt="Premium Dermatology 3D Visualization"
              fill
              priority
              className="object-cover lg:object-contain object-right"
              sizes="(max-width: 1024px) 150vw, 100vw"
            />
          </motion.div>

          {/* Floating Annotation: SKIN */}
          <motion.div 
            style={{ top: "calc(16% + 158px)", right: "calc(50% + 70px)", ...getStyle(label1X, label1Y, isMounted) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute flex items-start flex-row-reverse z-30 hidden lg:flex"
          >
            <div className="bg-[#FAF9F6]/90 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 z-10">
              <div className="w-1.5 h-1.5 bg-[#84cc16] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">SKIN</span>
            </div>
            <svg className="absolute top-1/2 right-[95%] w-[48px] h-[58px] overflow-visible -z-10" viewBox="0 0 48 58">
              <path d="M 48 0 C 24 0, 24 58, 0 58" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.75" />
              <circle cx="0" cy="58" r="2.5" fill="rgba(0,0,0,0.3)" />
            </svg>
          </motion.div>

          {/* Floating Annotation: LASER */}
          <motion.div 
            style={{ top: "calc(20% + 238px)", right: "calc(18% + 55px)", ...getStyle(label2X, label2Y, isMounted) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute flex items-start flex-row-reverse z-30 hidden lg:flex"
          >
            <div className="bg-[#FAF9F6]/90 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 z-10">
              <div className="w-1.5 h-1.5 bg-[#84cc16] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">LASER</span>
            </div>
            <svg className="absolute top-1/2 right-[95%] w-[56px] h-[68px] overflow-visible -z-10" viewBox="0 0 56 68">
              <path d="M 56 0 C 28 0, 28 68, 0 68" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.75" />
              <circle cx="0" cy="68" r="2.5" fill="rgba(0,0,0,0.3)" />
            </svg>
          </motion.div>

          {/* Floating Annotation: HAIR */}
          <motion.div 
            style={{ bottom: "calc(22% + 70px)", right: "calc(35% + 45px)", ...getStyle(label3X, label3Y, isMounted) }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute flex items-start flex-row-reverse z-30 hidden lg:flex"
          >
            <div className="bg-[#FAF9F6]/90 backdrop-blur-md rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] border border-black/5 z-10">
              <div className="w-1.5 h-1.5 bg-[#84cc16] rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase">HAIR</span>
            </div>
            <svg className="absolute bottom-1/2 right-[95%] w-[100px] h-[109px] overflow-visible -z-10" viewBox="0 0 100 109">
              <path d="M 100 109 C 50 109, 50 0, 0 0" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="0.75" />
              <circle cx="0" cy="0" r="2.5" fill="rgba(0,0,0,0.3)" />
            </svg>
          </motion.div>

        </div>
      </div>

      {/* Foreground Content */}
      <Container className="relative z-20 w-full flex flex-col lg:flex-row items-center pt-24 pb-12 lg:py-0">
        
        {/* Left Typography */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity }}
          className="w-full lg:flex-[0.55] flex flex-col justify-center pt-12 lg:pt-0 relative lg:-left-10 xl:-left-14"
        >
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-8 max-w-2xl">
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-black/20" />
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#333] uppercase">
                NEON • SKIN • HAIR • LASERS
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-normal tracking-tight leading-[1.05] text-[#111]">
              Your skin.<br />
              <span className="italic opacity-90">Your confidence.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#555] max-w-lg leading-relaxed font-light">
              Advanced dermatology, trichology and laser treatments designed around you.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-8 pt-6">
              <Button size="lg" asChild className="w-full sm:w-auto h-14 px-10 text-[11px] font-bold tracking-[0.1em] text-white bg-[#111] hover:bg-black rounded-md shadow-xl shadow-black/10 transition-all duration-300 uppercase">
                <Link href="/book">
                  Book an Appointment
                </Link>
              </Button>
              <Link href="/treatments" className="text-[11px] font-bold tracking-[0.1em] text-[#111] hover:text-[#555] transition-colors flex items-center uppercase">
                Explore Treatments <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <div className="w-[1px] h-10 bg-black/10 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-black/40 absolute top-0"
          />
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#666]">Scroll</span>
      </motion.div>
    </section>
  )
}
