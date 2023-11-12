import { Link } from "react-router-dom";
import runcat from "../../assets/runningcat.jpg";
const RegisterNow = () => {
  return (
    <section className="registernow py-5 bg-warning-subtle">
      <div className="container">
        <div className="row rounded shadow bg-light">
          <div className="col-4 p-0">
            <img
              className="w-100 rounded-start"
              src={runcat}
              alt="catrunning"
            />
          </div>
          <div className="col-8 py-5 ps-5">
            <h3 className="text-warning fw-bold fs-1 mb-5">Stop Running !</h3>
            <h3 className="mb-5 fs-2">You got a place here... </h3>
            <Link className="btn btn-primary fw-bold" to="/signup">
              Join Us Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
