"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Navdropdown from "./Navdropdown";
import Link from "next/link";
import Search from "../Search";
import { useCart } from "@/Context/useCart";

export const Navbar1 = () => {
  useEffect(() => {
    import("preline");
  }, []);
  const [open, setopen] = useState(false);
  const { cartTotalQty } = useCart();

  return (
    <div className="py-0 hs-accordion-group  ">
      <Container className="hs-accordion" id="hs-basic-heading-two">
        <div className=" md:py-7 py-4 mb-4  w-[100%] flex lg:space-x-20 justify-between lg:justify-normal xl:justify-between items-center border-b lg:border-none  ">
          {/* 1 */}
          <Link href="/">
            <div className="lg:mr-4 mr-0 xl:mr-0 w-12 flex items-center space-x-3">
              <Image
                src="/logo-H.png"
                height={200}
                width={200}
                alt="Logo"
                className="  "
              />
              <p className=" text-4xl font-medium text-[#4F3F92] ">Jurhy</p>
            </div>
          </Link>
          {/* 2 */}
          <div className="lg:flex xl:gap-4 gap-2 items-center hidden">
            <button
              className="bg-[#103178] text-white text-bold flex items-center
             
             rounded-full px-7 py-3 
             
             hs-accordion-toggle 
    group  gap-x-3 w-full  text-left
      transition  
     "
              aria-controls="hs-basic-collapse-two"
            >
              <GiHamburgerMenu className="text-[20px] font-[400] " />

              <h3 className="text-[15px] font-[600]">Products</h3>
            </button>

            <Search />
          </div>

          {/* 3 */}

          <div className="lg:flex xl:gap-x-6 gap-1  hidden mx-0  ">
            {/* 3 1 */}
            <div className="hs-dropdown relative inline-flex z-50 [--trigger:hover]">
              <button
                id="hs-dropdown-hover-event"
                type="button"
                className="hs-dropdown-toggle flex items-center"
              >
                <p className="text-[#5B6C95] font-[600]">English</p>
                <IoIosArrowDown className="text-[#5B6C95] " />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden 
   bg-white shadow-md  p-2 mt-2  after:h-4
    after:absolute after:-bottom-4 after:left-0 after:w-28 before:h-4 before:absolute before:-top-4 before:left-0 before:w-28"
                aria-labelledby="hs-dropdown-hover-event"
              >
                <p
                  className="flex items-center gap-x-3.5 py-2 px-3  text-gray-800 
     hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700
      dark:hover:text-gray-300"
                  href="#"
                >
                  English
                </p>
                <p
                  className="flex items-center gap-x-3.5 py-2 px-3 
     text-gray-800 hover:bg-gray-100   
      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  href="#"
                >
                  Franch
                </p>
              </div>
            </div>

            {/* 3 2 */}

            <div className="hs-dropdown relative inline-flex z-50 [--trigger:hover]">
              <button
                id="hs-dropdown-hover-event"
                type="button"
                className="hs-dropdown-toggle flex items-center"
              >
                <p className="text-[#5B6C95] font-[600]">USD</p>
                <IoIosArrowDown className="text-[#5B6C95] " />
              </button>
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden 
   bg-white shadow-md  p-2 mt-2  after:h-4
    after:absolute after:-bottom-4 after:left-0 after:w-28 before:h-4 before:absolute before:-top-4 before:left-0 before:w-28"
                aria-labelledby="hs-dropdown-hover-event"
              >
                <p
                  className="flex items-center gap-x-3.5 py-2 px-3  text-gray-800 
     hover:bg-gray-100   dark:text-gray-400 dark:hover:bg-gray-700
      dark:hover:text-gray-300"
                >
                  USD
                </p>
                <p
                  className="flex items-center gap-x-3.5 py-2 px-3 
     text-gray-800 hover:bg-gray-100   
      dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                >
                  EURO
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="lg:flex xl:gap-8 gap-4 xl:mr-10 hidden mr-4 ">
            {/* 4 1 */}
            <Link href="/register">
              <div>
                <FaRegUser className=" text-[22px] text-[#FFA631] cursor-pointer" />
              </div>
            </Link>

            {/* 4 2 */}
            <div className="relative flex">
              <AiOutlineHeart className="text-[25px] text-[#FFA631]" />
              <div className="absolute bg-[#103178] text-white  rounded-full w-[20px] text-center h-[20px] text-[11px] pt-[1px] bottom-3 left-4">
                0
              </div>
            </div>
            {/* 3 3 */}
            <div className="relative">
              <Link href="/cart">
                <AiOutlineShoppingCart className="text-[25px] text-[#FFA631]" />
                <div
                  className="absolute bg-[#103178] text-white  rounded-full w-[20px] text-center h-[20px] 
              text-[11px] pt-[1px] bottom-3 left-4"
                >
                  {cartTotalQty}
                </div>
              </Link>
            </div>
          </div>

          {/* for mobile */}
          <div
            className="block lg:hidden mr-4"
            onClick={() => {
              setopen(!open);
            }}
          >
            <FiSearch />
          </div>
          {/* Search bar for mobile */}
        </div>
        {/* Search bar for mobile */}

        {/* // enter condition below */}
        <div
          className={`bg-[#F0F2F5] py-3 rounded-full ${open ? "flex" : "hidden"}

         items-center   justify-between  w-full col-span-2 lg:hidden`}
        >
          <input
            type="text"
            placeholder="Search For Products"
            className="bg-[#F0F2F5]  pl-4  rounded-full outline-none placeholder:text-[#5b6c8f]
                 placeholder:text-[14px] placeholder:font-[600]"
          />
          <FiSearch className="text-[#103178] font-bold text-[20px] mr-4  " />
        </div>

        {/* Navdropdown */}

        <div
          id="hs-basic-collapse-two"
          className="hs-accordion-content hidden w-full overflow-hidden  transition-[height] 
            absolute z-10  duration-300 bg-white left-0 border-t border-b "
          aria-labelledby="hs-basic-heading-two"
        >
          <Navdropdown />
        </div>
      </Container>
    </div>
  );
};
