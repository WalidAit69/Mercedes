import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Cards = [
  {
    title: "Land. Sea. Air.",
    categorie: "Environment",
    image: "/Menu/sustainibility1.avif",
  },
  {
    title: "Inclusion is unstoppable",
    categorie: "Responsibility",
    image: "/Menu/sustainibility2.avif",
  },
];

function Sustainability({
  setShowMenu,
  setMenuType,
  setHoveredLink,
}: {
  setShowMenu: any;
  setMenuType: any;
  setHoveredLink: any;
}) {
  function CloseMenu() {
    setShowMenu(false);
    setHoveredLink(0);
    setMenuType("");
  }
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center mt-10 relative">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-7"
        >
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Environment
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Responsibility
          </li>
        </motion.ul>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="absolute right-5 cursor-pointer"
          onClick={CloseMenu}
        >
          <X />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center h-fit w-full mt-10">
        <div className="grid grid-cols-2 gap-24 h-[400px]">
          {Cards.map((card) => (
            <MenuSmCard
              key={card.title}
              title={card.title}
              categorie={card.categorie}
              image={card.image}
              width="600px"
              height="400px"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Sustainability;
