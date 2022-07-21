import React from 'react'
import "./Categories.css"
import {categories} from "../data";
import CategoryItem from './CategoryItem';

export default function Categories() {
  return (
    <div className='cat-container'>
<div className='categories-title'><b>Pick and Shop Online:</b></div>
        {categories.map((item =>(
        <CategoryItem item ={item} key={item.id} />
        )))}
    </div>
  );
};
