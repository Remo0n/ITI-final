import Card from "react-bootstrap/Card";
import "./SingleArticle.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "animate.css";
const SingleArticle = (props) => {
  const { t } = useTranslation();
  // window.addEventListener("scroll", () => {
  //   document
  //     .querySelectorAll(".article_card")
  //     .classList.add("animate__animated", "animate__fadeInLeft");
  // });
  

  return (
    <div className="col-lg-6 col-12 mb-4 ">
      <Card className="shadow article_card ">
        <Card.Img variant="top" src={props.articleData?.articleFig} />
        <Card.Body className="articlecardbody_single  rounded">
          <Card.Title>{props.articleData?.infoTitle}</Card.Title>
          <Card.Text>{props.articleData?.infoDesc.slice(0, 150)}...</Card.Text>

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
