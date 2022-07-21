import React, { useState } from 'react'
import './Slider.css'
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle } from 'react-icons/ai';
import {sliderItems} from "../data"
import styled from "styled-components";
import Categories from './Categories';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background-color: coral;
`;
   

export default function Slider() {
const [slideIndex, setSlideIndex] = useState(0);
  const handleClick =(direction)=>{

    if(direction === 'arrow-left'){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  };
  
  return (
    
    <div className='slider-container'>

    {/* <div className='arrow-left' onClick={()=>handleClick('arrow-left')}><AiFillLeftCircle/></div> */}
    <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (

 
        <div className='slide' key={item.id}>
        <div className='img-container'><img src={item.img} alt="No internet" className='slide-img'/></div>
        <div className='info-container'>
            <h1 className='title'>{item.title}</h1>
            <p className='description'>{item.desc}</p>
            <button className='btn'>Shop Now</button>
        </div>
        </div>
             ))}
   </Wrapper>
    {/* <div className='arrow-right'onClick={()=>handleClick('arrow-right')}><AiFillRightCircle/></div> */}
    
    </div>
  )
}


