import { Footer } from "@/components/Contact";
import { Content } from "@/components/Content";
import { CTA } from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { NavigationMenu } from "@/components/NavigationMenu";
import { Overlay } from "@/components/Overlay";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <NavigationMenu />
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
