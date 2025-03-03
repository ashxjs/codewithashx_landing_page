import "./globals.css";
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
    "Maîtrisez JavaScript avec notre formation en ligne. Accédez à des modules structurés, des projets concrets et un support continu pour devenir expert en 2025",
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
    "Maîtrisez JavaScript avec notre formation en ligne. Accédez à des modules structurés, des projets concrets et un support continu pour devenir expert en 2025",
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
      "Maîtrisez JavaScript avec notre formation en ligne. Accédez à des modules structurés, des projets concrets et un support continu pour devenir expert en 2025",
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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "256x256", type: "image/png" },
    ],
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
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema, null, 2),
        }}
      />
      <meta name="next-size-adjust" content="" />
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
