"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Use_product_state } from "@/Context/Store";
import Link from "next/link";
import ProductCard from "../Home/ProductCard";
import Rating_Star from "./Rating_Star";

import Slider from "@mui/material/Slider";
import { LiaNewspaperSolid } from "react-icons/lia";

const ShopComponent = () => {
  const [products, setProducts] = useState([]);
  const [catData, setCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allp = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    allp();
  }, []);
  const fetchCategoryData = async (category) => {
    let apiUrl = "https://dummyjson.com/products";
    apiUrl = `https://dummyjson.com/products/category/${category}`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setCatData(data.products || []); // Update categoryData state here
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  const handleCategory = async (e) => {
    dispatch_filter({
      type: "Category_Filter",
      payload: e.target.value,
    });
    setSelectedCategory(category);
    await fetchCategoryData(category);
    console.log(selectedCategory);
  };
  const {
    filter: { sort, rate, price_range, category },
    dispatch_filter,
  } = Use_product_state();

  const {
    product: { searchkey },
  } = Use_product_state();

  const handleChange = (event, newValue) => {
    dispatch_filter({
      type: "Price_Range",
      payload: newValue,
    });
  };

  const filtered_Product = () => {
    let newproduct = products;
    if (sort) {
      newproduct = newproduct.sort((a, b) => {
        return sort === "low" ? a.price - b.price : b.price - a.price;
      });
    }
    if (rate) {
      newproduct = newproduct.filter((i) => {
        return Math.round(i.rating) === rate;
      });
    }
    const min = price_range[0];
    const max = price_range[1];
    if (price_range) {
      newproduct = newproduct.filter((i) => i.price >= min && i.price <= max);
    }
    // Apply category filter

    if (category) {
      newproduct = newproduct.filter((i) => i.category === category);
    }

    return newproduct;
  };

  return (
    <div>
      {/*Shop Main Div */}
      <div className=" grid grid-cols-4 space-x-1 lg:grid lg:grid-cols-5 ">
        {/*Shop Sidebar Div */}
        <div className=" grid col-span-1 lg:grid lg:col-span-1">
          <div>
            <div className="text-[#103178] space-y-10">
              <p className=" text-lg lg:text-5xl font-semibold"> Shop</p>
              <div className=" text-xs md:text-lg font-medium space-y-5 ">
                <p className="">Categories</p>
                <div className=" flex flex-col space-y-2 items-start text-sm">
                  <button
                    onClick={handleCategory}
                    value=""
                    className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer"
                  >
                    All Products
                  </button>
                  <button
                    onClick={handleCategory}
                    value="smartphones"
                    className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer"
                  >
                    Smart Phones
                  </button>
                  <button
                    onClick={handleCategory}
                    value="fragrances"
                    className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer"
                  >
                    Fragrances
                  </button>
                  <button
                    onClick={handleCategory}
                    value="skincare"
                    className="hover:text-orange-500 transition ease-in duration-300 cursor-pointer"
                  >
                    Skincare
                  </button>
                </div>
              </div>
              {/*Assending/Desending Filter Start */}
              <div className=" text-xs lg:text-base font-medium space-y-5 ">
                <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
                <p className=" text-xs md:text-lg">Price Sort</p>

                <div class="flex">
                  <input
                    onChange={(e) => {
                      dispatch_filter({
                        type: "Filter_Sort",
                        payload: e.target.value,
                      });
                    }}
                    value="low"
                    type="radio"
                    name="hs-default-radio"
                    class="shrink-0 border-gray-200 rounded-full text-[#103178] focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                  />
                  <label
                    for="hs-default-radio"
                    class="text-sm text-[#103178] ms-2"
                  >
                    Assending
                  </label>
                </div>

                <div class="flex">
                  <input
                    onChange={(e) => {
                      dispatch_filter({
                        type: "Filter_Sort",
                        payload: e.target.value,
                      });
                    }}
                    value="high"
                    type="radio"
                    name="hs-default-radio"
                    class="shrink-0 border-gray-200 rounded-full text-[#103178] focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    id="hs-default-radio"
                  />
                  <label
                    for="hs-default-radio"
                    class="text-sm text-[#103178] ms-2"
                  >
                    Desending
                  </label>
                </div>
              </div>
              {/* Assending/Desending Filter End */}
              {/* Star Rating Filter Start */}
              <div className=" text-xs lg:text-base font-medium space-y-5 ">
                <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
                <p className=" text-xs md:text-lg">By Rating</p>
                <Rating_Star
                  rating={rate}
                  onClick={(i) => {
                    dispatch_filter({
                      type: "Filter_Rating",
                      payload: i + 1,
                    });
                  }}
                />
              </div>
              {/* Star Rating Filter End */}

              {/*Price Range Slider */}
              <div className=" space-y-7 ">
                <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
                <div className=" space-y-1">
                  <div className=" w-[70%] md:w-[80%]">
                    <label
                      for="customRange3"
                      class="mb-2 inline-block text-xs md:text-lg font-medium"
                    >
                      By Price
                    </label>
                    <Slider
                      className=" text-yellow-600"
                      getAriaLabel={() => "Temperature range"}
                      value={price_range}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                    />
                  </div>
                  <p className=" text-gray-400 text-[8px] md:text-xs">
                    Price: $0 - $ 1000
                  </p>
                </div>
                <hr className="  border-gray-200 w-[70%] md:w-[80%]" />
              </div>
              {/*Price Range Slider End*/}
              {/*Checkbox Product Filter Start */}
              <div className=" text-xs lg:text-base font-medium space-y-5 ">
                <p className=" text-xs md:text-lg">Brands</p>
                <label className=" flex cursor-pointer">
                  <input className=" mr-2 cursor-pointer" type="checkbox" />
                  BestPharm
                </label>
                <label className=" flex cursor-pointer ">
                  <input className="mr-2 cursor-pointer" type="checkbox" />
                  HeartRate
                </label>
                <label className=" flex cursor-pointer">
                  <input className="mr-2 cursor-pointer" type="checkbox" />
                  HeartShield
                </label>
                <label className=" flex cursor-pointer">
                  <input className="mr-2 cursor-pointer" type="checkbox" />{" "}
                  MyMedi
                </label>
                <label className=" flex cursor-pointer">
                  <input className="mr-2 cursor-pointer" type="checkbox" />{" "}
                  Pharmy
                </label>
                <label className=" flex cursor-pointer">
                  <input className="mr-2 cursor-pointer" type="checkbox" />{" "}
                  ILoveHealth
                </label>
              </div>
              {/*Checkbox Product Filter End */}

              <div className="">
                <button
                  onClick={(e) => {
                    dispatch_filter({
                      type: "Filter_Clear",
                    });
                  }}
                  className=" bg-yellow-600 py-2 px-6 mb-20 rounded-lg text-white font-semibold hover:bg-yellow-500 transition ease-in duration-300 "
                >
                  Clear Filter
                </button>
              </div>
              {/* Sidebar banner start*/}
              <div className=" space-y-7 ">
                <div className="w-[80%]">
                  <Image
                    src="/banner-sidebar1.jpg"
                    width={436}
                    height={668}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              {/* sidebar banner End*/}
            </div>
          </div>
        </div>
        {/*Shop Content Div */}
        <div className=" grid col-span-3 lg:grid lg:col-span-4">
          <div className=" flex flex-col items-center md:text-start">
            <div className="text-[#103178] space-y-10 pb-20 w-[220px] md:w-full">
              <p className=" text-lg lg:text-5xl font-semibold"> Shop Now</p>
              <div className=" grid grid-cols-1 place-content-center place-items-center md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 ">
                {filtered_Product()
                  ?.filter((p) => p.title.toLowerCase().includes(searchkey))
                  .map((product, i) => (
                    <Link href={`/shop/${product?.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
