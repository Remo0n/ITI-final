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
        imgHeight={250}
        classes={'col col-12 col-xl-3 col-lg-4 col-md-6 '}
      />
    ));
    // console.log(shopRender)
    return (
      <>
        <div className="row  row-gap-5">
          {shopRender}
        </div>
      </>
    );
  } else {
    return <LoadingSpinner/>;
  }
}

export default ShopItemsContainer;
