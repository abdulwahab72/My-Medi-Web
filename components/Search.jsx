"use client";
import { Use_product_state } from "@/Context/Store";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const {
    product: { searchkey },
    dis,
  } = Use_product_state();

  return (
    <Link href="/shop">
      <div className="bg-[#F0F2F5] py-3 rounded-full flex items-center justify-between ">
        <input
          onChange={(e) => {
            dis({
              type: "SEARCH",
              payload: e.target.value,
            });
          }}
          type="text"
          placeholder="Search For Products"
          className="bg-[#F0F2F5] lg:pr-20 xl:pr-44 pl-10 rounded-full outline-none placeholder:text-[#5b6c8f] 
      placeholder:text-[14px] placeholder:font-[600]"
        />
        <FiSearch className="text-[#103178] font-bold text-[20px] mr-4 " />
      </div>
    </Link>
  );
};

export default Search;
