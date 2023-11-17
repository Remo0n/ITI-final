// Login.js

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );
      // Redirect to the homepage after successful sign up
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login py-5 bg-warning-subtle ">
      <div className="container d-flex justify-content-between flex-wrap">
        <div className="col-lg-6 col-12 bg-secondary p-5 rounded-start shadow ">
          <form onSubmit={handleLogin}>
            <h2 className="fs-1 fw-bold mb-5 text-center">{t("Login")}</h2>
            <div className="mb-4">
              <label className="fw-bold col-3 " htmlFor="email">
                {t("Email")}
              </label>
              <input
                id="email"
                className="col-7 rounded py-1 px-2 border-0"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Enter your email")}
                required
              />
            </div>
            <div className="mb-5">
              <label className="fw-bold col-3 " htmlFor="password">
                {t("Password")}
              </label>
              <input
                id="password"
                className="col-7 rounded py-1 px-2 border-0"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("Enter your password")}
                required
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-success w-25 fw-bold"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : t("Login")}
              </button>
            </div>
          </form>
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </div>

        <div className="welcomeuser col-lg-6 col-12 p-5 bg-danger rounded-end shadow">
          <h2 className="fw-bold fs-1 text-center text-white">
            {t("Welcome Back")}
          </h2>
        </div>
      </div>
    </section>
  );
}
