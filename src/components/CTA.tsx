import { Routes } from "@/types/Routes";
import { CTAButton } from "./CTAButton";

export const CTA = () => (
  <section
    id="cta"
    className="py-20 bg-gray-900 text-white flex flex-col items-center justify-center"
  >
    <h2 className="text-md font-bold xs:text-xl md:text-3xl">
      Rejoignez la formation dès aujourd&apos;hui !
    </h2>
    <p className="text-center text-md text-gray-200 mt-2 md:text-lg">
      Inscrivez-vous dès maintenant à notre formation JavaScript complète et
      profitez d&apos;un accès gratuit pour les 50 premiers inscrits !
    </p>
    <div className="mt-6">
      <CTAButton href={Routes.Subscriptions} />
    </div>
  </section>
);
