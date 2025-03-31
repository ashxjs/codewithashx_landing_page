import { useTranslations } from "next-intl";
import Link from "next/link";
import { FunctionComponent } from "react";

const DEFAULT_TEXT = "hero.CTAButton";

type CTAButtonProps = {
  href: string;
  text?: string;
};

export const CTAButton: FunctionComponent<CTAButtonProps> = ({
  href,
  text = DEFAULT_TEXT,
}) => {
  const t = useTranslations();

  return (
    <Link
      href={href}
      className="font-bold mt-6 inline-block text-white py-3 px-6 bg-blue-900 hover:bg-blue-700 rounded-full shadow-md border border-blue-700"
    >
      {t(text)}
    </Link>
  );
};
