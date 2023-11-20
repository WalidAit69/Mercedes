"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function FooterMenu() {
  const [MenuType, setMenuType] = useState(1);

  const ref = useRef(null);

  const isInview = useInView(ref);

  const positioncontrols = useAnimation();
  const textcontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      positioncontrols.start({ top: 0 });
      textcontrols.start({ x: 0, opacity: 1 });
    } else if (!isInview) {
      positioncontrols.start({ top: "60px" });
      textcontrols.start({ x: -30, opacity: 0 });
    } else if (MenuType) {
      textcontrols.start({ x: 0, opacity: 1 });
    }
  }, [isInview, MenuType]);

  return (
    <section className="relative bg-black text-[var(--wb-grey-50)] h-[100vh]">
      <div
        className="absolute top-[40%] left-[10%] flex gap-20 items-center footerlinks transition-colors"
        ref={ref}
      >
        <div className="flex flex-col gap-3">
          <div className="relative h-[60px] w-[240px] overflow-hidden">
            <motion.h1
              initial={{ top: "60px" }}
              animate={positioncontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="text-5xl text-white cursor-pointer hover:text-white top-[60px] absolute"
              onClick={() => setMenuType(1)}
              style={{ color: MenuType === 1 ? "white" : "gray" }}
            >
              Purchase
            </motion.h1>
          </div>

          <div className="relative h-[60px] w-[240px] overflow-hidden">
            <motion.h1
              initial={{ top: "60px" }}
              animate={positioncontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="text-5xl text-white cursor-pointer hover:text-white top-[60px] absolute"
              onClick={() => setMenuType(2)}
              style={{ color: MenuType === 2 ? "white" : "gray" }}
            >
              Finance
            </motion.h1>
          </div>
          <div className="relative h-[60px] w-[240px] overflow-hidden">
            <motion.h1
              initial={{ top: "60px" }}
              animate={positioncontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="text-5xl text-white cursor-pointer hover:text-white top-[60px] absolute"
              onClick={() => setMenuType(3)}
              style={{ color: MenuType === 3 ? "white" : "gray" }}
            >
              Services
            </motion.h1>
          </div>
        </div>

        <div>
          {MenuType === 1 && (
            <motion.ul
              initial={{ x: -30, opacity: 0 }}
              animate={textcontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="flex flex-col gap-3"
            >
              <li>Vehicles</li>
              <li>Accessories</li>
              <li>Digital Extras</li>
              <li>Lifestyle Collection</li>
              <li>Classic Cars</li>
            </motion.ul>
          )}

          {MenuType === 2 && (
            <motion.ul
              initial={{ x: -30, opacity: 0 }}
              animate={textcontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="flex flex-col gap-3"
            >
              <li>Leasing</li>
              <li>Rent</li>
              <li>Insurance</li>
            </motion.ul>
          )}

          {MenuType === 3 && (
            <motion.ul
              initial={{ x: -30, opacity: 0 }}
              animate={textcontrols}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              className="flex flex-col gap-3"
            >
              <li>Mercedes me</li>
              <li>Service & Parts</li>
              <li>Driving Aids</li>
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default FooterMenu;
