import { FunctionComponent } from "react";

type CTAButtonProps = {
  variant?: "primary" | "secondary";
  href: string;
};

const buttonVariants = {
  primary: "",
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
      className={`font-bold mt-6 inline-block text-white py-3 px-6 rounded-lg shadow-md transition ${buttonVariants[variant]} `}
    >
      J&apos;accède à la formation 🚀
    </a>
  );
};
