import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="h-[100vh] w-[15vw] bg-orangeColor rounded-3xl z-1 relative left-10"></div>
      <div className="h-[90vh] w-[85vw] bg-whiteColor rounded-3xl z-2 absolute top-14 left-32 ">
        <div className="h-[90vh] w-[15vw] bg-offwhiteColor rounded-l-3xl">
          <div className="py-8 mx-6">
            <div>
              <Image src="/images/User-image.png" className="w-12 h-12 " width={500} height={500} alt="Picture of the author" />
              h1
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
