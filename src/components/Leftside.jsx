"use client";
import Image from "next/image";
import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { PiMoneyLight } from "react-icons/pi";
import { CgDisplayGrid } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

export default function Leftside() {
  const menuItems = [
    { label: "General", icon: FaRegSquare },
    { label: "Password", icon: CiLock },
    { label: "Invitations", icon: FaRegEnvelope },
    { label: "Billing", icon: PiMoneyLight },
    { label: "Apps", icon: CgDisplayGrid },
  ];
  return (
    <div className="py-8 mx-4 h-full relative">
      <div className="flex flex-row justify-center items-center gap-2 mt-6">
        <Image
          src="/images/User-image.png"
          className="w-14 h-14 "
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="">
          <h1 className="text-base text-textBlue font-black text-">
            Ildiko Gaspar
          </h1>
          <p className="text-sm text-textGray">@igaspar</p>
        </div>
      </div>

      <div className="flex flex-col my-20 mx-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-row items-center gap-3 mb-4">
              <Icon className="text-2xl text-textGray" />{" "}
              <p className="text-sm text-textGray">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row  items-center absolute mx-4 bottom-10">
        <IoIosLogOut className="text-2xl text-textGray" />
        <p className="text-sm text-textGray">Logout</p>
      </div>
    </div>
  );
}
