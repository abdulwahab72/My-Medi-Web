"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../layout_components/Container";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
import ProductCard from "./ProductCard";
import Link from "next/link";
const LatestProducts = ({ products }) => {
  // Timer code
  const Ref = useRef(null);
  const [timer, setTimer] = useState("24:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    if (total < 0) {
      clearInterval(Ref.current);
      return {
        total,
        hours,
        minutes,
        seconds,
      };
    }
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    const { hours, minutes, seconds } = getTimeRemaining(e);
    setTimer(
      (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds
    );
  };
  const clearTimer = (e) => {
    setTimer("24:00:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  const getBackgroundColor = (index) => {
    if (index === 2 || index === 5) {
      // Change 1 to the index of the column you want to remove background from
      return { color: "black" }; // No background color
    } else {
      return { backgroundColor: "#ff9923" };
    }
  };
  // Split the timer string into individual digits and apply the background color style
  const timerDigits = timer.split("").map((digit, index) => (
    <span
      key={index}
      style={{
        ...getBackgroundColor(index), // Apply the background color style
        marginLeft: "2px",
        padding: "5px",
        borderRadius: "4px",
      }}
    >
      {digit}
    </span>
  ));
  return (
    <div className="my-6">
      <Container>
        {/* 1st div for deal and latest product detail  */}
        <div className="grid grid-cols-1 md:gap-8 md:grid md:grid-cols-8 xl:mx-4 xl:gap-4 xl:grid xl:grid-cols-8">
          {/* First div */}
          {/* Deal div */}
          <div className="md:col-span-3 xl:col-span-2">
            <h3 className="text-[30px] text-[#103178] font-[600] my-[20px] ">
              This Week Deal
            </h3>
            <div className="border-[3px] border-[#FF9923] p-[20px] ">
              {/* timer */}
              <h2 className="text-center text-[26px] mb-8 text-[white]">
                {timerDigits}
              </h2>
              <div className="text-center flex justify-center group">
                <div className="w-[230px] h-[200px] flex relative">
                  <img src="./Metress.png" />
                  {/* icon div */}
                  {/* Side icons */}
                  <div className="md:group-hover:opacity-100 absolute right-0 space-y-3 opacity-0 transition-opacity ease-in duration-500">
                    <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] text-[16px] text-[#103179]">
                      <AiOutlineHeart />
                    </div>
                    <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] text-[16px] text-[#103179]">
                      <BsFilterLeft />
                    </div>
                    <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] text-[16px] text-[#103179]">
                      <AiOutlineSearch />
                    </div>
                    <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] text-[16px] text-[#103179]">
                      <BsFillCartPlusFill />
                    </div>
                  </div>
                </div>
              </div>
              {/* name and price */}
              <p className="text-[16px] font-[400] text-[#103178] ">
                Pillow 70x70
              </p>
              <p className="text-[16px] font-[400] text-[#103178] pt-[10px]">
                $ 2,900
              </p>
              {/* star icons */}
              <div className="flex pt-[7px] pb-[20px]">
                <AiFillStar className="text-[#FF9923]" />
                <AiFillStar className="text-[#FF9923]" />
                <AiFillStar className="text-[#FF9923]" />
                <AiFillStar className="text-[#FF9923]" />
                <AiFillStar className="text-[#FF9923]" />
              </div>
              {/* hr tag */}
              <hr className="w-[120px]" />
              {/* text */}
              <div className="flex gap-4 pt-[20px]">
                <p className="text-[13px] font-[400] text-[#103178]">
                  No Pcs <br /> available
                </p>
                <p className="text-[26px] font-[400] text-[#103178]">24</p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          {/* Latest product div */}
          <div className="md:col-span-5 xl:col-span-6">
            <h3 className="text-[30px] text-[#103178] font-[600] my-[20px] text-center">
              Latest Products
            </h3>
            <div className="grid grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3">
              {/* mapping  */}
              {products?.products?.slice(0, 8).map((product, i) => (
                <Link href={`/shop/${product?.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Featured products div */}
      </Container>
    </div>
  );
};
export default LatestProducts;
