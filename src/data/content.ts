export const clinicInfo = {
  brandName: "NEON",
  subtitle: "Skin, Hair & Lasers",
  fullName: "NEON Skin, Hair & Lasers",
  doctor: "Dr. E. Anusha Reddy",
  doctorTitle: "Dermatologist",
  phone: "+91 97030 53888",
  whatsapp: "+919703053888",
  address: {
    line1: "House No. 1-8-513, 1st Floor",
    line2: "Behind Ekasila Park, Above Panneru Jewellers",
    city: "Balasamudram, Hanamkonda",
    district: "Warangal",
    state: "Telangana",
    zip: "506001",
  },
  mapsLink: "https://maps.app.goo.gl/t5HWdXg1VR6mZ6gP9",
  workingHoursConfig: {
    1: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Monday" },
    2: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Tuesday" },
    3: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Wednesday" },
    4: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Thursday" },
    5: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Friday" },
    6: { open: "10:00 AM", close: "8:00 PM", isOpen: true, label: "Saturday" },
    0: { open: "", close: "", isOpen: false, label: "Sunday" },
  },
}

export const services = [
  {
    id: "laser-hair-reduction",
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: "Laser",
    description: "Advanced diode and ND:YAG laser technology for permanent hair reduction.",
    longDescription: "Our Laser Hair Reduction treatment utilizes state-of-the-art diode and ND:YAG laser technologies to target hair follicles at their root. The procedure is suitable for various skin types and ensures a significant reduction in hair growth over multiple sessions. Each session is carefully calibrated by our dermatologists to maximize efficacy while prioritizing your comfort and skin safety.",
    benefits: ["Permanent hair reduction", "Safe for all Indian skin types", "No ingrown hairs or razor bumps", "Painless clinical procedure"],
    suitableFor: "Men and women looking for a long-term solution to unwanted body or facial hair.",
    image: "/images/treatments/laser-hair-reduction-v3.jpg"
  },
  {
    id: "hair-loss-prp-gfc",
    slug: "hair-loss-prp-gfc",
    title: "Hair Loss Treatments PRP / GFC",
    category: "Hair",
    description: "Targeted clinical treatments utilizing PRP and GFC to stimulate hair health.",
    longDescription: "Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC) are advanced, autologous treatments that utilize your body's own healing mechanisms to stimulate hair follicles. These procedures are highly effective for androgenetic alopecia and general hair thinning, promoting increased density and improved hair health.",
    benefits: ["Stimulates natural hair growth", "Increases hair thickness and density", "Uses autologous growth factors (100% natural)", "Non-surgical clinical procedure"],
    suitableFor: "Individuals experiencing early to moderate hair thinning or androgenetic alopecia.",
    image: "/images/treatments/hair-loss-prp-gfc.jpg"
  },
  {
    id: "chemical-peels",
    slug: "chemical-peels",
    title: "Chemical Peels",
    category: "Skin",
    description: "Medical-grade chemical exfoliation to rejuvenate skin texture and tone.",
    longDescription: "Our clinical chemical peels involve the precise application of customized chemical solutions to exfoliate the top layers of the skin. This controlled process reveals smoother, more radiant skin underneath and is highly effective in treating acne, hyperpigmentation, uneven texture, and fine lines.",
    benefits: ["Evens out skin tone and texture", "Reduces active acne and scarring", "Lightens stubborn pigmentation", "Provides a radiant, glowing complexion"],
    suitableFor: "Patients with dull skin, acne, hyperpigmentation, or mild photoaging.",
    image: "/images/treatments/chemical-peels-v3.jpg"
  },
  {
    id: "medifacials",
    slug: "medifacials",
    title: "MediFacials",
    category: "Skin",
    description: "Clinical facials designed to address specific dermatological concerns.",
    longDescription: "Unlike standard salon facials, Medifacials at NEON are performed under clinical supervision using medical-grade active ingredients. They are tailored to address your specific skin concerns, offering deep cleansing, intense hydration, and targeted treatment for conditions like acne or dullness.",
    benefits: ["Deep medical-grade cleansing and exfoliation", "Intense hydration and nourishment", "Customized for specific skin concerns", "No downtime"],
    suitableFor: "Anyone seeking a deep, clinical cleanse and instant skin rejuvenation.",
    image: "/images/treatments/medifacials.jpg"
  },
  {
    id: "pigmentation-laser-toning",
    slug: "pigmentation-laser-toning",
    title: "Pigmentation / Laser Toning",
    category: "Laser",
    description: "Specialized laser protocols targeting uneven skin tone and pigmentation.",
    longDescription: "Laser toning is a highly effective, non-invasive treatment that uses Q-switched lasers to target melanin deep within the skin. It safely breaks down pigmentation, melasma, and sunspots without damaging the surrounding tissue, resulting in a clearer, more even complexion.",
    benefits: ["Effectively treats melasma and deep pigmentation", "Evens out skin tone comprehensively", "Stimulates collagen for a mild glow", "Painless with zero downtime"],
    suitableFor: "Patients dealing with melasma, sun spots, freckles, or uneven skin tone.",
    image: "/images/treatments/pigmentation-laser-toning-v3.jpg"
  },
  {
    id: "diamond-glow",
    slug: "diamond-glow",
    title: "Diamond Glow",
    category: "Aesthetic",
    description: "Advanced skin resurfacing treatment for a renewed, glowing complexion.",
    longDescription: "Diamond Glow is a next-level, non-invasive skin-resurfacing treatment that simultaneously exfoliates, extracts, and infuses the skin with targeted serums. It delivers immediate, long-lasting results, leaving the skin deeply cleansed, hydrated, and luminous.",
    benefits: ["Simultaneous exfoliation, extraction, and infusion", "Volumizes skin by 70%", "Improves skin radiance and clarity", "Safe for delicate areas around eyes and lips"],
    suitableFor: "All skin types seeking an immediate, luxurious glow before events.",
    image: "/images/treatments/diamond-glow.jpg"
  },
  {
    id: "acne-scar-open-pore",
    slug: "acne-scar-open-pore",
    title: "Acne Scar / Open Pore Treatments",
    category: "Skin",
    description: "Targeted interventions to minimize the appearance of scars and pores.",
    longDescription: "We offer a comprehensive approach to acne scar and open pore reduction, combining modalities like micro-needling, chemical peels, and laser resurfacing. Our dermatologists customize the protocol based on the type and severity of your scarring to achieve the best possible skin texture.",
    benefits: ["Reduces the depth and visibility of acne scars", "Tightens and minimizes enlarged pores", "Improves overall skin texture and smoothness", "Stimulates deep collagen remodeling"],
    suitableFor: "Individuals with post-acne scarring, pitted scars, or enlarged open pores.",
    image: "/images/treatments/acne-scar-open-pore.jpg"
  },
  {
    id: "warts-corns-removal",
    slug: "warts-corns-removal",
    title: "Warts / Corns Removal",
    category: "Skin",
    description: "Safe clinical removal of warts and corns.",
    longDescription: "Warts and corns are removed safely and effectively in our clinical environment using electrocautery, radiofrequency, or specialized chemical applications. The procedures are quick, minimally invasive, and designed to ensure complete removal while minimizing recurrence.",
    benefits: ["Quick and permanent removal", "Minimally invasive and virtually painless under local anesthesia", "Performed in a sterile clinical environment", "Rapid healing with minimal scarring"],
    suitableFor: "Patients suffering from viral warts, skin tags, or painful corns.",
    image: "/images/treatments/warts-corns.jpg"
  },
  {
    id: "bridal-treatments",
    slug: "bridal-treatments",
    title: "Bridal Treatments",
    category: "Aesthetic",
    description: "Comprehensive aesthetic protocols designed for pre-wedding skin health.",
    longDescription: "Our bespoke bridal treatments are meticulously planned to ensure you look your absolute best on your special day. These comprehensive protocols combine advanced skin rejuvenation, brightening treatments, and medical-grade facials, customized to your timeline and skin type.",
    benefits: ["Customized pre-wedding skincare timeline", "Achieves a flawless, radiant bridal glow", "Addresses multiple concerns (pigmentation, dullness, acne) simultaneously", "Provides a relaxing, premium clinical experience"],
    suitableFor: "Brides and grooms preparing for their wedding day.",
    image: "/images/treatments/bridal-treatments.jpg"
  },
  {
    id: "anti-ageing-treatments",
    slug: "anti-ageing-treatments",
    title: "Anti-Ageing Treatments",
    category: "Aesthetic",
    description: "Clinical approaches to address fine lines and skin laxity.",
    longDescription: "We provide evidence-based anti-ageing interventions focused on restoring skin elasticity and volume. Our treatments, ranging from advanced skin tightening devices to specialized chemical peels, are designed to combat the signs of ageing gracefully and naturally.",
    benefits: ["Reduces fine lines and wrinkles", "Restores lost facial volume and elasticity", "Tightens sagging skin", "Promotes a youthful, rejuvenated appearance"],
    suitableFor: "Mature skin showing signs of ageing, laxity, or volume loss.",
    image: "/images/treatments/anti-ageing.jpg"
  },
  {
    id: "hair-transplantation",
    slug: "hair-transplantation",
    title: "Hair Transplantation",
    category: "Hair",
    description: "Advanced surgical solutions for hair restoration.",
    longDescription: "Our hair transplantation procedures utilize advanced follicular unit extraction (FUE) techniques to ensure natural-looking, permanent results. Performed in a highly sterile clinical setting, the procedure focuses on maximizing graft survival and designing a natural hairline tailored to your facial structure.",
    benefits: ["Permanent, natural-looking results", "Advanced FUE technique with no linear scarring", "High graft survival rate", "Custom hairline design by expert dermatologists"],
    suitableFor: "Men and women with significant hair loss, receding hairlines, or bald patches.",
    image: "/images/treatments/hair-transplantation.jpg"
  }
]

