import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="bg-[#F0F2F5] py-3 rounded-full flex items-center justify-between ">
      <input
        type="text"
        placeholder="Search For Products"
        className="bg-[#F0F2F5] lg:pr-20 xl:pr-44 pl-10 rounded-full outline-none placeholder:text-[#5b6c8f] 
      placeholder:text-[14px] placeholder:font-[600]"
      />
      <FiSearch className="text-[#103178] font-bold text-[20px] mr-4 " />
    </div>
  );
};

export default SearchBar;
