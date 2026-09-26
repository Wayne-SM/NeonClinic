import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Contact } from "@/components/sections/contact"
import { FAQ } from "@/components/sections/faq"

export const metadata = {
  title: "Contact Us | NEON Clinic",
  description: "Get in touch with NEON Clinic. Find our address, phone number, operating hours, and location in Hanamkonda.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
