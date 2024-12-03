import React from "react";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <div className=" ">
      
      {/* Footer 2 */}
      {/* Grid main Container */}
      <Container className=" bg-[#F0F2F5] py-10 grid grid-cols-1 rounded-lg space-y-8 pl-6 md:grid-cols-3 md:space-y-0 md:space-x-1 xl:place-items-center ">
        {/* Grid 1 */}
        <div className=" text-[#103178] space-y-5 mr-10">
          <p className=" text-2xl font-semibold">0020 500 – MYMEDI – 000</p>
          <div className=" space-y-1">
            <p className=" text-[#715C79] text-sm font-semibold">
              Monday – Friday: 9:00-20:00
            </p>
            <p className=" text-[#715C79] text-sm font-semibold">
              Saturday: 11:00 – 15:00
            </p>
          </div>
          <div className=" flex items-center bg-white space-x-2 rounded-xl px-3 py-1 w-fit hover:text-white hover:bg-slate-500 transition ease-in duration-300 cursor-pointer">
            <FaRegEnvelope />
            <p className=" font-bold">contact@example.com</p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="text-[#715C79] space-y-1 text-base font-semibold tracking-wide">
          <p>1487 Rocky Horse Carrefour</p>
          <p>Arlington, TX 16819</p>
          <p className=" text-sm underline hover:text-orange-600 transition ease-in duration-300 cursor-pointer">
            Show on map
          </p>
          <div className="flex gap-5 pt-7 items-center text-xl">
            <FaFacebookF className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
            <FaPinterestP className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Grid 3 */}
        <div className=" text-[#103178] space-y-4 mr-10">
          <p className=" text-3xl font-semibold">Join our newsletter</p>
          <p className="text-[#715C79] font-semibold">
            And get $20 discount for your first order
          </p>
          <div className=" space-x-1 w-full flex flex-col md:flex-col md: space-y-2 lg:flex-row lg:space-x-1 lg:space-y-0">
            <input
              className=" py-2 px-3 rounded-full outline-none"
              type="email"
              placeholder="Enter your email address"
            />
            <button className=" px-6 py-3 bg-[#F18203] text-white rounded-full font-bold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:px-3 md:py-2 md:w-fit lg:px-4 lg:py-3">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
      {/* Footer 3*/}
      <Container className=" grid grid-cols-3 py-10 gap-4 px-2 place-content-center md:grid-cols-6 text-[#103178] font-medium text-sm leading-9">
        <div className="">
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            About Us
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Delivery information
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Affiliate
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Sales
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Terms & Conditions{" "}
          </p>
        </div>
        <div>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Bestsellers
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Discount
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            Latest products
          </p>
        </div>
        <div>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            My account
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer">
            My orders
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointerr">
            Returns
          </p>
        </div>
        <div>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointerr">
            Shipping
          </p>
          <p className="hover:text-orange-500 transition ease-in duration-300 cursor-pointerr">
            Wishlist
          </p>
        </div>
      </Container>
      {/* Footer 4 */}
      <Container className="  space-y-4 pb-16 lg:pb-0">
        <hr className=" border-[1px] border-gray-200" />
        <div className="flex flex-col justify-center gap-4 md:flex md:flex-row md:justify-between">
          <p className=" text-center md:text-start text-sm font-semibold text-[#103178]">
            Copyright © 2021 Mymedi. All Rights Reserved
          </p>
          <img
            className="hidden md:block md:w-[40%]"
            src="./payment.jpeg"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
