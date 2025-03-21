"use client";

import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { useState, useEffect, useRef } from "react";

export const NavigationMenu = ({
  links,
}: {
  links: { href: string; label: string }[];
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Add body overflow hidden when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="flex justify-between items-center px-5 sticky top-0 bg-[#0a0a0a] z-[400] py-3">
        <Image
          src="/javascript-logo.webp"
          alt="Logo"
          width={30}
          height={30}
          className="rounded-[5px]"
        />
        <div className="md:hidden flex items-center justify-center border border-blue-600/80 bg-blue-900/70 p-2">
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
        <nav className="hidden md:flex justify-around items-center gap-x-4">
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
      <MobileMenu
        links={links}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        ref={menuRef}
      />
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[450] md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
    </>
  );
};
