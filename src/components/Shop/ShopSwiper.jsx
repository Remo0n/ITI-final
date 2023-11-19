import React, { useEffect } from "react";
import useGetShopApi from "../../hooks/useGetShopApi";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { register } from "swiper/element/bundle";
import ShopItemCard from "./ShopItemCard";
import "./ShopSwiper.css";

function ShopSwiper() {
  register();

  const [loading, error, apiArr] = useGetShopApi("?_limit=20");

  useEffect(() => {
    console.log(apiArr);
  }, [loading]);

  if (!loading) {
    return (
        <section className="py-5 bg-warning-subtle">

        <swiper-container slides-per-view="4" navigation="true">
          {apiArr.map((item) => (
              <swiper-slide>
              <div className="swiper__card-cont ">
                <ShopItemCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.images[0]}
                  imgHeight={250}
                  />
          </div>
            </swiper-slide>
          ))}
        </swiper-container>
        </section>
    );
} else {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
}

export default ShopSwiper;
