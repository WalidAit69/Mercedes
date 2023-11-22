import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuSmCard {
  categorie: string;
  title: string;
  image: string;
  width: string;
  height: string;
}
function MenuSmCard({ title, categorie, image, width, height }: MenuSmCard) {
  return (
    <div
      className={cn(
        "relative menuhover imghover cursor-pointer",
        height,
        width
      )}
    >
      <div className={cn("relative overflow-hidden", height, width)}>
        <motion.img
          initial={{ height: 0 }}
          animate={{ height: `100%` }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          src={image}
          alt=""
          className={cn("object-cover navlinks_transition", height, width)}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: [0.8, 0, 0, 0.8] }}
        className="bg-gradient-to-t from-black to-transparent w-full h-full absolute inset-0 opacity-100"
      ></motion.div>

      <div className="absolute text-center -bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className=" text-gray-400 navlinks_transition uppercase text-xs font-medium"
        >
          {categorie}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-[200px] text-center text-lg"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
}

export default MenuSmCard;
