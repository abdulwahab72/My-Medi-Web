import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
import Rating_Star from "../Shop/Rating_Star";
import Image from "next/image";
const ProductCard = ({ product }) => {
  return (
    // main div
    <div className="border-[1px] pl-3 md:pl-0 space-y-1 w-[153px] md:w-[184px] lg:w-[199px] xl:w-[255px] bg-cover">
      <div className="h-[100px] md:h-[200px] relative flex justify-center items-center group bg-cover">
        {/* image */}
        <Image width={1000} height={1000}
          src={product.thumbnail}
          className=" pr-2 md:pl-2 h-[80px] md:h-[150px] w-[128px] md:w-[172px] lg:w-[190px] xl:w-[245px] bg-cover"
        />
        {/* side icons div */}
        <div className="md:group-hover:opacity-100 absolute right-0 space-y-3 opacity-0 transition-opacity ease-in duration-500 top-0">
          <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
            <AiOutlineHeart />
          </div>
          <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
            <BsFilterLeft />
          </div>
          <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
            <AiOutlineSearch />
          </div>
          <div className="p-2 bg-[#f0f2f5] rounded-[15px] hover:bg-[#ff9923] transition ease-in duration-500 text-[16px] text-[#103179]">
            <BsFillCartPlusFill />
          </div>
        </div>
      </div>
      {/* name and price */}
      <p className=" md:pl-3 text-xs lg:text-[16px] font-[400] text-[#103178] truncate ">
        {product.title}
      </p>
      <p className=" md:pl-3 text-xs lg:text-[16px] font-[400] text-[#103178] pt-[10px]">
        $ {product.price}
      </p>
      {/* star div */}
      <div className="flex pt-[7px] pb-[20px] md:pl-3">
        <Rating_Star rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
