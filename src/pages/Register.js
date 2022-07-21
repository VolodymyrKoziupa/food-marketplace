import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='register-container'>
        <div className='register-parent'>
            <h1 className='register-title'>Create an acoount</h1>
            <form className='register-form'>
                <input className='register-input' placeholder='username'/>
                <input className='register-input' placeholder='email'/>
                <input className='register-input' placeholder='password'/>
                <input className='register-input' placeholder='confirm password'/><br/>
                <button className='register-btn'>CREATE</button>

            </form>
        </div>

    </div>
  )
}
