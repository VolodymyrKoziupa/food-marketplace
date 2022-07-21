import { useEffect, useState } from "react";
import React from 'react'
import "./Products.css"
import { popularProducts } from '../data'
import ProductItem from './ProductItem'
import { useLocation } from "react-router";


export default function Products({cat,filter}) {




  



  let setProduct = popularProducts.filter((item)=> item.cat === cat)

  return (
    <div className='prod-container'>

    

        {cat ? setProduct.map((item)=> 
          
        <ProductItem item={item} key={item.id}  />
        
       ):popularProducts.slice(0,3).map((item)=>  <ProductItem item={item} key={item.id}  />)}
  
    </div>
    
  )
}
