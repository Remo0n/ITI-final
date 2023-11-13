import { useEffect, useState } from "react";

import { axiosShop } from "../services/axiosShopConfig";

const useGetShopItems = (param) => {
    const [itemsArr, setItemsArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const loadItems = async () => {
        try {
            const res = await axiosShop.get(param);
            // console.log(res)
            setItemsArr(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setError here
            setLoading(false);
        }
    };

    useEffect(() => {
        loadItems()
    }, [param])

    return [loading, error, itemsArr]
};

export default useGetShopItems