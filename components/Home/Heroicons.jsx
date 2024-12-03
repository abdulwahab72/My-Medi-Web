"use client";
import { IoBandageSharp } from "react-icons/io5";
import { LiaCapsulesSolid, LiaMicroscopeSolid } from "react-icons/lia";
import { TbDental } from "react-icons/tb";
import {
  RiThermometerLine,
  RiHeartAddLine,
  RiTestTubeLine,
} from "react-icons/ri";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Heroicons = () => {
  const swiperRef = useRef(null);
  return (
    <div>
      <hr />
      <div className="px-0 place-items-center p-6 text-[#16367B]">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1366: {
              slidesPerView: 7,
              spaceBetween: 70,
            },
            1440: {
              slidesPerView: 7,
              spaceBetween: 70,
            },
          }}
          ref={swiperRef}
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <IoBandageSharp className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Bandages</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <LiaCapsulesSolid className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Capsules</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className=" flex flex-col items-center">
              <TbDental className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Dental</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center">
              <RiThermometerLine className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Thermometer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center">
              <RiHeartAddLine className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Heart Health</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center">
              <LiaMicroscopeSolid className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Microscope</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex flex-col items-center">
              <RiTestTubeLine className="text-[34px] font-[400]" />
              <p className="text-[17px] font-[400] mt-4">Tubes</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <hr />
    </div>
  );
};

export default Heroicons;
