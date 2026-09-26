"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { clinicInfo } from "@/data/content"
import { cn } from "@/lib/utils"

export function Contact() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const currentDayNum = currentTime.getDay()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  
  const currentDayConfig = clinicInfo.workingHoursConfig[currentDayNum as keyof typeof clinicInfo.workingHoursConfig]
  let isOpenNow = false
  
  if (currentDayConfig.isOpen) {
    // 10:00 AM to 8:00 PM (20:00)
    if (hours > 10 && hours < 20) isOpenNow = true
    else if (hours === 10 && minutes >= 0) isOpenNow = true
    else isOpenNow = false
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background border-t border-border/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Location & Map */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading text-5xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.1]">
                NEON<br/>
                <span className="text-3xl lg:text-5xl italic text-muted">Skin, Hair & Lasers</span>
              </h2>
              <p className="text-xl text-muted/90 font-light max-w-sm">
                {clinicInfo.address.line1}<br />
                {clinicInfo.address.line2}<br />
                {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}
              </p>
            </div>

            <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-[2rem] overflow-hidden border border-border/50 bg-surface relative shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794!2d79.5566415!3d17.9988966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fe2dc77bf31%3A0xd14d0c8a7c9db892!2sNeon%20Skin%2C%20Hair%20%26%20Laser%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.1) opacity(0.8)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-all duration-700 hover:filter-none"
              ></iframe>
            </div>

            <div className="pt-4">
              <a 
                href={clinicInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:text-brand-green transition-colors pb-1 border-b border-foreground hover:border-brand-green"
              >
                Open in Maps <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Opening Hours Timeline */}
          <div className="lg:pl-12 lg:border-l border-border/50">
            <h3 className="font-heading text-3xl mb-12 flex items-center gap-4">
              Clinic Hours
              {isOpenNow ? (
                <span className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  Open Now
                </span>
              ) : (
                <span className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-muted bg-surface-muted px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                  Closed
                </span>
              )}
            </h3>

            <div className="relative pl-6 border-l border-border/50 space-y-8">
              {[1, 2, 3, 4, 5, 6, 0].map(dayNum => {
                const hours = clinicInfo.workingHoursConfig[dayNum as keyof typeof clinicInfo.workingHoursConfig]
                const isToday = dayNum === currentDayNum
                
                return (
                  <motion.div 
                    key={dayNum} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Node */}
                    <div className={cn(
                      "absolute -left-[29px] top-1.5 w-3 h-3 rounded-full border-2",
                      isToday ? "border-brand-green bg-background" : "border-border bg-background"
                    )} />

                    <div className={cn(
                      "flex justify-between items-baseline gap-4 transition-all duration-300",
                      isToday ? "scale-[1.02] origin-left" : "opacity-60 hover:opacity-100"
                    )}>
                      <span className={cn(
                        "text-lg font-heading tracking-wide uppercase",
                        isToday ? "text-brand-green font-medium" : "text-foreground"
                      )}>
                        {hours.label}
                        {isToday && <span className="ml-2 text-[10px] tracking-widest text-muted">TODAY</span>}
                      </span>
                      <span className={cn(
                        "text-sm tracking-widest uppercase font-light whitespace-nowrap",
                        isToday ? "text-foreground" : "text-muted"
                      )}>
                        {hours.isOpen ? `${hours.open} — ${hours.close}` : "Closed"}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
