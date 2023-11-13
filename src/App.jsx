import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Singup";
import ProtectedRoute from "./ProtectedRoute";
import NavComponent from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthStatus } from "./redux/authSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";

import Articles from "./components/Articles/Articles";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

import Maps from "./components/Maps";
import { Profile } from "./components/Profile/Profile";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/GoogleMaps" element={<Maps />} />
        {user && <Route path="/profile" element={<Profile />} />}
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />{" "}
        <Route path="*" element={<h1>404 Not found</h1>} />{" "}
        {/* Catch-all route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
