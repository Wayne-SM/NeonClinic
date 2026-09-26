"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const features = [
  { id: "01", title: "PERSONALISED CARE" },
  { id: "02", title: "ADVANCED TECHNOLOGY" },
  { id: "03", title: "CLINICAL PRECISION" },
  { id: "04", title: "COMFORT-FIRST EXPERIENCE" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

export function WhyNeon() {
  return (
    <section className="py-24 lg:py-40 bg-foreground text-background overflow-hidden">
      <Container>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 py-8 md:py-12 border-b border-background/20 group cursor-default"
            >
              <span className="text-xl md:text-2xl font-heading font-light text-background/40 group-hover:text-brand-green transition-colors duration-500 w-16">
                {feature.id}
              </span>
              <h3 className="text-4xl sm:text-5xl lg:text-7xl font-heading tracking-tighter uppercase transition-colors duration-500 group-hover:text-white text-background/80">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
