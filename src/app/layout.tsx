import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Apprenez JavaScript – Formation Gratuite",
  description:
    "Devenez développeur avec notre formation JavaScript 100% gratuite et créez vos propres applications web.",
  keywords:
    "formation JavaScript, apprendre JavaScript, développement web, formation gratuite, créer site web",
  openGraph: {
    title: "Apprends JavaScript et crée tes propres applications web 🚀",
    description:
      "Formation complète pour apprendre JavaScript et développer des applications modernes.",
    url: "https://codewithashx.fr",
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
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
