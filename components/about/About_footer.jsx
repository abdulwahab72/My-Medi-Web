import React from "react";

const About_footer = () => {
  return (
    <div className="flex justify-center text-[#103178] content-center items-center h-[400px] border-y">
      <div>
        <h1 className="text-[40px]  font-[600] leading-[50px] text-left ">
          Join our newsletter and
          <br />
          get $20 discount for your first order
        </h1>
        <div className="mt-4">
          <input
            className="bg-[#F0F2F5] pr-44 pl-10 rounded-full outline-none placeholder:text-[#5b6c8f] 
                placeholder:text-[14px] placeholder:font-[600] py-3"
          />{" "}
          <button className=" px-6 py-3 bg-[#F18203] text-white rounded-full font-bold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:px-3 md:py-2 md:w-fit lg:px-4 lg:py-3">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default About_footer;
