"use client";

import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useScrollDirection } from "@/hooks/UseScroll";
import Link from "next/link";

function Navbar() {
  const [showLinks, setshowLinks] = useState(false);

  const positioncontrols = useAnimation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    positioncontrols.start({ y: 0, opacity: 1 });

    if (showLinks || scrollDirection === "up") {
      positioncontrols.start({ y: 0, opacity: 1 });
    } else if (!showLinks && scrollDirection === "down") {
      positioncontrols.start({ y: -40, opacity: 1 });
    }
  }, [positioncontrols, showLinks, scrollDirection]);

  return (
    <header
      onMouseEnter={() => setshowLinks(true)}
      onMouseLeave={() => setshowLinks(false)}
      className="flex flex-col z-50 fixed w-full top-0 left-0"
    >
      <nav className="flex bg-black text-[var(--wb-grey-45)] justify-between items-center px-14 text-xs h-16 relative z-30">
        <div className="">
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
            <button className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition">
              Search <Search width={14} />
            </button>
            <button className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition">
              Login <ChevronDown width={17} />{" "}
            </button>
          </motion.div>
        </div>

        <Link href={"/"} className="position_center">
          <Image src={"/logo.svg"} alt="mercedes-star" width={45} height={45} />
        </Link>
      </nav>

      <NavbarLinks showLinks={showLinks} />
    </header>
  );
}

export default Navbar;
