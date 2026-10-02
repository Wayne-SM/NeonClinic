"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { googleReviewsConfig, verifiedGoogleReviews } from "@/data/reviews"

export function GoogleReviews() {
  const reviews = verifiedGoogleReviews

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-black/5">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-[1px] w-8 bg-[#84cc16]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#84cc16] uppercase">
                  Google Reviews
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#111] font-normal tracking-tight">
                What Our Patients Say
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#666] font-light">
                See what our patients are saying about their care and experience at NEON.
              </p>
            </div>

            <a
              href={googleReviewsConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#111] hover:text-[#84cc16] transition-colors py-2 group flex-shrink-0"
            >
              <span>Read more reviews on Google</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Reviews List or Live Google Direct Invitation */}
          {reviews.length > 0 ? (
            <div className="divide-y divide-black/10">
              {reviews.map((rev) => (
                <div key={rev.id} className="py-8 first:pt-0 last:pb-0 space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#111]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#111] text-[#111]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="font-heading text-lg sm:text-xl text-[#222] font-light leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </blockquote>

                  {/* Reviewer Meta */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-xs font-semibold text-[#111] tracking-wide">
                      — {rev.authorName}
                    </span>
                    <span className="text-[10px] tracking-widest text-[#888] uppercase">
                      Google Review {rev.relativeTimeDescription ? `· ${rev.relativeTimeDescription}` : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 px-6 sm:px-10 rounded-2xl bg-white/70 border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[#111]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#111] text-[#111]" />
                  ))}
                  <span className="text-xs font-bold tracking-wider ml-2 text-[#111]">
                    5.0 RATED
                  </span>
                </div>
                <h3 className="font-heading text-xl text-[#111]">
                  {googleReviewsConfig.clinicName}
                </h3>
                <p className="text-xs sm:text-sm text-[#666] font-light max-w-xl leading-relaxed">
                  Real experiences and patient feedback from our Hanamkonda clinic are published directly by patients on Google. Read authentic feedback or leave your own review.
                </p>
              </div>

              <a
                href={googleReviewsConfig.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 bg-[#111] text-white hover:bg-black rounded-md flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.12em] uppercase transition-colors whitespace-nowrap shadow-sm"
              >
                <span>View Google Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Bottom Google Profile Attribution */}
          <div className="mt-12 pt-6 border-t border-black/5 flex items-center justify-between text-[11px] text-[#777]">
            <span className="tracking-wide">
              Official Google Business Profile · Hanamkonda
            </span>
            <a
              href={googleReviewsConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#111] hover:underline underline-offset-4 font-medium"
            >
              Write a review →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
