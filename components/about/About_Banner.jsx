import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiVirusLight } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";

const About_Banner = () => {
  return (
    <div className="">
      {/* Relative background */}
      <div className=" bg-gray-100 relative bg-cover bg-center lg:min-h-[530px] min-h-[400px]  ">
        {/* Absolute background */}
        <div className=" absolute bg-[url('/roung5.png')] w-full">
          {/* Main Grid Container */}
          <div className=" relative flex flex-col md:grid md:grid-cols-3 lg:grid lg:grid-cols-2  ">
            {/* Grid 1 */}
            <div
              className=" flex flex-col md:grid md:col-span-2 lg:col-span-1 text-center items-center 
            py-10 md:py-20 md:ml-4 xl:ml-0 md:text-start md:justify-start md:items-start 
            lg:py-32 xl:pl-20 "
            >
              {/* Grid 1 Title */}

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

              <p className=" md:text-5xl text-3xl font-semibold text-[#103178] my-4 ">
                Your one and only <br /> online phramacy !
              </p>

              {/* Grid 1 Body */}
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
              <button className=" px-6 py-[5px] w-fit text-lg bg-[#F18203] text-gray-800 rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:px-10 lg:px-16 lg:py-3 lg:font-bold">
                About
              </button>
            </div>

            {/* Grid 2 */}
            <div className=" hidden md:block ">
              <img
                src="./girlfacemask.png"
                className="xl:mt-24 xl:ml-44 lg:mt-[94px] lg:ml-[70px]
                
                
                
                md:w-[500px] md:h-[380px] md:mt-[20px] lg:w-auto lg:h-auto  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Banner;
