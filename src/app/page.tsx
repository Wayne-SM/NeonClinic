import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { FeaturedTreatments } from "@/components/sections/featured"
import { FindYourTreatment } from "@/components/sections/treatment-finder"
import { Gallery } from "@/components/sections/gallery"
import { Doctor } from "@/components/sections/doctor"
import { PatientJourney } from "@/components/sections/journey"
import { WhyNeon } from "@/components/sections/why-neon"
import { Booking } from "@/components/sections/booking"
import { Contact } from "@/components/sections/contact"
import { GoogleReviews } from "@/components/sections/google-reviews"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col bg-background">
        <Hero />
        <About />
        <Services />
        <FeaturedTreatments />
        <FindYourTreatment />
        <Gallery />
        <Doctor />
        <PatientJourney />
        <WhyNeon />
        <Booking />
        <Contact />
        <GoogleReviews />
      </main>
      <Footer />
    </>
  )
}
