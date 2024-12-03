import React from "react";

const Second_About_Banner = () => {
  return (
    <div className=" mx-auto max-w-screen-xl pb-10">
      {/* Relative background */}
      <div className="bg-[url('/banner-bg-12.jpg')] relative bg-cover bg-center min-h-[536px]">
        {/* Absolute background */}
        <div className=" absolute bg-[url('/roung5.png')] w-full">
          {/* Main Grid Container */}
          <div className=" relative ">
            {/* Grid 1 */}
            <div
              className=" flex flex-col text-center items-center 
            py-10 md:py-20 md:ml-10  md:text-start md:justify-start md:items-start md:gap-y-10 gap-y-4  space-y-5"
            >
              {/* Grid 1 Title */}
              <p className=" md:text-6xl text-2xl font-semibold text-[#103178] text-left  px-4 md:px-0 ">
                Hundreds of thousands <br />
                of products at bargain prices
              </p>
              <p className="text-[#103178]  md:text-xl text[10px] font-semibold text-left md:text-center px-4 md:px-0  ">
                Completely the needs of home medicine chest and professional
                offices
              </p>
              {/* Grid 1 Body */}

              {/* Grid 1 Button */}
              <button
                className=" px-6 py-[5px] w-fit text-lg bg-[#103178] text-white rounded-full
               font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer 
               md:px-16 md:py-3 lg:font-bold"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second_About_Banner;
