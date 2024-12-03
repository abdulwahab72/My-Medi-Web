import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import ProductCard from "./ProductCard";
const Category2 = ({ products }) => {
  return (
    <>
      {/* swiper start */}
      <Swiper
        // swiper navigation
        navigation={true}
        modules={[Pagination, Navigation]}
        // breakpoints
        breakpoints={{
          375: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1366: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.products?.map((product, i) => (
          <SwiperSlide className="xl:border-[0px]">
            <Link href={`shop/${product?.id}`}>
              {/* main div */}
              <ProductCard product={product} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category2;
