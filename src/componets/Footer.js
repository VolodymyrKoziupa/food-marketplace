import React from 'react'
import './Footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left'>
            <h1 className='footer-logo'>Logo</h1>
            <p className='footer-desc'>desc desc desc desc desc desc desc desc desc desc desc desc desc desc</p>
            <div className='footer-social-container'>
                <div className='footer-social'><AiFillFacebook/></div>
                <div className='footer-social'><AiFillInstagram/></div>
                <div className='footer-social'><CgWebsite/></div>
            </div>

        </div>
        <div className='footer-center'></div>
        <div className='footer-right'></div>

    </div>
  )
}
