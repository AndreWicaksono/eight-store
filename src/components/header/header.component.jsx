import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

// Styles
import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <Link className="store-id" to='/'>
            <img src={logo} alt='Logo' className='logo'/>
            <h1 className="storename">Store</h1>
        </Link>
        <div className='menu-list'>
            <Link className='menu-item' to='/'>Beranda</Link>
            <Link className='menu-item' to='/register'>Daftar</Link>
            <Link className='menu-item' to='/login'>Login</Link>
        </div>
    </header>
);

export default Header;