import { Link } from "react-router-dom";
import runcat from "../../assets/runningcat.jpg";
import "./RegisterNow.css";
import { useTranslation, initReactI18next } from "react-i18next";

const RegisterNow = () => {
  const { t } = useTranslation();
  return (
    <section className="registernow py-5 bg-warning-subtle">
      <div className="container">
        <div className="row rounded shadow bg-light">
          <div className="col-lg-4 col-12 p-0">
            <div>
              <img
                className="w-100 rounded-start"
                src={runcat}
                alt="catrunning"
              />
            </div>
          </div>
          <div className="col-lg-8 col-12 py-5 ps-5">
            <div>
              <h3 className="text-warning fw-bold fs-1 mb-5">
                {t("Stop Running !")}
              </h3>
              <h3 className="mb-5 fs-2">{t("You got a place here...")} </h3>
              <Link className="btn btn-primary fw-bold" to="/signup">
                {t("Join Us Now")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterNow;
