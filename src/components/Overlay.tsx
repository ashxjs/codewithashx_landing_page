"use client";

import cx from "classnames";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { CTA_SUBSCRIPTION_URL } from "@/lib/constant";

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
    <div className="fixed bottom-[2dvh] left-[2dvh]">
      <a
        href={CTA_SUBSCRIPTION_URL}
        target="_blank"
        className={cx(
          "block md:hidden font-bold mt-6 inline-block text-white py-3 px-6 bg-blue-900/70 hover:bg-blue-700 rounded-full shadow-md border border-blue-700",
          !visible && "hidden"
        )}
      >
        Rejoindre
      </a>
    </div>
  );
};
