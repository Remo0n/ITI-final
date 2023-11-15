import "./VetCard.css";
import { useTranslation } from "react-i18next";

const VetCard = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="vetcard p-5 border rounded shadow bg-light mb-4 ">
      <h2 className="mb-4 fw-bold">{props.vetCardData.name}</h2>
      <h5 className="mb-4">
        <span className="fw-bold">{t("Address")} :</span>{" "}
        {props.vetCardData.address}
      </h5>
      <ul className="p-0">
        {props.vetCardData.phone.map((element, index) => (
          <li key={index}>
            <span className="mb-2 fw-bold">{t("Phone")} :</span> {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VetCard;
