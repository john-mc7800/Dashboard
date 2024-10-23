import Billing from "@/components/Billing";
import Leftside from "@/components/Leftside";
import Plan from "@/components/Plan";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Side Bar */}
      <div className="hidden lg:block h-[740px] lg:w-[15vw] w-full bg-orangeColor rounded-3xl z-1 relative lg:left-5"></div>
      
      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-[16vw_1fr_25vw] grid-cols-1 gap-4  lg:h-[680px] w-full lg:w-[89vw] bg-whiteColor rounded-3xl z-2 lg:absolute top-10 lg:left-24 ">
        {/* Leftside Component */}
        <div className="my-10 hidden lg:block">
          <Leftside />
        </div>

        {/* Billing Component */}
        <div className="my-0 lg:my-8 lg:ml-12 ">
          <Billing />
        </div>

        {/* Plan Component */}
        <div className="my-10 lg:mr-16 mr-4 hidden lg:block" >
          <Plan />
        </div>
      </div>
    </div>
  );
}
