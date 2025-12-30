import HeroSection from "./HeroSection";
import Categories from "./Categories";
import FeaturedVendors from "./FeaturedVendors";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <Categories />
      <FeaturedVendors />
    </div>
  );
};

export default Home;
