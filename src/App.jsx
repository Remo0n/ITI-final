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
import Profile from "./components/Profile/Profile";

import Vets from "./components/Vets/Vets";

import Shop from "./components/Shop/Shop";
import ShopItemDetails from "./components/Shop/ShopItemDetails";

import "./i18n";
import { useTranslation } from "react-i18next";
import SingleArticleDetails from "./components/Articles/SingleArticleDetails";

const App = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  //for translation
  const rtlLanguages = ["ar"]; // Add other RTL languages if needed

  function isRtlLanguage(language) {
    return rtlLanguages.includes(language);
  }
  useEffect(() => {
    const currentLanguage = i18n.language;
    const direction = isRtlLanguage(currentLanguage) ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [i18n.language]);

  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vets" element={<Vets />} />
        <Route path="/articles" element={<Articles />} />
        <Route
          path="/articles/:petCategory/:id"
          element={<SingleArticleDetails />}
        ></Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopItemDetails />} />
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

        <Route
          path="/GoogleMaps/:lat/:lng"
          element={
            <Maps />
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
