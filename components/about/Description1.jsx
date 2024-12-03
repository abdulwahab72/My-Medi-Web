import React from "react";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";

const Description1 = () => {
  return (
    <div className="2xl:px-6">
      <div className="text-[#103178] py-[50px]">
        <h2 className="text-[34px]  font-[600] leading-[40px] text-center my-[20px]">
          Your home medical provider now also online
        </h2>
        {/* 2 */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 ">
          {/* 2 1 */}
          <div>
            <div className="overflow-hidden  xl:w-[604px]   md:w-[350px] lg:w-[482px] xl:mt-[35px] lg:mt-[45px]  w-full  ">
              <Image
                src="/des1-img.jpg"
                height={344}
                width={604}
                className="hover:scale-110 transition ease-in cursor-pointer overflow-hidden delay-150 lg:w-[482px] lg:h-[300px]

                md:w-[350px] md:mt-[25px]
                
                xl:w-[604px] xl:h-[344px]
                w-full
                
                "
              />
            </div>
          </div>

          {/* 2 2 */}

          <div>
            <h3 className="text-[26px]  font-[600] leading-[30px] my-[20px] ">
              Top quality products and proven suppliers with quality
              certificates!
            </h3>
            <h3 className="text-[22px]  font-[400] leading-[26px]  my-[20px] ">
              They have CEE 2020 certificate.
            </h3>

            <p className="text-[16px]  font-[400] leading-[26px]  my-[26px] ">
              Hundreds of thousands of products at bargain prices. Completely
              the needs of home medicine chest and professional offices.
              Effective and reliable protection for your teeth. The brush handle
              fits perfectly in the hand, is slim and beautifully made.
            </p>
            <ul>
              {/* check list  */}
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Study history up to 30 days
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Study history up to 30 days
              </li>
              <li className="gap-2 flex items-center text-[14px]  font-[400] leading-[20px] ">
                <BsCheck className="text-[30px] text-green-600 font-[600]" />
                Study history up to 30 days
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description1;
