import { useEffect, useState } from "react";
import "./OurServices.css";
import SingleService from "./SingleService";
import { useTranslation } from "react-i18next";
import 'animate.css';

const Services = () => {
 
  const Services = {
    en: [
      {
        id: 1,
        serviceFigure: "src/Assets/ser1.jpg",
        serviceTitle: "Find Your Vet",
        serviceDesc: "Find & choose your nearest vet clinic.  ",
      },
      {
        id: 2,
        serviceFigure: "src/Assets/ser2.png",
        serviceTitle: "Find Your Shop",
        serviceDesc:
          "Find & choose your nearest shop for any supplies you need for your pet. ",
      },
      {
        id: 3,
        serviceFigure: "src/Assets/ser3.png",
        serviceTitle: "Register Your Pet Profile",
        serviceDesc:
          "You can create a profile for your pet and save all its information.",
      },
    ],
    ar: [
      {
        id: 1,
        serviceFigure: "src/Assets/ser1.jpg",
        serviceTitle: "ابحث عن عيادتك البيطرية",
        serviceDesc: "ابحث واختر عيادتك البيطرية الأقرب اليك  ",
      },
      {
        id: 2,
        serviceFigure: "src/Assets/ser2.png",
        serviceTitle: "ابحث عن متجرك ",
        serviceDesc:
          "ابحث واختر المتجر الأقرب اليك من أجل مستلزمات حيوانك الأليف ",
      },
      {
        id: 3,
        serviceFigure: "src/Assets/ser3.png",
        serviceTitle: "سجل حساب لحيوانك الأليف",
        serviceDesc: "سجل حساب لحيوانك الأليف واحتفظ بجميع معلوماته التي تهمك",
      },
    ],
  };

  const { t, i18n } = useTranslation();
  const [currentData, setCurrentData] = useState([]);
  const currentLng = i18n.language;
  const renderingData = () => {
    setCurrentData(Services[i18n.language]);
  };

  useEffect(() => {
    renderingData();
  }, [currentLng]);

  return (
    <section className="Services py-5 bg-warning-subtle">
      <div className="container">
        <h2 className="text-center text-dark mb-5 fw-bold fs-1">
          {t("Our Services")}
        </h2>
        <div className="row ">
          {currentData?.map((service) => (
            <SingleService key={service.id} serviceData={service}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
