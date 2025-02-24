import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const dynamic = "force-dynamic";

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
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
};

export const metadata: Metadata = {
  title: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
  description:
    "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
  keywords:
    "formation JavaScript, apprendre JavaScript, développement web, formation gratuite, créer site web, application mobile, serveur",
  metadataBase: new URL("https://codewithashx.fr"),
  alternates: {
    canonical: "/",
  },
  twitter: {},
  openGraph: {
    title: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
    description:
      "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
    url: "https://codewithashx.fr",
    siteName: "Codewithashx",
    images: [
      {
        url: "og_image.webp",
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

const GA_ID = "G-N7BW1WHQGW";

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
      </Head>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2),
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_ID}');
          `,
        }}
      />
      <body className={`${poppins.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
