import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="footer_useful col-lg-4 col-6 mb-5 mb-md-0">
            <h3 className="text-info mb-4">Useful Links</h3>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <Link to="/home">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="footer_useful col-lg-4 col-6">
            <h3 className="text-info mb-4">Useful Links</h3>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <Link to="/home">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="footer_useful col-lg-4 col-6">
            <h3 className="text-info mb-4">Useful Links</h3>
            <ul className="m-0 p-0">
              <li className="mb-2">
                <Link to="/home">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
