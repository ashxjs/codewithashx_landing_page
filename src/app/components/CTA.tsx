import { Routes } from "@/types/Routes";
import { CTAButton } from "../../components/CTAButton";
import { useTranslations } from "next-intl";

export const CTA = () => {
  const t = useTranslations("CTA");

  return (
    <section
      id="cta"
      className="py-20 bg-gray-900 text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-md font-bold xs:text-xl md:text-3xl">{t("title")}</h2>
      <p className="text-center text-md text-gray-200 mt-2 md:text-lg">
        {t("description")}
      </p>
      <div className="mt-6">
        <CTAButton href={Routes.Subscriptions} text="hero.CTAButton" />
      </div>
    </section>
  );
};

CTA.displayName = "CTA";
