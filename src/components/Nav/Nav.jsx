import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Nav.css";

import { useTranslation } from "react-i18next";

const NavComponent = () => {
  const lngs = {
    en: { nativeName: "English" },
    ar: { nativeName: "العربية" },
  };
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const auth = getAuth();

    try {
      await signOut(auth); // Sign out the user
      dispatch(setUser(null)); // Set the user to null in the Redux store
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav>
      <Navbar expand="lg" className="bg-dark py-3 fw-bold">
        <Container>
          <Navbar.Brand>
            <Link className="text-light" to="/home">
              <figure className="brand-box">
              <img className="brand-img" src="\brand.png" alt="" />
              </figure>
            </Link>
          </Navbar.Brand>
          <div>
            {Object.keys(lngs).map((lng, i) =>
              i18n.language != lng ? (
                <button
                  key={i}
                  type="submit"
                  className="btn btn-warning me-3 fw-bold"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ) : (
                ""
              )
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ournavbar d-flex align-items-center ">
              
                <Link className="link text-light ms-3" to="/home">
                  {t("Home")}
                </Link>
              
              
                <Link className="link text-light ms-3" to="/vets">
                  {t("Vets")}
                </Link>
              
              
                <Link className="link text-light ms-3" to="/articles">
                  {t("Articles")}
                </Link>
              
                <Link className="link text-light ms-3" to="/shop">
                  {t("Shop")}
                </Link>
              
                <Link className="link text-light ms-3" to="/about">
                  {t("About")}
                </Link>
              
                {user && (
                  <Link className="link text-light ms-3" to="/profile">
                    Profile
                  </Link>
                )}
              
                <Link className="link text-light ms-3" to="/GoogleMaps">
                  {t("Locations")}
                </Link>
              
              {user && (
                <Link className="link text-light" onClick={handleSignOut}>
                  Sign out
                </Link>
              )}
              {!user && (
                <NavDropdown
                  className="dropdown"
                  title={t("Join us")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link className="link fw-bold" to={"/signup"}>
                      {t("Register")}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link className="link fw-bold" to={"/login"}>
                      {t("Login")}
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavComponent;
