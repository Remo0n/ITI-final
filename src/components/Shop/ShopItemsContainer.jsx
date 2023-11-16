import React, { useEffect } from "react";
import ShopItemCard from "./ShopItemCard";

function ShopItemsContainer({ loading, displayArr }) {

  if (!loading && displayArr) {
    console.log(displayArr);

    const shopRender = displayArr.map((item)=> (
      <ShopItemCard 
        key={item.id}
        id={item.id}
        title ={item.title}
        price = {item.price}
        img={item.images[0]}
        imgHeight={400}
      />
    )

    )
    return (
      <>
      <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 row-gap-5">
      {shopRender}
      </div>
      </>
    )


  } else {
    return <p>Loading ...</p>;
  }
}

export default ShopItemsContainer;
