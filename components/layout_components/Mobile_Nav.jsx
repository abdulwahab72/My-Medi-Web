"use client";
import React, { useState } from "react";
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";
const Mobile_Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    import("preline");

    setNavOpen(false);
  }, []);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <div className=" lg:hidden bottom-0 bg-white fixed flex justify-center max-w-[4000px] min-w-full">
        <Container className="  ">
          <div className="grid grid-cols-5 md:grid-flow-col-dense place-items-center  gap-12 mx-10 bg-white py-4   ">
            <div>
              <GiHamburgerMenu
                onClick={toggleNav}
                className="w-[24px] h-[24px] text-[#FFA631] lg:w-[30px] lg:h-[30px] cursor-pointer"
              />
            </div>
            <div>
              <AiOutlineHome className="w-[24px] h-[24px] text-[#FFA631] lg:w-[30px] lg:h-[30px]" />
            </div>
            <div>
              <BiUser className="w-[24px] h-[24px] text-[#FFA631] lg:w-[30px] lg:h-[30px]" />
            </div>
            <div>
              <AiOutlineHeart className="w-[24px] h-[24px] text-[#FFA631] lg:w-[30px] lg:h-[30px]" />
            </div>
            <div className="relative">
              <AiOutlineShopping className="w-[24px] h-[24px] text-[#FFA631] lg:w-[30px] lg:h-[30px]" />
              <div className="absolute bg-[#103178] text-white  rounded-full w-[20px] text-center h-[20px] text-[12px] bottom-2 left-[12px] lg:bottom-[10px] lg:left-[16px]">
                0
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Animated Navbar */}
      <div
        className={`z-[999] text-gray-900 fixed w-[100%] md:w-[50%] h-screen font-medium bg-white top-0 duration-300 ${
          navOpen ? " left-0" : " left-[-100%]"
        }`}
      >
        <div className="  py-6 ">
          <div className="px-7">
            <AiOutlineClose
              onClick={() => toggleNav()}
              className={`cursor-pointer text-[20px] text-gray-600`}
            />
          </div>
          {/* // Accordion Start */}
          <div className="hs-accordion-group py-5 px-7">
            {/* Accordion 1 Start */}
            <div className="hs-accordion" id="hs-basic-nested-heading-two">
              {/* Accordion 1 Header */}
              <button
                className="hs-accordion-toggle rounded-lg justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full font-bold text-left text-[#103178] transition hover:bg-slate-50 px-1"
                aria-controls="hs-basic-nested-collapse-two"
              >
                Homepages
                <FiChevronDown />
              </button>
              {/* Accordion 1 Children */}
              <div
                id="hs-basic-nested-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-two"
              >
                <ul className=" space-y-2 mx-2 font-semibold text-[#103178]">
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    HomePage 1
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    HomePage 2
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    HomePage 3
                  </li>
                </ul>
              </div>
            </div>
            {/* Accordion 1 End*/}

            {/* Accordion 2 Start*/}
            <div className="hs-accordion active" id="hs-basic-nested-heading-one">
              {/* Accordion 2 Header */}
              <button
                className="hs-accordion-toggle px-1 justify-between font-bold rounded-lg hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full text-left text-[#103178] transition hover:bg-slate-50  "
                aria-controls="hs-basic-nested-collapse-one"
              >
                Shop
                <FiChevronDown />
              </button>
              {/* Accordion 2 Children */}
              <div
                id="hs-basic-nested-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-one"
              >
                <div className="hs-accordion-group ">
                  {/* Accordion 2 Children 1 */}
                  <div
                    className="hs-accordion active"
                    id="hs-basic-nested-sub-heading-one"
                  >
                    <button
                      className="hs-accordion-toggle justify-between pl-2 rounded-lg hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full  text-left text-[#103178] transition hover:bg-slate-50  "
                      aria-controls="hs-basic-nested-sub-collapse-one"
                    >
                      Category
                      <FiChevronDown />
                    </button>
                    <div
                      id="hs-basic-nested-sub-collapse-one"
                      className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-nested-sub-heading-one"
                    >
                      <p className="text-[#103178] cursor-pointer mx-3 px-2 py-2 hover:bg-slate-50">
                        Category Promo
                      </p>
                    </div>
                  </div>
                  {/* Accordion 2 Children 2 */}
                  <div
                    className="hs-accordion"
                    id="hs-basic-nested-sub-heading-two"
                  >
                    <button
                      className="hs-accordion-toggle justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full text-left text-[#103178] transition pl-2 rounded-lg hover:bg-slate-50  "
                      aria-controls="hs-basic-nested-sub-collapse-two"
                    >
                      Product
                      <FiChevronDown />
                    </button>
                    <div
                      id="hs-basic-nested-sub-collapse-two"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-nested-sub-heading-two"
                    >
                      <p className="text-[#103178] cursor-pointer mx-3 px-2 py-2 hover:bg-slate-50">
                        Product 1
                      </p>
                    </div>
                  </div>
                  {/* Accordion 2 Children 3 */}
                  <div
                    className="hs-accordion"
                    id="hs-basic-nested-sub-heading-three"
                  >
                    <button
                      className="hs-accordion-toggle justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full text-left text-[#103178] transition pl-2 rounded-lg hover:bg-slate-50"
                      aria-controls="hs-basic-nested-sub-collapse-three"
                    >
                      Page
                      <FiChevronDown />
                    </button>
                    <div
                      id="hs-basic-nested-sub-collapse-three"
                      className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                      aria-labelledby="hs-basic-nested-sub-heading-three"
                    >
                      <p className="text-[#103178] cursor-pointer mx-3 px-2 py-2 hover:bg-slate-50">
                        Page 1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordion 2 End */}

            {/* Accordion 3 Start */}
            <div className="hs-accordion" id="hs-basic-nested-heading-two">
              {/* Accordion 3 Header */}
              <button
                className="hs-accordion-toggle px-1 rounded-lg justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full font-bold text-left text-[#103178] transition hover:bg-slate-50"
                aria-controls="hs-basic-nested-collapse-two"
              >
                Blogs
                <FiChevronDown />
              </button>
              {/* Accordion 3 Children */}
              <div
                id="hs-basic-nested-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-two"
              >
                <ul className=" space-y-2 mx-2 font-semibold text-[#103178]">
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Grid
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Listing
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    With Sidebar
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Post Details
                  </li>
                </ul>
              </div>
            </div>
            {/* Accordion 3 End*/}

            {/* Accordion 4 Start */}
            <div className="hs-accordion" id="hs-basic-nested-heading-two">
              {/* Accordion 4 Header */}
              <button
                className="hs-accordion-toggle px-1 rounded-lg justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full font-bold text-left text-[#103178] transition hover:bg-slate-50"
                aria-controls="hs-basic-nested-collapse-two"
              >
                Pages
                <FiChevronDown />
              </button>
              {/* Accordion 4 Children */}
              <div
                id="hs-basic-nested-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-nested-heading-two"
              >
                <ul className=" space-y-2 mx-2 font-semibold text-[#103178]">
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Page 1
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Page 2
                  </li>
                  <li className=" cursor-pointer hover:bg-slate-50 rounded-lg px-1 py-2">
                    Page 3
                  </li>
                </ul>
              </div>
            </div>
            {/* Accordion 4 End*/}
            {/* Accordion 5 Start*/}
            <button
              className="hs-accordion-toggle px-1 rounded-lg justify-between hs-accordion-active:text-[#103178] py-3 inline-flex items-center gap-x-3 w-full font-bold text-left text-[#103178] transition hover:bg-slate-50"
              aria-controls="hs-basic-nested-collapse-two"
            >
              Contact us
            </button>
            {/* Accordion 5 End*/}
          </div>
          {/* // Accordion End */}
          <div className=" absolute bottom-3 grid grid-cols-1 mt-50 w-full text-start space-y-3">
            <hr className=" border ml-6 mx-4 " />
            <p className=" text-gray-500 ml-6">
              Need help? 0020 500 - MYMEDI - 000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile_Nav;
