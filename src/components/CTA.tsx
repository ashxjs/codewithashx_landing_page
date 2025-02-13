import { CTA_SUBSCRIPTION_URL } from "@/lib/constant";

export const CTA = () => (
  <section
    id="cta"
    className="py-20 bg-gray-900 text-white flex flex-col items-center justify-center"
  >
    <h2 className="text-xl font-bold md:text-3xl">
      Rejoignez la formation dès aujourd&apos;hui !
    </h2>
    <p className="text-md text-gray-200 mt-2 md:text-lg">
      Les 50 premières inscriptions sont 100% gratuites.
    </p>
    <div className="mt-6">
      <a
        href={CTA_SUBSCRIPTION_URL}
        target="_blank"
        className={`bg-gray-800 font-bold mt-6 inline-block text-white py-3 px-6 rounded-lg shadow-md transition}`}
      >
        J&apos;accède à la formation 🚀
      </a>
    </div>
  </section>
);
