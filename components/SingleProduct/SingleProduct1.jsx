"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AiFillStar, AiOutlineTwitter } from "react-icons/ai";
import {
  BiLogoFacebook,
  BiLogoPinterestAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { FaRedditAlien } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import SetQuntity from "../cart/SetQuntity";
import { useCart } from "@/Context/useCart";
import Link from "next/link";

// this is where main function start

function SingleProduct1({ products }) {
  const { cartTotalQty, handleAddProductToCart, cartProducts } = useCart();
  // this state will store all the product detail of single product which will be added to cart
  useEffect(() => {
    setIsProductCart(false);

    if (cartProducts) {
      // this findIndex Methord is used to find where a value exists in an arry or not // products.id is the props that this componunt recive

      // REMEMBER NOT TO ADD {} IN ARROW FUNCTION IN FINDINDEX METHORD !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

      const existingIndex = cartProducts.findIndex(
        (item) => item.id === products.id
      );

      if (existingIndex > -1) {
        setIsProductCart(true);
      }
    }
  }, [cartProducts]);

  const [cartProduct, setcartProduct] = useState({
    id: products.id,
    name: products.title,
    description: products.description,
    category: products.category,
    brand: products.brand,
    selectedImg: products.thumbnail,
    quantity: 1,
    price: products.price,
  });

  // this state is used to tell weather this product is Already In Cart Or Not
  const [isProductInCart, setIsProductCart] = useState(false);

  // we use useEffect to check every time when every this componuent re renders

  // For Incressing the product Quntity
  const handleQtyIncrease = useCallback(() => {
    setcartProduct((pre) => {
      return { ...pre, quantity: pre.quantity + 1 };
    });
  }, []);

  // for decressing the product quntity
  const handleQtyDecrease = useCallback(() => {
    setcartProduct((pre) => {
      if (pre.quantity === 0) {
        return { ...pre, quantity: (pre.quantity = 1) };
      } else {
        return { ...pre, quantity: pre.quantity - 1 };
      }
    });
  }, []);

  //--------------------------------------------------------Testing---------------------------------------------------------------------------

  // here we are cheeking wehater everything working compleatly by console loging it .

  // console.log(products);

  // console.log("This Is CartProduct>>", cartProduct);
  // console.log(
  //   "This Is CartProducts>>>>>>>>>>>>>>>>>>>>>this is For Products in Cart>>",
  //   cartProducts
  // );

  return (
    <div>
      <div className="">
        <p className="text-[12px] bg-[#12a05c] text-[white] font-[600] w-[160px] text-center rounded-[10px]">
          Only {products?.stock} left in stock
        </p>
        <div className="text-[#103178] my-6">
          <p className="text-[12px] text-[#5b6c8f] md:text-[14px]">No brand</p>
          <p className="text-[24px] font-[600] lg:text-[30px] lg:font-[600]">
            {products?.title}
          </p>
          <div className="flex gap-4">
            <div className="flex pt-[7px]">
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
              <AiFillStar className="text-[#FF9923]" />
            </div>
            <p className="text-[14px] font-[400] mt-1">(1 review)</p>
          </div>
        </div>
        <hr />

        <hr />
        <div className="text-[#103178] font-[600] md:my-4 lg:text-[40px] lg:font-[600]">
          <p>$ {products?.price}</p>
        </div>
        {/* Product Quntity  */}

        <div className="">
          {/* For Add To Cart Button If Product Is Not In Cart  */}

          {isProductInCart ? (
            <>
              <button className="py-2 bg-orange-500 px-10 text-white mt-2 rounded-md">
                <Link href="/cart">View Cart</Link>
              </button>
              <p>Product Already Added</p>
            </>
          ) : (
            <>
              <div className=" ">
                <SetQuntity
                  cartProduct={cartProduct}
                  handleQtyIncrease={handleQtyIncrease}
                  handleQtyDecrease={handleQtyDecrease}
                />

                <button
                  className="py-2 bg-orange-500 px-10 text-white mt-2 rounded-md"
                  // here onClick We are making cartProduts Equal To cartProduct and cartProduct ++

                  onClick={() => handleAddProductToCart(cartProduct)}
                >
                  Add To Cart
                </button>
              </div>
            </>
          )}
        </div>

        {/* For thurmamiter section  */}
        <div className="text-[#103178] text-[16px] my-4">
          <div className="flex gap-4">
            <p className="font-[600]">Tags: </p>
            <p className="text-[#5b6c85]">Thermometer, Health</p>
          </div>
          <div className="flex gap-5">
            <p className="font-[600]">SKU: </p>
            <p className="font-[500]">AU110876</p>
          </div>
          {/* This div is for icons */}
          <div className="flex gap-2">
            <BiLogoFacebook className=" bg-[#3B5998] text-[white] text-[24px] p-1 rounded-[4px]" />
            <AiOutlineTwitter className=" bg-[#55ACEE] text-[white] text-[24px] p-1 rounded-[4px]" />
            <BiLogoPinterestAlt className=" bg-[#CB2027] text-[white] text-[24px] p-1 rounded-[4px]" />
            <BiLogoLinkedin className=" bg-[#176DBA] text-[white] text-[24px] p-1 rounded-[4px]" />
            <FaRedditAlien className=" bg-[#F84301] text-[white] text-[24px] p-1 rounded-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct1;
