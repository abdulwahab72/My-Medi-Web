import Container from "@/components/layout_components/Container";
import React from "react";

const Login = () => {
  return (
    <div className="py-10">
      <Container className=" flex flex-col justify-center items-center text-start ">
        <img className=" w-32 lg:w-40 py-4" src="/logo.png" alt="" />
        <div className=" text-[#103178] border border-gray-100 rounded-xl shadow-lg py-6 px-4 md:w-[300px]">
          <p className=" mx-1 text-2xl font-medium pb-2">
            Forgot your password?
          </p>
          <p className=" mx-1 text-sm font-medium pb-5">
            Enter the email address or mobile phone number. <br />
          </p>
          <div className=" flex flex-col space-y-5">
            <div className=" flex flex-col text-sm font-semibold">
              <label className=" mx-1" htmlFor="">
                Phone Number or Email Address*
              </label>
              <input
                className=" py-1 px-3 bg-blue-100 rounded-sm outline-none"
                type="text"
                required
              />
            </div>
            {/* Button Section */}
            <div className="flex space-x-6 mx-1 items-center">
              <button className=" px-6 py-2 text-xs bg-[#F18203] border border-[#F18203] text-white rounded-lg font-bold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:w-fit">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
