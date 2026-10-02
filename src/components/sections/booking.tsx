"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format, addDays, isSameDay } from "date-fns"
import { ChevronDown, ChevronRight, MessageSquare, ArrowRight } from "lucide-react"

import { Container } from "@/components/ui/container"
import { clinicInfo, services } from "@/data/content"

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    customConcern: "",
    date: "",
    time: "",
    message: ""
  })

  // Date generation (next 14 days, excluding Sundays)
  const availableDates = useMemo(() => {
    const dates = []
    let current = new Date()
    while (dates.length < 14) {
      if (current.getDay() !== 0) { // Exclude Sunday
        dates.push(new Date(current))
      }
      current = addDays(current, 1)
    }
    return dates
  }, [])

  // Time slots generation (10:00 AM to 7:30 PM, 30 min intervals)
  const timeSlots = useMemo(() => {
    if (!formData.date) return []
    const slots = []
    const selectedDateObj = new Date(formData.date)
    const now = new Date()
    const isToday = isSameDay(selectedDateObj, now)

    for (let hour = 10; hour < 20; hour++) {
      for (let min of [0, 30]) {
        // Stop at 7:30 PM
        if (hour === 19 && min === 30) continue; 
        
        const timeString = `${hour > 12 ? hour - 12 : hour}:${min === 0 ? '00' : '30'} ${hour >= 12 ? 'PM' : 'AM'}`
        
        // Disable past times if today
        if (isToday) {
          if (now.getHours() > hour || (now.getHours() === hour && now.getMinutes() >= min)) {
            continue;
          }
        }
        slots.push(timeString)
      }
    }
    return slots
  }, [formData.date])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const generateWhatsAppURL = () => {
    let treatmentName = "Consultation"
    let concernLine = ""

    if (formData.treatment === "other") {
      treatmentName = "Other"
      if (formData.customConcern.trim()) {
        concernLine = `Concern: ${formData.customConcern.trim()}\n`
      }
    } else {
      treatmentName = services.find(s => s.id === formData.treatment)?.title || "Consultation"
    }
    
    const message = `Hello NEON Skin, Hair & Laser Clinics,

I would like to request an appointment.

Name: ${formData.name}
Phone: +91 ${formData.phone}
${formData.email ? `Email: ${formData.email}\n` : ''}Treatment: ${treatmentName}
${concernLine}Preferred Date: ${formData.date ? format(new Date(formData.date), "dd MMMM yyyy") : ''}
Preferred Time: ${formData.time}
${formData.message ? `\nAdditional Notes:\n${formData.message}` : ''}

Please let me know if this appointment time is available.

Thank you.`

    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = clinicInfo.whatsapp.replace(/[^0-9]/g, '')
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  return (
    <section id="book" className="py-24 lg:py-32 bg-background border-t border-border/50">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="font-heading text-5xl lg:text-7xl font-normal tracking-tight text-foreground">
              Your skin deserves<br/>
              <span className="italic text-muted">expert attention.</span>
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="w-full bg-surface p-8 md:p-16 rounded-[2rem] shadow-xl border border-border space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase font-medium text-muted">Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase font-medium text-muted">Phone</label>
                      <div className="relative flex items-center border-b border-border focus-within:border-brand-green transition-colors">
                        <span className="text-foreground pr-3 py-2 pointer-events-none select-none">+91</span>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({...formData, phone: val});
                          }}
                          pattern="[0-9]{10}"
                          title="Please enter exactly 10 digits"
                          className="w-full bg-transparent py-2 text-foreground outline-none"
                          placeholder="98765 43210"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs tracking-widest uppercase font-medium text-muted">Email</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors"
                        placeholder="rahul.sharma@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-2 relative">
                      <label className="text-xs tracking-widest uppercase font-medium text-muted">Treatment</label>
                      <select
                        required
                        value={formData.treatment}
                        onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                        className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a treatment</option>
                        {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-muted pointer-events-none" />
                    </div>

                    {/* Expandable Custom Concern Field when Other is selected */}
                    <AnimatePresence>
                      {formData.treatment === "other" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -6 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -6 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2 overflow-hidden"
                        >
                          <label className="text-xs tracking-widest uppercase font-medium text-muted">
                            Tell us what you&apos;d like help with
                          </label>
                          <input 
                            required
                            type="text"
                            value={formData.customConcern}
                            onChange={(e) => setFormData({...formData, customConcern: e.target.value})}
                            className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors text-sm"
                            placeholder="Please briefly describe your concern or the treatment you're interested in."
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 relative">
                        <label className="text-xs tracking-widest uppercase font-medium text-muted">Date</label>
                        <select
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value, time: ""})}
                          className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select Date</option>
                          {availableDates.map(date => (
                            <option key={date.toISOString()} value={date.toISOString()}>
                              {format(date, "MMM dd, EEE")}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-muted pointer-events-none" />
                      </div>
                      
                      <div className="space-y-2 relative">
                        <label className="text-xs tracking-widest uppercase font-medium text-muted">Time</label>
                        <select
                          required
                          disabled={!formData.date}
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors appearance-none cursor-pointer disabled:opacity-50"
                        >
                          <option value="" disabled>Select Time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-0 bottom-3 w-4 h-4 text-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs tracking-widest uppercase font-medium text-muted">Message (Optional)</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-border py-2 text-foreground focus:border-brand-green outline-none transition-colors resize-none h-12"
                    placeholder="Tell us about your concern..."
                  />
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="w-full h-16 bg-foreground text-background flex items-center justify-center gap-4 text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors group rounded-md"
                  >
                    Request Appointment
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-surface p-12 md:p-24 rounded-[2rem] shadow-xl border border-border text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mb-8">
                  <MessageSquare className="w-10 h-10 text-brand-green" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-heading font-medium text-foreground mb-4">
                  Almost there.
                </h3>
                <p className="text-lg text-muted max-w-md mx-auto mb-4">
                  Your appointment details are ready to send to NEON.
                </p>
                <p className="text-sm text-muted/80 max-w-md mx-auto mb-12">
                  WhatsApp will open with your appointment details pre-filled. Please review the information and tap Send.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <a 
                    href={generateWhatsAppURL()}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-[2] h-14 bg-foreground text-background flex items-center justify-center gap-3 rounded-md hover:bg-foreground/90 transition-colors font-bold tracking-[0.1em] uppercase text-[11px] shadow-xl shadow-black/10"
                    onClick={() => {
                      // Optional: We don't reset state here so they can still edit if they close WhatsApp
                    }}
                  >
                    CONTINUE TO WHATSAPP <ArrowRight className="w-4 h-4" />
                  </a>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="flex-1 h-14 border border-border text-foreground flex items-center justify-center gap-2 rounded-md hover:bg-black/5 transition-colors font-bold tracking-[0.1em] uppercase text-[11px]"
                  >
                    EDIT DETAILS
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </Container>
    </section>
  )
}
