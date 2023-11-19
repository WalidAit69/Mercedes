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
      <div className="flex flex-col gap-20 justify-center items-center h-full">
        <div className="relative h-[50px] w-[510px] overflow-hidden">
          <motion.h1
            initial={{ top: "50px" }}
            animate={positioncontrols}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.8, 0, 0, 0.8] }}
            className="text-5xl w-full absolute top-[50px]"
          >
            Follow Mercedes-Benz
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={textcontrols}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-40"
        >
          <a href="">
            <Instagram size={30} />
          </a>
          <a href="">
            <Facebook size={30} />
          </a>
          <a href="">
            <Twitter size={30} />
          </a>
          <a href="">
            <Linkedin size={30} />
          </a>
          <a href="">
            <Youtube size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialsBanner;
