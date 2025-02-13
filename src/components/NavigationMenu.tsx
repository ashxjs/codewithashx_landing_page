import Image from "next/image";

const links = [
  {
    label: "Formation",
    href: "#formation",
  },
  {
    label: "Contenu",
    href: "#content",
  },
  {
    label: "Avis",
    href: "#avis",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const NavigationMenu = () => (
  <div className="flex justify-center items-center px-5 sticky top-0 bg-[#0a0a0a] z-[400] py-3 sm:justify-between">
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png"
      alt="Logo"
      width={30}
      height={30}
      className="rounded-lg hidden sm:block"
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
