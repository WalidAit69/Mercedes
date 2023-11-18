import React from "react";
import { ChevronRight } from "lucide-react";

function MainPage() {
  return (
    <main className="w-full h-full relative">
      <video
        loop
        autoPlay
        muted
        className="h-[100vh] w-[100vw] object-cover absolute top-0 left-0"
      >
        <source src="./original.mp4" type="video/mp4" />
      </video>

      

      <div className="absolute top-[50%] left-32 text-white">
        <h1 className="text-4xl font-medium">Mercedes-Benz X Esports.</h1>
        <h3 className="my-4 font-medium text-lg">
          Join the hunt for glory – an interactive League of Legends Esports{" "}
          <br />
          adventure.
        </h3>
        <button className="text-black bg-white rounded-full flex items-center gap-2 py-[3px] px-3 font-medium text-[14px] hover:text-white hover:bg-[var(--theme-primary)] transition-colors navlinks_transition">
          Discover more <ChevronRight width={15} />
        </button>
      </div>
    </main>  
  );
}

export default MainPage;
