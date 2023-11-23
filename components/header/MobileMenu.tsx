"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown, ChevronUp, MoveUpRight } from "lucide-react";
import ArtCulture from "./headerMenu/ArtCulture";
import Sustainability from "./headerMenu/Sustainability";
import Design from "./headerMenu/Design";
import Innovation from "./headerMenu/Innovation";
import Exclusive from "./headerMenu/Exclusive";
import Vehicles from "./headerMenu/Vehicles";

function MobileMenu() {
  const [ShowMenu, setShowMenu] = useState(false);

  const [MenuType, setMenuType] = useState("");

  const [showLoginMenu, setshowLoginMenu] = useState(false);

  function GetMenuType(e: any, index: number) {
    setShowMenu(true);
    setMenuType(e.currentTarget.getAttribute("value"));
  }
  return (
    <>
      {!ShowMenu && (
        <div className="flex flex-col h-full justify-between my-4">
          <motion.ul
            transition={{ duration: 0.5, delay: 0.3, ease: [0.8, 0, 0, 0.8] }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center h-fit w-full justify-center pb-4 mt-4 gap-y-7"
          >
            <li
              className="link transition-colors navlinks_transition"
              value={"Art&Culture"}
              onClick={(e) => GetMenuType(e, 1)}
            >
              Art & Culture
            </li>

            <li
              className="link transition-colors navlinks_transition"
              value={"Sustainability"}
              onClick={(e) => GetMenuType(e, 2)}
            >
              Sustainability
            </li>

            <li
              className="link transition-colors navlinks_transition"
              onClick={(e) => GetMenuType(e, 3)}
              value={"Design"}
            >
              Design
            </li>

            <li
              className="link transition-colors navlinks_transition"
              onClick={(e) => GetMenuType(e, 4)}
              value={"Innovation"}
            >
              Innovation
            </li>

            <li
              className="link transition-colors navlinks_transition"
              onClick={(e) => GetMenuType(e, 5)}
              value={"Exclusive"}
            >
              Exclusive
            </li>

            <li
              className="link transition-colors navlinks_transition"
              onClick={(e) => GetMenuType(e, 6)}
              value={"Vehicles"}
            >
              Vehicles
            </li>
          </motion.ul>

          <motion.div
            transition={{ duration: 0.5, delay: 0.3, ease: [0.8, 0, 0, 0.8] }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col items-center justify-center border-y py-4 gap-10 mb-5"
            style={{ borderColor: "rgba(99, 99, 99, 0.167)" }}
          >
            <button
              onClick={() => setshowLoginMenu(!showLoginMenu)}
              className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition"
            >
              Login{" "}
              {!showLoginMenu ? (
                <ChevronDown width={17} />
              ) : (
                <ChevronUp width={17} />
              )}{" "}
            </button>{" "}
            {showLoginMenu && (
              <motion.div
                transition={{ duration: 0.5, ease: [0.8, 0, 0, 0.8] }}
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
              >
                <motion.ul
                  transition={{ duration: 0.5, delay: 0.5 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center relative gap-3"
                >
                  <li className="flex items-center gap-1">
                    Mercedes me
                    <MoveUpRight size={12} />
                  </li>
                  <li className="flex items-center gap-1">
                    G-Class Private Lounge
                    <MoveUpRight size={12} />
                  </li>
                  <li className="flex items-center gap-1">
                    AMG Private Lounge
                    <MoveUpRight size={12} />
                  </li>
                </motion.ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}

      <div>
        {MenuType === "Art&Culture" && (
          <ArtCulture setShowMenu={setShowMenu} setMenuType={setMenuType} />
        )}

        {MenuType === "Sustainability" && (
          <Sustainability setShowMenu={setShowMenu} setMenuType={setMenuType} />
        )}

        {MenuType === "Design" && (
          <Design setShowMenu={setShowMenu} setMenuType={setMenuType} />
        )}

        {MenuType === "Innovation" && (
          <Innovation
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
          />
        )}

        {MenuType === "Exclusive" && (
          <Exclusive
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
          />
        )}

        {MenuType === "Vehicles" && (
          <Vehicles
            setShowMenu={setShowMenu}
            setMenuType={setMenuType}
          />
        )}
      </div>
    </>
  );
}

export default MobileMenu;
