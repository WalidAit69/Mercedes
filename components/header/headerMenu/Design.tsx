import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Design({
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
      title: "Sensual Purity",
      categorie: "Design philosophy",
      image: "/Menu/design1.avif",
    },
    {
      title: "International Design Centres",
      categorie: "Global network",
      image: "/Menu/design2.avif",
    },
    {
      title: "Love of Innovation and Detail",
      categorie: "insights",
      image: "/Menu/design3.avif",
    },
  ];
  function CloseMenu() {
    setShowMenu(false);
    setHoveredLink(0);
    setMenuType("");
  }
  return (
    <>
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

export default Design;
