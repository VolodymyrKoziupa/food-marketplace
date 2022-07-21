import React from 'react'
import './Newsletter.css'
import { AiOutlineSend } from 'react-icons/ai';


export default function Newsletter() {
  return (
    <div className='newsl-container'>
        <h1 className='newsl-title'>NewsLetter</h1>
        <div className='newsl-desc'>NewsLetter</div>
        <div className='newsl-input-container'>
            <input className='newsl-input' placeholder='Your Email'/>
           
                <button className='newsl-btn'><AiOutlineSend/></button>
        </div>
    </div>
  )
}
