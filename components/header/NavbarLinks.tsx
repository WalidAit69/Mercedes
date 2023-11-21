"use client";

import { useScrollDirection } from "@/hooks/UseScroll";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import SearchMenu from "./SearchMenu";
import ArtCulture from "./headerMenu/ArtCulture";

function NavbarLinks({
  showLinks,
  showSearchMenu,
}: {
  showLinks: boolean;
  showSearchMenu: boolean;
}) {
  const ref = useRef(null);
  const [hoveredLink, setHoveredLink] = useState(0);

  const [ShowMenu, setShowMenu] = useState(false);

  const handleLinkHover = (index: number) => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(0);
  };

  const heightcontrols = useAnimation();
  const positioncontrols = useAnimation();

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    heightcontrols.start({ height: "64px" });
    positioncontrols.start({ y: 0, opacity: 1 });

    if (ShowMenu) {
      heightcontrols.start({ height: "91vh" });
    } else if (showSearchMenu) {
      positioncontrols.start({ y: -45, opacity: 0 });
      heightcontrols.start({ height: "91vh" });
    } else if (showLinks || scrollDirection === "up") {
      heightcontrols.start({ height: "64px" });
      positioncontrols.start({ y: 0, opacity: 1 });
    } else if (!showLinks && scrollDirection === "down") {
      heightcontrols.start({ height: 0 });
      positioncontrols.start({ y: -40, opacity: 1 });
    }
  }, [showLinks, scrollDirection, showSearchMenu, ShowMenu]);

  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={heightcontrols}
      transition={{ duration: 0.5, delay: 0.2, }}
      className="bg-black bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 text-white flex justify-center h-16 top-[64px] w-full z-10"
    >
      {showSearchMenu && <SearchMenu />}
      <ul
        className="flex h-fit w-full justify-center pb-4 mt-4 space-x-16"
        style={{
          borderBottom: ShowMenu ? `1px solid rgba(99, 99, 99, 0.167)` : "",
        }}
      >
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition text-white"
          onMouseEnter={() => handleLinkHover(1)}
          onMouseLeave={() => handleLinkLeave()}
          onClick={() => setShowMenu(true)}
          style={{
            color:
              hoveredLink === 1
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Art & Culture
        </motion.li>

        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition"
          onMouseEnter={() => handleLinkHover(2)}
          onMouseLeave={() => handleLinkLeave()}
          style={{
            color:
              hoveredLink === 2
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Sustainability
        </motion.li>

        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition"
          onMouseEnter={() => handleLinkHover(3)}
          onMouseLeave={() => handleLinkLeave()}
          style={{
            color:
              hoveredLink === 3
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Design
        </motion.li>

        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition"
          onMouseEnter={() => handleLinkHover(4)}
          onMouseLeave={() => handleLinkLeave()}
          style={{
            color:
              hoveredLink === 4
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Innovation
        </motion.li>

        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition"
          onMouseEnter={() => handleLinkHover(5)}
          onMouseLeave={() => handleLinkLeave()}
          style={{
            color:
              hoveredLink === 5
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Exclusive
        </motion.li>

        <motion.li
          initial={{ y: -40, opacity: 0 }}
          animate={positioncontrols}
          transition={{ duration: 0.3, ease: [0.8, 0, 0, 0.8] }}
          className="link transition-colors navlinks_transition"
          onMouseEnter={() => handleLinkHover(6)}
          onMouseLeave={() => handleLinkLeave()}
          style={{
            color:
              hoveredLink === 6
                ? "white"
                : hoveredLink === 0
                ? "white"
                : "gray",
          }}
        >
          Vehicles
        </motion.li>

        {ShowMenu && <ArtCulture setShowMenu={setShowMenu} />}
      </ul>
    </motion.nav>
  );
}

export default NavbarLinks;
