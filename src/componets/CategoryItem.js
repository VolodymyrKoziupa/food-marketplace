import { Link } from "react-router-dom";
import React from 'react'
import "./CategoryItem.css"
import Products from "./Products";

export default function CategoryItem({item}) {

 


  return (
    
    <div className='cat-item-container' >
      <Link to={`/products/${item.cat}`} >
       <div className='item-img' > <img src={item.img}  className='img' /> </div>
       <div className='item-info' >
       <h1 className='item-title'>{item.title}</h1>
        <button className='item-btn'>TAKE A LOOK</button>
       </div>
       </Link>
       
    </div>
  );
};
