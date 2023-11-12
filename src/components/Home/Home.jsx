import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import RegisterNow from "../RegisterNow/RegisterNow";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Articles />
      <RegisterNow/>
    </>
  );
};

export default Home;
