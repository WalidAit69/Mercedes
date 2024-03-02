"use client";

import Cursor from "@/components/Cursor";
import MainPage from "@/components/MainPages/Esports";
import Features from "@/components/MainPages/Features";
import Masterpiece from "@/components/MainPages/Masterpiece";
import MainPageMaybach from "@/components/MainPages/Maybach";
import SocialsBanner from "@/components/SocialsBanner";
import Footer from "@/components/footers/Footer";
import FooterMenu from "@/components/footers/FooterMenu";

export default function Home() {
  return (
    <div className="relaive h-[100vh]">
      <MainPage
        videosrc={"./original.mp4"}
        title={"Mercedes-Benz X Esports"}
        desc={
          "Join the hunt for glory – an interactive League of Legends Esports adventure."
        }
      />
      <MainPage
        videosrc={"./original (1).mp4"}
        title={"DEFINING CLASS"}
        desc={"Join us as we redefine luxury and explore the Mercedes Class Series."}
      />
      <MainPageMaybach />
      <Features />
      <Masterpiece />
      <SocialsBanner />
      <FooterMenu />
      <Footer />
    </div>
  );
}
