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
      <div className="flex w-full flex-col items-center justify-center mt-10 relative">
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
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="absolute right-5 top-[15%] cursor-pointer"
          onClick={CloseMenu}
        >
          <X />
        </motion.div>
      </div>

      <div className="flex items-center justify-center h-fit w-full mt-20 ml-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="flex flex-col gap-4 mb-20"
        >
          <h1 className="text-white text-xl">Purchase</h1>
          <ul className="flex flex-col gap-2 w-[130px]">
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

        <div className="grid grid-cols-2 gap-24 ml-56 max-xl:ml-32">
          {Cards.map((card, index) => (
            <div
              key={card.title}
              style={{
                gridRow: index === 0 ? "span 2" : "auto",
              }}
            >
              <MenuSmCard
                key={card.title}
                title={card.title}
                categorie={card.categorie}
                image={card.image}
                width={
                  index === 0
                    ? "max-2xl:w-[500px] max-xl:w-[400px] w-[600px]"
                    : "max-2xl:w-[250px] max-xl:w-[200px] w-[270px]"
                }
                height={
                  index === 0
                    ? "max-2xl:h-[300px] h-[350px]"
                    : "max-2xl:h-[100px] max-xl:h-[90px] h-[130px]"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Vehicles;
