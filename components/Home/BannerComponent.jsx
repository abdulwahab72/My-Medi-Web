import React from "react";

const BannerComponent = () => {
  return (
    <div className="bg-[url('/banner-bg-12.jpg')] relative bg-cover bg-center min-h-[536px]">
      <div className=" mx-auto max-w-screen-xl">
        {/* Relative background */}
        <div className="bg-[url('/banner-bg-12.jpg')] relative bg-cover bg-center min-h-[536px]">
          {/* Absolute background */}
          <div className=" absolute bg-[url('/roung5.png')] w-full">
            {/* Main Grid Container */}
            <div className=" relative flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-2">
              {/* Grid 1 */}
              <div className=" flex flex-col md:grid md:col-span-2 lg:col-span-1 text-center items-center py-10 md:py-20 md:ml-10 xl:ml-0 md:text-start md:justify-start md:items-start lg:py-32 px-5 space-y-5">
                {/* Grid 1 Title */}
                <p className=" text-5xl font-semibold text-[#103178] tracking-wide">
                  Super Sonic Brush X200 Higenic
                </p>
                <p className="text-[#103178] font-semibold text-lg tracking-wide">
                  The sonic power of the brush is the best for dental problems
                </p>
                {/* Grid 1 Body */}
                <div className="text-[#103178] font-semibold text-sm space-y-2 md:w-fit md:flex md:space-y-0 md:space-x-10 ">
                  <div className=" flex space-x-2">
                    <img src="./tooth-brush-icon.png" alt="" />
                    <p>Has HEALTH certificate</p>
                  </div>
                  <div className=" flex space-x-2 justify-center ">
                    <img src="./dashboard-icon.png" alt="" />
                    <p>Has HEALTH certificate</p>
                  </div>
                </div>
                {/* Grid 1 Button */}
                <button className=" px-6 py-[5px] w-fit text-lg bg-[#F18203] text-white rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:px-10 lg:px-16 lg:py-3 lg:font-bold">
                  About
                </button>
              </div>
              {/* Grid 2 */}
              <div className=" grid grid-cols-1">
                <span className=" absolute px-1 py-4 bg-[#F18203] rounded-full w-fit text-white font-bold text-2xl bottom-12 right-3 md:text-5xl md:py-9 md:right-20 md:bottom-32 lg:text-6xl lg:py-12 lg:right-40 lg:bottom-48 xl:right-72 xl:bottom-44">
                  -30%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
