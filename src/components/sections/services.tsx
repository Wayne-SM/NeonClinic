"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { services } from "@/data/content"
import { cn } from "@/lib/utils"

// Group services and remove duplicates if they exist in multiple categories (though we only have one category per service in data, we just group them)
const categories = ["Skin", "Hair", "Laser"]

export function Services() {
  const [activeCategory, setActiveCategory] = useState("Skin")
  
  const filteredServices = useMemo(() => 
    services.filter(s => s.category.includes(activeCategory) || (activeCategory === 'Laser' && s.category === 'Aesthetic')), 
    [activeCategory]
  )
  
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = filteredServices[activeIndex] || filteredServices[0]

  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative border-t border-border/50">
      <Container>
        <div className="flex flex-col mb-16 lg:mb-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-heading text-5xl lg:text-7xl font-normal tracking-tight text-foreground">
              Clinical<br />
              <span className="italic text-muted">Excellence.</span>
            </h2>
            
            {/* Category Navigation */}
            <div className="flex gap-8 border-b border-border w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat)
                    setActiveIndex(0)
                  }}
                  className={cn(
                    "pb-4 text-sm tracking-[0.2em] uppercase transition-all duration-300 relative",
                    activeCategory === cat ? "text-foreground font-medium" : "text-muted hover:text-foreground/80 font-light"
                  )}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="category-indicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Interactive Explorer */}
        <div className="hidden lg:flex gap-16 xl:gap-24 items-center min-h-[600px]">
          
          {/* Left: List & Details */}
          <div className="w-1/2 flex flex-col justify-center relative">
            <div className="space-y-6">
              {filteredServices.map((service, idx) => {
                const isActive = activeIndex === idx
                return (
                  <div 
                    key={service.id}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="group flex flex-col gap-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <span className={cn(
                        "text-sm font-heading transition-colors duration-300",
                        isActive ? "text-brand-green" : "text-muted/30 group-hover:text-muted"
                      )}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className={cn(
                        "text-3xl xl:text-4xl font-heading transition-all duration-500",
                        isActive ? "text-foreground" : "text-muted/40 group-hover:text-muted/80"
                      )}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="pl-10 xl:pl-11 overflow-hidden"
                        >
                          <p className="text-muted/90 font-light mt-4 mb-6 max-w-md leading-relaxed">
                            {service.description}
                          </p>
                          <Link 
                            href={`/treatments/${service.slug}`}
                            className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:text-brand-green transition-colors"
                          >
                            Explore treatment <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Large Image */}
          <div className="w-1/2 relative h-[700px]">
            <div className="w-full h-full relative rounded-[2rem] overflow-hidden bg-surface shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="lg:hidden flex overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 gap-6">
          {filteredServices.map((service, idx) => (
            <div key={service.id} className="min-w-[85vw] sm:min-w-[400px] snap-center flex flex-col gap-6">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 85vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-heading text-brand-green">{String(idx + 1).padStart(2, '0')}</span>
                  <h3 className="text-2xl font-heading text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                <Link 
                  href={`/treatments/${service.slug}`}
                  className="inline-flex items-center text-xs tracking-widest uppercase font-medium text-foreground pt-2"
                >
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
