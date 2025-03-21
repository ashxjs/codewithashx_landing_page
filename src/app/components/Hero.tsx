import { Routes } from "@/types/Routes";
import { CTAButton } from "../../components/CTAButton";

export default function Hero() {
  return (
    <section id="hero" className="text-center px-6">
      <main className="flex flex-col justify-center items-center h-full relative">
        <div className="bg-dot-pattern absolute inset-0 opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
        <div className="relative p-4">
          <h1 className="text-4xl font-bold tracking-tight leading-[3rem] md:leading-none">
            <span className="relative mx-3">
              <span className="relative">Formation</span>
              <svg
                width="219"
                height="24"
                viewBox="0 0 219 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-x-0 -bottom-3 w-full"
              >
                <path
                  d="M0.5 2H218L21 12.5H182.5L48.5 21.5H151"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="stroke-blue-900"
                ></path>
              </svg>
            </span>
            JavaScript complète : De débutant à{" "}
            <span className="border border-blue-600/80 bg-blue-900/70 px-2 mx-1">
              expert
            </span>{" "}
            en 2025
          </h1>
          <p className="text-lg font-semibold mt-4">
            Formation JavaScript en ligne pour débutants et développeurs.
            Apprenez à créer des applications web, mobiles et serveurs avec des
            projets pratiques.
          </p>
          <CTAButton href={Routes.Subscriptions} />
        </div>
      </main>
    </section>
  );
}
