import React from "react";
import { motion } from "framer-motion";

interface MenuSmCard {
  categorie: string;
  title: string;
  image: string;
}
function MenuSmCard({ title, categorie, image }: MenuSmCard) {
  return (
    <div className="relative menuhover imghover">
      <div className="relative overflow-hidden">
        <motion.img
          initial={{ height: 0 }}
          animate={{ height: "130px" }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          src={image}
          alt=""
          className="w-[270px] h-[130px] object-cover navlinks_transition"
        />
      </div>
      <div className="bg-gradient-to-t from-black to-transparent h-full w-full absolute inset-0 opacity-80"></div>

      <div className="absolute text-center -bottom-10 left-1/2 -translate-x-1/2 flex flex-col gap-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className=" text-gray-400 navlinks_transition"
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
