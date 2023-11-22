"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

function MainPageMaybach() {
  const ref = useRef<HTMLDivElement>(null);

  const isInview = useInView(ref);

  const layercontrols = useAnimation();
  const h1controls = useAnimation();
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      h1controls.start({ bottom: 0 });
      controls.start({ opacity: 1 });
      layercontrols.start({ bottom: "100%" });
    } else {
      h1controls.start({ bottom: "-35px" });
      controls.start({ opacity: 0 });
      layercontrols.start({ bottom: 0 });
    }
  }, [isInview]);

  return (
    <main className="w-full h-full relative">
      <Image
        width={100}
        height={100}
        src={"/maybach.avif"}
        alt="MAYBACH"
        className="h-[100vh] w-[100vw] object-cover absolute top-0 left-0"
      ></Image>

      <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute inset-0"></div>

      <div
        className="absolute top-[40%] left-32 max-lg:left-[50%] max-lg:-translate-x-1/2 text-white max-lg:text-center flex flex-col
        max-[400px]:top-[60%]"
        ref={ref}
      >
        <div className="relative h-[40px] overflow-hidden w-[340px] max-lg:flex max-lg:items-center max-lg:justify-center">
          <motion.h1
            animate={h1controls}
            transition={{ duration: 1, delay: 0.8, ease: [0.8, 0, 0, 0.8] }}
            className="text-4xl max-sm:text-3xl max-[400px]:text-2xl font-medium absolute bottom-[-35px]"
          >
            Welcome to Beyond
          </motion.h1>
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 2, ease: [0.8, 0, 0, 0.8] }}
          className="my-4 font-medium text-lg max-sm:text-sm max-[400px]:text-xs"
        >
          Welcome to Mercedes-Maybach.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 2, ease: [0.8, 0, 0, 0.8] }}
          className="flex max-lg:items-center max-lg:justify-center"
        >
          <button className="text-black bg-white w-[150px] max-[400px]:w-[130px] max-sm:text-sm max-[400px]:text-xs  rounded-full flex items-center gap-2 py-[3px] px-3 font-medium text-[14px] hover:text-white hover:bg-[var(--theme-primary)] transition-colors navlinks_transition">
            Discover more <ChevronRight width={15} />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ bottom: 0 }}
        animate={layercontrols}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.8, 0, 0, 0.8] }}
        className="bg-black h-full w-full absolute bottom-0"
      ></motion.div>
    </main>
  );
}

export default MainPageMaybach;
