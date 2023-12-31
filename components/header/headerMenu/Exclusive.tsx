import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Cards = [
  {
    title: "AMG Private Lounge",
    categorie: "zeitgeist",
    image: "/Menu/Exclusive1.avif",
  },
  {
    title: "Natural Beauty",
    categorie: "zeitgeist",
    image: "/Menu/Exclusive2.avif",
  },
  {
    title: "A strong worldwide community",
    categorie: "zeitgeist",
    image: "/Menu/Exclusive3.avif",
  },
  {
    title: "The “Grand Mercedes”",
    categorie: "exhibitions",
    image: "/Menu/Exclusive4.avif",
  },
  {
    title: "Mercedes-Benz Circle of Excellence",
    categorie: "events",
    image: "/Menu/Exclusive5.avif",
  },
  {
    title: "Nigel loves G 63",
    categorie: "special exhibition",
    image: "/Menu/Exclusive6.avif",
  },
  {
    title: "Attractive offers",
    categorie: "special exhibition",
    image: "/Menu/Exclusive7.avif",
  },
  {
    title: "At the Cape of beautiful stars",
    categorie: "special exhibition",
    image: "/Menu/Exclusive8.avif",
  },
];

function Exclusive({
  setShowMenu,
  setMenuType,
  setHoveredLink,
}: {
  setShowMenu: any;
  setMenuType: any;
  setHoveredLink?: any;
}) {
  function CloseMenu() {
    setShowMenu(false);
    if (setHoveredLink) {
      setHoveredLink(0);
    }
    setMenuType("");
  }
  const height = "max-2xl:h-[120px] max-xl:h-[100px] h-[130px]";
  const width = "max-2xl:w-[260px] max-xl:w-[200px] w-[270px]";
  return (
    <div className="max-lg:overflow-y-scroll max-lg:h-[91vh]">
      <div className="flex w-full flex-col items-center justify-center mt-10 relative">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-7 max-lg:flex-col"
        >
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Private Lounges
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz me Magazine
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz Brand Clubs
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz Classic Magazine
          </li>
        </motion.ul>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="absolute right-5 cursor-pointer max-lg:top-0"
          onClick={CloseMenu}
        >
          <X />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center h-fit w-full max-xl:mt-32 mt-20">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-16">
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
    </div>
  );
}

export default Exclusive;
