import React, { useEffect } from "react";
import useGetShopApi from "../../hooks/useGetShopApi";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import ShopItemCard from "./ShopItemCard";

import "./ShopSwiper.css";

function ShopSwiper() {

  const [loading, error, apiArr] = useGetShopApi("?_limit=20");

//   useEffect(() => {
//     console.log(apiArr);
//   }, [loading]);

  if (!loading) {
    return (
      <section className="py-5 bg-warning-subtle">
        <div className="container">
        <h2>Check out our newest items:</h2>
        <Swiper 
        className="shop__swiper"
        modules={[Navigation]}
        spaceBetween={10} slidesPerView={1} navigation
        breakpoints={{
            600:{
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 4.5,
            }
            
        }}
        >
        {apiArr.map((item) => (
            <SwiperSlide>
            <div className="swiper__card-cont py-3">
              <ShopItemCard
                key={item.id}
                id={item.id}
                title={item.title.length > 100 ? item.title.slice(0,100)+" ..." : item.title}
                price={item.price}
                img={item.images[0]}
                imgHeight={250}
                />
            </div>
          </SwiperSlide>
        ))}
        </Swiper>

    </div>
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
