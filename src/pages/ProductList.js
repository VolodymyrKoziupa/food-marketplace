import React from 'react'
import './ProductList.css'
import Announc from '../componets/Announc'
import Navbar from '../componets/Navbar'
import Products from '../componets/Products'
import Newsletter from '../componets/Newsletter'
import Footer from '../componets/Footer'
import { useLocation } from 'react-router-dom'
import { useState } from "react";
import {categories} from  '../data'

export default function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filter, setFilters] = useState({})


    const handleFilters =(e)=>{
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value,
        });
    };

   

  return (
    <div className='productlist-container'>
        <Navbar/>
        {/* <Announc/> */}
        <h1 className='productlist-title'>{cat}</h1>
        <div className='productlist-filter-container'>
            <div className='productlist-filter'><span className='filter'>filter 1</span>
            <select name ="color"className='productlist-filter-select' onChange={handleFilters}>
                <option  disabled>
                    Color
                </option >
                <option >1</option >
                <option >2</option >
                <option >3</option >
                <option >4</option >
                <option >5</option >
            </select>
            <select name ="size"className='productlist-filter-select' onChange={handleFilters}>
                <option  disabled>
                    Size
                </option >
                <option >1</option >
                <option >2</option >       
                <option >3</option >
                <option >4</option >
                <option >5</option >
            </select>
            </div>
          
        </div>
        <Products cat={cat} filter={filter}/>
        <Newsletter/>
        <Footer/>
    
    
    
    </div>
    
  )
  
}
