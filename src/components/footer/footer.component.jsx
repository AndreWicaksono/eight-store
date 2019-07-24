import React from 'react';

import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

import './footer.styles.scss';

const Footer = () => (
    <footer className="footer">
            <div>
                <h3>EightStore.id</h3>
                <ul className="nav-title">
                    <li className="nav-item">Cara Belanja</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">Lokasi Outlet</li>
                    <li className="nav-item">F.A.Q</li>
                    <li className="nav-item">Tentang Kami</li>
                </ul>
            </div>
            <div className='follow-us'>
                <h3>Ikuti Kami di</h3>
                <ul className="nav-social">
                    <svg className='social social-fb' fill='#395794'><FacebookIcon/></svg>
                    <svg className='social social-twitter' fill='#1C9DEB'><TwitterIcon/></svg>
                </ul>
            </div>
    </footer>
);

export default Footer;