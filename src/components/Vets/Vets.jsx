import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import VetCard from "./VetCard";
import { axiosShop } from "../../services/axiosShopConfig";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import "./Vets.css";

const Vets = () => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState("");
  const [areas, setAreas] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const rederingVets = () => {
    setSpinner(true);
    axiosShop.get("/items/vets").then((res) => {
      console.log(res.data);
      setAreas(Object.keys(res.data));
      console.log(areas);
      setData(res.data);
    });
    setFilteredData(data[selected]);
    setSpinner(false);
  };

  useEffect(() => {
    rederingVets();
  }, [selected]);

  return (
    <section className="vets bg-warning-subtle pb-5">
      <div className="vets_title position-relative col-12">
        <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
          Vets
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
              <option>please wait we are collecting data</option>
            ) : (
              <option className="option">Select Your Area</option>
            )}

            {areas.sort().map((area, index) => (
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
