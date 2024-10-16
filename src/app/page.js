import Billing from "@/components/Billing";
import Leftside from "@/components/Leftside";
import React from "react";


export default function Home() {
  return (
    <div className="flex items-center">
      <div className="h-[779px] w-[15vw] bg-orangeColor rounded-3xl z-1 relative left-10"></div>
      <div className="h-[679px] w-[85vw] bg-whiteColor rounded-3xl z-2 absolute top-18 left-32 flex flex-row ">
        <div className="h-[679px] w-[17vw] bg-offwhiteColor rounded-l-3xl">
          <Leftside/>
        </div>
        <div className="my-14 mx-12">
          <Billing/>
        </div>
      </div>
    </div>
  );
}
