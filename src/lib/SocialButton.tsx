import { FunctionComponent, PropsWithChildren } from "react";

type SocialBtnProps = PropsWithChildren<{
  href: string;
  ariaLabel?: string;
}>;

export const SocialBtn: FunctionComponent<SocialBtnProps> = ({
  children,
  href,
  ariaLabel,
}) => (
  <a className="w-10 h-10" target="_blank" href={href} aria-label={ariaLabel}>
    {children}
  </a>
);