export const galleryImages = [
  { src: "/images/reception.png", alt: "NEON Clinic Reception" },
  { src: "/images/clinic-lounge.png", alt: "NEON Clinic Lounge" },
  { src: "/images/laser-treatment.png", alt: "Laser Treatment Room" },
  { src: "/images/dr-signage.png", alt: "Dr. E. Anusha Reddy Signage" },
  { src: "/images/logo-wall.png", alt: "NEON Logo Wall" },
]

export const faqs = [
  {
    question: "What services does NEON offer?",
    answer: "NEON offers a comprehensive range of dermatology, hair care, laser treatments, and aesthetic services including Laser Hair Reduction, Hair Loss Treatments (PRP/GFC), Chemical Peels, and Acne Scar Treatments."
  },
  {
    question: "When is the clinic open?",
    answer: "We are open Monday through Saturday from 10:00 AM to 8:00 PM."
  },
  {
    question: "Is the clinic open on Sunday?",
    answer: "No, NEON Clinic is closed on Sundays."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can request an appointment directly through our website's booking system, call us, or send us a message via WhatsApp."
  },
  {
    question: "How can I contact the clinic?",
    answer: `You can reach us by phone or WhatsApp at ${clinicInfo.phone}. Our address is ${clinicInfo.address.line1}, ${clinicInfo.address.city}.`
  }
]
