"use client";

import React, { useState } from "react";

function NavbarLinks() {
  const [hoveredLink, setHoveredLink] = useState(0);

  const handleLinkHover = (index: number) => {
    setHoveredLink(index);
  };

  const handleLinkLeave = () => {
    setHoveredLink(0);
  };

  return (
    <nav className="bg-black bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-80 text-white flex items-center justify-center h-16 top-[64px] w-full z-10">
      <ul className="flex items-center space-x-16">
        <li
          className="link transition-colors navlinks_transition text-white"
          onMouseEnter={() => handleLinkHover(1)}
          onMouseLeave={() => handleLinkLeave()}
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
        </li>

        <li
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
        </li>

        <li
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
        </li>

        <li
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
        </li>

        <li
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
        </li>

        <li
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
        </li>
      </ul>
    </nav>
  );
}

export default NavbarLinks;
