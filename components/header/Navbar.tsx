"use client";

import { Search, ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/UseScroll";
import Link from "next/link";
import LoginDropdown from "./LoginDropdown";

function Navbar() {
  const [showLinks, setshowLinks] = useState(false);
  const [showLoginMenu, setshowLoginMenu] = useState(false);
  const [showSearchMenu, setshowSearchMenu] = useState(false);
  const [CloseSearchMenu, setCloseSearchMenu] = useState(false);

  const positioncontrols = useAnimation();
  const closecontrols = useAnimation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    positioncontrols.start({ y: 0, opacity: 1 });

    if (showSearchMenu) {
      positioncontrols.start({ y: -40, opacity: 1 });
      closecontrols.start({ y: 0, opacity: 1, display: "flex" });
    } else if (showLinks || scrollDirection === "up") {
      positioncontrols.start({ y: 0, opacity: 1 });
    } else if (!showLinks && scrollDirection === "down") {
      positioncontrols.start({ y: -40, opacity: 1 });
    }
  }, [positioncontrols, showLinks, scrollDirection, showSearchMenu]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function OpenSearch() {
    setshowSearchMenu(true);
    setCloseSearchMenu(false);
  }

  function CloseSearch() {
    setshowSearchMenu(false);
    if (screenWidth <= 1024) {
      setCloseSearchMenu(true);
    }
  }
  return (
    <header
      onMouseEnter={() => setshowLinks(true)}
      onMouseLeave={() => setshowLinks(false)}
      className="flex flex-col z-50 fixed w-[100vw] top-0 left-0"
    >
      <nav className="flex bg-black text-[var(--wb-grey-45)] justify-between items-center px-14 max-sm:px-4 text-xs h-16 relative z-30">
        <div className="max-lg:hidden">
          <motion.ul
            className="flex"
            initial={{ y: -40, opacity: 0 }}
            animate={positioncontrols}
            transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
          >
            <a className="pr-2 hover:text-white  transition-colors navlinks_transition">
              Deutsh
            </a>
            <a className="custom-border relative pl-2 text-white ">English</a>
            <a className="ml-10 hover:text-white  transition-colors navlinks_transition">
              Provider/Privacy
            </a>
          </motion.ul>
        </div>

        <div>
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={positioncontrols}
            transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
            className="flex gap-10"
          >
            <button
              onClick={OpenSearch}
              className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition"
            >
              Search <Search width={14} />
            </button>
            <button
              onClick={() => setshowLoginMenu(!showLoginMenu)}
              className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition max-lg:hidden"
            >
              Login{" "}
              {!showLoginMenu ? (
                <ChevronDown width={17} />
              ) : (
                <ChevronUp width={17} />
              )}{" "}
            </button>
          </motion.div>
        </div>

        <Link href={"/"} className="position_center">
          <Image src={"/logo.svg"} alt="mercedes-star" width={45} height={45} />
        </Link>

        {showSearchMenu && (
          <>
            <motion.button
              animate={closecontrols}
              initial={{ y: 40, opacity: 0, display: "none" }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
              onClick={CloseSearch}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              Close Search <X size={14} />
            </motion.button>
          </>
        )}

        {showLoginMenu && <LoginDropdown />}
      </nav>

      <NavbarLinks
        showLinks={showLinks}
        showSearchMenu={showSearchMenu}
        CloseSearchMenu={CloseSearchMenu}
      />
    </header>
  );
}

export default Navbar;
