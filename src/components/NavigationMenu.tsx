import Image from "next/image";

const links = [
  {
    label: "Formation",
    href: "#formation",
  },
  {
    label: "Contenus",
    href: "#content",
  },
  {
    label: "Avis",
    href: "#avis",
  },
  // {
  //   label: "Prix",
  //   href: "#pricing",
  // },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export const NavigationMenu = () => (
  <div className="flex justify-between items-center px-5 sticky top-0 bg-[#0a0a0a] z-[400] py-3">
    <Image
      src="/javascript-logo.webp"
      alt="Logo"
      width={30}
      height={30}
      className="rounded-[5px]"
    />
    <nav className="flex justify-around items-center gap-x-4">
      {links.map((link) => (
        <a
          className="text-base xs:text-lg font-bold"
          href={link.href}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>
);
