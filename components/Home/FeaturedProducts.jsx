"use client";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsFilterLeft, BsFillCartPlusFill } from "react-icons/bs";
import Container from "../layout_components/Container";
import Link from "next/link";
import ProductCard from "./ProductCard";
const FeaturedProducts = ({ products }) => {
  return (
    <div className=" py-10">
      <Container>
        <div className="xl:mx-4 ">
          <h3 className="text-[30px] text-[#103178] font-[600] my-[20px] text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5  xl:grid xl:grid-cols-5">
            {/* mapping */}
            {products?.products?.slice(0, 10).map((product, i) => (
              // card
              <Link href={`shop/${product?.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
