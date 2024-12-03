import Container from "@/components/layout_components/Container";
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="py-10">
      <Container className=" flex flex-col justify-center items-center text-start ">
        <img className=" w-32 lg:w-40 py-4" src="/logo.png" alt="" />
        <div className=" text-[#103178] border border-gray-100 rounded-xl shadow-lg py-6 px-4 md:w-[300px]">
          <p className=" mx-1 text-3xl font-medium py-4">Login</p>
          <div className=" flex flex-col space-y-5">
            <div className=" flex flex-col text-sm font-semibold">
              <label className=" mx-1" htmlFor="">
                Username or email address*
              </label>
              <input
                className=" py-1 px-3 bg-blue-100 rounded-sm outline-none"
                type="text"
                required
              />
            </div>
            <div className=" flex flex-col text-sm font-semibold">
              <label className=" mx-1" htmlFor="">
                Password*
              </label>
              <input
                className=" py-1 px-3 bg-blue-100 rounded-sm outline-none"
                type="password"
                required
              />
            </div>
            {/* Button Section */}
            <div className="flex space-x-6 mx-1 items-center">
              <button className="text-base px-3 py-1 md:text-lg bg-[#F18203] border border-[#F18203] text-white rounded-lg font-bold hover:bg-white hover:text-[#F18203] transition ease-in duration-300 cursor-pointer md:w-fit">
                Log In
              </button>
              <label className=" flex font-medium text-sm cursor-pointer">
                <input className=" mx-2 cursor-pointer" type="checkbox" />{" "}
                Remember me
              </label>
            </div>
            <Link href="/forgot-password">
              <p className=" mx-1 underline text-sm font-semibold cursor-pointer hover:text-[#F18203] transition ease-in duration-300">
                Forgot your password?
              </p>
            </Link>
            <p className=" text-sm font-medium">
              Dont have account yet?{" "}
              <Link href="/register">
                <span className=" mx-1 underline hover:text-[#F18203] cursor-pointer transition ease-in duration-300">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
