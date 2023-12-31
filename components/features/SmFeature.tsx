"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Cursor from "../Cursor";
import { useScrollDirection } from "@/hooks/UseScroll";

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

function SmFeature({ title, description, image, alt }: Feature) {
  const ref = useRef(null);

  const isInview = useInView(ref);

  const positioncontrols = useAnimation();
  const textcontrols = useAnimation();
  const heightcontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      positioncontrols.start({ top: 0 });
      textcontrols.start({ opacity: 1 });
      heightcontrols.start({ height: "100%" });
    }
  }, [isInview]);

  const [cursorVariant, setcursorVariant] = useState("default");

  const imageEnter = () => {
    setcursorVariant("image");
  };

  const imageLeave = () => {
    setcursorVariant("default");
  };

  return (
    <div className="relative flex flex-col w-[500px] max-sm:w-[300px] cursor-pointer imghover overflow-hidden">
      <div className="bg-white w-full h-24 flex flex-col gap-5">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={textcontrols}
          transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
        >
          {title}
        </motion.h3>
        <div className="h-[40px] relative overflow-hidden">
          <motion.h1
            initial={{ top: "40px" }}
            animate={positioncontrols}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
            className="text-2xl absolute top-[40px]"
          >
            {description}
          </motion.h1>
        </div>
      </div>

      <div
        className="relative overflow-hidden z-20 h-[280px]"
        ref={ref}
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
      >
        <Cursor cursorVariant={cursorVariant}></Cursor>

        <motion.img
          initial={{ height: 0 }}
          animate={heightcontrols}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="w-full object-cover navlinks_transition"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  );
}

export default SmFeature;
