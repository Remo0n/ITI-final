import React from "react";
import { Link } from "react-router-dom";

import './ShopItemCard.css'

function ShopItemCard({ id, title, img, price, imgHeight, classes }) {


  return (
    <div className={`shop__card-cont  px-2 ${classes}`}>
        <div className="shop__card-box h-100 bg-white rounded-4 shadow d-flex flex-column p-4  justify-content-between d-flex flex-grow-1">
            <Link to={`/shop/${id}`} className="d-flex flex-column ">
            <figure className="shop__img-cont bg-white flex-grow-1 d-flex justify-content-center align-items-center"
            style={{height: imgHeight}}>
                <img src={img}  className="shop__img" alt="Product image" />
            </figure>
            <h6>{title}</h6>
            </Link>
            <div className="d-flex flex-column align-items-center">
            <p>{price} EGP</p>
            <Link to={`/shop/${id}`}><button className="btn btn-primary">More Details</button></Link>
            </div>
            
        </div>
    </div>);
}

export default ShopItemCard;
