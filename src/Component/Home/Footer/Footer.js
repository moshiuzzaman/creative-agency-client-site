import React from 'react';
import './Footer.css'
const Footer = () => {
    const date = new Date();
  const year = date.getFullYear();
    return (
        <div align="center" className='footer-section pt-4' >
            <p className='m-0 p-5'>copyright Orange labs {year}</p>
        </div>
    );
};

export default Footer;