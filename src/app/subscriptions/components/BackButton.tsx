import Link from "next/link";
import { Routes } from "@/types/Routes";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export const BackButton = () => {
  const t = useTranslations("subscribe");

  return (
    <Link
      href={Routes.Home}
      className="absolute top-5 left-5 bg-blue-900 text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition-colors z-10 border border-blue-700"
      aria-label={t("backButton")}
    >
      <ArrowLeft size={24} />
    </Link>
  );
};
