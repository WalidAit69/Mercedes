"use client";

import React, { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function Masterpiece() {
  const ref = useRef(null);

  const isInview = useInView(ref);

  const positioncontrols = useAnimation();
  const textcontrols = useAnimation();
  const heightcontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      positioncontrols.start({ top: 0 });
      textcontrols.start({ opacity: 1 });
      heightcontrols.start({ height: "300px" });
    }
  }, [isInview]);

  return (
    <section className="h-[100vh] w-full bg-black text-white py-32">
      <div className="mx-auto max-w-7xl flex justify-between h-full">
        <div className="flex flex-col justify-between h-full items-start">
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={textcontrols}
              transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
            >
              Inspired by the sense of freedom.
            </motion.h3>

            <div className="relative h-[150px] w-[450px] overflow-hidden">
              <motion.h1
                initial={{ top: "120px" }}
                animate={positioncontrols}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: [0.8, 0, 0, 0.8],
                }}
                className="text-6xl mt-6 h-fit absolute"
              >
                Masterpiece in <br /> the desert.
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={textcontrols}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
          >
            <p className="text-base max-w-lg mb-6">
              Interior designer John Vugrin has dedicated his career to a house
              that is making architectural history. A journey through the
              California desert.
            </p>
            <button className="text-black bg-white rounded-full flex items-center gap-2 py-[3px] px-3 font-medium text-[14px] hover:text-white hover:bg-[var(--theme-primary)] transition-colors navlinks_transition">
              Discover more <ChevronRight width={15} />
            </button>{" "}
          </motion.div>
        </div>

        <div ref={ref}>
          <motion.img
            initial={{ height: 0 }}
            animate={heightcontrols}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
            src={"/masterpiece.avif"}
            alt="Masterpiece"
            className="w-[550px] h-[300px]"
          ></motion.img>
          <motion.p
            initial={{ opacity: 0 }}
            animate={textcontrols}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
            className="text-sm text-gray-400"
          >
            Text: Josefine Klatt | Photos: Daniel Dorsa
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Masterpiece;
