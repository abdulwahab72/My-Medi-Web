import React from "react";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";

const Description2 = () => {
  return (
    <div className="2xl:px-6">
      <div className="text-[#103178] py-[50px]">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 ">
          {/* For Mobile  */}
          <div className="overflow-hidden md:hidden block  xl:w-[604px]    md:w-[350px] lg:w-[482px] xl:mt-[35px] lg:mt-[45px] xl:h-[344px] lg:h-[300px] w-full  ">
            <Image
              src="/des2-img.jpg"
              height={344}
              width={604}
              className="hover:scale-110 transition ease-in overflow-hidden delay-150 lg:w-[482px] lg:h-[300px]

                md:w-[350px] md:mt-[25px]
                
                xl:w-[604px] xl:h-[344px]
                w-full
                
                "
            />
          </div>

          {/* 1 */}
          <div>
            <h3 className="text-[26px]  font-[600] leading-[30px] my-[20px] ">
              Many years of experience and a high level of consumer confidence
            </h3>
            <h3 className="text-[22px]  font-[400] leading-[26px]  my-[20px] ">
              Developed for over 30 years on the market
            </h3>

            <p className="text-[16px]  font-[400] leading-[26px]  my-[26px] ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered altevration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </p>
            <ul>
              {/* check list  */}
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Proin nec lectus dolor.
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Curabitur egestas molestie lorem sed pharetra
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Integer volutpat efficitur tellus vel tempus.
              </li>
            </ul>
          </div>

          {/* 2  */}

          <div className="overflow-hidden hidden md:block  xl:w-[604px]    md:w-[350px] lg:w-[482px] xl:mt-[35px] lg:mt-[45px] xl:h-[344px] lg:h-[300px] w-full  ">
            <Image
              src="/des2-img.jpg"
              height={344}
              width={604}
              className="hover:scale-110 cursor-pointer transition ease-in overflow-hidden delay-150 lg:w-[482px] lg:h-[300px]

                md:w-[350px] md:mt-[25px]
                
                xl:w-[604px] xl:h-[344px]
                w-full
                
                "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description2;
