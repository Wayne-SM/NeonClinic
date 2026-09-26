import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Anusha Reddy's | Neon Skin, Hair & Laser Clinic | Hanamkonda",
  description: "Specialized Dermatology, Trichology & Cosmetology in Hanamkonda by Dr. Anusha Reddy, MBBS, DDVL. Expert treatments for acne, hair fall, and laser hair removal.",
  metadataBase: new URL("https://neonclinic.example.com"),
  openGraph: {
    title: "Neon Skin, Hair & Laser Clinic | Dr. Anusha Reddy",
    description: "Specialized Dermatology, Trichology & Cosmetology in Hanamkonda.",
    locale: "en_IN",
    type: "website",
  },
};

import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { CustomCursor } from "@/components/ui/cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr. Anusha Reddy's - Neon Skin, Hair & Laser Clinic",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House No. 1-8-513, 1st Floor, Behind Ekasila Park",
              "addressLocality": "Hanamkonda",
              "addressRegion": "Telangana",
              "postalCode": "506001",
              "addressCountry": "IN"
            },
            "telephone": "+919703053888",
            "medicalSpecialty": ["Dermatology", "Cosmetology"]
          })
        }} />
        <CustomCursor />
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
