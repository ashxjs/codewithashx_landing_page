import { Footer } from "./components/Contact";
import { Content } from "./components/Content";
import { CTA } from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { NavigationMenu } from "./components/NavigationMenu";
import { Overlay } from "./components/Overlay";
import Testimonials from "./components/Testimonials";

const links = [
  {
    label: "Formation",
    href: "#formation",
  },
  {
    label: "Contenus",
    href: "#content",
  },
  {
    label: "Avis",
    href: "#avis",
  },
  // {
  //   label: "Prix",
  //   href: "#pricing",
  // },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function HomePage() {
  return (
    <>
      <NavigationMenu links={links} />
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
