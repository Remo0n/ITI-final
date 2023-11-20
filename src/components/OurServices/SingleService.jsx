import Card from "react-bootstrap/Card";
import "./SingleService.css";

const SingleService = (props) => {
  return (
    <div className="col-lg-4 col-12 mb-4 mb-md-0   ">
      <Card className=" singleservice_card w-100 text-center shadow">
        <Card.Img
          className="serviceimg"
          variant="top"
          src={props.serviceData?.serviceFigure}
        />
        <Card.Body className="servicecardbody rounded">
          <Card.Title>{props.serviceData?.serviceTitle}</Card.Title>
          <Card.Text>{props.serviceData?.serviceDesc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleService;
