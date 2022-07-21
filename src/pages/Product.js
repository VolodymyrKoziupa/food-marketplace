import React, { useEffect } from 'react'
import './Product.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import Navbar from '../componets/Navbar'
import Announc from '../componets/Announc'
import Newsletter from '../componets/Newsletter'
import Footer from '../componets/Footer'
import { useLocation } from 'react-router-dom';


export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];





  return (
    <div className='productitem-container'>
      <Navbar/>
      <Announc/>
      <div className='productitem-parent'>
        <div className='productitem-img-container'>
          <img className='productitem-img' src='https://images.pexels.com/photos/899237/pexels-photo-899237.jpeg?auto=compress&cs=tinysrgb&w=600' alt='No internet'/>
        </div>
        <div className='productitem-info-container'>
          <h1 className='productitem-title'>Title</h1>
          <p className='productitem-desc'>Desc</p>
          <span className='productitem-price'>$20</span>
  
          <div className='productitem-add-container'>
            <div className='productitem-amount-container'>
              <button className='productitem-btn-remove'><AiOutlineMinus/></button>
              <span className='productitem-default-amount'>1</span>
              <button className='productitem-btn-add'><AiOutlinePlus/></button>
            </div>
            <button className='productitem-btn-cart'> ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
      
    </div>
  )
}
