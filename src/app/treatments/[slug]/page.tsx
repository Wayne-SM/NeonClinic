import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Calendar, ArrowLeft } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { services, clinicInfo } from "@/data/content"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug)
  if (!service) return { title: "Treatment Not Found" }
  return {
    title: `${service.title} | NEON Clinic`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.slug)

  if (!service) {
    notFound()
  }

  // Find related treatments (same category, excluding current)
  const relatedTreatments = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-20 bg-background">
        
        {/* Navigation & Breadcrumb */}
        <div className="border-b border-border/50">
          <Container>
            <div className="py-6">
              <Link 
                href="/treatments" 
                className="inline-flex items-center text-xs tracking-[0.2em] uppercase font-medium text-muted hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to all treatments
              </Link>
            </div>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <span className="text-xs font-semibold tracking-[0.3em] text-brand-green uppercase">
                    {service.category}
                  </span>
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground leading-[1.05]">
                    {service.title}
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-lg">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Button size="lg" className="h-16 px-8 text-sm tracking-widest uppercase bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 w-full sm:w-auto" asChild>
                    <Link href="/book">
                      <Calendar className="w-4 h-4 mr-3" />
                      Book an Appointment
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[2rem]" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-surface border-t border-border/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              <div className="lg:col-span-8 space-y-20">
                {/* Clinical Overview */}
                <div className="space-y-8">
                  <h2 className="font-heading text-3xl md:text-4xl">Clinical Overview</h2>
                  <div className="w-12 h-[1px] bg-brand-green/50" />
                  <p className="text-lg text-muted/90 leading-relaxed font-light">
                    {service.longDescription}
                  </p>
                </div>

                {/* Benefits & Suitability */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                  <div className="space-y-8">
                    <h2 className="font-heading text-2xl">Key Benefits</h2>
                    <ul className="space-y-4">
                      {service.benefits?.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                          <span className="text-muted/90 font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-8 bg-background p-8 rounded-3xl border border-border/50">
                    <h2 className="font-heading text-2xl">Who is this for?</h2>
                    <p className="text-muted/90 font-light leading-relaxed">
                      {service.suitableFor}
                    </p>
                  </div>
                </div>
                
                {/* The Experience */}
                <div className="space-y-8">
                  <h2 className="font-heading text-3xl md:text-4xl">The Procedure</h2>
                  <div className="w-12 h-[1px] bg-brand-green/50" />
                  <div className="space-y-12 pl-4 border-l border-border/50">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-brand-green ring-4 ring-background" />
                      <h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Step 01. Consultation</h4>
                      <p className="text-muted font-light leading-relaxed max-w-xl">
                        Detailed assessment with {clinicInfo.doctor} to understand your medical history and customize the protocol.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border ring-4 ring-background" />
                      <h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Step 02. Preparation</h4>
                      <p className="text-muted font-light leading-relaxed max-w-xl">
                        Skin or scalp is meticulously prepared in our sterile clinical environment for maximum efficacy.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border ring-4 ring-background" />
                      <h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Step 03. Treatment</h4>
                      <p className="text-muted font-light leading-relaxed max-w-xl">
                        The procedure is performed using state-of-the-art medical technology, prioritizing safety and comfort.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-border ring-4 ring-background" />
                      <h4 className="text-sm font-semibold tracking-widest uppercase mb-2">Step 04. Aftercare</h4>
                      <p className="text-muted font-light leading-relaxed max-w-xl">
                        Post-treatment guidelines are provided to maximize results and ensure rapid healing.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sidebar Booking CTA */}
              <div className="lg:col-span-4">
                <div className="sticky top-32 bg-background p-10 rounded-[2rem] border border-border shadow-xl space-y-8">
                  <div>
                    <h3 className="font-heading text-3xl mb-4">Start your journey.</h3>
                    <p className="text-muted/90 font-light leading-relaxed text-sm">
                      Every treatment begins with a comprehensive medical consultation. Schedule your appointment to discuss {service.title}.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button size="lg" className="w-full h-14 bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-xs" asChild>
                      <Link href="/book">Book Consultation</Link>
                    </Button>
                    <a 
                      href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-14 border border-border text-foreground hover:bg-surface transition-colors uppercase tracking-widest text-xs font-medium rounded-md"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Related Treatments */}
        {relatedTreatments.length > 0 && (
          <section className="py-24 bg-background border-t border-border/50">
            <Container>
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <h2 className="font-heading text-4xl">Related Treatments</h2>
                  <Link href="/treatments" className="text-xs uppercase tracking-widest font-medium hover:text-brand-green transition-colors pb-1 border-b border-foreground hover:border-brand-green">
                    View All Treatments
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedTreatments.map(rel => (
                    <Link key={rel.id} href={`/treatments/${rel.slug}`} className="group space-y-6 block">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface">
                        <Image 
                          src={rel.image} 
                          alt={rel.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-semibold tracking-widest text-brand-green uppercase">
                          {rel.category}
                        </span>
                        <h3 className="font-heading text-2xl group-hover:text-brand-green transition-colors">
                          {rel.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}
