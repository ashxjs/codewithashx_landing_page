import { FunctionComponent, PropsWithChildren } from "react";

type SocialBtnProps = PropsWithChildren<{
  href: string;
}>;

export const SocialBtn: FunctionComponent<SocialBtnProps> = ({
  children,
  href,
}) => (
  <a className="w-10 h-10" target="_blank" href={href}>
    {children}
  </a>
);
