import React from 'react'
import FilterItems from './FilterItems'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Filter = () => {

  const location = useLocation();
  // console.log(location.pathname.substring(8,location.pathname.length);
  const [catItems, setCatItems] = useState([]);

  const getItems = async () => {
    let cat = location.pathname.substring(8, location.pathname.length);
    console.log(cat);
    let json;
    if (cat !== 'top-offers') {
      const response = await fetch(`http://localhost:8000/api/auth/getproducts/${cat}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      json = await response.json();
    }
    else {
      const response = await fetch(`http://localhost:8000/api/auth/getallitems`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      json = await response.json();
      json = json.items;
      json.sort();
    }

    setCatItems(json);
  }

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, [])
  console.log(catItems)

  return (
    <div className='flex justify-center my-24 md:my-16'>
      <div className="max-w-[1700px] w-full my-2 mx-11">
        <h2 className='font-bold text-2xl'>{catItems.length} Search Results Found For Your Query</h2>
        <div className=''>
          {
            catItems.map((item) => {
              return <FilterItems key={item.itemCode} item={item.itemCode} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Filter