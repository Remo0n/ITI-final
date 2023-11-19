import { useTranslation } from "react-i18next";

import p4 from "../../assets/4.webp";

import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className=" hero py-5 bg-warning-subtle ">
      <div className="container ">

        <div className="row align-items-center">

          <div className="hero_info col-lg-5 col-12 text-center">
            <h1 className="hero_info_title text-white fw-light mb-4">
              {t("We Care")} <span className="fw-bold">{t("Your Pets")}</span>
            </h1>

            <p className="hero_info_desc text-white fs-4">
              {t("Welcome to your pet's second home")}
            </p>
          </div>
          <figure className="hero_gallery col-lg-7 col-12">
            <img className="w-100" src={p4} alt="hero_img" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
