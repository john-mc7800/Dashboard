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
    <div className="p-4 h-full w-full lg:w-auto relative">
      {/* User Info */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-4 lg:gap-2">
        <Image
          src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?t=st=1729662008~exp=1729665608~hmac=dd0b83c49c26bb71f7d00f0c92cd79811ad2294712b0332637a15571a4ce2376&w=740"
          className="w-16 h-16 lg:w-14 lg:h-14 rounded-full"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-base text-textBlue font-black">Ildiko Gaspar</h1>
          <p className="text-sm text-textGray">@igaspar</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col my-10 lg:my-14 mx-2 lg:mx-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 mb-6 lg:mb-4">
              <Icon className="text-2xl text-textGray" />
              <p className="text-sm text-textGray">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Logout */}
      <div className="flex items-center absolute bottom-10 w-full lg:mx-4">
        <IoIosLogOut className="text-2xl text-textGray" />
        <p className="text-sm text-textGray ml-2">Logout</p>
      </div>
    </div>
  );
}
