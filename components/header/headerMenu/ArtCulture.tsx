import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Cards = [
  {
    title: "Mercedes-Benz X Esports",
    categorie: "zeitgeist",
    image: "/Menu/artandculture1.avif",
  },
  {
    title: "A Mercedes-Benz and Moncler voyage",
    categorie: "zeitgeist",
    image: "/Menu/artandculture2.avif",
  },
  {
    title: "Mercedes-Benz and Superplastic",
    categorie: "zeitgeist",
    image: "/Menu/artandculture3.avif",
  },
  {
    title: "Today at the Museum",
    categorie: "exhibitions",
    image: "/Menu/artandculture4.avif",
  },
  {
    title: "Classic Car Travel",
    categorie: "events",
    image: "/Menu/artandculture5.avif",
  },
  {
    title: "On the Move",
    categorie: "special exhibition",
    image: "/Menu/artandculture6.avif",
  },
];

function ArtCulture({
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
      <div className="absolute left-[30%] top-[15%] flex">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-7"
        >
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Zeitgeist
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Events & Exhibitions
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz Museum
          </li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
        className="absolute right-5 top-[15%]"
        onClick={CloseMenu}
      >
        <X />
      </motion.div>
      <div className="absolute top-[30%] left-[12%]">
        <div className="grid grid-cols-3 gap-24">
          {Cards.map((card) => (
            <MenuSmCard
              key={card.title}
              title={card.title}
              categorie={card.categorie}
              image={card.image}
              width="270px"
              height="130px"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtCulture;
