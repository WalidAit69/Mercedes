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

  const height = "max-2xl:h-[120px] max-xl:h-[100px] h-[130px]";
  const width = "max-2xl:w-[260px] max-xl:w-[240px] w-[270px]";

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
            Zeitgeist
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Events & Exhibitions
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz Museum
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

      <div className="flex flex-col items-center justify-center h-fit w-full mt-20">
        <div className="grid grid-cols-3 gap-24">
          {Cards.map((card) => (
            <MenuSmCard
              key={card.title}
              title={card.title}
              categorie={card.categorie}
              image={card.image}
              width={width}
              height={height}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ArtCulture;
