import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Apprendre JavaScript avec un cours en ligne 🚀",
  description:
    "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
  keywords:
    "formation JavaScript, apprendre JavaScript, développement web, formation gratuite, créer site web, application mobile, serveur",
  metadataBase: new URL("https://codewithashx.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apprendre JavaScript avec un cours en ligne 🚀",
    description:
      "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
    url: "https://codewithashx.fr",
    siteName: "Codewithashx",
    images: [
      {
        url: "og_image.png",
        width: 1200,
        height: 630,
        alt: "Formation JavaScript - Apprenez à coder",
      },
    ],
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="next-size-adjust"
          content="width=device-width, initial-scale=1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "Formation JavaScript Gratuite",
              description:
                "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
              provider: {
                "@type": "Organization",
                name: "CodeWithAshX",
                url: "https://codewithashx.fr",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                url: "https://codewithashx.fr",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
              },
            }),
          }}
        />
      </Head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
