import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { axiosShop } from "../../services/axiosShopConfig";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./SingleArticleDetails.css";

const SingleArticleDetails = () => {
  const [setArticlesData] = useState({});
  const [selectedArticle, setSelectedArticle] = useState({});
  const [spinner, setSpinner] = useState(false);
  const { i18n } = useTranslation();

  const currentLng = i18n.language;

  const params = useParams();
  const filterId = params.id;
  const petCategory = params.petCategory;

  const rendringArticlesData = () => {
    setSpinner(true);
    axiosShop.get(`/items/newArticles`).then((res) => {
      setArticlesData(res.data);

      const dataToFilter = res.data[currentLng][petCategory];

      const foundArticle = dataToFilter?.find((art) => art.id == filterId);
      setSelectedArticle(foundArticle);
    });
    setSpinner(false);
  };

  useEffect(() => {
    rendringArticlesData();
  }, [currentLng, petCategory]);

  if (spinner) {
    return <LoadingSpinner />;
  }

  return (
    <div className="detailspage py-5 bg-warning-subtle">
      <div className="container">
        <Card>
          <Card.Body className="articlecardbody_details rounded shadow p-5">
            <Card.Title className="fs-4 fw-bold mb-4">
              {selectedArticle?.infoTitle}
            </Card.Title>
            <Card.Text>{selectedArticle?.infoDesc}</Card.Text>
            <Card.Text>{selectedArticle?.infoDetails}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SingleArticleDetails;
