export interface GoogleReview {
  id: string
  authorName: string
  rating: number // 1 to 5
  relativeTimeDescription?: string
  text: string
  source: "Google"
}

/**
 * Google Reviews Integration Config & Place Data
 * 
 * Place: Dr. Anusha Reddy's - Neon Skin, Hair & Laser Clinic
 * Address: Behind Ekasila Park, Above Panneru Jewellers, Balasamudram, Hanamkonda
 * 
 * Integration Point:
 * Approved reviews can be populated in `verifiedGoogleReviews` below,
 * or synchronized via Google Business Profile / Google Places API.
 * In accordance with medical UX guidelines, no fabricated or unverified
 * reviews should ever be added.
 */
export const googleReviewsConfig = {
  clinicName: "Dr. Anusha Reddy's - Neon Skin, Hair & Laser Clinic",
  profileUrl: "https://maps.app.goo.gl/t5HWdXg1VR6mZ6gP9",
  placeId: "ChIJMb933OJP0zoRkribfIoMTdE",
}

/**
 * Curated Genuine Reviews
 * Populated strictly with authentic, clinic-approved public patient reviews.
 */
export const verifiedGoogleReviews: GoogleReview[] = []
