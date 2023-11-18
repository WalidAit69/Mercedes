import MainPage from "@/components/MainPage";
import Navbar from "@/components/header/Navbar";

export default function Home() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <MainPage />
    </div>
  );
}
