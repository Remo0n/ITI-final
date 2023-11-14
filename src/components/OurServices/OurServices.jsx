import "./OurServices.css";
import SingleService from "./SingleService";

const Services = () => {
  const Services = [
    {
      id: 1,
      serviceFigure: "src/Assets/ser1.jpg",
      serviceTitle: "Find Your Vet",
      serviceDesc: "Find & choose your nearest vet clinic.  ",
    },
    {
      id: 2,
      serviceFigure: "src/Assets/ser2.png",
      serviceTitle: "Find Your Shop",
      serviceDesc:
        "Find & choose your nearest shop for any supplies you need for your pet. ",
    },
    {
      id: 3,
      serviceFigure: "src/Assets/ser3.png",
      serviceTitle: "Register Your Pet Profile",
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
        <div className="row ">
          {Services.map(
            (service) => (
              <SingleService key={service.id} serviceData={service} />
            )
            // <div key={service?.id} className=" col-lg-3 col-12 mb-4 ">
            //   <div className="card d-flex align-items-center flex-column shadow rounded ">
            //     <figure className=" rounded w-100 h-100">
            //       <img
            //         className="rounded w-100 h-100"
            //         src={service?.img}
            //         alt=""
            //       />
            //     </figure>
            //     <div className="cardbody rounded pt-2 px-4 text-center ">
            //       <h3 className="fs-5 fw-bold">{service?.serviceName}</h3>
            //       <p>{service?.serviceDesc}</p>
            //     </div>
            //   </div>
            // </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
