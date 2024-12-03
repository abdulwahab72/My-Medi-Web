import React from "react";
import Container from "../layout_components/Container";

const Second_Component = () => {
  return (
    <div className="border-t border-b pb-16 lg:py-16 ">
      <Container>
        <div>
          {/* 1 */}
          <div className=" text-center py-10">
            <h2 className=" text-[34px] font-[600] text-[#103178] leading-[40px]">
              Effective and reliable
              <br />
              protection for your teeth
            </h2>
            <p className="text-[#5B6C9D] text-[16px] font-[500] my-[20px]">
              The brush handle fits perfectly in the hand, is slim and
              beautifully made.
            </p>
          </div>

          {/* 2 */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
            {/* 2 1 */}
            <div className="md:border-r border-b md:border-b-0  grid grid-cols-1 justify-items-center py-10 md:py-0  ">
              <img src="./icon1.png" className="my-5 w-[48px] h-[48px]" />

              <h3 className="text-[19px] text-[#103178] leading-[26px] font-[600] text-center">
                Health Certificate 2000 <br />
                professional care
              </h3>
              <p className=" text-[16px] text-[#103178] leading-[24px] text-center mt-4 ">
                The highest quality and protection for your teeth
              </p>
            </div>

            {/* 2 2 */}
            <div className="border-b  md:border-r md:border-b-0  grid grid-cols-1 justify-items-center  py-10  md:py-0  ">
              <img src="./icon2.png" className="my-5 w-[48px] h-[48px]" />

              <h3 className="text-[19px] text-[#103178] leading-[26px] text-center font-[600]">
                Sonic cleaning <br />
                and whitening power
              </h3>
              <p className=" text-[16px] text-[#103178] leading-[24px] text-center mt-4">
                The highest quality and protection for your teeth
              </p>
            </div>

            {/* 2 3 */}
            <div className="grid grid-cols-1 justify-items-center   py-10 md:py-0   ">
              <img src="./icon3.png" className="my-5 w-[48px] h-[48px]" />

              <h3 className="text-[19px] text-[#103178] leading-[26px] font-[600] text-center">
                3 types <br />
                of cleaning tips
              </h3>
              <p className=" text-[16px] text-[#103178] leading-[24px] text-center mt-4">
                The highest quality and protection for your teeth
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Second_Component;
