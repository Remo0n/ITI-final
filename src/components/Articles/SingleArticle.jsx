import Card from "react-bootstrap/Card";
import "./SingleArticle.css";

const SingleArticle = (props) => {
  return (
    <div className="col-lg-6 col-12 mb-4 ">
      <Card className="shadow">
        <Card.Img variant="top" src={props.articleData?.articleFig} />
        <Card.Body className="articlecardbody rounded">
          <Card.Title>{props.articleData?.infoTitle}</Card.Title>
          <Card.Text>{props.articleData?.infoDesc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleArticle;
