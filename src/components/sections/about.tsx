"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { clinicInfo } from "@/data/content"
import { cn } from "@/lib/utils"

const images = {
  skin: "/images/medifacials.png",
  hair: "/images/hair-treatment.png",
  lasers: "/images/laser-treatment.png"
}

export function About() {
  const [activeCategory, setActiveCategory] = useState<"skin" | "hair" | "lasers">("skin")

  return (
    <section id="about" className="py-32 bg-surface overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 pt-8"
          >
            <div className="space-y-8">
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground font-normal leading-[1.1] tracking-tight">
                Expert care.<br/>
                <span className="italic text-muted">Thoughtfully delivered.</span>
              </h2>
              
              <div className="h-[1px] w-24 bg-border" />
              
              <p className="text-xl md:text-2xl text-muted/90 font-light leading-relaxed max-w-lg">
                {clinicInfo.fullName} is a specialized clinical space dedicated to evidence-based dermatology, offering a meticulous approach to skin health, hair restoration, and advanced laser protocols.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 pt-12">
              {(["skin", "hair", "lasers"] as const).map((cat) => (
                <button
                  key={cat}
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className="group flex items-center gap-6 text-left transition-all duration-500 w-max"
                >
                  <span className={cn(
                    "text-5xl md:text-6xl font-heading uppercase tracking-widest transition-all duration-500",
                    activeCategory === cat ? "text-foreground" : "text-muted/30 group-hover:text-muted/60"
                  )}>
                    {cat}
                  </span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="w-12 h-[2px] bg-brand-green" 
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative h-[700px] rounded-[2rem] overflow-hidden bg-muted/10 shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image 
                  src={images[activeCategory]} 
                  alt={`${activeCategory} care at NEON`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
