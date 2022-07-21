import React from 'react'
import './Home.css'
import Announc from '../componets/Announc'
import Categories from '../componets/Categories'
import Footer from '../componets/Footer'
import  Navbar  from '../componets/Navbar'
import Newsletter from '../componets/Newsletter'
import Products from '../componets/Products'
import Slider from '../componets/Slider'

export default function Home() {
  return (
    <div className='home-container'>
      
        <Navbar/>
        <Announc/>
   
        {/* <Slider/>  */}
        <div className='flex-container'>
      <div className='cat-box'> <Categories/>  </div> 
      <div className='product-box'><Products/> </div> 
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
