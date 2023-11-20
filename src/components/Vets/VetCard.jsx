import { Link } from "react-router-dom";
import "./VetCard.css";
import { useTranslation } from "react-i18next";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VetCard = (props) => {
  const { t } = useTranslation();



  return (
    <div className="vetcard p-5 border rounded shadow bg-light mb-4 ">
      <h2 className="mb-4 fw-bold">{props.vetCardData.name}</h2>
      <h5 className="mb-4">
        <span className="fw-bold">{t("Address")} :</span>{" "}
        {props.vetCardData.address}
      </h5>
      <ul className="p-0 mb-3">
        {props.vetCardData.phone.map((element, index) => (
          <li key={index}>
            <span className="mb-2 fw-bold">{t("Phone")} :</span> {element}
          </li>
        ))}
      </ul>
      <Link
        className="custom-btn-prime px-3 py-2 rounded-4"
        to={
          "/GoogleMaps/" +
          props.vetCardData.vet__location.lat +
          "/" +
          props.vetCardData.vet__location.lng
        }
      >
        <FontAwesomeIcon icon={faLocationDot} className="me-2" />
        {t("Location")}
      </Link>
    </div>
  );
};

export default VetCard;
