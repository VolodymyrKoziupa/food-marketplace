import React from 'react'
import "./Navbar.css";
import { BsCart4 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-parent'>
            <div className='left'>Holder</div>
                <div className='center'>Holder</div>
                    <div className='right'>
                    <div className='MenuItem'><a href='/product/:id'>Single Product</a></div>
                   
                    <div className='MenuItem'><a href='/register'>REGISTER</a></div>
                    <div className='MenuItem'><a href='/login'>LOGIN</a></div>
                    <div className='MenuItem'><a href='/cart'><BsCart4/></a></div>
                    
                    </div>
        </div>
    </div>
  )
}
