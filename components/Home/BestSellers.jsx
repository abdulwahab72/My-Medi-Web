"use client";
import React, { useState } from "react";
import Container from "../layout_components/Container";
import Category1 from "./Category1";
import Category2 from "./Category2";
import Category3 from "./Category3";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BestSellers = ({ products }) => {
  const [ActiveTab, setActiveTab] = useState("Category1");

  return (
    <div>
      <Container>
        {/* main div */}
        <div className="xl:mx-4">
          {/* Headings div */}
          <div className="my-6">
            {/* 1st heading  */}
            <h3 className="text-[24px] font-[600] text-[#103178] text-center md:text-[30px] xl:text-[40px] mb-2">
              Top 5 Bestsellers in:
            </h3>
            {/* category headings */}
            <div className="  justify-center text-xs text-[16px] font-[600] text-[#103178] flex gap-4 md:text-[18px] xl:text-[25px] ">
              {/* 1st category  */}
              <h3
                className={` hover:underline hover:text-orange-500 transition duration-300 cursor-pointer ${
                  ActiveTab == "Category1"
                    ? " underline , text-orange-500"
                    : " no-underline"
                }`}
                onClick={() => setActiveTab("Category1")}
              >
                Blood pressure
              </h3>
              {/* 2nd category */}
              <h3
                className={` hover:underline hover:text-orange-500 transition duration-300 cursor-pointer ${
                  ActiveTab == "Category2"
                    ? " underline , text-orange-500"
                    : " no-underline"
                }`}
                onClick={() => setActiveTab("Category2")}
              >
                Face masks
              </h3>
              {/* 3rd category  */}
              <h3
                className={` hover:underline hover:text-orange-500 transition duration-300 cursor-pointer ${
                  ActiveTab == "Category3"
                    ? " underline , text-orange-500"
                    : " no-underline"
                }`}
                onClick={() => setActiveTab("Category3")}
              >
                Stomatology
              </h3>
            </div>
          </div>
          {/* Category pages */}
          {/* 1st category page */}
          <div className={`${ActiveTab === "Category1" ? "block" : "hidden"}`}>
            <Category1 products={products} />
          </div>

          {/* 2nd category page */}
          <div className={`${ActiveTab === "Category2" ? "block" : "hidden"}`}>
            <Category2 products={products} />
          </div>
          {/* 3rd category page */}
          <div className={`${ActiveTab === "Category3" ? "block" : "hidden"}`}>
            <Category3 products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;
