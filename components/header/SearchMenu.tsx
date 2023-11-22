import { Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function SearchMenu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: [0.8, 0, 0, 0.8] }}
      className="absolute left-1/2 top-11 -translate-x-2/4 px-4 py-2 w-[500px] max-sm:w-[350px]"
      id="myContainer"
    >
      <div className="flex items-center justify-between w-[100%] pb-2 border-b-2 border-gray-500">
        <div className="flex items-center gap-2 text-[var(--wb-grey-45)]">
          <Search />
          <input
            className="border-0 outline-none bg-transparent"
            placeholder="Search for..."
            type="text"
            name="search"
            id="search"
          />
        </div>

        <button className="bg-white rounded-full font-medium px-6 py-3 max-[400px]:px-4 text-black hover:bg-[var(--theme-active)] hover:text-white transition-colors navlinks_transition">
          Search
        </button>
      </div>
    </motion.div>
  );
}

export default SearchMenu;
