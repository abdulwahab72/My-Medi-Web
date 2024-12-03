"use client";
import { useCart } from "@/Context/useCart";
import SetQuntity from "@/components/cart/SetQuntity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemContent = ({ key, item }) => {
  const { handleRemoveProduct, handleCartQtyIncrease, handleCartQtyDecrease } =
    useCart();
  return (
    <div className="grid md:grid-cols-5 grid-cols-4 text-md font-[400] text-[#103178] gap-4 items-center mt-6 ">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-3 items-center ">
        <div className="w-[90px] relative aspect-square hidden md:block">
          <Link href={`/${item.id}`}>
            <Image src={item.selectedImg} fill className="object-contain" />
          </Link>
        </div>
        <div className="flex flex-col justify-between ">
          <Link href={`/${item.id}`}>{item.name}</Link>

          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => {
                handleRemoveProduct(item);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="justify-self-center hidden md:block">{item.price}</div>
      <div className="justify-self-centerz">
        <SetQuntity
          cartCounter={true}
          cartProduct={item}
          handleQtyIncrease={() => {
            handleCartQtyIncrease(item);
          }}
          handleQtyDecrease={() => {
            handleCartQtyDecrease(item);
          }}
        />
      </div>
      <div className="justify-self-end">{item.price * item.quantity}</div>
    </div>
  );
};

export default ItemContent;
