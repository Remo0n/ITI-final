import React, { useEffect } from "react";
import ShopItemCard from "./ShopItemCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";

function ShopItemsContainer({ loading, displayArr }) {
  if (!loading && displayArr) {
    const shopRender = displayArr.map((item) => (
      <ShopItemCard
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.images[0]}
        imgHeight={400}
      />
    ));
    return (
      <>
        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-5">
          {shopRender}
        </div>
      </>
    );
  } else {
    return <LoadingSpinner/>;
  }
}

export default ShopItemsContainer;
