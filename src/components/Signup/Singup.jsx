import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { setUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "./Singup.css";
import { doc, setDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Signup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
      });

      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="register">
      <div className="container d-flex justify-content-center  ">
        <form
          className="col-lg-7 col-12 border border-dark-subtle d-flex flex-column p-5 shadow rounded bg-secondary "
          onSubmit={handleSignUp}
        >
          <h2 className="fs-1 fw-bold mb-5 text-center">
            {t("Sign Up title")}
          </h2>
          <div className="  mb-5">
            <label className="fw-bold col-3" htmlFor="email">
              {t("Email")}
            </label>
            <input
              id="email"
              className=" col-7 rounded py-1 px-2 border-0"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("Enter your email")}
            />
          </div>
          <div className="  mb-5">
            <label className="fw-bold col-3" htmlFor="password">
              {t("Password")}
            </label>
            <input
              id="password"
              className=" col-7 rounded py-1 px-2 border-0"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder={t("Enter your password")}
            />
          </div>
          <div className="  mb-5">
            <label className="fw-bold col-3" htmlFor="confirmPassword">
              {t("Confirm Password")}
            </label>
            <input
              id="confirmPassword"
              className=" col-7 rounded py-1 px-2 border-0"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder={t("Confirm Password")}
            />
          </div>
          <div className="text-center">
            <button className="btn btn-success fw-bold" type="submit">
              {t("Sign Up")}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
