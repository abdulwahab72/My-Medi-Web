"use client";
import React from "react";

// this is the main quntity seater
const SetQuntity = ({
  cartProduct,
  cartCounter,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center    py-2  ">
        <button
          onClick={handleQtyDecrease}
          className="border-[2px] border-slate-300 px-2 rounded hover:bg-blue-700 hover:text-white transition delay-100"
        >
          -
        </button>
        <div>{cartProduct.quantity} </div>
        <button
          onClick={handleQtyIncrease}
          className="border-[2px] border-slate-300 px-2 hover:bg-blue-700 hover:text-white  transition delay-100 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuntity;
