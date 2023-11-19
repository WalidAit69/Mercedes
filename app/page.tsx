"use client";

import Cursor from "@/components/Cursor";
import MainPage from "@/components/MainPages/Esports";
import Features from "@/components/MainPages/Features";
import MainPageMaybach from "@/components/MainPages/Maybach";
import { useState } from "react";

export default function Home() {

  return (
    <div className="relaive h-[100vh]">
      <MainPage />
      <MainPageMaybach />
      <Features/>
    </div>
  );
}
