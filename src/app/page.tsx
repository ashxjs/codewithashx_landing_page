import { useTranslations } from "next-intl";
import { Footer } from "./components/Contact";
import { Content } from "./components/CourseContent/Content";
import { CTA } from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import { Hero } from "./components/Hero";
import { NavigationMenu } from "./components/NavigationMenu";
import { Overlay } from "./components/Overlay";
import Testimonials from "./components/Testimonials";

const links = [
  {
    label: "courses",
    href: "#formation",
  },
  {
    label: "content",
    href: "#content",
  },
  {
    label: "testimonials",
    href: "#avis",
  },
  // {
  //   label: "Prix",
  //   href: "#pricing",
  // },
  {
    label: "faq",
    href: "#faq",
  },
];

export default function HomePage() {
  const t = useTranslations("menu");

  const tradLinks = links.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  return (
    <>
      <NavigationMenu links={tradLinks} />
      <Hero />
      <Features />
      <Content />
      <Testimonials />
      <FAQ />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
      <Overlay />
    </>
  );
}
