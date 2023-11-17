import Card from "react-bootstrap/Card";
import "./SingleArticle.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SingleArticle = (props) => {
  const { t } = useTranslation();

  return (
    <div className="col-lg-6 col-12 mb-4 ">
      <Card className="shadow">
        <Card.Img variant="top" src={props.articleData?.articleFig} />
        <Card.Body className="articlecardbody_single rounded">
          <Card.Title>{props.articleData?.infoTitle}</Card.Title>
          <Card.Text>{props.articleData?.infoDesc}</Card.Text>

          <Link
            to={`/articles/${props.articleData.petCategory}/${props.articleData.id} `}
          >
            <button className="btn btn-outline-primary">
              {t("View Details")}
            </button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleArticle;
