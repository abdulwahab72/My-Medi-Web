import React from "react";
import Container from "../layout_components/Container";
import Link from "next/link";

const LatestOffers = () => {
  return (
    <div className=" pb-10">
      <Container>
        {/* Main Container */}
        <p className=" text-3xl xl:text-[40px] text-[#103178] font-semibold text-center py-8 ">
          Latest offers
        </p>
        <div className=" grid grid-cols-1 space-y-2 md:grid-cols-3 md:gap-4 lg:gap-10">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-md py-1 shadow-lg">
            <img
              className=" scale-110 hover:scale-125 transition ease-in duration-700 h-[170px] lg:w-[311px] lg:h-[240px] xl:w-[400px] xl:h-[300px] rounded-md"
              src="/latest-offer1.jpg"
              alt=""
            />
            <div className="absolute top-[15%] md:top-[25%] lg:top-[33%] flex-col justify-center px-8 space-y-1">
              <p className=" font-semibold text-lg md:text-base xl:text-xl text-[#103178]">
                Candid <br /> Whitening Kit
              </p>
              <p className=" text-3xl xl:text-4xl font-semibold text-[#F18203] ">
                -10%
              </p>
              <Link href="/shop">
                <button className=" px-3 py-1 xl:px-5 xl:py-2 w-fit text-xs bg-[#103178] text-white rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer lg:font-bold">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative rounded-md py-1 overflow-hidden shadow-lg">
            <img
              className=" scale-110 hover:scale-125 transition ease-in duration-700 h-[170px] lg:w-[311px] lg:h-[240px] xl:w-[400px] xl:h-[300px] rounded-md"
              src="/latest-offer2.jpg"
              alt=""
            />
            <div className="absolute top-[10%] md:top-[13%] lg:top-[25%] flex-col justify-center px-10 space-y-1 overflow-clip">
              <p className=" px-2 bg-green-800 text-white w-fit rounded-full text-xs">
                NEW
              </p>
              <p className=" font-semibold text-lg md:text-base xl:text-xl text-[#103178]">
                Get rid of bacteria <br />
                in your home
              </p>
              <p className=" text-3xl xl:text-4xl font-semibold text-[#F18203] ">
                -10%
              </p>
              <Link href="/shop">
                <button className=" px-3 py-1 xl:px-5 xl:py-2 w-fit text-xs bg-[#103178] text-white rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer lg:font-bold">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative block overflow-hidden rounded-md py-1 shadow-lg ">
            <img
              className=" scale-110 hover:scale-125 transition ease-in duration-700 h-[170px] w-[393px] lg:w-[311px] lg:h-[240px] xl:w-[400px] xl:h-[300px] rounded-md"
              src="/latest-offer3.jpg"
              alt=""
            />
            <div className="absolute top-[6%] md:top-[11%] lg:top-[20%] flex-col justify-center px-10 space-y-1">
              <p className=" font-semibold text-lg md:text-base xl:text-xl text-white">
                SuperBrush <br /> X200 Higenic
              </p>
              <p className=" text-3xl xl:text-4xl font-semibold text-[#f5ff40] ">
                $119.00
              </p>
              <p className=" text-sm xl:text-lg font-semibold text-gray-500 line-through">
                $139.00
              </p>
              <Link href="/shop">
                <button className=" px-3 py-1 xl:px-5 xl:py-2 w-fit text-xs bg-[#103178] text-white rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer lg:font-bold">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestOffers;
