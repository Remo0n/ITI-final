import { useEffect, useState } from "react";

import { axiosShop } from "../services/axiosShopConfig";

const useGetShopItems = (param) => {
    const [itemsArr, setItemsArr] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState (false)

    const loadItems = async () => {
        try {
            const res = await axiosShop
        } catch {}
    }
}

export default useGetShopItems