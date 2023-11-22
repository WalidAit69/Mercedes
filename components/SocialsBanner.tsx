"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function SocialsBanner() {
  const ref = useRef(null);

  const isInview = useInView(ref);

  const positioncontrols = useAnimation();
  const textcontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      positioncontrols.start({ top: 0 });
      textcontrols.start({ opacity: 1 });
    }
  }, [isInview]);

  return (
    <section className="w-full h-[50vh]" ref={ref}>
      <div className="flex flex-col gap-20 justify-center items-center h-full ">
        <div className="relative h-[50px] w-full overflow-hidden ">
          <motion.h1
            initial={{ top: "50px" }}
            animate={positioncontrols}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
            className="text-5xl w-full absolute top-[50px] max-lg:text-3xl flex items-center justify-center"
          >
            Follow Mercedes-Benz
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={textcontrols}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center justify-center gap-x-40 max-md:gap-x-20 gap-y-10 flex-wrap max-md:max-w-lg mx-auto"
        >
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Twitter />
          </a>
          <a href="">
            <Linkedin />
          </a>
          <a href="">
            <Youtube />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialsBanner;
