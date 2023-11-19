import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cursor({ cursorVariant }: { cursorVariant: string }) {
  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 0,
      width: 0,
      opacity: 0,
    },
    image: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
    },
  };

  return (
    <motion.div
      className="rounded-full top-0 left-0 fixed w-0 h-0 bg-white flex items-center justify-center z-[1] text-sm font-bold"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween" }}
    >
      More
    </motion.div>
  );
}

export default Cursor;
