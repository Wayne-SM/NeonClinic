import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { About as AboutSection } from "@/components/sections/about"
import { Doctor } from "@/components/sections/doctor"
import { WhyNeon } from "@/components/sections/why-neon"

export const metadata = {
  title: "About Us | NEON Clinic & Dr. Anusha Reddy",
  description: "Learn about NEON Skin, Hair & Lasers clinic and our leading dermatologist, Dr. E. Anusha Reddy.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <AboutSection />
        <Doctor />
        <WhyNeon />
      </main>
      <Footer />
    </>
  )
}
