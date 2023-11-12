import axios from "axios";

export const axiosShop = axios.create({
    baseURL: 'https://shop-server-snowy.vercel.app/items',
    headers: {
        'Content-Type': 'application/json',
    }
});