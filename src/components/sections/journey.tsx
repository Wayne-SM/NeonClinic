"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

interface JourneyStep {
  number: string
  title: string
  subtitle: string
  detail: string
}

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "CONSULTATION",
    subtitle: "Understand your concern.",
    detail:
      "A dedicated one-on-one discussion with Dr. Anusha Reddy to understand your symptoms, lifestyle factors, and specific dermatological or trichological goals."
  },
  {
    number: "02",
    title: "ASSESSMENT",
    subtitle: "Personalized evaluation.",
    detail:
      "Careful physical and diagnostic evaluation of your skin or hair condition, identifying root causes to determine appropriate clinical suitability."
  },
  {
    number: "03",
    title: "TREATMENT",
    subtitle: "A plan designed around your needs.",
    detail:
      "Customized clinical or laser protocols administered using US-FDA approved technologies in a calm, strictly hygienic clinical setting."
  },
  {
    number: "04",
    title: "FOLLOW-UP",
    subtitle: "Continue your care with appropriate follow-up.",
    detail:
      "Personalized post-procedure care routines, progress tracking, and scheduled review consultations to maintain skin and hair health."
  }
]

export function PatientJourney() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="journey" className="py-24 lg:py-36 bg-[#FAF9F6] border-t border-black/5 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#84cc16]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#84cc16] uppercase">
              Your Visit
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#111] font-normal tracking-tight leading-[1.05]">
            The Patient Journey
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#666] font-light leading-relaxed">
            Every appointment is structured around clear medical guidance, thoughtful evaluation, and attentive follow-up care.
          </p>
        </div>

        {/* Desktop Layout (Horizontal / Connected Progression) */}
        <div className="hidden lg:block relative">
          {/* Subtle horizontal connecting line */}
          <div className="absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-black/10 z-0" />

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col pt-2 transition-all duration-300"
                >
                  {/* Step Indicator Node */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center font-mono text-xs font-semibold transition-all duration-400 ${
                        isActive
                          ? "border-[#111] bg-[#111] text-white scale-110 shadow-lg shadow-black/10"
                          : "border-black/20 bg-[#FAF9F6] text-[#666] group-hover:border-[#111]"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Step Titles */}
                  <div className="space-y-2">
                    <h3
                      className={`text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-300 ${
                        isActive ? "text-[#111]" : "text-[#777] group-hover:text-[#111]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-[#222]" : "text-[#888]"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Detail Text */}
                  <p
                    className={`mt-4 text-xs leading-relaxed font-light transition-opacity duration-300 ${
                      isActive ? "text-[#555] opacity-100" : "text-[#777] opacity-60 group-hover:opacity-90"
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile & Tablet Layout (Vertical Timeline) */}
        <div className="block lg:hidden relative pl-6 sm:pl-8 border-l border-black/10 space-y-12 sm:space-y-16">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[#111] bg-[#FAF9F6]" />

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#84cc16]">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-[#111]">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-[#333]">
                  {step.subtitle}
                </p>
                <p className="text-xs text-[#666] font-light leading-relaxed pt-1">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
