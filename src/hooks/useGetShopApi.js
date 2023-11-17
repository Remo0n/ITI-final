import { useEffect, useState } from "react";

import { axiosShop } from "../services/axiosShopConfig";

const useGetShopApi = (param) => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadData = async () => {
    try {
      const res = await axiosShop.get(param);
      // console.log(res)
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      // setError here
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [param]);

  return [loading, error, response];
};

export default useGetShopApi;
