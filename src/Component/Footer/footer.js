import React from 'react'
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='f_content'>
        <h1>MIX</h1>
        <h3>Mahmoud Emad</h3>
        <div className='f_c_icon'>
            <FaFacebookF/>
            <BsTwitter/>
            <AiFillHome/>
            <AiFillLinkedin/>

        </div>
        </div>
    
    </div>
  )
}
