"use client";

import React, { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

function MainPage() {
  const h1controls = useAnimation();
  const controls = useAnimation();
  const layercontrols = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const isInview = useInView(ref);

  useEffect(() => {
    if (isInview) {
      h1controls.start({ bottom: 0 });
      controls.start({ y: 0, opacity: 1 });
      layercontrols.start({ bottom: "100%" });
    } else {
      h1controls.start({ bottom: "-35px" });
      controls.start({ y: 0, opacity: 0 });
      layercontrols.start({ bottom: 0 });
    }
  }, [isInview]);

  return (
    <main className="w-full h-full relative">
      <video
        loop
        autoPlay
        muted
        className="h-[100vh] w-[100vw] object-cover absolute top-0 left-0"
      >
        <source src="./original.mp4" type="video/mp4" />
      </video>

      <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute inset-0"></div>

      <div className="absolute top-[50%] left-32 text-white" ref={ref}>
        <div className="relative h-[40px] overflow-hidden">
          <motion.h1
            animate={h1controls}
            transition={{ duration: 1, delay: 0.6, ease: [0.8, 0, 0, 0.8] }}
            className="text-4xl font-medium absolute bottom-[-35px]"
          >
            Mercedes-Benz X Esports.
          </motion.h1>
        </div>

        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
          className="my-4 font-medium text-lg"
        >
          Join the hunt for glory – an interactive League of Legends Esports{" "}
          <br /> adventure.
        </motion.h3>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
          className="text-black bg-white rounded-full flex items-center gap-2 py-[3px] px-3 font-medium text-[14px] hover:text-white hover:bg-[var(--theme-primary)] transition-colors navlinks_transition"
        >
          Discover more <ChevronRight width={15} />
        </motion.button>
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

export default MainPage;
