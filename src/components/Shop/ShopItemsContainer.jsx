import React, { useEffect, useState } from "react";
import ShopItemCard from "./ShopItemCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";

function ShopItemsContainer({ loading, inputArr }) {
  const [displayArr, setDisplayArr] = useState(inputArr)
  useEffect(() => {
    console.log(inputArr)
    setDisplayArr(inputArr)
  }, [loading, inputArr])
  
  if (loading) {
    return <LoadingSpinner/>;
  } else if (!displayArr?.length){
    return <h2 className="text-center my-5 py-5">No Items found, But new items are always coming soon!</h2>
  }else if (!loading && displayArr) {
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
    console.log(displayArr)
    return (
      <>
        <div className="row  row-gap-5">
          {shopRender}
        </div>
      </>
    );
  // } else if(!displayArr) {
    
  // } else {
   
  }
}

export default ShopItemsContainer;
