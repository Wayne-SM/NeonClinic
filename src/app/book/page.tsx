import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Booking } from "@/components/sections/booking"

export const metadata = {
  title: "Book an Appointment | NEON Clinic",
  description: "Schedule your consultation or treatment at NEON Skin, Hair & Lasers.",
}

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background">
        <Booking />
      </main>
      <Footer />
    </>
  )
}
