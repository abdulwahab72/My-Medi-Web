import BannerComponent from "@/components/Home/BannerComponent";
import BestSellers from "@/components/Home/BestSellers";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Heroicons from "@/components/Home/Heroicons";
import LatestOffers from "@/components/Home/LatestOffers";
import LatestProducts from "@/components/Home/LatestProducts";
import Slider from "@/components/Home/Slider";
import PreFooter from "@/components/layout_components/PreFooter";

const getData = async () => {
  const result = await fetch("https://dummyjson.com/products");

  const products = await result.json();

  return products;
};
export default async function Home() {
  const products = await getData();
  return (
    <main className="">
      <Slider />
      <Heroicons />

      <LatestProducts products={products} />

      <LatestOffers />
      <BestSellers products={products} />
      <FeaturedProducts products={products} />
      <BannerComponent />
      <PreFooter />
    </main>
  );
}
