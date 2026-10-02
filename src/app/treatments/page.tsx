import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Services } from "@/components/sections/services"
import { FindYourTreatment } from "@/components/sections/treatment-finder"

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
        <FindYourTreatment />
      </main>
      <Footer />
    </>
  )
}
