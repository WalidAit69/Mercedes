"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Textanimation({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const isInview = useInView(ref);

  useEffect(() => {
    if (isInview) {
      controls.start({ bottom: 0 });
    } else {
      controls.start({ bottom: "-35px" });
    }
  }, [isInview]);

  return (
    <div ref={ref} className="relative h-[40px] overflow-hidden bg-gray-400">
      <motion.div
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.8, 0, 0, 0.8] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Textanimation;
