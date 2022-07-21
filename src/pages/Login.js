import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login-container'>
    <div className='login-parent'>
        <h1 className='login-title'>Sigth in</h1>
        <form className='login-form'>
            <input className='login-input' placeholder='username'/>
            <input className='login-input' placeholder='password'/>
            <button className='login-btn'>LOGIN</button>
            <a className='login-new'>NEW ACCOUNT</a>

        </form>
    </div>

</div>
  )
}
