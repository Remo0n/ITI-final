import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetShopItems from "../../hooks/useGetShopApi";

import "./ShopItemDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong, faCartPlus, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ShopItemDetails() {
  const params = useParams();

  const [loading, error, item] = useGetShopItems(params.id);
  const [imgIndex, setImgIndex] = useState(0);

  const sellerInfo = useRef(null);

  if (!loading && item) {
    return (
      <div className="bg-warning-subtle text-dark py-5">
        <div className="container mx-auto">
          <div className="justify-content-center gap-5 row py-5">
            <div className="col-lg-5 cold-md-12">
              <figure className="shop__main-img bg-white shadow rounded-4 d-flex align-items-center justify-content-center">
                <img
                  src={item.images[imgIndex]}
                  className="shop__img  "
                  alt=""
                />
              </figure>
              <div className="d-flex gap-2 justify-content-center mt-4 flex-wrap">
                {item.images?.map((img, i) => (
                  <figure
                  key={i}
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

            <div className="col-lg-6 cold-md-12 px-4 d-flex flex-column justify-content-around ">
              <div>
                <h2 className="mb-4">{item.title}</h2>
                {/* <p>{item.rating}</p> */}
                <h4 className="fw-bold">{item.price} <sup className="fs-6 fw-normal">EGP</sup></h4>
                <button className="custom-btn-prime rounded-3 py-2 px-4 my-2">
                <FontAwesomeIcon icon={faCartPlus}/> Add to Cart
                </button>
                <button className="custom-btn-prime rounded-3 py-2 px-4 my-2 mx-2"
                onClick={() => sellerInfo.current.scrollIntoView() }
                > <FontAwesomeIcon className="me-2" icon={faArrowDownLong} />Seller Info</button>
              </div>

              <div className="pt-5">
                <h5>About this item:</h5>
                <ul>
                  {item?.key_points.map((point, i) => (
                    <li className="shop__key-pts" key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="fw-bold">Item description:</h3>
            <p>{item.description}</p>
          </div>

          <div className="my-5" ref={sellerInfo}>
            <h3>Seller Info:</h3>
            <p>
              <span className="fw-semibold">Seller Name:</span> {item.seller}
            </p>
            <p>
              <span className="fw-semibold">Address:</span>{" "}
              {item.seller_address}
              <Link
              className="ms-2"
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
