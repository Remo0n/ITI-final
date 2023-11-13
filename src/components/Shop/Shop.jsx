import React, { useEffect, useState } from 'react'
import ShopItemsContainer from './ShopItemsContainer'
import useGetShopApi from '../../hooks/useGetShopApi'

function Shop() {

  const [loading, error, apiArr] = useGetShopApi();
  const [defaultArr, setDefaultArr] = useState([]); // An Array to keep the default API response
  const [displayArr, setDisplayArr] = useState([]); // An Array that can be manipulated to be rendered

  useEffect(() => {
        console.log(apiArr)
        setDefaultArr(apiArr);
  }, [loading])

  useEffect(()=> {
    // console.log(defaultArr);
    setDisplayArr(defaultArr)
  },[defaultArr])

  
  

  return (
    <div className='bg-white'>
    <div className='container text-dark'>
    <div>Shop</div>
    <ShopItemsContainer loading={loading} displayArr={displayArr}/>
    </div>
    </div>
  )
}

export default Shop