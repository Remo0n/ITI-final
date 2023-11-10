import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setUser } from "../../redux/authSlice";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Nav.css";

const NavComponent = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const auth = getAuth();

    try {
      await signOut(auth); // Sign out the user
      dispatch(setUser(null)); // Set the user to null in the Redux store
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  return (
    <nav>
      <Navbar expand="lg" className="bg-dark py-3 fw-bold">
        <Container>
          <Navbar.Brand>
            <Link className="text-light" to="">
              Paw-Paw
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center ">
              <Nav.Link>
                <Link className="link text-light ms-3" to="/home">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <a className="link text-light ms-3" href="#articles">
                  Articles
                </a>
              </Nav.Link>
              <Nav.Link>
                <Link className="link text-light ms-3" to="/about">
                  About
                </Link>
              </Nav.Link>

              {user && (
                <Link className="link text-light" onClick={handleSignOut}>
                  Sign out
                </Link>
              )}

              {!user && (
                <NavDropdown
                  className="dropdown"
                  title="Join us "
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link className="link fw-bold" to={"/signup"}>
                      Register
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link className="link fw-bold" to={"/login"}>
                      Login
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
