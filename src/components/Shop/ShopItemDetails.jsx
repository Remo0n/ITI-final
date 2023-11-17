import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetShopItems from "../../hooks/useGetShopApi";

import "./ShopItemDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ShopItemDetails() {
  const params = useParams();

  const [loading, error, item] = useGetShopItems(params.id);
  const [imgIndex, setImgIndex] = useState(0);

  if (!loading && item) {
    return (
      <div className="bg-white text-dark py-5">
        <div className="container mx-auto">
          <div className="justify-content-center gap-5 row py-5">
            <div className="col-4">
              <figure className="shop__main-img d-flex align-items-center justify-content-center">
                <img
                  src={item.images[imgIndex]}
                  className="shop__img  "
                  alt=""
                />
              </figure>
              <div className="d-flex gap-2 justify-content-center mt-4">
                {item.images?.map((img, i) => (
                  <figure
                    className="d-flex align-items-center  border rounded p-1"
                    onMouseEnter={() => setImgIndex(i)}
                    style={{
                      boxShadow:
                        i == imgIndex ? "0px 0px 5px 0px #60a5fa" : "none",
                    }}
                  >
                    <img
                      className="shop__img shop__mini-img d-inline-block"
                      src={img}
                      alt=""
                    />
                  </figure>
                ))}
              </div>
            </div>

            <div className="col-6 px-4 d-flex flex-column justify-content-around ">
              <div>
                <h2>{item.title}</h2>
                <p>{item.rating}</p>
                <h4>{item.price} EGP</h4>
                <button className="btn btn-primary px-4 my-2">
                  Add to Cart
                </button>
              </div>

              <div className="pt-5">
                <h6>About this item:</h6>
                <ul>
                  {item?.key_points.map((point) => (
                    <li className="shop__key-pts">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5>Item description:</h5>
            <p>{item.description}</p>
          </div>

          <div>
            <h5>Seller Info:</h5>
            <p>
              <span className="fw-semibold">Seller Name:</span> {item.seller}
            </p>
            <p>
              <span className="fw-semibold">Address:</span>{" "}
              {item.seller_address}
              <Link
                to={
                  "/GoogleMaps/" +
                  item.seller_location.lat +
                  "/" +
                  item.seller_location.lng
                }
              >
                <FontAwesomeIcon icon={faLocationDot} />
                Location
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default ShopItemDetails;
