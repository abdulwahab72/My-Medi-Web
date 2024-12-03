import ShopComponent from "@/components/Shop/ShopComponent";
import Container from "@/components/layout_components/Container";
import React from "react";

const getData = async () => {
  const result = await fetch("https://dummyjson.com/products");
  const products = await result.json();
  return products;
};

const Shop = async () => {
  const products = await getData();
  return (
    <div>
      <Container>
        <ShopComponent products={products} />
      </Container>
    </div>
  );
};

export default Shop;
