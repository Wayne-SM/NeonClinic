"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, RotateCcw, Check, Sparkles } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { services } from "@/data/content"

interface ConcernOption {
  id: string
  label: string
  treatmentIds: string[]
  note?: string
}

const concernOptions: ConcernOption[] = [
  {
    id: "acne-breakouts",
    label: "Acne & Breakouts",
    treatmentIds: ["acne-scar-open-pore", "chemical-peels", "medifacials"],
  },
  {
    id: "acne-scars-pores",
    label: "Acne Scars & Open Pores",
    treatmentIds: ["acne-scar-open-pore", "chemical-peels"],
  },
  {
    id: "pigmentation-tone",
    label: "Pigmentation & Uneven Skin Tone",
    treatmentIds: ["pigmentation-laser-toning", "chemical-peels", "medifacials"],
  },
  {
    id: "hair-fall-concerns",
    label: "Hair Fall & Hair Concerns",
    treatmentIds: ["hair-loss-prp-gfc", "hair-transplantation"],
  },
  {
    id: "unwanted-hair",
    label: "Unwanted Hair",
    treatmentIds: ["laser-hair-reduction"],
  },
  {
    id: "texture-glow",
    label: "Skin Texture & Glow",
    treatmentIds: ["diamond-glow", "medifacials", "chemical-peels"],
  },
  {
    id: "signs-of-ageing",
    label: "Signs of Ageing",
    treatmentIds: ["anti-ageing-treatments", "chemical-peels"],
  },
  {
    id: "warts-corns",
    label: "Warts & Corns",
    treatmentIds: ["warts-corns-removal"],
  },
  {
    id: "bridal-prep",
    label: "Bridal / Event Preparation",
    treatmentIds: ["bridal-treatments", "diamond-glow"],
  },
  {
    id: "other",
    label: "Other Dermatological or Hair Concern",
    treatmentIds: [],
    note: "For general concerns, rashes, allergies, or tailored diagnostic evaluations, Dr. Anusha Reddy conducts individualized consultations to review your concerns in detail.",
  },
]

export function FindYourTreatment() {
  const [selectedConcernId, setSelectedConcernId] = useState<string | null>(null)

  const activeConcern = concernOptions.find((c) => c.id === selectedConcernId)

  // Retrieve matching treatments from content.ts
  const matchedTreatments = activeConcern
    ? services.filter((s) => activeConcern.treatmentIds.includes(s.id))
    : []

  const handleReset = () => {
    setSelectedConcernId(null)
  }

  return (
    <section
      id="find-treatment"
      className="py-24 lg:py-36 bg-[#FDFBF7] border-t border-black/5 relative overflow-hidden"
    >
      <Container>
        {/* Header with Medical Disclaimer */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#84cc16]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#84cc16] uppercase">
              Guided Exploration
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#111] font-normal tracking-tight leading-[1.05]">
            Find Your Treatment
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555] font-light leading-relaxed">
            Select what you are looking to address to explore relevant clinical and aesthetic options.
          </p>

          <p className="mt-3 text-[11px] text-[#777] font-normal tracking-wide border-l border-[#84cc16] pl-3 py-0.5">
            This guide is for general information only and is not a medical diagnosis. A consultation with the clinic is recommended to determine the appropriate treatment.
          </p>
        </div>

        {/* Step 1: Select Concern (Editorial List) */}
        {!selectedConcernId ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase">
                Step 1 — What are you looking for?
              </span>
              <span className="text-[10px] text-[#888] tracking-widest font-mono">
                {concernOptions.length} Concerns
              </span>
            </div>

            <div className="divide-y divide-black/5 border-b border-black/5">
              {concernOptions.map((option, idx) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedConcernId(option.id)}
                  data-cursor="EXPLORE"
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between group transition-colors hover:bg-black/[0.015] px-2 rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-[#84cc16]"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-xs text-[#888] group-hover:text-[#84cc16] transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg sm:text-2xl font-light text-[#222] tracking-tight group-hover:text-[#111] group-hover:translate-x-1 transition-all duration-300">
                      {option.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#777] group-hover:text-[#111] transition-colors">
                    <span className="hidden sm:inline text-[11px] tracking-wider uppercase">Select</span>
                    <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-[#111] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Step 2: Results State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Active Selection Breadcrumb & Reset */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#888] uppercase block">
                  Looking For
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading text-[#111]">
                  {activeConcern?.label}
                </h3>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666] hover:text-[#111] transition-colors py-2 px-3 rounded border border-black/10 hover:border-black/30 self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Start Again
              </button>
            </div>

            {/* Results Header */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#84cc16] uppercase block mb-2">
                Recommendations
              </span>
              <h4 className="font-heading text-xl sm:text-2xl text-[#111] font-normal">
                Treatments you may want to explore
              </h4>
            </div>

            {/* Treatment Results Grid or Note */}
            {matchedTreatments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {matchedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md hover:border-black/10 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#84cc16] block">
                        {treatment.category} Care
                      </span>
                      <h5 className="font-heading text-xl text-[#111] leading-snug">
                        {treatment.title}
                      </h5>
                      <p className="text-xs text-[#666] leading-relaxed font-light">
                        {treatment.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-black/5">
                      <Link
                        href={`/treatments/${treatment.slug}`}
                        data-cursor="EXPLORE"
                        className="inline-flex items-center text-[11px] font-bold tracking-[0.12em] uppercase text-[#111] hover:text-[#84cc16] transition-colors group"
                      >
                        Explore Treatment
                        <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 rounded-2xl bg-white border border-black/5 shadow-sm max-w-2xl space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#84cc16]/10 flex items-center justify-center text-[#84cc16]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h5 className="font-heading text-xl text-[#111]">
                  Personalized Consultation
                </h5>
                <p className="text-sm text-[#666] leading-relaxed font-light">
                  {activeConcern?.note ||
                    "For your specific skin or hair goals, Dr. Anusha Reddy conducts thorough one-on-one evaluations to recommend suitable clinical pathways."}
                </p>
              </div>
            )}

            {/* Bottom CTA Banner */}
            <div className="pt-8 mt-12 border-t border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#777] font-semibold mb-1">
                  Prefer to speak with us?
                </p>
                <p className="text-base text-[#222] font-light">
                  Schedule an in-person assessment at our Hanamkonda clinic.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#111] text-white hover:bg-black rounded-md px-8 text-[11px] font-bold tracking-[0.1em] uppercase shadow-lg shadow-black/5"
                >
                  <Link href="/book">Book a Consultation</Link>
                </Button>

                <button
                  onClick={handleReset}
                  className="text-xs text-[#666] hover:text-[#111] underline underline-offset-4 tracking-wider uppercase font-medium py-2 px-1"
                >
                  Explore another concern
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
