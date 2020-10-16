import React from 'react';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <MenuBar />
            <HeaderBanner />
        </div>
    );
};
export default Header;