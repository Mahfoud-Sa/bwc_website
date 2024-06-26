import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import PublishesCards from "./components/publishes-cards";
import SideCircle from "./assets/icons/side-circle";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="w-full h-36 flex justify-end items-center ">
        <div className="flex p-5">
          <h1 className="text-3xl">اخر المنشورات</h1>
          <div className="w-3 h-10 rounded-md bg-[#CCA972] ml-2 bg-gradient-to-r from-[#A27942] "></div>
        </div>
      </div>
      <div className="w-full h-screen p-2 overflow-hidden relative">
      <PublishesCards />
      <div className="w-full h-8 mt-16 flex justify-center items-center ">
        <h1 className="text-3xl text-[#CCA972]">أعرض المزيد</h1>
      </div>
      <div className=" absolute bottom-0 right-0">
      <SideCircle />
      </div>
      </div>
    </div>
  );
}

export default App;
