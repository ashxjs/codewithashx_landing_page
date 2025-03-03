import { CTA_SUBSCRIPTION_URL } from "@/lib/constant";

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
      <a
        role="button"
        href={CTA_SUBSCRIPTION_URL}
        target="_blank"
        className="font-bold mt-6 inline-block text-white py-3 px-6 bg-blue-900 hover:bg-blue-700 rounded-full shadow-md border border-blue-700"
      >
        J&apos;accède à la formation 🚀
      </a>
    </div>
  </section>
);
