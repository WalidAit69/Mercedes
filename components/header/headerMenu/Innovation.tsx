import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Innovation({
  setShowMenu,
  setMenuType,
  setHoveredLink,
}: {
  setShowMenu: any;
  setMenuType: any;
  setHoveredLink: any;
}) {
  const Cards = [
    {
      title: "Spotlight on Innovation",
      categorie: "Concept Cla Class",
      image: "/Menu/innovation1.avif",
    },
    {
      title: "Defining Class since 1886",
      categorie: "class-defining cars",
      image: "/Menu/innovation2.avif",
    },
    {
      title: "An icon reenvisioned",
      categorie: "vision one-eleven",
      image: "/Menu/innovation3.avif",
    },
  ];
  function CloseMenu() {
    setShowMenu(false);
    setHoveredLink(0);
    setMenuType("");
  }
  return (
    <>
      <div className="absolute left-[32%] top-[15%] flex">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-7"
        >
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Future Mobility
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Concept Cars
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Milestones
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
      <div className="absolute top-[25%] left-[5%]">
        <div className="grid grid-cols-2 gap-24">
          {Cards.map((card, index) => (
            <div
              key={card.title}
              style={{
                gridColumn: index === 0 ? "span 1" : "span 1",
                gridRow: index === 0 ? "span 2" : "auto",
                marginLeft: index !== 0 ? "100px" : "0",
              }}
            >
              <MenuSmCard
                key={card.title}
                title={card.title}
                categorie={card.categorie}
                image={card.image}
                width={index === 0 ? "800px" : "270px"}
                height={index === 0 ? "350px" : "130px"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Innovation;
