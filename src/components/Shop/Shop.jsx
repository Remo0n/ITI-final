import React, { useEffect, useState } from 'react'
import ShopItemsContainer from './ShopItemsContainer/ShopItemsContainer'
import useGetShopItems from '../../hooks/useGetShopItems'

function Shop() {

  const [loading, error, apiArr] = useGetShopItems();
  const [defaultArr, setDefaultArr] = useState([]); // An Array to keep the default API response
  const [displayArr, setDisplayArr] = useState([]); // An Array that can be manipulated to be rendered

  useEffect(() => {
    setDefaultArr(apiArr);
    
  }, [loading])

  // useEffect(()=> {
  //   console.log(defaultArr);
  // },[defaultArr])
  

  return (
    <>
    <div>Shop</div>
    <ShopItemsContainer/>
    </>
  )
}

export default Shop