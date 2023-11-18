import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <header className="flex flex-col relative z-10">
      <nav className="flex bg-black text-[var(--wb-grey-45)] justify-between items-center px-14 text-xs h-16 relative">
        <div className="">
          <ul className="flex">
            <a className="pr-2 hover:text-white  transition-colors navlinks_transition">
              Deutsh
            </a>
            <a className="custom-border relative pl-2 text-white ">English</a>
            <a className="ml-10 hover:text-white  transition-colors navlinks_transition">
              Provider/Privacy
            </a>
          </ul>
        </div>

        <div>
          <div className="flex gap-10">
            <button className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition">
              Search <Search width={14} />
            </button>
            <button className="flex items-center gap-1 hover:text-white transition-colors navlinks_transition">
              Login <ChevronDown width={17} />{" "}
            </button>
          </div>
        </div>

        <div className="position_center">
          <Image src={"/logo.svg"} alt="mercedes-star" width={45} height={45} />
        </div>
      </nav>

      <NavbarLinks/>
    </header>
  );
}

export default Navbar;
