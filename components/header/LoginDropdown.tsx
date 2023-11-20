import { MoveUpRight } from "lucide-react";
import React from "react";

function LoginDropdown() {
  return (
    <div className="absolute right-[50px] top-[60px]">
      <ul className="flex flex-col relative">
        <li
          className="relative bg-white text-black text-sm w-[230px] flex items-center justify-between 
            px-4 h-[50px] hover:bg-[var(--theme-active)] hover:text-white rounded-t-sm hover:rounded-t-none z-10 loginmenuhover"
        >
          Mercedes me
          <MoveUpRight size={12} />
          <div className="absolute right-[20px] top-[-5px] h-5 w-5 rotate-45 bg-white loginmenuhoverd"></div>
        </li>
        <li
          className="bg-white text-black text-sm w-[230px] flex items-center justify-between 
            px-4 h-[50px] hover:bg-[var(--theme-active)] hover:text-white"
        >
          G-Class Private Lounge
          <MoveUpRight size={12} />
        </li>
        <li
          className="bg-white text-black text-sm w-[230px] flex items-center justify-between 
            px-4 h-[50px] hover:bg-[var(--theme-active)] hover:text-white rounded-b-sm hover:rounded-b-none"
        >
          AMG Private Lounge
          <MoveUpRight size={12} />
        </li>
      </ul>
    </div>
  );
}

export default LoginDropdown;
