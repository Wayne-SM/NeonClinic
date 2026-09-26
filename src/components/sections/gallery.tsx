"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { galleryImages } from "@/data/content"
import { cn } from "@/lib/utils"

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") setSelectedIndex(null)
      if (e.key === "ArrowRight") setSelectedIndex((selectedIndex + 1) % galleryImages.length)
      if (e.key === "ArrowLeft") setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])

  // Body scroll lock
  useEffect(() => {
    if (selectedIndex !== null) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [selectedIndex])

  return (
    <section id="clinic" className="py-24 lg:py-48 bg-surface overflow-hidden relative">
      <Container>
        <div className="flex flex-col gap-24 lg:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] text-foreground">
              A space designed around<br/>
              <span className="italic text-muted">comfort, precision and care.</span>
            </h2>
          </motion.div>

          {/* Desktop Editorial Layout */}
          <div className="relative h-[880px] hidden lg:block max-w-6xl mx-auto w-full">
            {/* Image 1: Main Clinic Interior */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-cursor="OPEN"
              className="absolute top-0 right-[2%] w-[600px] h-[420px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group z-10"
              onClick={() => setSelectedIndex(0)}
            >
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover object-center transition-transform duration-1000 group-hover:scale-105" sizes="600px" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>

            {/* Image 2: Reception / Waiting */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-cursor="OPEN"
              className="absolute top-[350px] left-[4%] w-[460px] h-[330px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group z-20"
              onClick={() => setSelectedIndex(1)}
            >
              <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover object-center transition-transform duration-1000 group-hover:scale-105" sizes="460px" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>

            {/* Image 3: Logo Feature Wall */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-cursor="OPEN"
              className="absolute bottom-[20px] right-[12%] w-[420px] h-[320px] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group z-10"
              onClick={() => setSelectedIndex(2)}
            >
              <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover object-center transition-transform duration-1000 group-hover:scale-105" sizes="420px" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>
          </div>

          {/* Tablet 2-Column Layout */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 w-full">
            <div 
              className="col-span-2 relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => setSelectedIndex(0)}
            >
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover" sizes="100vw" />
            </div>
            <div 
              className="col-span-1 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => setSelectedIndex(1)}
            >
              <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover" sizes="50vw" />
            </div>
            <div 
              className="col-span-1 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer group"
              onClick={() => setSelectedIndex(2)}
            >
              <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover" sizes="50vw" />
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="flex flex-col gap-6 md:hidden">
            {[0, 1, 2].map((idx) => (
              <div 
                key={idx}
                className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl"
                onClick={() => setSelectedIndex(idx)}
              >
                <Image src={galleryImages[idx].src} alt={galleryImages[idx].alt} fill className="object-cover" sizes="100vw" />
              </div>
            ))}
          </div>

        </div>
      </Container>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors p-2 z-50"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-10 h-10 stroke-[1]" />
            </button>

            <button 
              className="absolute left-4 md:left-12 text-foreground/50 hover:text-foreground transition-colors p-2 hidden sm:block z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length); }}
            >
              <ChevronLeft className="w-12 h-12 stroke-[1]" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl aspect-video mx-4 shadow-2xl rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>

            <button 
              className="absolute right-4 md:right-12 text-foreground/50 hover:text-foreground transition-colors p-2 hidden sm:block z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % galleryImages.length); }}
            >
              <ChevronRight className="w-12 h-12 stroke-[1]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
