"use client";

import Link from "next/link";
import React from "react";
import { ChevronDown } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const TopMenu = () => {
  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-sm text-[#333333] px-2 h-8"
        >
          <li className="relative px-3">
            <Link
              href="/auth"
              className="flex items-center hover:underline cursor-pointer"
            >
              <div>Login</div>
              <ChevronDown className="h-3.5 -mb-[3px]" />
            </Link>
            <div
              id="AuthDropdown"
              className="hidden absolute top-[24px] left-0 bg-white z-40 border shadow-lg w-[200px] text-[#333333]"
            >
              <div className="flex items-center justify-start gap-1 p-3">
                <img src="https://picsum.photos/200" width={50} alt="avatar" />
                <div className="font-bold text-sm ml-2">Mohamed Reda</div>
              </div>
              <div className="border-b" />
              <ul className="bg-white">
                <li className="text-sm py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                  <Link href={"/orders"}>My Orders</Link>
                </li>
                <li className="text-sm pb-3 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                  Sign out
                </li>
              </ul>
            </div>
          </li>
          <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help & Contact
          </li>
        </ul>
        <ul
          id="TopMenuRight"
          className="flex items-center text-sm text-[#333333] px-2 h-8"
        >
          <li className="flex items-center hover:underline cursor-pointer px-3 gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png?20231030035225"
              width={32}
            />
            Ship to
          </li>
          <li className="px-3 hover:underline cursor-pointer">
            <Link href={"/cart"} className="relative">
              <ShoppingCart />
              <div className="absolute text-[10px] -top-[3px] -right-[5px] bg-red-500 w-3 h-4 rounded-full text-white">
                <div className="flex items-center justify-center -mt-[2.2px]">
                  3
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
