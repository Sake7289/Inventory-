"use client";
import React, { useContext } from "react";
import MainHeader from "../common/header/Header";
import { IoHomeSharp } from "react-icons/io5";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { MenuContext } from "../../components/common/MenuContext";
import { GoDash } from "react-icons/go";
import { LucideLassoSelect } from "lucide-react";

const Sidebar = ({ children }) => {
  const { open } = useContext(MenuContext);
  return (
    <div className="bg-white ml-60 min-h-screen">
      <MainHeader />

      <div className="flex justify-start items-start ">
        <aside className="bg-white  absolute inset-y-0 left-0 border border-gray-200 shadow-sm w-60 p-1">
          <ul>
            <li className="flex justify-start items-center cursor-pointer  rounded-xl absolute top-20 hover:bg-blue-200">
              <IoHomeSharp className="mr-2" />
              <div>
                <Link href="/dashboard">Dashboard</Link>
              </div>
            </li>
            <li className="flex justify-start items-center cursor-pointer  rounded-xl absolute top-32">
              <div className="w-full flex flex-row justify-start items-center">
                <FaShoppingCart className="mr-2" />
                <h3 className="flex-1">Products</h3>
              </div>

              <li className="flex justify-start items-center ml-14 gap-1 absolute top-8">
                <GoDash />
                <li href="/Products/productslist">Products list</li>
              </li>
            </li>
          </ul>
        </aside>
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
