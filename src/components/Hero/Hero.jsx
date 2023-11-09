// import Carousel from "react-bootstrap/Carousel";
// import p1 from "../../Assets/1.png";
// import p2 from "../../Assets/2.png";
// import p3 from "../../Assets/3.png";
import p4 from "../../Assets/4.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <section className=" hero py-5 bg-warning-subtle ">
      <div className="container d-flex align-items-center flex-wrap -content-sm-center ">
        <div className="hero_info col-lg-5 col-12">
          <h1 className="hero_info_title text-white fw-light mb-4">
            We Care <span className="fw-bold">Your Pets</span>
          </h1>
          <p className="hero_info_desc text-white fs-3">
            Welcome to your pet's second home
          </p>
        </div>
        <figure className="hero_gallery col-lg-7 col-12">
          <img className="w-100" src={p4} alt="hero_img" />
        </figure>
      </div>
    </section>
  );
};

export default Hero;

/*   <Carousel indicators={false}>
    //   <Carousel.Item interval={50000}>
    //     { <img className="w-100" src={p1} /> }

    //     <div className="d-flex align-items-center justify-content-center">
    //       <div className="hero_info col-4">
    //         <h1 className="hero_info_title text-white fw-light">
    //           We Care <span className="fw-bold">Your Pets</span>
    //         </h1>
    //         home
    //         <p className="hero_info_desc">Welcome to your pet's second </p>
    //       </div>
    //       <figure className="hero_gallery col-6">
    //         <img className="w-100" src={p4} alt="hero_img" />
    //       </figure>
    //     </div>
    //   </Carousel.Item>
    //   {/* <Carousel.Item>
    //     <img className="w-100" src={p2} />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="w-100" src={p3} />
    //   </Carousel.Item> }
    // </Carousel>*/
