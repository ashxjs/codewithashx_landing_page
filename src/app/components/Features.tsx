import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("features");

  return (
    <section
      id="formation"
      className="py-20 flex flex-col items-center justify-center"
    >
      <h2 className="pt-3 text-2xl font-bold text-center md:pt-0 xs:text-3xl">
        {t("title")}
      </h2>
      <p className="text-xs text-gray-50/50 mt-2 text-center xs:text-lg md:text-xl">
        {t("description")}
      </p>
      <div className="snap-container mt-20 px-6 flex overflow-x-auto snap-x snap-mandatory w-full gap-6 pb-4">
        {["learning_code", "lifetime_access", "one_language_three_apps"].map(
          (feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition flex-shrink-0 w-[90%] md:w-[calc(33.333%-1rem)] snap-center"
            >
              <div className="text-5xl">{t(`features.${feature}.icon`)}</div>
              <h3 className="mt-4 text-xl font-bold">
                {t(`features.${feature}.title`)}
              </h3>
              <p className="text-gray-50/50 mt-2 font-semibold">
                {t(`features.${feature}.description`)}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
