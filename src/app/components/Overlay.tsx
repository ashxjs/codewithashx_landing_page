"use client";

import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { CTAButton } from "../../components/CTAButton";
import { Routes } from "@/types/Routes";

export const Overlay = () => {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.on("change", (latest) => {
      const height = window.innerHeight;
      setVisible(latest > height);
    });
  }, [scrollY]);

  return (
    <div className="block md:hidden fixed bottom-[2dvh] left-[2dvh]">
      {visible ? (
        <CTAButton href={Routes.Subscriptions} text="overlay.CTAButton" />
      ) : null}
    </div>
  );
};
