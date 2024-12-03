import React from "react";
import { MdAdd } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import Container from "../layout_components/Container";
const FrequentlyDeal = () => {
  return (
    <Container>
      <div className=" pb-20">
        <p className="text-[22px] text-[#103178] font-[600]">
          Frequently bought together
        </p>
        <div className="border-[4px] border-[#ff9923] rounded-[4px]">
          <div className="md:flex">
            <div className=" flex justify-center my-2 md:p-[15px]">
              <img
                src="./Blade.png"
                alt="Blade"
                className="w-[120px] h-[120px] md:w-[151px] md:h-[151px] lg:w-[215px] lg:h-[215px] "
              />
            </div>
            <hr className="relative" />
            <div className="hidden md:block md:relative md:border-[1px]" />
            <div className="flex justify-center items-center">
              <MdAdd className="text-[white] bg-[#103178] p-1 text-[24px] rounded-[12px] absolute" />
            </div>
            <div className=" flex justify-center my-2 md:p-[15px]">
              <img
                src="./Bolt.png"
                alt="bolt"
                className="w-[120px] h-[120px] md:w-[151px] md:h-[151px] lg:w-[215px] lg:h-[215px]"
              />
            </div>
            <hr className="relative" />
            <div className="hidden md:block md:relative md:border-[1px]" />
            <div className="flex justify-center items-center">
              <MdAdd className="text-[white] bg-[#103178] p-1 text-[24px] rounded-[12px] absolute " />
            </div>
            <div className=" flex justify-center my-2 md:p-[15px]">
              <img
                src="./Bolt.png"
                alt="bolt"
                className="w-[120px] h-[120px] md:w-[151px] md:h-[151px] lg:w-[215px] lg:h-[215px]"
              />
            </div>
            <hr className="relative" />
            <div className="hidden md:block md:relative md:border-[1px]" />
            <div className="flex justify-center items-center">
              <MdAdd className="text-[white] bg-[#103178] p-1 text-[24px] rounded-[12px] absolute " />
            </div>
            <div className=" flex justify-center my-2 md:p-[15px]">
              <img
                src="./Bolt.png"
                alt="bolt"
                className="w-[120px] h-[120px] md:w-[151px] md:h-[151px] lg:w-[215px] lg:h-[215px]"
              />
            </div>
          </div>
          <hr />
          <div className="md:flex">
            <div className=" text-[#103178] text-[14px] font-[500] my-6 mx-6 space-y-2">
              <div className="grid grid-cols-10">
                <TiTick className="bg-[#103178] text-[white] text-[16px] p-[0.1px] rounded-[4px] mt-1 grid col-span-1" />
                <p className="grid col-span-9">
                  This Product: Blood Pressure Monitor - Price
                </p>
              </div>
              <div className="grid grid-cols-10">
                <TiTick className="bg-[#103178] text-[white] text-[16px] p-[0.1px] rounded-[4px] mt-1 grid col-span-1" />
                <p className="grid col-span-9">
                  3 Layer Disposable Protective Face Masks - Price
                </p>
              </div>
              <div className="grid grid-cols-10">
                <TiTick className="bg-[#103178] text-[white] text-[16px] p-[0.1px] rounded-[4px] mt-1 grid col-span-1" />
                <p className="grid col-span-9">
                  GAnti-Dust Filter, Breathable, 3 Layer of Purifying - Price
                </p>
              </div>
              <div className="grid grid-cols-10">
                <TiTick className="bg-[#103178] text-[white] text-[16px] p-[0.1px] rounded-[4px] mt-1 grid col-span-1" />
                <p className="grid col-span-9">
                  Disposable Face Mask for Unisex - Price
                </p>
              </div>
            </div>
            <div className="mx-6 my-5">
              <p className="text-[14px] text-[#103178] font-[500]">
                Buy Selected for:
              </p>
              <p className="text-[26px] text-[#ff9923] font-[600]">Price</p>
              <button className="bg-[#ff9923] text-[white] p-2 rounded-[30px] text-[16px] font-[500] px-4 my-2 md:px-3 lg:px-8 hover:bg-white outline outline-2 hover:text-[#ff9923] transition ease-in duration-300">
                Add all to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FrequentlyDeal;
