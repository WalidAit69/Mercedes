"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
  titlebig?: string;
}

function TallFeature({ title, description, image, alt, titlebig }: Feature) {
  const ref = useRef(null);

  const isInview = useInView(ref);

  const positioncontrols = useAnimation();
  const textcontrols = useAnimation();
  const heightcontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      positioncontrols.start({ top: 0 });
      textcontrols.start({ opacity: 1 });
      heightcontrols.start({ height: "600px" });
    }
  }, [isInview]);

  return (
    <div
      className="relative w-[400px] flex flex-col cursor-pointer overflow-hidden imghover"
    >
      <div
        className={`absolute top-0 bg-white w-full ${titlebig} h-24 flex flex-col gap-5 z-10`}
      >
        <motion.h3
          initial={{ opacity: 0 }}
          animate={textcontrols}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
        >
          {title}
        </motion.h3>

        <div className="h-[70px] relative overflow-hidden">
          <motion.h1
            initial={{ top: "65px" }}
            animate={positioncontrols}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
            className="text-2xl max-w-[330px] h-fit absolute top-[65px]"
          >
            {description}
          </motion.h1>
        </div>
      </div>

      <div className="overflow-hidden" ref={ref}>
        <motion.img
          initial={{ height: 0 }}
          animate={heightcontrols}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="w-full h-[600px] object-cover navlinks_transition"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default TallFeature;
