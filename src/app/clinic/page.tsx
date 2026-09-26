import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Gallery } from "@/components/sections/gallery"

export const metadata = {
  title: "Inside NEON | Clinic Environment",
  description: "Take a tour of our premium clinical environment and state-of-the-art dermatology facilities.",
}

export default function ClinicPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <div className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight mb-6">
              Clinical Excellence.<br />Premium Environment.
            </h1>
            <p className="text-xl text-muted max-w-2xl">
              Our facility is designed to prioritize your comfort and privacy, ensuring a premium experience from consultation to aftercare, powered by advanced clinical technology.
            </p>
          </div>
        </div>
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
