"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight } from "lucide-react"
import { clinicInfo } from "@/data/content"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navigation = [
  { name: "Treatments", href: "/treatments" },
  { name: "About", href: "/about" },
  { name: "Clinic", href: "/clinic" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-sm" 
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/images/logo.png" 
              alt="NEON Skin, Hair & Lasers" 
              width={140} 
              height={46}
              className={cn("transition-all duration-500", scrolled ? "h-8 w-auto" : "h-10 w-auto")}
              priority
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-foreground hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-8 w-8 stroke-[1.5]" />
          </button>
        </div>

        <nav className="hidden lg:flex lg:gap-x-12" aria-label="Global">
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[13px] tracking-[0.1em] uppercase transition-all duration-300 relative py-2",
                  isActive ? "text-foreground font-medium" : "text-muted hover:text-foreground font-light"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.span 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-green" 
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4 items-center">
          <Button asChild className="h-12 px-8 text-[11px] uppercase tracking-widest bg-foreground text-background hover:bg-foreground/90 transition-all duration-300">
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>
      </Container>

      {/* Premium Fullscreen Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col h-[100dvh]"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-border/30">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/images/logo.png" alt="NEON" width={120} height={40} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-8 w-8 stroke-[1.5]" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center px-8 py-12 gap-8">
              <nav className="flex flex-col gap-6">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className="text-4xl font-heading text-foreground hover:text-brand-green transition-colors flex items-center group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-border/30"
              >
                <p className="text-sm tracking-widest text-muted uppercase mb-6">Start your journey</p>
                <Button asChild className="w-full h-14 text-sm tracking-widest uppercase bg-brand-green hover:bg-brand-green/90 text-white rounded-none">
                  <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                    Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
