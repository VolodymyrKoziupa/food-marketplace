import React from 'react'
import "./ProductItem.css"
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';


export default function ProductItem({item}) {
  
  return (
    <div className='prod-item-container'>
  <div>{item.title}</div>
    
    <img src={item.img} alt='No interner' className='prod-item-img'/> 
       <div className='prod-item-info'> 

        <div className='prod-icon'> <BsCart4/></div>
        <div className='prod-icon'> <AiOutlineSearch/></div>
        <div className='prod-icon'> <AiOutlineHeart/></div>
       </div>
    
    </div>
  )
  
}
