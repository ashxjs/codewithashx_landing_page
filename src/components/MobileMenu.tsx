"use client";

import { X } from "lucide-react";
import { forwardRef } from "react";

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ links, isOpen, onClose }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed top-0 right-0 w-2/3 h-full bg-black/95 py-20 z-[500] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="pl-5 flex flex-col gap-y-8">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={link.label}
              className="text-white text-2xl font-bold transform transition-all duration-300 ease-in-out"
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(20px)",
              }}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
);

MobileMenu.displayName = "MobileMenu";
