import React from "react";

export default function Plan() {
  return (
    <div className="bg-orangeColor rounded-md p-6 lg:p-8 max-w-full lg:max-w-[400px]">
      <p className="text-whiteColor text-base lg:text-lg my-2 lg:my-3 font-medium">
        Your plan
      </p>
      <h1 className="text-whiteColor text-xl lg:text-2xl font-bold mt-4 lg:mt-6">
        Pro Annual
      </h1>
      <p className="text-whiteColor text-sm lg:text-base my-2 lg:my-3 font-medium">
        Renews on Nov. 2021
      </p>
      <button className="text-whiteColor text-sm lg:text-base text-center mt-4 lg:mt-6 font-medium border border-whiteColor rounded-lg py-2 px-4 w-full">
        Cancel subscription
      </button>
    </div>
  );
}
