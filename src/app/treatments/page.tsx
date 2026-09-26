import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Services } from "@/components/sections/services"

export const metadata = {
  title: "Treatments & Services | NEON Skin, Hair & Lasers",
  description: "Explore our comprehensive range of clinical dermatology, advanced laser, and hair restoration treatments at NEON Clinic.",
}

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Services />
      </main>
      <Footer />
    </>
  )
}
