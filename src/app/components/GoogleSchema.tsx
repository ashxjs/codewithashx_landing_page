import Script from "next/script";

const SCHEMA = {
  "@context": "https://schema.org",
  "@id": "https://codewithashx.com",
  "@type": "Course",
  name: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
  description:
    "Maîtrisez JavaScript avec notre formation en ligne. Accédez à des modules structurés, des projets concrets et un support continu pour devenir expert JavaScript en 2025",
  publisher: {
    "@type": "Organization",
    name: "CodeWithAshX",
    url: "https://codewithashx.fr",
  },
  provider: {
    "@type": "Organization",
    name: "CodeWithAshX",
    url: "https://codewithashx.fr",
  },
  images: [
    {
      "@type": "ImageObject",
      url: "https://codewithashx.fr/og_image.webp",
      width: 1200,
      height: 630,
      alt: "Formation JavaScript - Apprenez à coder",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: 1234,
    reviewCount: 450,
  },
  offers: [
    {
      "@type": "Offer",
      category: "FREE",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: "https://codewithashx.fr",
    },
  ],
  totalHistoricalEnrollment: 35,
  datePublished: "2025-01-01",
  educationalLevel: "Beginner",
  about: ["Javascript", "Coding", "Web Development"],
  teaches: [
    "Apprends à coder en JavaScript",
    "Comprendre les bases du JavaScript",
    "Créer des applications web avec JavaScript",
  ],
  inLanguage: "fr",
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      location: "Online",
      courseMode: "Online",
      courseWorkload: "10 hours",
    },
  ],
};

export const GoogleSchema = () => {
  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(SCHEMA, null, 2),
      }}
    />
  );
};
