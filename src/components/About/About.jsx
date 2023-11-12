// import p1 from "../../Assets/1.png";
import "./About.css";
// import homeless from "../../assets/homeless.jpg";
import homeless from "../../assets/Homeless Animals Need You Now.mp4";

const About = () => {
  return (
    <section className="about bg-warning-subtle">
      <div className="about_title position-relative col-12">
        <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
          About Us
        </h2>
      </div>

      <div className="vision py-5">
        <div className="container">
          <h2 className="text-center fw-bold fs-1 mb-5">Our Vision </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h3 className="mb-3 d-flex align-items-center ">
                We Ourselves are pet's owners.{" "}
              </h3>
              <h3 className="mb-3 d-flex align-items-center ">
                Pets deserve to be treated well.
              </h3>

              <h3 className="mb-3 d-flex align-items-center ">
                Please have some mercy upon them.{" "}
              </h3>
              <h3 className="d-flex align-items-center ">
                We aim to give them what they deserve.{" "}
              </h3>
            </div>
            <figure className="col-lg-6 col-12">
              <video controls className="rounded w-100 shadow" src={homeless} alt="" />
            </figure>
          </div>
        </div>
      </div>
      <div className="ourteam py-5">
        <h2 className="text-center fw-bold fs-1 mb-5">Our Team</h2>
      </div>

      {/* <figure className="col-12">
        <img className="w-100" src={p1} alt="dogimg" />
      </figure> */}
    </section>
  );
};

export default About;
