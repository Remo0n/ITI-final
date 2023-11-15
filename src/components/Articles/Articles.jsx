import { useState, useEffect } from "react";
import SingleArticle from "./SingleArticle";
import { Link, useLocation } from "react-router-dom";
import { axiosShop } from "../../services/axiosShopConfig";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { useTranslation } from "react-i18next";
import "./Articles.css";

const Articles = () => {
  const [articlesData, setArticlesData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [checkedValue, setCheckedValue] = useState("Dogs");
  const [spinner, setSpinner] = useState(false);
  const { t, i18n } = useTranslation();

  let locationUrl = useLocation();
  console.log(locationUrl.pathname);

  const currentLng = i18n.language;

  //This was the new solution

  const rendringArticlesData = () => {
    setSpinner(true);
    axiosShop.get("/items/newArticles").then((res) => {
      setArticlesData(res.data);
      const dataToFilter = res.data[currentLng][checkedValue];
      if (locationUrl.pathname === "/home" || locationUrl.pathname === "/") {
        setFilteredData(dataToFilter?.slice(0, 4));
      } else {
        setFilteredData(dataToFilter);
      }
      setSpinner(false);
    });
  };

  useEffect(() => {
    rendringArticlesData();
  }, [checkedValue, currentLng]);

  //This was the old solution

  /*
  const rendringArticlesData = () => {
    axiosShop.get("/items/articles").then((res) => {
      setArticlesData(res.data);
      const dataToFilter = res.data[checkedValue];
      if (locationUrl.pathname === "/home" || locationUrl.pathname === "/") {
        setFilteredData(dataToFilter?.slice(0, 4));
      } else {
        setFilteredData(dataToFilter);
      }
      setSpinner(false);
    });
  };

  useEffect(() => {
    rendringArticlesData();
   
  }, [checkedValue]);

*/
  return (
    <section className="articles pb-5 bg-warning-subtle ">
      {locationUrl.pathname === "/articles" ? (
        <div className="articles_title position-relative col-12 mb-5">
          <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">
            {t("Articles")}
          </h2>
        </div>
      ) : (
        <div className="py-5">
          <h2 className="text-dark text-center fw-bold"> {t("Articles")}</h2>
        </div>
      )}

      <div className="container">
        <div className="categories text-center">
          <div
            className="btn-group mb-5"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check "
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              value={"Dogs"}
              onChange={(e) => setCheckedValue(e.target.value)}
            />
            <label
              className="btn rounded btn-outline-primary me-5"
              htmlFor="btnradio1"
            >
              {t("Dogs")}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              value="Cats"
              onChange={(e) => {
                setCheckedValue(e.target.value);
              }}
            />
            <label
              className="btn rounded btn-outline-primary mx-5 "
              htmlFor="btnradio2"
            >
              {t("Cats")}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
              value="Birds"
              onChange={(e) => setCheckedValue(e.target.value)}
            />
            <label
              className="btn rounded btn-outline-primary ms-5"
              htmlFor="btnradio3"
            >
              {t("Birds")}
            </label>
          </div>
        </div>
        <div className="articles mb-lg-5  ">
          <div className="row">
            {spinner ? <LoadingSpinner /> : ""}
            {filteredData?.map((art) => (
              <SingleArticle key={art.id} articleData={art} />
            ))}
          </div>
        </div>
        {locationUrl.pathname === "/articles" ? (
          ""
        ) : (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-outline-primary " to="/articles">
              Show More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
