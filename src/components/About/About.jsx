import "./About.css";
import homeless from "../../assets/Homeless Animals Need You Now.mp4";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect, useState } from "react";

const About = () => {
  const { t } = useTranslation();
  const[filteredTeam,setFilteredTeam]=useState()
  const currentLng = i18next.language;

  const ourTeam = {
    en: [
      {
        name: "Mohamed Ashraf",
        jobTitle: "Front-End Web Developer",
        imgSrc: "",
      },
      {
        name: "Mohamed Tarek",
        jobTitle: "Front-End Web Developer",
        imgSrc: "",
      },
      { name: "Omar Adel", jobTitle: "Front-End Web Developer", imgSrc: "" },
      { name: "Ossama Ahmed", jobTitle: "Front-End Web Developer", imgSrc: "" },
      {
        name: "Remon Botrous",
        jobTitle: "Front-End Web Developer",
        imgSrc: "",
      },
    ],
    ar: [
      { name: "محمد أشرف", jobTitle: "مطور واجهات امامية ", imgSrc: "" },
      { name: "محمد طارق", jobTitle: "مطور واجهات امامية ", imgSrc: "" },
      { name: "عمر عادل", jobTitle: "مطور واجهات امامية ", imgSrc: "" },
      {
        name: "أسامة أحمد",
        jobTitle: "مطور واجهات امامية ",
        imgSrc: "",
      },
      {
        name: "ريمون بطرس",
        jobTitle: "مطور واجهات امامية ",
        imgSrc: "",
      },
    ],
  };
  const renderingTeams=()=>{
    setFilteredTeam(ourTeam[currentLng])

  }

  useEffect(() => {
renderingTeams()
  }, [currentLng]);
  return (
    <section className="about bg-warning-subtle">
      <div className="about_title position-relative col-12">
        <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
          {t("About Us")}
        </h2>
      </div>

      <div className="vision py-5">
        <div className="container">
          <h2 className="text-center fw-bold fs-1 mb-5">{t("Our Vision")}</h2>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h3 className="mb-3 d-flex align-items-center ">
                {t("We Ourselves are pet's owners.")}
              </h3>
              <h3 className="mb-3 d-flex align-items-center ">
                {t("Pets deserve to be treated well.")}
              </h3>

              <h3 className="mb-3 d-flex align-items-center ">
                {t("Please have some mercy upon them.")}
              </h3>
              <h3 className="d-flex align-items-center ">
                {t("We aim to give them what they deserve.")}
              </h3>
            </div>
            <figure className="col-lg-6 col-12">
              <video
                controls
                autoPlay
                className="rounded w-100 shadow"
                src={homeless}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="ourteam py-5">
        <div className="container">
          <h2 className="text-center fw-bold fs-1 mb-5">{t("Our Team")}</h2>

          <div className="teamprofiles row justify-content-between">
            {filteredTeam?.map((member, index) => (
              <div className="card col-lg-2 col-12 p-2 text-center mb-md-0 mb-4" key={index}>
                <h2 className="fs-5">{member.name}</h2>
                <h3 className="fs-5">{member.jobTitle}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
