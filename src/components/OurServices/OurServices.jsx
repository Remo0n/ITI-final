import "./OurServices.css";

const Services = () => {
  const Services = [
    {
      id: 1,
      img: "src/Assets/ser1.jpg",
      serviceName: "Find Your Vet",
      serviceDesc: "Find & choose your nearest vet clinic.  ",
    },
    {
      id: 2,
      img: "src/Assets/ser2.png",
      serviceName: "Find Your Shop",
      serviceDesc:
        "Find & choose your nearest shop for any supplies you need for your pet. ",
    },
    {
      id: 3,
      img: "src/Assets/ser3.png",
      serviceName: "Register Your Pet Profile",
      serviceDesc:
        "You can create a profile for your pet and save all its information.    ",
    },
  ];
  return (
    <section className="Services py-5 bg-warning-subtle">
      <div className="container">
        <h2 className="text-center text-dark mb-5 fw-bold fs-1">
          Our Services
        </h2>
        <div className="cards d-flex justify-content-between flex-wrap ">
          {Services.map((service) => {
            return (
              <div key={service?.id} className=" col-lg-3 col-12 mb-4 ">
                <div className="card d-flex align-items-center flex-column shadow rounded ">
                  <figure className=" rounded w-100 h-100">
                    <img
                      className="rounded w-100 h-100"
                      src={service?.img}
                      alt=""
                    />
                  </figure>
                  <div className="cardbody rounded pt-2 px-4 text-center ">
                    <h3 className="fs-5 fw-bold">{service?.serviceName}</h3>
                    <p>{service?.serviceDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
