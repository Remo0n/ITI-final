import React, { useEffect, useRef, useState } from "react";
import ShopItemsContainer from "./ShopItemsContainer";
import useGetShopApi from "../../hooks/useGetShopApi";

function Shop() {
  const [pageIndex, setPageIndex] = useState(1)
  const [apiParam, setApiParam] = useState();
  const [loading, error, apiArr] = useGetShopApi(apiParam);
  const [defaultArr, setDefaultArr] = useState([]); // An Array to keep the default API response
  const [displayArr, setDisplayArr] = useState([]); // An Array that can be manipulated to for rendering
  const [mainCategory, setMainCategory] = useState();
  const searchInput = useRef(null);
  const searchForm = useRef(null);
  // const [pagesNum, setPagesNum] = useState(0)
  let pagesNum = 1
  const [pageBtns, setPageBtns] = useState([])
  // const pageBtnsA = []

  // useEffect(() => {
  //   searchInput.current.scrollIntoView();
  // }, [pageIndex])
  

  useEffect(() => {
    setDefaultArr(apiArr);
  }, [loading, apiArr]);

  useEffect(() => {
    console.log(defaultArr)
    setDisplayArr(defaultArr?.slice(((pageIndex-1)*16),((pageIndex)*16)));
    if (defaultArr){
      pagesNum = Math.ceil(defaultArr.length/16);
      // console.log(pagesNum);

      const tempBtnsArr = [];
      for (let i=0; i<pagesNum; i++){
        tempBtnsArr.push(
          <button
          key={i}
          disabled={i==pageIndex-1? 1 : 0}
          onClick={(e) => {
            e.preventDefault()
            setPageIndex(i+1)
            // console.log(pageIndex)
          }}
          className="btn btn-dark"
          >{i+1}</button>
        )
      }
      setPageBtns(tempBtnsArr);
    }

  }, [defaultArr, pageIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPageIndex(1)
    setMainCategory("");
    setApiParam("?q=" + e.target[0].value);
  };

  const handleFilter = (type) => {
    setPageIndex(1)
    setMainCategory(type);
    if (type) {
      setDefaultArr(
        apiArr.filter((item) => item.main_category.includes(type))
      );
    } else {
      setApiParam("");
      searchInput.current.value = "";
      // setDisplayArr(defaultArr);
    }
  };

  const handleSubFilter = (type) => {
    setPageIndex(1)
    setDefaultArr(
      apiArr.filter(
        (item) =>
          item.sub_category == type && item.main_category.includes(mainCategory)
      )
    );
  };


  return (
    <div className="bg-warning-subtle">
      <div className="container mx-auto text-dark py-5">
        <form onSubmit={handleSubmit}  className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50 "
            placeholder="Search Here.."
            ref={searchInput}
          />
          <input type="submit" className="btn btn-primary  ms-2" />
        </form>



        <div className="d-flex gap-5 justify-content-center my-5" ref={searchForm}>
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
        <div className="shop__pagination py-4 d-flex justify-content-center gap-2">
            {pageBtns}
        </div>
      </div>
    </div>
  );
}

export default Shop;
