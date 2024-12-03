"use client";
import { useCart } from "@/Context/useCart";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import ItemContent from "./ItemContent";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  // to check weather there is product in Cart or Not
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="min-h-[400px] py-10 flex flex-col justify-center">
        <div className="text-center">Your Cart is Empty</div>

        <div className="flex items-center justify-center   ">
          <IoArrowBackCircle className=" text-orange-600 text-3xl" />

          <Link href="/" className="hover:text-blue-600 text-2xl">
            Click Hear To Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] md:px-8 px-4 xl:px-16">
      <div className="flex gap-1 text-[#103178] mt-6">
        <h1 className="text-4xl font-[600]  ">ShoppingCart</h1>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-5  gap-1 text-md font-[600] text-[#103178] md:gap-4 items-center mt-8">
        <div className="col-span-2 justify-self-start ">PRODUCT</div>
        <div className=" justify-self-center hidden md:block">PRICE</div>
        <div className=" justify-self-center">QUANTITY </div>
        <div className=" justify-self-end font-bold text-[20px]">TOTAL</div>
      </div>
      {/* second section  */}

      <div>
        {cartProducts &&
          cartProducts.map((item) => <ItemContent key={item.id} item={item} />)}
      </div>

      {/* Clear button  */}
      <div className="mt-10 flex justify-between border-t pt-8 ">
        <div className="md:w-[400px] ">
          <button
            className="bg-[#103178] hidden md:block
          
           hover:bg-orange-500 duration-150 delay-150 transition
          
          
          py-2 px-3 font-bold  text-white rounded-full"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* for subtile  */}
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between font-[700] text-xl">
            <h3>SUBTOTAL</h3>
            <p>$ {cartTotalAmount}</p>
          </div>
          <p>Taxes and Shipping calculate at checkout</p>
          <button className="bg-orange-500 hover:bg-[#103178] duration-150 delay-150 transition p-2 font-bold  text-white rounded-full">
            Proceed to CheckOut
          </button>
          <Link
            href="/shop"
            className="hover:text-orange-500  duration-150 delay-150 text-[#103178]  "
          >
            <p>Continue Shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
