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
  const [showMobileMenu, setshowMobileMenu] = useState(false);
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

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Check if window is defined to avoid errors during server-side rendering
    if (typeof window !== "undefined") {
      // Set initial screen width
      setScreenWidth(window.innerWidth);

      // Add event listener for window resize
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  function OpenSearch() {
    setshowSearchMenu(true);
    setCloseSearchMenu(false);
  }

  function ToggleMenu() {
    setshowMobileMenu(!showMobileMenu);
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

        <div className="flex  max-lg:w-full ">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={positioncontrols}
            transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
            className="flex max-lg:items-center max-lg:justify-between gap-10 max-lg:w-full"
          >
            <button
              onClick={OpenSearch}
              className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition"
            >
              Search <Search width={14} />
            </button>

            <div className="relative h-[15px] w-[50px] overflow-hidden">
              <motion.div
                animate={{ top: showMobileMenu ? "-100%" : "0" }}
                className="h-full w-full relative"
              >
                <button
                  onClick={ToggleMenu}
                  className="flex absolute h-full items-center gap-1 hover:text-white transition-colors navlinks_transition lg:hidden mr-5"
                >
                  Menu
                </button>
                <button
                  onClick={ToggleMenu}
                  className="flex absolute top-full h-full items-center gap-1 hover:text-white transition-colors navlinks_transition lg:hidden mr-5"
                >
                  Close
                </button>
              </motion.div>
            </div>

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
        showMobileMenu={showMobileMenu}
      />
    </header>
  );
}

export default Navbar;
