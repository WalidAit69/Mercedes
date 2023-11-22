import { ChevronUp } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section className="bg-black">
      <div className="border-[var(--wb-grey-50)] border-t-[1px] max-w-7xl mx-auto py-16 px-10">
        <div className="text-[var(--wb-grey-45)] text-sm flex items-center justify-between max-lg:flex-col max-md:gap-5">
          <ul className="footerlinks flex gap-5 max-md:flex-col max-md:items-center">
            <div className="flex flex-wrap justify-center gap-5">
              <li>Provider</li>
              <li>Legal Notice</li>
              <li>Cookies</li>
              <li>Privacy</li>
              <li>Contact</li>
            </div>
            <div>
              <li>Don&apos;t Sell My Personal Information (CCPA)</li>
            </div>
          </ul>
          <ul className="flex">
            <a className="pr-2 hover:text-white transition-colors navlinks_transition">
              Deutsh
            </a>
            <a className="custom-border relative pl-2 text-white">English</a>
          </ul>{" "}
        </div>

        <div className="flex justify-center my-24">
          <Image
            src={"/logo_footer.svg"}
            alt="Mercedes logo"
            width={200}
            height={100}
            className=""
          ></Image>
        </div>

        <a
          href="#top"
          className="text-white flex flex-col items-center justify-center mb-10"
        >
          <ChevronUp />
          <h1 className="text-xs">Top</h1>
        </a>
      </div>
    </section>
  );
}

export default Footer;
