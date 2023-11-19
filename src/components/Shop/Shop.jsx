import React, { useEffect, useRef, useState } from "react";
import ShopItemsContainer from "./ShopItemsContainer";
import useGetShopApi from "../../hooks/useGetShopApi";

function Shop() {
  const [apiParam, setApiParam] = useState("");
  const [loading, error, apiArr] = useGetShopApi(apiParam);
  const [defaultArr, setDefaultArr] = useState([]); // An Array to keep the default API response
  const [displayArr, setDisplayArr] = useState([]); // An Array that can be manipulated to for rendering
  const [mainCategory, setMainCategory] = useState();
  const searchInput = useRef();

  useEffect(() => {
    setDefaultArr(apiArr);
  }, [loading, apiArr]);

  useEffect(() => {
    // console.log(defaultArr);
    setDisplayArr(defaultArr);
  }, [defaultArr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainCategory("");
    setApiParam("?q=" + e.target[0].value);
  };

  const handleFilter = (type) => {
    setMainCategory(type);
    if (type) {
      setDisplayArr(
        defaultArr.filter((item) => item.main_category.includes(type))
      );
    } else {
      setApiParam("");
      searchInput.current.value = "";
      setDisplayArr(defaultArr);
    }
  };

  const handleSubFilter = (type) => {
    setDisplayArr(
      defaultArr.filter(
        (item) =>
          item.sub_category == type && item.main_category.includes(mainCategory)
      )
    );
  };

  return (
    <div className="bg-white">
      <div className="container text-dark py-5">
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50 "
            placeholder="Search Here.."
            ref={searchInput}
          />
          <input type="submit" className="btn btn-primary  ms-2" />
        </form>



        <div className="d-flex gap-5 justify-content-center my-5">
          <button
            className="btn btn-secondary"
            onClick={() => handleFilter()}
            style={{
              boxShadow: !mainCategory ? "0px 0px 5px 2px #60a5fa" : "none",
            }}
          >
            All items
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => handleFilter("dog")}
            style={{
              boxShadow:
                mainCategory == "dog" ? "0px 0px 5px 2px #60a5fa" : "none",
            }}
          >
            Dog
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleFilter("cat")}
            style={{
              boxShadow:
                mainCategory == "cat" ? "0px 0px 5px 2px #60a5fa" : "none",
            }}
          >
            Cat
          </button>
        </div>

        <div className="d-flex gap-5 justify-content-center my-5">
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("grooming")}
          >
            Grooming
          </button>
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("toys")}
          >
            Toys
          </button>
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("food")}
          >
            Food
          </button>
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("litter")}
          >
            litter & Housebreaking
          </button>
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("beds")}
          >
            Beds
          </button>
          <button
            className="btn btn-warning"
            style={{ display: mainCategory ? "block" : "none" }}
            onClick={() => handleSubFilter("leash")}
          >
            leashes & Collars
          </button>
        </div>
        <ShopItemsContainer loading={loading} displayArr={displayArr} />
      </div>
    </div>
  );
}

export default Shop;
