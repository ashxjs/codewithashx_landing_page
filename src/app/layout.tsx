import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleSchema } from "./components/GoogleSchema";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="next-size-adjust" content="" />
      <GoogleSchema />
      <GoogleAnalytics />
      <body className={`${poppins.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
