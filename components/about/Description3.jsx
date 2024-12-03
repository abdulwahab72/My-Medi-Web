import React from "react";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";

const Description3 = () => {
  return (
    <div className="2xl:px-6">
      <div className="text-[#103178] py-[50px]">
        {/* 1 */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 ">
          {/* 1 1 */}
          <div>
            <div className="overflow-hidden  xl:w-[604px]   md:w-[350px] lg:w-[482px] xl:mt-[35px] lg:mt-[45px]  w-full  ">
              <Image
                src="/des3-img.jpg"
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

          {/* 2 */}

          <div>
            <h3 className="text-[26px]  font-[600] leading-[30px] my-[20px] ">
              Just a few seconds to measure your body temperature. Up to 5
              users!
            </h3>
            <h3 className="text-[22px]  font-[400] leading-[26px]  my-[20px] ">
              The battery lasts up to 2 years.
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
                Study history up to 30 days
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Up to 5 users simultaneously
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Has HEALTH certificate
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description3;
