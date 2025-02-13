import { CTA_SUBSCRIPTION_URL } from "@/lib/constant";
import { CTAButton } from "@/lib/CTAButton";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-5 px-6">
      <main className="flex flex-col justify-center items-center h-full relative">
        <div className="bg-dot-pattern absolute inset-0 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
        <div className="relative p-4">
          <h1 className="text-4xl font-bold max-w-[55%]">
            Apprends JavaScript et créé tes propres applications web 🚀
          </h1>
          <p className="text-lg mt-4">
            Formation conçue pour les débutants et les développeurs souhaitant
            maîtriser JavaScript
          </p>
          <CTAButton variant="primary" href={CTA_SUBSCRIPTION_URL} />
        </div>
      </main>
    </section>
  );
}
