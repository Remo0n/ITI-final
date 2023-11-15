import { useTranslation } from "react-i18next";

function Distance({ leg }) {
  const { t, i18n } = useTranslation();

  if (!leg.distance || !leg.duration) return null;
  return (
    <div>
      <p>
        {/* "This Pet Shop is ": "متجر الحيوانات هذا",
  "away from your Place. That would take": "و هذا سوف يستغرق",
  "mins each direction": "دقائق في كل اتجاه" */}
        {t("This Pet Shop is")}
        <span className="highlight">{leg.distance.text}</span>{" "}
        {t("away from your Place. That would take")}{" "}
        <span className="highlight">{leg.duration.text}</span>{" "}
        {t("mins each direction")}{" "}
      </p>
    </div>
  );
}
export default Distance;
