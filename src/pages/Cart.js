import React from 'react'
import './Cart.css'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import Navbar from '../componets/Navbar'
import Announc from '../componets/Announc'
import Newsletter from '../componets/Newsletter'
import Footer from '../componets/Footer'

export default function Cart() {
  return (
    <div className='cart-container'>
        <Navbar/>
      <Announc/>
      <div className='cart-parent'>
        <h1 className='cart-title'>YOU BACK</h1>
        <div className='cart-top'>
            <button className='cart-top-btn'>CONTINIE</button>
            <div className='cart-top-texts'>
                <span className='cart-top-text'>Shoping Bag (2)</span>
                <span className='cart-top-text'>Your Wishes (0)</span>
            </div>
            <button className='cart-top-btn'>CHEKOUN NOW</button>
        </div>
        <div className='cart-bottom'>
            <div className='cart-info'>
                <div className='cart-product'>
                    <div className='cart-product-details'>
                        <img className='cart-product-img' src='https://images.pexels.com/photos/899237/pexels-photo-899237.jpeg?auto=compress&cs=tinysrgb&w=600' alt='No internet'/>
                        <div className='product-details'>
                            <span className='product-name'>GEKET</span>
                            <span className='product-id'>324324324</span>
                            <span className='product-color'>AAAA</span>
                            <span className='product-size'>1111</span>
                        </div>
                    </div>
                    <div className='cart-product-price'>
                        <div className='product-ammount-container'>
                            <AiOutlinePlus/>
                            <div className='product-ammount'>1</div>
                            <AiOutlineMinus/>
                        </div>
                        <div className='product-price'>$30</div>
                    </div>
                </div>
                <hr/>
                <div className='cart-product'>
                    <div className='cart-product-details'>
                        <img className='cart-product-img' src='https://images.pexels.com/photos/899237/pexels-photo-899237.jpeg?auto=compress&cs=tinysrgb&w=600' alt='No internet'/>
                        <div className='product-details'>
                            <span className='product-name'>GEKET</span>
                            <span className='product-id'>324324324</span>
                            <span className='product-color'>AAAA</span>
                            <span className='product-size'>1111</span>
                        </div>
                    </div>
                    <div className='cart-product-price'>
                        <div className='product-ammount-container'>
                            <AiOutlinePlus/>
                            <div className='product-ammount'>1</div>
                            <AiOutlineMinus/>
                        </div>
                        <div className='product-price'>$30</div>
                    </div>
                </div>
            </div>
            <div className='cart-summary'>
                <h1 className='summary-title'>ORDER SUMMARY</h1>
                <div className='summary-item'>
                    <span className='summary-item-text'>TOTAL</span>
                    <span className='summary-item-price'>$80</span>
                </div>
                <button className='cart-chekout-btn'>CHEKOUT</button>
                
            </div>
        </div>

      </div>
      Cart
      <Footer/>
    </div>
  )
}
