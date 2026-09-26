import Link from "next/link"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import { clinicInfo } from "@/data/content"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background pt-24 pb-12 border-t border-border/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Doctor */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-heading text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1]">
                NEON
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-green font-medium">
                {clinicInfo.subtitle}
              </p>
            </div>
            <div className="text-white/60 space-y-1">
              <p className="font-medium text-white/90 uppercase tracking-widest text-xs">{clinicInfo.doctor}</p>
              <p className="text-[10px] tracking-widest uppercase">{clinicInfo.doctorTitle}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-lg mb-8 text-white">Explore</h4>
            <ul className="space-y-6">
              {["Home", "Treatments", "About", "Clinic", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-white/50 hover:text-white transition-colors text-[11px] uppercase tracking-widest"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <h4 className="font-heading text-lg mb-8 text-white">Get in Touch</h4>
            
            <div className="flex items-start gap-4 text-white/70">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-green" />
              <div className="text-sm leading-relaxed">
                <p>{clinicInfo.address.line1}</p>
                <p>{clinicInfo.address.line2}</p>
                <p>{clinicInfo.address.city}, {clinicInfo.address.district}</p>
                <p>{clinicInfo.address.state} {clinicInfo.address.zip}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
                <a href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {clinicInfo.phone}
                </a>
              </Button>
              <Button variant="outline" asChild className="border-brand-green text-brand-green hover:bg-brand-green/10 hover:text-brand-green bg-transparent">
                <a href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {currentYear} {clinicInfo.fullName}. All rights reserved.
          </p>
          <a
            href={clinicInfo.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Open in Google Maps
          </a>
        </div>
      </Container>
    </footer>
  )
}
