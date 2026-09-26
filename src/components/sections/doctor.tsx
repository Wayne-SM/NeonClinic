"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export function Doctor() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Subtle parallax for floating labels relative to scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section ref={sectionRef} id="doctor" className="py-24 lg:py-40 bg-[#FAF9F6] overflow-hidden border-t border-black/5">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Content - Typography */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 lg:max-w-xl space-y-10 flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <h2 className="font-heading text-6xl md:text-7xl lg:text-[90px] font-normal tracking-tight text-[#111] leading-[0.95]">
                Dr. E. <br />
                Anusha <br />
                Reddy
              </h2>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-[#84cc16]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#84cc16] uppercase">
                  Dermatologist
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <p className="text-lg md:text-xl text-[#444] font-light leading-relaxed">
                Dr. Anusha Reddy is a dermatologist specializing in comprehensive skin and hair care, with a focus on personalized dermatological, trichological and aesthetic treatments.
              </p>
              <p className="text-[#666] leading-relaxed font-light">
                Through NEON, she provides consultations and treatment for concerns ranging from acne, pigmentation and scars to hair fall, hair loss and unwanted hair, alongside laser and aesthetic procedures.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4">
              <div className="h-[1px] w-full max-w-[200px] bg-black/10 mb-5" />
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#111] uppercase">
                MBBS · DDVL
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait Visual */}
          <div className="flex-1 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] z-10 group">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative rounded-[28px] overflow-hidden shadow-xl shadow-black/5 transition-all duration-[1000ms] ease-out group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-black/10"
              >
                <Image 
                  src="/images/dr-signage.png" 
                  alt="Dr. E. Anusha Reddy - NEON Skin, Hair & Lasers"
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[28px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40 transition-opacity duration-[1000ms] group-hover:opacity-20" />
              </motion.div>

              {/* Floating Label 1 - Specialties */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: y1 }}
                className="absolute top-12 -left-6 lg:-left-16 z-20 transition-transform duration-[1000ms] ease-out group-hover:-translate-y-2 group-hover:-translate-x-1"
              >
                <div className="bg-[#FAF9F6]/95 backdrop-blur-md px-6 py-5 rounded-2xl shadow-xl shadow-black/5 border border-white/60 flex flex-col gap-2 min-w-[160px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-1.5 h-1.5 bg-[#84cc16] rounded-full" />
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#111] uppercase">Specialties</span>
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest text-[#444] uppercase">Dermatology</span>
                  <span className="text-[10px] font-semibold tracking-widest text-[#444] uppercase">Trichology</span>
                  <span className="text-[10px] font-semibold tracking-widest text-[#444] uppercase">Aesthetic Care</span>
                </div>
              </motion.div>

              {/* Floating Label 2 - Location */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: y2 }}
                className="absolute bottom-12 -right-4 lg:-right-12 z-20 transition-transform duration-[1000ms] ease-out group-hover:translate-y-2 group-hover:translate-x-1"
              >
                <div className="bg-[#FAF9F6]/95 backdrop-blur-md px-5 py-3 rounded-full shadow-xl shadow-black/5 border border-white/60 flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[#111] rounded-full" />
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#111] uppercase">NEON · Hanamkonda</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Lower Content - Editorial Categories */}
        <div className="mt-32 lg:mt-48 pt-12 lg:pt-16 border-t border-black/5">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          >
            {[
              { num: "01", title: "Dermatology", desc: "Acne · Pigmentation · Scars · Skin Concerns" },
              { num: "02", title: "Trichology", desc: "Hair Fall · Hair Loss · Dandruff · Hair Health" },
              { num: "03", title: "Aesthetic & Laser", desc: "Laser Treatments · Hair Removal · Aesthetic Care" },
            ].map((cat, i) => (
              <motion.div key={i} variants={fadeUp} className="group cursor-default relative">
                <div className="text-[#84cc16] font-mono text-sm font-semibold mb-5 opacity-70 group-hover:opacity-100 transition-opacity">{cat.num}</div>
                <h3 className="text-xs font-bold tracking-[0.15em] text-[#111] uppercase mb-4">{cat.title}</h3>
                <p className="text-[11px] text-[#666] leading-relaxed uppercase tracking-widest">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-8 mt-24"
          >
            <Button size="lg" asChild className="w-full sm:w-auto h-14 px-10 text-[11px] font-bold tracking-[0.1em] text-white bg-[#111] hover:bg-black rounded-md shadow-xl shadow-black/10 transition-all duration-300 uppercase">
              <Link href="/book">
                Book a Consultation
              </Link>
            </Button>
            <Link href="/treatments" className="text-[11px] font-bold tracking-[0.1em] text-[#111] hover:text-[#555] transition-colors flex items-center uppercase">
              Explore Treatments <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>

      </Container>
    </section>
  )
}
