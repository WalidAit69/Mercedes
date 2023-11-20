"use client";

import Cursor from "@/components/Cursor";
import MainPage from "@/components/MainPages/Esports";
import Features from "@/components/MainPages/Features";
import Masterpiece from "@/components/MainPages/Masterpiece";
import MainPageMaybach from "@/components/MainPages/Maybach";
import SocialsBanner from "@/components/SocialsBanner";
import FooterMenu from "@/components/footers/FooterMenu";
import { useState } from "react";

export default function Home() {

  return (
    <div className="relaive h-[100vh]">
      <MainPage />
      <MainPageMaybach />
      <Features/>
      <Masterpiece/>
      <SocialsBanner/>
      <FooterMenu/>
    </div>
  );
}
