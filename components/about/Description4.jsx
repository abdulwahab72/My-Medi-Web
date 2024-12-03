import React from "react";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import { PiVirusLight } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";

const Description4 = () => {
  return (
    <div className="2xl:px-6">
      <div className="text-[#103178] py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 ">
          {/* 1 */}
          <div>
            {/* for mobiles */}

            <h3 className="text-[45px]  font-[600] leading-[42px] my-[20px]  md:hidden ">
              Your one and only online pharmacy!
            </h3>

            {/* for destops */}
            <div className="md:block hidden">
              <h3 className="text-[45px]  font-[600] leading-[42px] my-[20px] ">
                Your one and only
              </h3>
              <h3 className="mt-4 text-[45px]  font-[600] leading-[42px] my-[20px]">
                online pharmacy!
              </h3>{" "}
            </div>

            <h3 className="text-[22px] mt-4 font-[400] leading-[26px]  my-[20px] ">
              Only this week 30% to 50% cheaper!
            </h3>
            {/* icon div */}

            <div
              className="text-[#103178] font-semibold text-sm space-y-2
              my-6  md:w-fit md:flex md:space-y-0 md:space-x-10 "
            >
              <div className=" flex space-x-2 items-center ">
                <PiVirusLight className="text-[24px]" />
                <p className="xl:text-[18px] text-[#5B6C8F]">
                  Up to 5 users simultaneously{" "}
                </p>
              </div>
              <div className=" flex  space-x-2 items-center">
                <TbCertificate className="text-[24px]" />
                <p className="xl:text-[18px] text-[#5B6C8F]">
                  Has HEALTH Certificate
                </p>
              </div>
            </div>
            {/* Grid 1 Button */}
            <button
              className=" px-6 py-[5px] w-fit text-lg bg-[#F18203] text-white
             rounded-full font-semibold hover:bg-white 
             hover:text-[#F18203] transition ease-in hover:outline-1 hover:outline
              hover:outline-[#F18203]
              duration-300 cursor-pointer md:px-10 lg:px-16 lg:py-3 lg:font-bold"
            >
              About
            </button>
          </div>

          {/* 2  */}

          <div
            className="overflow-hidden hidden md:block  xl:w-[604px]  
            md:w-[350px] lg:w-[482px]   xl:h-[344px] lg:h-[300px] w-full  "
          >
            <Image
              src="/des4-img.jpg"
              height={344}
              width={604}
              className="hover:scale-110 transition ease-in cursor-pointer overflow-hidden delay-150 lg:w-[482px] lg:h-[300px]

              md:w-[350px] 
              
              xl:w-[604px] xl:h-[344px]
              w-full
              
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description4;
