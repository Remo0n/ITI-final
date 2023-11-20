import React, { useEffect, useRef, useState } from "react";
import ShopItemsContainer from "./ShopItemsContainer";
import useGetShopApi from "../../hooks/useGetShopApi";
import './Shop.css'

function Shop() {
  const [pageIndex, setPageIndex] = useState(1)
  const [apiParam, setApiParam] = useState();
  const [loading, error, apiArr] = useGetShopApi(apiParam);
  const [defaultArr, setDefaultArr] = useState([]); // An Array to keep the default API response
  const [displayArr, setDisplayArr] = useState([]); // An Array that can be manipulated to for rendering
  const [mainCategory, setMainCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const searchInput = useRef(null);
  const searchForm = useRef(null);
  // const [pagesNum, setPagesNum] = useState(0)
  let pagesNum = 1
  const [pageBtns, setPageBtns] = useState([])
  // const pageBtnsA = []

  // useEffect(() => {
  //   const pagebounce = setTimeout(() => {
  //     searchInput.current.scrollIntoView();
  //   }, 200);
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
            const pagebounce = setTimeout(() => {
              window.scrollTo(0, 0)
            }, 100);
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
    setSubCategory()
    if (type) {
      setDefaultArr(
        apiArr.filter((item) => item.main_category.includes(type))
      );
    } else {
      setApiParam("");
      searchInput.current.value = "";
      setDefaultArr(apiArr);
    }
  };

  const handleSubFilter = (type) => {
    setPageIndex(1)
    setSubCategory(type)
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
        <form onSubmit={handleSubmit}  className="d-flex justify-content-center "  ref={searchForm}>
          <input
            type="text"
            className="form-control w-50 "
            placeholder="Search Here.."
            ref={searchInput}
          />
          <input type="submit" className="btn btn-primary  mx-2" />
        </form>



        <div className="d-flex gap-5 justify-content-center my-5 flex-wrap" >

          <button
            className=" border-0  bg-transparent fs-4 fw-semibold"
            onClick={() => handleFilter("")}
            
          >
            <figure className={`shop__filter-img-cont  rounded-circle border ${!mainCategory ? "shop__filter-btn-active" :"shop__filter-btn"}` }>
              <img className="shop__filter-img bg-white p-1" src="\src\assets\shop\pets.jpg" alt="" />
            </figure>
            All Items
          </button>
          

          <button
            className=" border-0  bg-transparent fs-4 fw-semibold"
            onClick={() => handleFilter("dog")}
            
          >
            <figure className={`shop__filter-img-cont  rounded-circle border ${mainCategory == "dog" ? "shop__filter-btn-active" :"shop__filter-btn"}` }>
              <img className="shop__filter-img" src="\src\assets\shop\dog.jpg" alt="" />
            </figure>
            Dog
          </button>

          <button
            className=" border-0  bg-transparent fs-4 fw-semibold"
            onClick={() => handleFilter("cat")}
            
          >
            <figure className={`shop__filter-img-cont  rounded-circle border ${mainCategory == "cat" ? "shop__filter-btn-active" :"shop__filter-btn"}` }>
              <img className="shop__filter-img" src="\src\assets\shop\cat.jpg" alt="" />
            </figure>
            Cat
          </button>
 
          <button
            className=" border-0  bg-transparent fs-4 fw-semibold"
            onClick={() => handleFilter("bird")}
            
          >
            <figure className={`shop__filter-img-cont  rounded-circle border ${mainCategory == "bird" ? "shop__filter-btn-active" :"shop__filter-btn"}` }>
              <img className="shop__filter-img" src="\src\assets\shop\bird.jpg" alt="" />
            </figure>
            Birds
          </button>
 
          <button
            className=" border-0  bg-transparent fs-4 fw-semibold"
            onClick={() => handleFilter("fish")}
            
          >
            <figure className={`shop__filter-img-cont p-1 bg-white  rounded-circle border ${mainCategory == "fish" ? "shop__filter-btn-active" :"shop__filter-btn"}` }>
              <img className="shop__filter-img" src="\src\assets\shop\fish.jpg" alt="" />
            </figure>
            Fish
          </button>
 

        </div>

        <div className="d-flex gap-5 justify-content-center my-5 flex-wrap">
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
          boxShadow: subCategory=="grooming"? "0px 0px 5px 1px #f5318d": "none"}}
            onClick={() => handleSubFilter("grooming")}
          >
            Grooming
          </button>
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
            boxShadow: subCategory=="toys"? "0px 0px 5px 1px #f5318d": "none" }}
            onClick={() => handleSubFilter("toys")}
          >
            Toys
          </button>
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
            boxShadow: subCategory=="food"? "0px 0px 5px 1px #f5318d": "none" }}
            onClick={() => handleSubFilter("food")}
          >
            Food
          </button>
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
            boxShadow: subCategory=="litter"? "0px 0px 5px 1px #f5318d": "none" }}
            onClick={() => handleSubFilter("litter")}
          >
            litter & Housebreaking
          </button>
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
            boxShadow: subCategory=="beds"? "0px 0px 5px 1px #f5318d": "none" }}
            onClick={() => handleSubFilter("beds")}
          >
            Beds
          </button>
          <button
            className="btn btn-warning fw-semibold"
            style={{ display: mainCategory ? "block" : "none", 
            boxShadow: subCategory=="leash"? "0px 0px 5px 1px #f5318d": "none" }}
            onClick={() => handleSubFilter("leash")}
          >
            leashes & Collars
          </button>
        </div>
        <ShopItemsContainer loading={loading} inputArr={displayArr} />
        <div className="shop__pagination py-4 d-flex justify-content-center gap-2">
            {pageBtns}
        </div>
      </div>
    </div>
  );
}

export default Shop;
