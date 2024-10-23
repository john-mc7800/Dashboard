import Image from "next/image";
import React from "react";

export default function Billing() {
  const data = [
    {
      date: "Oct. 21, 2021",
      type: "Pro Annual",
      action: "Download",
    },
    {
      date: "Aug. 21, 2021",
      type: "Pro Portfolio",
      action: "Download",
    },
    {
      date: "July. 21, 2021",
      type: "Sponsored Post",
      action: "Download",
    },
    {
      date: "July. 21, 2021",
      type: "Sponsored Post",
      action: "Download",
    },
    {
      date: "Jun. 21, 2021",
      type: "Sponsored Post",
      action: "Download",
    },
  ];

  return (
    <div className="p-4 ">
      {/* Billing Heading */}
      <h1 className="text-2xl lg:text-[32px] font-bold text-textBlue">
        Billing
      </h1>

      {/* Order History Section */}
      <div className="my-6">
        <h3 className="text-textBlue text-lg lg:text-[16px] font-bold">
          Order History
        </h3>
        <p className="text-sm">Manage billing information and view receipts</p>
      </div>

      {/* Order History List */}
      <div className="container">
        <div className="grid grid-cols-3 gap-4 text-sm my-2">
          <p className="text-textGray pl-2">Date</p>
          <p className="text-textGray">Type</p>
          <p className="text-textGray">Receipt</p>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 text-sm lg:max-w-[500px]  my-2 py-2 ${
              item.date === "Aug. 21, 2021" ? "shadow-lg py-2 rounded-lg" : ""
            }`}
          >
            <p className="text-xs md:text-base lg:text-base text-textBlue font-medium pl-2">
              {item.date}
            </p>
            <p className="text-xs md:text-base lg:text-base text-textBlue font-medium">
              {item.type}
            </p>
            <button className="text-xs md:text-base lg:text-sm sm:text-base text-textBlue font-medium border border-textGray rounded-md px-4 py-1 w-auto">
              {item.action}
            </button>
          </div>
        ))}
        <span className="text-orangeColor border-b border-orangeColor text-sm font-medium ml-2 cursor-pointer">
          Load more
        </span>
      </div>

      {/* Payment Method Section */}
      <div className="ml-2 my-6">
        <div className="">
          <h1 className="text-base md:text-lg lg:text-lg text-textBlue font-bold">
            Payment Method
          </h1>
          <p className="text-textGray text-xs md:text-base lg:text-sm font-medium">
            Manage billing information and view receipts
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between lg:items-center my-4 max-w-full lg:max-w-[500px] ">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/images/visa.png"
              className="w-[67px] h-[38px]"
              width={67}
              height={38}
              alt="Visa card image"
            />
            <p className="text-textBlue text-sm font-medium">
              Visa ending in 2255
            </p>
          </div>
          <button className="text-sm md:text-base w-[100px] text-textBlue font-medium border border-textGray rounded-md px-2 py-1 mt-4  mr-8 lg:mr-0">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
