import FrequentlyDeal from "@/components/SingleProduct/FrequentlyDeal";
import SingleProduct1 from "@/components/SingleProduct/SingleProduct1";
import Container from "@/components/layout_components/Container";
import React from "react";
import Single_ProductDetailsCarousel from "./(components)/Single_ProductDetailsCarousel";

const GetData = async ({ id }) => {
  try {
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    if (!result.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const products = await result.json();
    return products;
  } catch (error) {
    // return console.error(error); // You might want to handle errors differently
  }
};

const SinglePage = async ({ params: id }) => {
  const data = await GetData(id);

  const products = data;
  return (
    <div>
      <Container>
        <div className="xl:mx-4 py-10 ">
          <div className="grid md:grid-cols-3 grid-cols-1 ">
            {/* <div className="my-10">
              <img
                src={products?.thumbnail}
                className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] lg:w-[600px] lg:h-[600px]"
              />
              <img
                src={products?.thumbnail}
                alt=""
                className="w-[70px] h-[70px] border-[1px] border-black lg:mt-2"
              />
            </div> */}
            <div className="col-span-2">
              <Single_ProductDetailsCarousel images={products} />
            </div>
            <div className="bg-gray-100 px-4 py-10 rounded-e-sm shadow-2xl ">
              <SingleProduct1 products={products} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SinglePage;
