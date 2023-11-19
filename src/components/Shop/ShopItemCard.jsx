import React from "react";
import { Link } from "react-router-dom";

import './ShopItemCard.css'

function ShopItemCard({ id, title, img, price, imgHeight }) {


  return (
    <div className="card-cont p-2 flex-grow-1">
        <div className="h-100 d-flex flex-column p-4  justify-content-between d-flex flex-grow-1">
            <Link to={`/shop/${id}`} className="d-flex flex-column ">
            <figure className="shop__img-cont flex-grow-1 d-flex justify-content-center align-items-center"
            style={{height: imgHeight}}>
                <img src={img}  className="shop__img" alt="Product image" />
            </figure>
            <h6>{title}</h6>
            </Link>
            <div>
            <p>{price} EGP</p>
            <Link to={`/shop/${id}`}><button className="btn btn-primary">More Details</button></Link>
            </div>
            
        </div>
    </div>);
}

export default ShopItemCard;
