"use client";

import { useScrollDirection } from "@/hooks/UseScroll";
import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import SearchMenu from "./SearchMenu";
import ArtCulture from "./headerMenu/ArtCulture";
import Sustainability from "./headerMenu/Sustainability";
import Design from "./headerMenu/Design";
import Innovation from "./headerMenu/Innovation";

function NavbarLinks({
  showLinks,
  showSearchMenu,
}: {
  showLinks: boolean;
  showSearchMenu: boolean;
}) {
  const [hoveredLink, setHoveredLink] = useState(0);

  const [ShowMenu, setShowMenu] = useState(false);

  const [MenuType, setMenuType] = useState("");

  const handleLinkHover = (e: any, index: number) => {
    if (!ShowMenu) {
      setHoveredLink(index);
    } else {
      e.currentTarget.style.color = "white";
    }
  };

  const handleLinkLeave = (e: any, index: number) => {
    if (!ShowMenu) {
      setHoveredLink(0);
    } else if (hoveredLink !== index) {
      e.currentTarget.style.color = "gray";
    }
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

  function GetMenuType(e: any, index: number) {
    setShowMenu(true);
    setMenuType(e.currentTarget.getAttribute("value"));
    setHoveredLink(index);
  }

  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={heightcontrols}
      transition={{ duration: 0.5, delay: 0.2 }}
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
          className="link transition-colors navlinks_transition"
          onMouseEnter={(e) => handleLinkHover(e, 1)}
          onMouseLeave={(e) => handleLinkLeave(e, 1)}
          value={"Art&Culture"}
          onClick={(e) => GetMenuType(e, 1)}
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
          onMouseEnter={(e) => handleLinkHover(e, 2)}
          onMouseLeave={(e) => handleLinkLeave(e, 2)}
          value={"Sustainability"}
          onClick={(e) => GetMenuType(e, 2)}
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
          onMouseEnter={(e) => handleLinkHover(e, 3)}
          onMouseLeave={(e) => handleLinkLeave(e, 3)}
          onClick={(e) => GetMenuType(e, 3)}
          value={"Design"}
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
          onMouseEnter={(e) => handleLinkHover(e, 4)}
          onMouseLeave={(e) => handleLinkLeave(e, 4)}
          onClick={(e) => GetMenuType(e, 4)}
          value={"Innovation"}
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
          onMouseEnter={(e) => handleLinkHover(e, 5)}
          onMouseLeave={(e) => handleLinkLeave(e, 5)}
          onClick={(e) => GetMenuType(e, 5)}
          value={"Exclusive"}
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
          onMouseEnter={(e) => handleLinkHover(e, 6)}
          onMouseLeave={(e) => handleLinkLeave(e, 6)}
          onClick={(e) => GetMenuType(e, 6)}
          value={"Vehicles"}
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

        {MenuType === "Art&Culture" && (
          <ArtCulture
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
            setHoveredLink={setHoveredLink}
          />
        )}

        {MenuType === "Sustainability" && (
          <Sustainability
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
            setHoveredLink={setHoveredLink}
          />
        )}

        {MenuType === "Design" && (
          <Design
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
            setHoveredLink={setHoveredLink}
          />
        )}

        {MenuType === "Innovation" && (
          <Innovation
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
            setHoveredLink={setHoveredLink}
          />
        )}
      </ul>
    </motion.nav>
  );
}

export default NavbarLinks;
