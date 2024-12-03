"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { PiVirusThin } from "react-icons/pi";
import { FaBacterium } from "react-icons/fa";
import Image from "next/image";

export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mt-4 lg:mt-0"
      >
        {/* First  */}

        {/* Second */}
        <SwiperSlide>
          <div className="bg-white">
            {/* Container */}
            <div className=" 2xl:max-w-screen-xl 2xl:mx-auto xl:h-[500px] 2xl:my-auto ">
              <div className="grid md:grid-cols-2 grid-cols-1  ">
                {/* 3 1 */}
                <div className="bg-white pl-10 md:pl-0 lg:pr-10  flex justify-center items-center  ">
                  <div className="md:ml-8  lg:ml-4 xl:ml-0 mx-3 mb-4 md:mb-0">
                    {" "}
                    <h1 className="lg:text-[52px] text-[40px] font[900] text-[#103178] leading-normal">
                      Antibacterial <br /> Medical Mask
                    </h1>
                    <p className="text-[#103178] text-xl">
                      Just a few seconds to measure your body temperature
                    </p>
                    <div className="flex md:gap-x-16 gap-x-10 mt-4 ">
                      <div className="flex items-center gap-1 ">
                        {" "}
                        <FaBacterium className="text-[25px] text-[#103178]" />
                        <p className=" text-[#103178]">Anti-Bacterial</p>
                      </div>
                      <div className="flex items-center gap-1 ">
                        {" "}
                        <PiVirusThin className="text-[30px] text-[#103178]" />
                        <p className=" text-[#103178]">Anti-Virus</p>
                      </div>
                    </div>
                    <button
                      className="  py-2 px-10 bg-[#FD8D27] hover:bg-white hover:text-[#103178] hover:outline hover:outline-orange-500 transition ease-in duration-300 mt-4  rounded-full text-[20px]
                text-white text-bold "
                    >
                      Shop Now{" "}
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Image
                    src="/4.png"
                    width={1584}
                    height={1326}
                    alt="Picture of the author"
                    className="2xl:h-[600px] md:h-[400px] w-full  lg:h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 3 */}
        <SwiperSlide>
          <div className="bg-[#103178]">
            {/* Container */}
            <div className=" 2xl:max-w-screen-xl 2xl:mx-auto xl:h-[500px] ">
              <div className=" grid md:grid-cols-2 grid-cols-1  ">
                {/* 3 1 */}

                <div className="bg-[#103178] mt-4 lg:pr-10    flex justify-center items-center h-full">
                  <div className="md:ml-8  lg:ml-4 xl:ml-0 mb-4 md:mb-0">
                    <h1 className="lg:text-6xl md:text-[44px] md:mb-1 text-[36px] lg:mb-0  font-bold text-white  ">
                      PowerSteel <br /> X-tra 200 Brush
                    </h1>

                    <p className="text-white lg:text-xl text-base md:mb-1 lg:mb-0    ">
                      Only in this week. Don’t misss!
                    </p>
                    <h2 className="lg:text-5xl md:text-4xl font-bold text-[35px] text-[#FFC800]">
                      $29.99
                      <span className="text-gray-800 text-2xl place-self-start line-through ">
                        40.99$
                      </span>
                    </h2>
                    <button
                      className="py-2 px-8 bg-yellow-500 hover:bg-white text-white hover:text-[#103178] transition ease-in duration-300 mb-4 md:mb-4 shadow mt-4 rounded-full text-[20px] text-bold 
               
               
               "
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className=" hidden md:block ">
                  <Image
                    src="/3.jpg"
                    width={1920}
                    height={1430}
                    alt="Picture of the author"
                    className="2xl:h-[600px] md:h-[400px] w-full  lg:h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
