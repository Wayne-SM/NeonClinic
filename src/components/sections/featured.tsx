"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import { services } from "@/data/content"
import { cn } from "@/lib/utils"

const featuredList = []

export function FeaturedTreatments() {
  const featuredServices = services; // Display all services
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = featuredServices[activeIndex] || featuredServices[0]

  if (!activeService) return null

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-black overflow-hidden flex flex-col justify-end">
      {/* Immersive Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeService.image}
            alt={activeService.title}
            fill
            className="object-cover opacity-60 mix-blend-overlay scale-105"
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" data-cursor="VIEW" />

      {/* Content Overlay */}
      <div className="relative z-20 w-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 flex flex-col gap-12 lg:gap-24">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl text-white font-normal max-w-3xl leading-[1.1]">
          Precision meets<br />
          <span className="italic text-white/80">personalised care.</span>
        </h2>

        {/* Horizontal List */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-8 lg:gap-x-12 gap-y-6">
          {featuredServices.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveIndex(idx)}
              className="group cursor-pointer flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors duration-500",
                    activeIndex === idx ? "bg-brand-green" : "bg-transparent group-hover:bg-white/30"
                  )}
                />
                <h3 className={cn(
                  "text-lg lg:text-xl font-heading transition-colors duration-500 whitespace-nowrap",
                  activeIndex === idx ? "text-white" : "text-white/40 group-hover:text-white/80"
                )}>
                  {service.title.replace('Treatments PRP / GFC', 'PRP / GFC')}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
