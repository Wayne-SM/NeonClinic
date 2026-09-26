"use client"

import { useEffect, useState } from "react"
import { Calendar, MessageCircle, Phone } from "lucide-react"
import { clinicInfo } from "@/data/content"

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show action bar after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-background/90 backdrop-blur-lg border-t border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-safe transition-all duration-300">
      <div className="flex h-16">
        <a 
          href="/book" 
          className="flex-1 flex flex-col items-center justify-center gap-1.5 text-foreground hover:bg-surface active:bg-surface transition-colors"
        >
          <Calendar className="w-[18px] h-[18px] stroke-[1.5]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.2em]">Book</span>
        </a>
        <div className="w-px bg-border my-3" />
        <a 
          href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1.5 text-foreground hover:bg-surface active:bg-surface transition-colors"
        >
          <MessageCircle className="w-[18px] h-[18px] stroke-[1.5]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.2em]">WhatsApp</span>
        </a>
        <div className="w-px bg-border my-3" />
        <a 
          href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-1.5 text-foreground hover:bg-surface active:bg-surface transition-colors"
        >
          <Phone className="w-[18px] h-[18px] stroke-[1.5]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.2em]">Call</span>
        </a>
      </div>
    </div>
  )
}
