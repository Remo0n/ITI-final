import "./NotFoundPage.css";
import notfoundlogo from "../../assets/notfound.png";
const NotFoundPage = () => {
  return (
    <section className="notfoundpage bg-warning-subtle ">
      <div className="container">
        <div className="text-center">
          <h2 className="errormsg text-danger fw-bold mb-5 ">Error 404</h2>
          <h3 className="text=white">
            The page you are trying to reach is not available right now , please
            check it again or check the visited URL
          </h3>
          <img src={notfoundlogo} alt="notfoundlogo" />
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
