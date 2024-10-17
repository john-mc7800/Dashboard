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
    <div className="p-4">
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
        <div className="grid grid-cols-3 text-sm my-2">
          <p className="text-textGray pl-2">Date</p>
          <p className="text-textGray">Type</p>
          <p className="text-textGray">Receipt</p>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${
              item.date === "Aug. 21, 2021" ? "shadow-lg py-2 rounded-lg" : ""
            } grid grid-cols-3 text-sm w-[220px] lg:max-w-[500px] min-w-[100px] my-2`}
          >
            <p className="text-base text-textBlue font-medium pl-2">
              {item.date}
            </p>
            <p className="text-base text-textBlue font-medium">{item.type}</p>
            <button className="text-sm sm:text-base text-textBlue font-medium border border-textGray rounded-md mx-2 sm:mx-4 lg:mx-6 px-2 w-20 py-1  sm:w-auto">
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
          <h1 className="text-base lg:text-lg text-textBlue font-bold">
            Payment Method
          </h1>
          <p className="text-textGray text-sm font-medium">
            Manage billing information and view receipts
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center my-4 max-w-full lg:max-w-[500px] min-w-[300px]">
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
          <button className="text-base text-textBlue font-medium border border-textGray rounded-md px-2 py-1 mt-4 sm:mt-0 sm:mr-8">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
