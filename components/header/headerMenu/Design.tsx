import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Design({
  setShowMenu,
  setMenuType,
  setHoveredLink,
}: {
  setShowMenu: any;
  setMenuType: any;
  setHoveredLink?: any;
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
    if (setHoveredLink) {
      setHoveredLink(0);
    }
    setMenuType("");
  }

  return (
    <div className=" w-full h-full max-lg:overflow-y-scroll max-lg:h-[91vh]">
      <div className="grid place-items-center h-fit w-full mt-28 ml-40 max-xl:ml-20 max-lg:ml-0">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
          className="absolute right-5 top-[15%] max-lg:top-5 cursor-pointer"
          onClick={CloseMenu}
        >
          <X />
        </motion.div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:h-full gap-24">
          {Cards.map((card, index) => (
            <div
              key={card.title}
              className={cn(index !== 0 ? "lg:ml-[70px]" : "ml-0")}
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
                    ? "max-2xl:w-[700px] max-xl:w-[600px] max-lg:w-[350px] w-[800px]"
                    : "max-2xl:w-[250px] max-xl:w-[200px] w-[270px]"
                }
                height={
                  index === 0
                    ? "max-2xl:h-[300px] max-lg:h-[200px] h-[350px]"
                    : "max-2xl:h-[100px] max-xl:h-[90px] h-[130px]"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
