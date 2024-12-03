import React from "react";
import Container from "../layout_components/Container";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Image from "next/image";

const MapComponent = () => {
  return (
    <div>
      <Container className="text-[#103178]">
        {/* Main Container */}
        <div className=" py-5 lg:grid lg:grid-cols-5">
          {/* Main Container First Child */}
          <div className=" text-[#103178] space-y-5 lg:grid lg:col-span-2">
            <div className=" space-y-4">
              <p className=" text-3xl lg:text-4xl font-semibold">
                How can we help you?
              </p>
              <p className=" text-gray-400">
                We are at your disposal 7 days a week!
              </p>
              <hr className=" border=[0.5px] border-gray-300 md:w-[70%]" />
            </div>
            <p className=" text-2xl font-semibold">0020 500 – MYMEDI – 000</p>
            <div className=" space-y-1">
              <p className=" text-[#715C79] text-sm font-semibold">
                Monday – Friday: 9:00-20:00
              </p>
              <p className=" text-[#715C79] text-sm font-semibold">
                Saturday: 11:00 – 15:00
              </p>
            </div>
            <div className=" flex items-center bg-white space-x-2 outline outline-1 outline-gray-400 rounded-xl px-3 py-1 w-fit hover:text-white hover:bg-slate-500 transition ease-in duration-300 cursor-pointer">
              <FaRegEnvelope />
              <p className=" font-bold">contact@example.com</p>
            </div>
            <hr className=" border=[0.5px] border-gray-300 md:w-[70%]" />
            <div className="flex gap-5 pt-7 items-center text-xl pb-10 text-gray-600">
              <FaFacebookF className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
              <FaInstagram className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
              <FaYoutube className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
              <FaPinterestP className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
              <FaLinkedinIn className="hover:text-orange-600 transition ease-in duration-300 cursor-pointer" />
            </div>
          </div>
          {/* Main Container 2nd Child */}
          <div className=" lg:grid lg:col-span-3">
            <div className="">
              <Image src="/map.png" width={996} height={558} alt="Google map" />
            </div>
          </div>
        </div>
        {/* Form Container */}
        <div className=" space-y-7 pt-5 pb-40">
          <p className=" text-2xl lg:text-4xl font-medium mx-4">
            Fill up the form if you have any question
          </p>
          <div className=" space-y-4">
            <div className=" space-y-4 md:flex md:space-y-0 md:space-x-4">
              <input
                className=" p-2 px-4 bg-slate-100 w-full rounded-lg placeholder:font-medium placeholder:text-md outline-none"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                className=" p-2 px-4 bg-slate-100 w-full rounded-lg placeholder:font-medium placeholder:text-md outline-none"
                type="text"
                placeholder="Enter Your E-Mail"
              />
              <input
                className=" p-2 px-4 bg-slate-100 w-full rounded-lg placeholder:font-medium placeholder:text-md outline-none"
                type="text"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <textarea
              className=" p-2 px-4 bg-slate-100 w-full rounded-lg placeholder:font-medium placeholder:text-md outline-none"
              type="text"
              rows="4"
              placeholder="Enter Your Message"
            />
            <button className=" px-6 py-[7px] w-fit text-lg bg-[#F18203] outline outline-[0.5px] text-white rounded-full font-semibold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:px-10 lg:font-bold">
              Send Message
            </button>
          </div>
        </div>
        {/*  */}
      </Container>
    </div>
  );
};

export default MapComponent;
