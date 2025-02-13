import { FunctionComponent } from "react";

type CTAButtonProps = {
  variant?: "primary" | "secondary";
  href: string;
};

const buttonVariants = {
  primary: "bg-gray-900 hover:bg-gray-700",
  secondary: "bg-slate-600",
};

export const CTAButton: FunctionComponent<CTAButtonProps> = ({
  variant = "primary",
  href,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`${buttonVariants[variant]} font-bold mt-6 inline-block text-white py-3 px-6 rounded-lg shadow-md transition}`}
    >
      J&apos;accède à la formation 🚀
    </a>
  );
};
