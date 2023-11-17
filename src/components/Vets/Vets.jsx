import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import VetCard from "./VetCard";
import { axiosShop } from "../../services/axiosShopConfig";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import "./Vets.css";
import { useTranslation } from "react-i18next";

const Vets = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState("");
  const [areas, setAreas] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const { t, i18n } = useTranslation();

  
  const currentLng = i18n.language;

  const rederingVets = () => {
    setSpinner(true);
    axiosShop.get("/items/vets").then((res) => {
      setAreas(Object.keys(res.data[currentLng]));
      setData(res.data[currentLng]);
    });
    setFilteredData(data[selected]);
    setSpinner(false);
  };

  useEffect(() => {
    rederingVets();
  }, [selected, currentLng]);



  return (
    <section className="vets bg-warning-subtle pb-5">
      <div className="vets_title position-relative col-12">
        <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
          {t("Vets")}
        </h2>
      </div>
      <div className="container">
        <div className="form py-5">
          <Form.Select
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            {areas.length === 0 ? (
              <option>{t("please wait we are collecting data")}</option>
            ) : (
              <option className="option">{t("Select Your Area")}</option>
            )}

            {areas?.sort().map((area, index) => (
              <option className="option" key={index} value={area}>
                {area}
              </option>
            ))}
          </Form.Select>
        </div>
        {spinner ? <LoadingSpinner /> : ""}
        <ul className="vetslist p-0 ">
          {filteredData?.map((element, index) => (
            <li key={index}>
              <VetCard vetCardData={element} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Vets;
