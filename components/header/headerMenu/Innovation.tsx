import MenuSmCard from "@/components/widgets/header/MenuSmCard";
import { X } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      <div className="flex w-full flex-col items-center justify-center mt-10 relative">
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

      <div className="flex flex-col items-center justify-center h-fit w-full mt-14 ml-40 max-lg:ml-20">
        <div className="grid grid-cols-2 gap-24">
          {Cards.map((card, index) => (
            <div
              key={card.title}
              className={cn(index !== 0 ? "ml-[70px]" : "ml-0")}
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
                    ? "max-2xl:w-[700px] max-xl:w-[600px] w-[800px]"
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

export default Innovation;
