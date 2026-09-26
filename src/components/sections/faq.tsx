"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { Container } from "@/components/ui/container"
import { faqs } from "@/data/content"

export function FAQ() {
  return (
    <section className="py-24 bg-surface dark:bg-background border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div className="lg:col-span-1 space-y-4">
            <span className="text-sm font-medium tracking-widest text-brand-green uppercase">
              Support
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-lg">
              Find quick answers to common questions about our clinic and services.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Accordion.Root type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl overflow-hidden shadow-sm"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-muted transition-colors [&[data-state=open]>svg]:rotate-180 outline-none focus-visible:ring-2 focus-visible:ring-brand-green">
                      <span className="font-medium text-lg text-foreground">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-muted transition-transform duration-300" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-muted text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="p-6 pt-0 border-t border-border/50">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </Container>
    </section>
  )
}
