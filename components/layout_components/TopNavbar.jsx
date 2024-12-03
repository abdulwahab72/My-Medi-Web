import React from "react";
import Container from "./Container";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";
import Link from "next/link";

const TopNavbar = () => {
  return (
    // Main Div
    <div className="hidden xl:block h-[30px] bg-[#103178] text-[white] font-normal ">
      <Container>
        {/* Child Div */}
        <div className="grid grid-cols-4 h-[30px] w-full">
          {/* this div take 1 col */}
          <div></div>
          {/* this take 3 col */}
          <div className=" col-span-3 flex items-center ml-[130px] ">
            <div className="text-[13px] flex gap-8 pr-6 border-r-[1px] ">
              <p>Need help? 0020 500 - MyMedi - 000</p>
              <Link href="/about">
                <p className="hover:text-[#ff9923]">About</p>
              </Link>
            </div>
            <div className="text-[12px] px-6 border-r-[1px] hover:text-[#ff9923]">
              <p>Order Tracking</p>
            </div>

            <div className="text-[12px] px-6 border-r-[1px] hover:text-[#ff9923]">
              <Link href="/shop">
                <p>Shop</p>
              </Link>
            </div>

            <Link href="/contact">
              <p className="text-[12px] px-6 border-r-[1px] hover:text-[#ff9923]">
                Contact
              </p>
            </Link>
            {/* icons */}
            <div className="flex text-[15px] px-6 border-r-[1px] gap-4">
              <BiLogoFacebook className="hover:text-orange-500  delay-100 cursor-pointer" />
              <AiOutlineInstagram className="hover:text-orange-500  delay-100 cursor-pointer" />
              <AiFillYoutube className="hover:text-orange-500  delay-100 cursor-pointer" />
              <BsPinterest className="hover:text-orange-500  delay-100 cursor-pointer" />
              <BiLogoLinkedin className="hover:text-orange-500  delay-100 cursor-pointer" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavbar;
