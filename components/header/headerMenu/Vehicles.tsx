import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Vehicles({
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
      title: "Welcome to Beyond",
      categorie: "mercedes-maybach",
      image: "/Menu/vehicles1.avif",
    },
    {
      title: "For those who live forever",
      categorie: "G-class",
      image: "/Menu/vehicles2.avif",
    },
    {
      title: "Classics, Festivals & Milestones",
      categorie: "mercedes-benz classic",
      image: "/Menu/vehicles3.avif",
    },
  ];
  function CloseMenu() {
    setShowMenu(false);
    setHoveredLink(0);
    setMenuType("");
  }
  return (
    <>
      <div className="absolute left-[20%] top-[15%] flex">
        <motion.ul
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex items-center gap-7"
        >
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-AMG
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Maybach
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            G-Class
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Mercedes-Benz Classic
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
      <div className="absolute top-[30%] left-[30%]">
        <div className="grid grid-cols-2 gap-24">
          {Cards.map((card, index) => (
            <div
              key={card.title}
              style={{
                gridRow: index === 0 ? "span 2" : "auto",
                marginLeft: index !== 0 ? "100px" : "0",
              }}
            >
              <MenuSmCard
                key={card.title}
                title={card.title}
                categorie={card.categorie}
                image={card.image}
                width={index === 0 ? "600px" : "270px"}
                height={index === 0 ? "350px" : "130px"}
              />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
        className="flex flex-col gap-4 absolute left-[5%] top-[30%]"
      >
        <h1 className="text-white text-xl">Purchase</h1>
        <ul className="flex flex-col gap-2">
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            New cars
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Configurator
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Book a test drive
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Find a retailer
          </li>
          <li className="text-[var(--wb-grey-50)] hover:text-white transition-colors navlinks_transition">
            Classic Store
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default Vehicles;
