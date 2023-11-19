import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import RegisterNow from "../RegisterNow/RegisterNow";
import ShopSwiper from "../Shop/ShopSwiper";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Articles />
      <ShopSwiper />
      <RegisterNow />
    </>
  );
};

export default Home;
